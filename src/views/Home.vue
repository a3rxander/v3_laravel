<template>
  <div class="home">
     <button @click="gotologin" class="btn btn-primary">LOGIN</button>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
   methods: {
    gotologin() {
      this.$router.push({ name: 'auth_login' })
    }
   }
}
</script>
