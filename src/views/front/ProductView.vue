<script>
import { mapActions } from 'pinia';
import cartStore from '../../stores/cart';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      product: {}
    }
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
        })
    },
    ...mapActions(cartStore,['addToCart'])
  },
  mounted() {
    this.getProduct()
  }
}
</script>
<template>
  <div class="container">
    <div class="card mb-3 mx-auto" style="max-width: 768px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img v-if="product.imageUrl" :src="product.imageUrl" class="img-fluid rounded-start h-100" alt="...">
          <img v-else src="https://tomchun.tw/tomchun/wp-content/uploads/2020/07/S__31834120.jpg" class="card-img-top object-fit-cover" height="200" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text" v-if="product.content">{{ product.content }}</p>
            <p class="card-text" v-else>無說明</p>
            <p class="card-text fs-5 text-end">$ {{ product.price }}</p>
            <button type="button" class="btn btn-primary w-100" @click="() => addToCart(product.id)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>