<template>
  <div>
    <div class="box" @click="useOrConsume">
      <img :src="getImgForGoods(goods.icon)" width="48" height="48" :alt="name">
      <p class="count">{{ countNow }}</p>
    </div>

    <!-- 消耗 -->
    <w-dialog
      v-model="useShow"
      :title="$t('goods.consume') + name"
      persistent
      :fullscreen="true">
      <p style="text-align: left; color: #7b828c">
        {{ $t('goods.consumeTip') }}
      </p>
      <w-input :label="$t('default.number')"
               type="number"
               v-model="number"></w-input>
      <p style="text-align: left; color: #7b828c">
        <span v-html="weight"></span> <br>
        {{ $t('goods.effectTitle') }}
      </p>
      <p v-html="effect"></p>

      <template #actions>
        <div class="spacer" />
        <w-button
          class="mr2"
          @click="showSell"
          bg-color="error">
          {{ $t('market.sell') }}
        </w-button>
        <w-button
          v-if="goods.type === 1"
          class="mr2"
          @click="consumeSubmit"
          bg-color="success"
          color="warning-light3">
          {{ $t('goods.consume') }}
        </w-button>
        <w-button
          v-if="goods.type !== 1"
          class="mr2"
          @click="equipSubmit"
          bg-color="primary"
          color="success-light2">
          {{ $t('goods.equip') }}
        </w-button>
        <w-button
          class="mr2"
          @click="discardSubmit"
          bg-color="warning">
          {{ $t('default.discard') }}
        </w-button>
        <w-button
          @click="useShow = false"
          bg-color="success">
          {{ $t('default.cancel') }}
        </w-button>
      </template>
    </w-dialog>

    <!-- 出售 -->
    <w-dialog
      v-model="sellShow"
      :title="$t('market.sell') + name"
      persistent
      :fullscreen="true">
      <p style="text-align: left; color: #7b828c">
        {{ $t('market.sellTip') }}<br /><br />
        {{ $t('goods.effectTitle') }}
      </p>
      <p v-html="effect"></p>
      <w-input :label="$t('market.price')"
               type="number"
               v-model="price"></w-input>
      <w-input :label="$t('default.number')"
               type="number"
               v-model="number"></w-input>

      <template #actions>
        <div class="spacer" />
        <w-button
          class="mr2"
          @click="sellSubmit"
          bg-color="error">
          {{ $t('market.sell') }}
        </w-button>
        <w-button
          @click="sellShow = false"
          bg-color="success">
          {{ $t('default.cancel') }}
        </w-button>
      </template>
    </w-dialog>

    <!-- 提示 -->
    <w-dialog
      v-model="tipShow"
      :fullscreen="true">
      <p>{{ tip }}</p>

      <template #actions>
        <div class="spacer" />
        <w-button @click="tipShow = false"
                  class="pb1"
                  style="width: 40%"
                  bg-color="info"
                  dark>
          {{ $t('default.know') }}
        </w-button>
      </template>
    </w-dialog>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  props: {
    id: Number,
    index: Number, // 物品索引
    count: Number,
  },
  data() {
    return {
      name: 0,
      price: null,
      number: 1,
      countAdd: 0,
      weight: '',
      effect: '',
      sellShow: false,
      useShow: false,
      tipShow: false,
      tip: '',
    };
  },
  computed: {
    goods() {
      return this.$store.state.config.goods[this.index - 1] ?? {
        name: '',
        icon: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
      };
    },
    countNow() {
      return this.count + this.countAdd;
    },
  },
  mounted() {
    this.name = this.$t(`goodsName.${this.goods.name}`);
  },
  methods: {
    getImgForGoods(name) {
      if (!name) return '';

      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/goods/${name}`);
    },
    useOrConsume() {
      this.useShow = true;
      this.weight = `每个重量 ${this.goods.weight} 克。`;
      this.effect = '';
      Object.keys(this.goods.effect).map((key) => {
        switch (key) {
          case 'hp-p':
            this.effect += this.$t('goods.effectHpP', { number: this.goods.effect[key] });
            break;
          case 'hungry-p':
            this.effect += this.$t('goods.effectHungryP', { number: this.goods.effect[key] });
            break;
          case 'energy-p':
            this.effect += this.$t('goods.effectEnergyP', { number: this.goods.effect[key] });
            break;
          case 'happy-p':
            this.effect += this.$t('goods.effectHappyP', { number: this.goods.effect[key] });
            break;
          case 'att-a':
            this.effect += this.$t('goods.effectAttA', { number: this.goods.effect[key] });
            break;
          case 'att-i':
            this.effect += this.$t('goods.effectAttI', { number: this.goods.effect[key] });
            break;
          case 'def':
            this.effect += this.$t('goods.effectDef', { number: this.goods.effect[key] });
            break;
          case 'money':
            this.effect += this.$t('goods.effectMoney', { number: this.goods.effect[key] });
            break;
          case 'gold':
            this.effect += this.$t('goods.effectGold', { number: this.goods.effect[key] });
            break;
          default:
            console.error(`${key} is new effect in goods config`);
            break;
        }

        if (this.effect === '') this.effect = this.$t('goods.effectNull');
        return true;
      });
    },
    showSell() {
      this.useShow = false;
      this.sellShow = true;
    },
    // 出售道具
    sellSubmit() {
      if (this.number < 1 || this.number > this.countNow) {
        this.tip = this.$t('goods.useLimit', { number: this.countNow });
        this.tipShow = true;
        return false;
      }
      if (this.price < 1) {
        this.tip = this.$t('market.priceLimit');
        this.tipShow = true;
        return false;
      }

      this.sellShow = false;
      this.$http.post('city/market', {
        index: this.index,
        price: this.price,
        number: this.number,
      }).then(() => {
        this.countAdd -= this.number;
        if (this.countNow <= 0) {
          this.$el.parentNode.removeChild(this.$el);
        }
        this.tip = this.$t('market.setDone');
        this.tipShow = true;
      }).catch((error) => {
        this.tip = this.$t(`error.${error.response.data.message}`);
        this.tipShow = true;
      });
      return true;
    },
    // 丢弃道具
    discardSubmit() {
      if (this.number < 0 || this.number > this.countNow) {
        this.tip = this.$t('goods.useLimit', { number: this.countNow });
        this.tipShow = true;
        return false;
      }

      this.useShow = false;
      this.$http.post('user/discard', {
        id: this.id,
        number: this.number,
      }).then((response) => {
        this.$store.commit('setUser', response.data);
        this.countAdd -= this.number;
        if (this.countNow <= 0) {
          this.$el.parentNode.removeChild(this.$el);
        }
        return true;
      }).catch((error) => {
        this.tip = this.$t(`error.${error.response.data.message}`);
        this.tipShow = true;
      });

      return true;
    },
    // 装备道具
    equipSubmit() {
      this.useShow = false;
      this.$http.post('user/equip', {
        id: this.id,
        index: this.index,
      }).then((response) => {
        this.$store.commit('setUser', response.data);
        this.countAdd -= 1;
        if (this.countNow <= 0) {
          this.$el.parentNode.removeChild(this.$el);
        }
        return true;
      }).catch((error) => {
        this.tip = this.$t(`error.${error.response.data.message}`);
        this.tipShow = true;
      });

      return true;
    },
    // 效果更新
    effectTook(effect, count) {
      Object.keys(effect).map((key) => {
        const val = effect[key];
        switch (key) {
          case 'hp-p':
            this.$store.commit('changeUserHp', val * count);
            break;
          case 'hungry-p':
            this.$store.commit('changeUserHungry', val * count);
            break;
          case 'energy-p':
            this.$store.commit('changeUserEnergy', val * count);
            break;
          case 'happy-p':
            this.$store.commit('changeUserHappy', val * count);
            break;
          case 'att-a':
            this.$store.commit('changeUserAttackMax', val * count);
            break;
          case 'att-i':
            this.$store.commit('changeUserAttackMin', val * count);
            break;
          case 'def':
            this.$store.commit('changeUserDefence', val * count);
            break;
          case 'money':
            this.$store.commit('changeUserMoney', val * count);
            break;
          case 'gold':
            this.$store.commit('changeUserGold', val * count);
            break;
          default:
            console.error(`${key} is new effect in goods config`);
            break;
        }
        return true;
      });
    },
    // 消耗/使用道具
    consumeSubmit() {
      if (this.number < 0 || this.number > this.countNow) {
        this.tip = this.$t('goods.useLimit', { number: this.countNow });
        this.tipShow = true;
        return false;
      }

      this.useShow = false;
      this.$http.post('user/consume', {
        index: this.index,
        number: this.number,
      }).then((response) => {
        this.countAdd -= response.data;
        this.effectTook(this.goods.effect, response.data);

        if (this.countNow <= 0) {
          this.$el.parentNode.removeChild(this.$el);
        }
        return true;
      }).catch((error) => {
        this.tip = this.$t(`error.${error.response.data.message}`);
        this.tipShow = true;
      });

      return true;
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  background-color: #fff8cd;
  border: 1px solid #55f;
  padding: 1px 4px 4px 1px;
  position: relative;
}

.count {
  color: #ff0000;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
