<template>
  <w-flex wrap class="text-center">
    <div class="xs6 pa1">
      <w-button class="ma1" bg-color="warning" @click="showSell" shadow lg>
        {{ $t('market.sellButton') }}
      </w-button>
    </div>
    <div class="xs6 pa1">
      <w-button class="ma1" bg-color="info" shadow lg>
        {{ $t('market.historyButton') }}
      </w-button>
    </div>

    <div class="xs6 pt1 pb2">
      <w-switch
        class="ma2"
        color="warning"
        v-model="onlyMe"
        @update:model-value="orderList(-page + 1)"
        :label="$t('work.onlyMe')"
        thin></w-switch>
    </div>

    <div class="xs6 pt1 pb2">
      <w-select :items="goodsList"
                v-model="index"
                @item-click="orderList(-page + 1)"
                outline
                tile>{{ $t(`market.filter`) }}</w-select>
    </div>

    <Order v-for="item in orders"
           :key="item.id"
           :id="item.id"
           :user_id="item.user_id"
           :index="item.index"
           :price="item.price"
           :number="item.number"
           :end_at="item.end_at"
    />

    <div class="xs6 py2">
      <w-button v-if="page > 1"
                @click="orderList(-1)"
                color="yellow-light2"
                bg-color="success"
                shadow
                lg>{{ $t('default.last') }}</w-button>
    </div>
    <div class="xs6 py2">
      <w-button v-if="page < pageMax"
                @click="orderList(1)"
                color="yellow-light2"
                bg-color="success"
                shadow
                lg>{{ $t('default.next') }}</w-button>
    </div>

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
  </w-flex>
</template>

<script>
import Order from '@/components/city/market/Order.vue';

export default {
  name: 'Market',
  components: {
    Order,
  },
  data() {
    return {
      page: 1,
      pageMax: 1,
      onlyMe: false,
      index: 0,
      goodsList: [],
      count: 0,
      orders: [],
      sellShow: false,
      historyShow: false,
      tipShow: false,
      tip: '',
    };
  },
  mounted() {
    this.orderList();

    const goodsConfig = this.$store.state.config.goods;
    this.goodsList = [{
      label: this.$t('goodsName.all'),
      value: 0,
    }];
    for (let i = 0; i < this.$store.state.config.goods.length; i += 1) {
      this.goodsList.push({
        label: this.$t(`goodsName.${goodsConfig[i].name}`),
        value: goodsConfig[i].id,
      });
    }

    return true;
  },
  methods: {
    showSell() {
      // TODO 在本页直接出售
      this.sellShow = true;
      this.$router.push('/home/store');
    },
    showHistory() {
      // TODO 显示交易历史
      this.historyShow = true;
    },
    // 获得售单列表
    orderList(pageChange = 0) {
      console.info(this.index);
      const pageNumber = 10;
      this.page += pageChange;
      let url = `city/market?page=${this.page}&number=${pageNumber}`;
      if (this.onlyMe) {
        url += '&self=1';
      }
      if (this.index) {
        url += `&index=${this.index}`;
      }
      this.$http.get(url).then((response) => {
        this.count = response.data.count;
        this.pageMax = Math.ceil(response.data.count / pageNumber);
        this.orders = response.data.data;
      }).catch((error) => {
        this.tip = this.$t(`error.${error.response.data.message}`);
        this.tipShow = true;
      });
    },
  },
};
</script>

<style scoped>
</style>
