<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ email }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'id', 'email'],
  setup() {

  }
}
</script>

<style scoped>

</style>
