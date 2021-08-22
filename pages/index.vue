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
    const response = await $axios.get('/')
    return { message: response.data }
  }
}
</script>
