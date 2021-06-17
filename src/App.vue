<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-900">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import Header from './components/Header.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Header,
    },
  })
</script>
