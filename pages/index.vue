<template>
  <div className="flex flex-col min-h-screen font-sans text-gray-900">
    <Header />
    <main
      class="flex flex-1 flex-col w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16 justify-center items-center"
    >
      <h1>HOLA</h1>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
