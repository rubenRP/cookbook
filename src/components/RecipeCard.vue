<template>
  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <article class="overflow-hidden">
      <div className="py-2">
        <div className="font-bold text-l">
          <div className="no-underline">
            {{ recipe.properties.Name.title[0].text.content }}
          </div>
        </div>
        <div
          className="font-light text-gray-500 text-xs"
          v-if="recipe.properties.Category"
        >
          {{ recipe.properties.Category.select.name }}
        </div>
      </div>
      <div className="py-2">
        <span
          className="inline-block font-light border border-gray-500 rounded px-1 py text-xs text-gray-700 mr-2 mb-2"
          v-for="tag in recipe.properties.Tags.multi_select"
          :key="tag.id"
        >
          {{ tag.name }}
        </span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'RecipeCard',
    props: {
      recipe: {},
    },
  })
</script>

<style></style>
