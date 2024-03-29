<template>
  <header>
    <Header :id="mapIndex" />
  </header>
  <main style="margin: 0 10px;">
    <Map v-if="mapShow" :id="mapIndex" @eventname="mapChange"/>
    <Knapsack v-if="knapsackShow" @eventname="knapsackChange"/>
    <w-flex wrap class="text-center my5">
      <div class="xs6 pa1">
        <div v-if="monster">
          <w-progress
            v-model="hpMonsterProgress"
            size="1.3em"
            round
            color="warning"
            label-color="error-dark2"
            label>
            {{ monster.hp }}
          </w-progress>
          <img width="170"
               height="170"
               alt="Enemy"
               class="pt1"
               :src="monster.icon">
        </div>
      </div>
      <div class="xs6 pa1">
        <w-progress
          v-model="hpProgress"
          size="1.3em"
          round
          color="error"
          label-color="info-dark1"
          label>
          {{ user.hp }}
        </w-progress>
        <img width="140"
             height="170"
             class="pt1"
             alt="Player"
             src="../assets/player.png">
      </div>
    </w-flex>

    <w-divider class="my3" color="blue-grey-light1">Player</w-divider>
    <w-flex align-center class="my3">
      <div class="title5">{{ $t('user.energy') }}：</div>
      <div class="spacer">
        <w-progress
          v-model="energyProgress"
          size="1.3em"
          round
          color="info-light3"
          label-color="blue"
          label>
          {{ user.energy }} / {{ user.energy_max }}
        </w-progress>
      </div>
    </w-flex>
    <w-flex align-center class="my3">
      <div class="title5">{{ $t('user.exp') }}：</div>
      <div class="spacer">
        <w-progress
          v-model="expProgress"
          size="1.3em"
          round
          color="success-light2"
          label-color="blue"
          label>
          {{ user.exp }} / {{ expMax }}
        </w-progress>
      </div>
    </w-flex>
    <div v-if="monster">
      <w-button
        @click="fight"
        class="ma4"
        bg-color="error"
        color="amber-light2"
        :disabled="attackActive"
        lg>{{ $t('outskirts.fight') }}</w-button>
      <w-button
        @click="runaway"
        class="ma4"
        bg-color="success"
        color="yellow-light2"
        lg>{{ $t('outskirts.runaway') }}</w-button>
    </div>
    <div v-else>
      <w-button class="mx4"
                @click="adventure"
                bg-color="success"
                color="yellow-light2"
                lg>{{ $t('outskirts.adventure') }}</w-button>
      <w-button class="mx4"
                @click="showMap"
                bg-color="error"
                color="amber-light2"
                lg>{{ $t('outskirts.map') }}</w-button>
      <w-button class="mx4"
                @click="showKnapsack"
                bg-color="primary"
                color="success-light2"
                lg>{{ $t('outskirts.knapsack') }}</w-button>
    </div>

    <w-divider class="my4" color="blue-grey-light1">Story</w-divider>
    <div v-for="item in info"
       :key="item.ts"
       class="my1 paragraph">
      <p v-if="item.type === 1">{{item.text}}</p>
      <p v-if="item.type === 2" v-html="item.text"></p>
    </div>
  </main>

  <!-- 切换地点过渡 -->
  <w-overlay
    v-model="journeyShow"
    bg-color="rgba(35, 125, 129, 0.6)">
    <w-spinner fade color="green" xs />
    <w-spinner fade color="amber" sm />
    <w-spinner fade color="orange" md />
    <w-spinner fade color="error" lg />
    <w-spinner fade color="pink" xl />
  </w-overlay>

  <!-- 提示 -->
  <w-dialog
    v-model="tipShow"
    :width="250">
    <p>{{ tip }}</p>

    <template #actions>
      <div class="spacer" />
      <w-button @click="tipShow = false"
                bg-color="info"
                dark
                lg>
        {{ $t('default.know') }}
      </w-button>
    </template>
  </w-dialog>
</template>

<script>
import Header from '@/components/outskirts/Header.vue';
import Map from '@/components/outskirts/Map.vue';
import Knapsack from '@/components/outskirts/Knapsack.vue';

