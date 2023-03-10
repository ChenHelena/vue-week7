<script>
import { RouterView, RouterLink } from 'vue-router';
export default{
  component:{
    RouterView, RouterLink
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/admin" class="nav-link active">Backstage</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/Products" class="nav-link">Products</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/Orders" class="nav-link">Orders</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Go back home</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
</template>