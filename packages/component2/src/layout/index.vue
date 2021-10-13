<template>
  <Header></Header>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './header/index.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Header
  }
})
</script>
