<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-900">
    <Header />
    <main
      class="flex flex-1 flex-col w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16 justify-center items-center"
    >
      <article class="w-full">
        <header class="w-full lg:max-w-full mb-4 lg:mb-10">
          <div class="lg:flex overflow-hidden">
            <div
              class="h-48 lg:h-auto lg:w-1/3 flex-none bg-cover bg-center overflow-hidden"
            />
            <div
              class="bg-white mt-6 lg:mt-0 lg:px-6 flex flex-col justify-between leading-normal w-full relative"
            >
              <h1 class="font-bold text-xl">{{ article.title }}</h1>

              <div v-if="article.source" class="absolute top-0 right-0 p-2">
                <a :href="article.source" target="_blank" class="text-gray-900">
                  <svg
                    x="0px"
                    y="0px"
                    width="482.136px"
                    height="482.135px"
                    viewBox="0 0 482.136 482.135"
                    class="h-6 w-6 fill-current"
                  >
                    <g>
                      <path
                        d="M455.482,198.184L326.829,326.832c-35.535,35.54-93.108,35.54-128.646,0l-42.881-42.886l42.881-42.876l42.884,42.876
		c11.845,11.822,31.064,11.846,42.886,0l128.644-128.643c11.816-11.831,11.816-31.066,0-42.9l-42.881-42.881
		c-11.822-11.814-31.064-11.814-42.887,0l-45.928,45.936c-21.292-12.531-45.491-17.905-69.449-16.291l72.501-72.526
		c35.535-35.521,93.136-35.521,128.644,0l42.886,42.881C491.018,105.045,491.018,162.663,455.482,198.184z M201.206,366.698
		l-45.903,45.9c-11.845,11.846-31.064,11.817-42.881,0l-42.884-42.881c-11.845-11.821-11.845-31.041,0-42.886l128.646-128.648
		c11.819-11.814,31.069-11.814,42.884,0l42.886,42.886l42.876-42.886l-42.876-42.881c-35.54-35.521-93.113-35.521-128.65,0
		L26.655,283.946c-35.538,35.545-35.538,93.146,0,128.652l42.883,42.882c35.51,35.54,93.11,35.54,128.646,0l72.496-72.499
		C246.724,384.578,222.588,379.197,201.206,366.698z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
        <nuxt-content :document="article" />
      </article>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const [article] = await $content({ deep: true })
      .where({ dir: `/recipes/${params.slug}` })
      .fetch()

    return { article }
  },
}
</script>
