<script>
import { mapActions,mapState } from 'pinia';
import { RouterView ,RouterLink } from 'vue-router';
import cartStore from '../stores/cart'

export default{
  components: {
    RouterView, RouterLink
  },
  computed:{
    ...mapState(cartStore,['carts'])
  },
  methods:{
    ...mapActions(cartStore,['getCart'])
  },
  mounted() {
    this.getCart()
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mt-2">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav d-flex justify-content-center w-100 text-center">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Products" class="nav-link">Products</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Carts" class="nav-link">Carts</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin" class="nav-link">Backstage</RouterLink>
          </li>
          <li class="nav-item">
            <i class="bi bi-cart nav-link position-relative">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger p-2">
                {{ carts.length }}
              </span>
            </i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 作為內頁顯示所使用 -->
  <RouterView></RouterView>
</template>