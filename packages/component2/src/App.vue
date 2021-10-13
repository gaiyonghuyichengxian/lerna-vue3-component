<template>
  <Layout></Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/layout/index.vue'
import { test2 } from '@xinbear/test2'

console.log('test2', test2)
test2('1')

// console.log(a)

export default defineComponent({
  name: 'App',
  components: {
    Layout
  }
})
</script>

