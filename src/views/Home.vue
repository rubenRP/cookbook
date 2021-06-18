<template>
  <section class="flex flex-wrap -mx-1 lg:-mx-4 w-full">
    <h2
      class="
        font-bold
        text-l
        w-full
        py-2
        mx-1
        mb-2
        lg:mx-4
        border-b-2 border-gray-300
      "
    >
      Recipes
    </h2>
    <template v-for="recipe in recipes" :key="recipe.id">
      <RecipeCard :recipe="recipe" />
    </template>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios'
  import RecipeCard from '../components/RecipeCard.vue'

  export default defineComponent({
    name: 'Home',
    components: {
      RecipeCard,
    },
    data: () => ({
      auth: import.meta.env.VITE_NOTION_TOKEN,
      database: import.meta.env.VITE_NOTION_DATABASE,
      recipes: [],
    }),
    created() {
      this.loadData()
    },
    methods: {
      async loadData() {
        //const listUsersResponse = await this.notion.users.list()
        //console.log(listUsersResponse)
        const response = await axios({
          method: 'post',
          url: `api/databases/${this.database}/query`,
          headers: {
            Authorization: `Bearer ${this.auth}`,
            'Content-Type': 'application/json',
          },
          data: {
            filter: {
              property: 'Name',
              text: {
                is_not_empty: true,
              },
            },
          },
        })
        this.recipes = response.data.results
        console.log(response.data.results)
      },
    },
  })
</script>
