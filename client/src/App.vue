<template>
  <v-app id="inspire">

    <Header/>

    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'App',
    data: () => ({
      links: [
        'Login',
      ],
    }),
    components: {
      Header
    }
  }
</script>