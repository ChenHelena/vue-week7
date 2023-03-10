<script>
import { RouterLink } from 'vue-router';
const { VITE_URL , VITE_PATH } = import.meta.env;
export default{
  data(){
    return{
      products:[]
    }
  },
  components: {
    RouterLink
  },
  methods:{
    getProducts(){
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
      .then((res)=>{
        this.products = res.data.products
      })
    }
  },
  mounted(){
    this.getProducts()
  }
}
</script>
<template>
  <div class="products">
    <div class="container">
      <h5>This is an products page</h5>
      <div class="row g-3">
        <div class="col-md-3" v-for="product in products" :key="product.id">
          <div class="card">
            <img :src="product.imageUrl" v-if="product.imageUrl" class="card-img-top object-fit-cover" height="200" alt="...">
            <img v-else src="https://tomchun.tw/tomchun/wp-content/uploads/2020/07/S__31834120.jpg" class="card-img-top object-fit-cover" height="200" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{product.title}}</h5>
              <p class="card-text" v-if="product.content">{{ product.content }}</p>
              <p class="card-text" v-else>無說明</p>
              <p class="card-text fs-5 text-end">$ {{ product.price }}</p>
              <RouterLink :to="`/product/${product.id}`" class="btn btn-primary w-100 stretched-link">加入購物車</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>