export default {
  name: 'Outskirts',
  components: {
    Header,
    Map,
    Knapsack,
  },
  data() {
    return {
      journeyShow: false,
      backTip: '',
      backTipShow: false,
      mapShow: false,
      knapsackShow: false,
      attackActive: false,
      tipShow: false,
      tip: '',
      info: [],
      mapIndex: 1,
      monster: null,
    };
  },
  computed: {
    map() {
      return this.$store.state.config.maps[this.mapIndex - 1];
    },
    user() {
      return this.$store.state.user;
    },
    hpMonsterProgress() {
      return (this.monster.hp / this.monster.hp_max) * 100;
    },
    hpProgress() {
      return (this.user.hp / this.user.hp_max) * 100;
    },
    energyProgress() {
      return (this.user.energy / this.user.energy_max) * 100;
    },
    expMax() {
      return Math.floor((1.2 ** this.user.level) * 83.4 + 50);
    },
    expProgress() {
      return ((this.user.exp / this.expMax) * 100);
    },
  },
  mounted() {
    if (!this.user.token) {
      return this.$router.push('/');
    }

    // 检测缓存，如果存在，则恢复场景
    const infoList = localStorage.getItem('infoList');
    if (infoList) {
      this.info = JSON.parse(infoList);
    }
    this.$http.get('fight/scene')
      .then((response) => {
        this.monster = response.data.monster;
        if (this.monster && !this.monster.icon) {
          this.monster.icon = this.$store.state.config.monster[this.monster.id - 1].icon;
        }
        this.$store.commit('setUser', response.data.user);
        if (response.data.local) {
          this.mapIndex = Number(response.data.local);
        } else {
          this.mapIndex = 1;
          // 用户出城，则注册用户当前的地址
          this.$http.get('fight/scene/1')
            .catch((error) => {
              console.error(error);
              this.journeyShow = false;
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return true;
  },
  methods: {
    // 战斗
    adventure() {
      if (this.$store.state.submitting) {
        this.tip = this.$t('default.quickClick');
        this.tipShow = true;
        return false;
      }
      this.$store.commit('setSubmitting');

      this.$http.get('fight/adventure')
        .then((response) => {
          this.$store.commit('cancelSubmitting');
          if (Array.isArray(response.data)) {
            this.addInfo(1, this.$t('outskirts.adventureEmpty'));
            return false;
          }

          this.monster = response.data;
          if (!this.monster.icon) {
            this.monster.icon = this.$store.state.config.monster[this.monster.id - 1].icon;
          }
          const random = Math.floor(Math.random() * 2);
          this.addInfo(2, this.$t(`outskirts.adventure${random}`, {
            monster: this.monster.name,
          }));
          return true;
        })
        .catch((error) => {
          switch (error.response.data.message) {
            case 'adventure201':
            case 'adventure403':
              this.addInfo(1, this.$t(`error.${error.response.data.message}`));
              break;
            default:
              console.error(error);
              this.tip = this.$t(`error.${error.response.data.message}`);
              this.tipShow = true;
              break;
          }
        });
      return true;
    },
    fight() {
      const NEED_ENERGY_MAX = 1;
      if (this.user.energy < NEED_ENERGY_MAX) {
        // .
      }

      this.$http.get('fight/attack')
        .then((response) => {
          let random = 0;

          setTimeout(() => this.effectMonsterLater(response), 1000);
          switch (response.data.effectUser) {
            case 2:
              if (response.data.trophy) {
                this.addInfo(2, this.$t('outskirts.winGot', {
                  monster: this.monster.name,
                  attack: response.data.attack,
                }));
              } else {
                this.addInfo(2, this.$t('outskirts.winEmpty', {
                  monster: this.monster.name,
                  attack: response.data.attack,
                }));
              }
              this.monster = null;
              this.$store.commit('changeUserHp', -response.data.injury);
              break;
            case 3:
              this.attackActive = true;
              this.$store.commit('changeUserEnergy', -1);
              this.monster.hp -= response.data.attack;
              this.addInfo(2, this.$t('outskirts.attack', {
                monster: this.monster.name,
                attack: response.data.attack,
                injury: response.data.injury,
              }));
              break;
            case 4:
              this.attackActive = true;
              this.$store.commit('changeUserEnergy', -1);
              this.monster.hp -= response.data.attack;
              random = Math.floor(Math.random() * 2);
              this.addInfo(2, this.$t(`outskirts.gbh${random}`, {
                monster: this.monster.name,
                attack: response.data.attack,
                injury: response.data.injury,
              }));
              break;
            case 5:
              // 怪物闪避成功
              this.attackActive = true;
              this.$store.commit('changeUserEnergy', -1);
              random = Math.floor(Math.random() * 2);
              this.addInfo(2, this.$t(`outskirts.nimble${random}`, {
                target: this.monster.name,
                self: this.user.name,
              }));
              break;
            default:
              break;
          }
        })
        .catch((error) => {
          switch (error.response.data.message) {
            case 'attack400':
              this.addInfo(1, this.$t(`error.${error.response.data.message}`));
              break;
            default:
              console.error(error);
              this.tip = this.$t(`error.${error.response.data.message}`);
              this.tipShow = true;
              break;
          }
        });
    },
    effectMonsterLater(response) {
      if (this.monster == null) return;

      let random = 0;
      switch (response.data.effectMonster) {
        case 1:
          this.monster = null;
          this.$store.commit('changeUserHp', -response.data.injury);
          this.addInfo(2, this.$t('outskirts.injuries', {
            monster: this.monster.name,
            injury: response.data.injury,
          }));
          break;
        case 3:
          this.$store.commit('changeUserHp', -response.data.injury);
          this.addInfo(2, this.$t('outskirts.defence', {
            monster: this.monster.name,
            attack: response.data.attack,
            injury: response.data.injury,
          }));
          break;
        case 5:
          // 玩家闪避成功
          this.$store.commit('changeUserEnergy', -1);
          random = Math.floor(Math.random() * 2);
          this.addInfo(2, this.$t(`outskirts.nimble${random}`, {
            target: this.user.name,
            self: this.monster.name,
          }));
          break;
        default:
          break;
      }
      this.attackActive = false;
    },
    runaway() {
      if (this.$store.state.submitting) {
        this.tip = this.$t('default.quickClick');
        this.tipShow = true;
        return false;
      }
      this.$store.commit('setSubmitting');

      this.$http.get('fight/runaway')
        .then((response) => {
          this.$store.commit('cancelSubmitting');
          console.info(response.data);
          const random = Math.floor(Math.random() * 2);
          this.addInfo(2, this.$t(`outskirts.runaway${random}`, {
            monster: this.monster.name,
          }));
          this.monster = null;
        })
        .catch((error) => {
          switch (error.response.data.message) {
            case 'runaway201':
              this.addInfo(1, this.$t(`error.${error.response.data.message}`));
              this.monster = null;
              break;
            default:
              console.error(error);
              this.tip = this.$t(`error.${error.response.data.message}`);
              this.tipShow = true;
              break;
          }
        });
      return true;
    },
    // 背包
    showKnapsack() {
      this.knapsackShow = true;
    },
    knapsackChange(result) {
      switch (result.type) {
        case 'show':
          this.knapsackShow = false;
          break;
        case 'change':
          // TODO 改变外貌？
          break;
        default:
          console.error('不存在的类型');
      }
      console.info(result);
    },
    // 地图
    showMap() {
      this.mapShow = true;
    },
    mapChange(result) {
      const NEED_ENERGY_MAX = 10;

      switch (result.type) {
        case 'show':
          this.mapShow = false;
          break;
        case 'change':
          if (this.user.energy < NEED_ENERGY_MAX) {
            this.tip = this.$t('error.local412');
            this.tipShow = true;
            return;
          }

          this.journeyShow = true;
          this.$http.get(`fight/scene/${result.val}`)
            .then(() => {
              this.$store.commit('changeUserEnergy', -NEED_ENERGY_MAX);
              const lastName = this.$t(`mapName.${this.map.name}`);
              this.mapIndex = result.val;

              const random = Math.floor(Math.random() * 3);
              this.addInfo(1, this.$t(`outskirts.journeyContinue${random}`, {
                name: this.$t(`mapName.${this.map.name}`),
                lastName,
              }));
              this.journeyShow = false;
            })
            .catch((error) => {
              switch (error.response.data.message) {
                case 'local401':
                  this.backTip = this.$t(`error.${error.response.data.message}`);
                  this.backTipShow = true;
                  this.$router.push('/home');
                  break;
                default:
                  console.error(error);
                  this.journeyShow = false;
                  this.tip = this.$t(`error.${error.response.data.message}`);
                  this.tipShow = true;
                  break;
              }
            });
          break;
        case 'backHome':
          this.journeyShow = true;
          this.$http.get('fight/scene/0')
            .then(() => {
              localStorage.removeItem('infoList');
              this.$router.push('/home');
            })
            .catch((error) => {
              console.error(error);
              this.journeyShow = false;
            });
          break;
        default:
          console.error('不存在的类型');
      }
    },
    // 添加信息
    addInfo(type, text) {
      this.info.unshift({
        ts: this.$store.getters.tsNow,
        type,
        text,
      });
      if (this.info.length > 20) {
        this.info.pop();
      }
      localStorage.setItem('infoList', JSON.stringify(this.info));
    },
  },
};
</script>

<style lang="scss" scoped>
.paragraph {
  text-align: left;
  color: #3b5875;
  text-indent: 2em;
}
</style>
