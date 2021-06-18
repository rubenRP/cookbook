<template>
  <footer>
    <div
      className="flex justify-between w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-8"
    >
      <p>
        Created by
        <a
          className="font-bold no-underline"
          href="https://rubenr.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rubén Rodríguez
        </a>
      </p>

      <p>
        <a
          className="font-bold no-underline"
          href="https://github.com/rubenrp/cookbook"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Footer',
  })
</script>
