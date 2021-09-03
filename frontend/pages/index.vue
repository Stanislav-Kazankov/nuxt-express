<template>
  <main>
    <section>
      {{ message }}
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const response = await $axios.get('/hello')
    return { message: response.data }
  }
}
</script>
