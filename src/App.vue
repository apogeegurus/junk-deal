<template>
  <section id="app">
    <component :is="layout">
      <router-view :key="$route.fullPath"></router-view>
    </component>
    <vue-snotify></vue-snotify>
  </section>
</template>

<script>
  export default {
    data: () => ({

    }),
    computed : {
      layout() {
        return (this.$route.meta.layout || 'default') + '-layout';
      }
    },
    mounted() {
      this.$store.dispatch('GET_SITE_DETAILS');
      this.$store.dispatch("GET_SLIDERS");
    }
  }
</script>