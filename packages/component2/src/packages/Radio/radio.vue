<template>
  <div>
    <h1 class="xb-button">This is Radio</h1>
    <ElButton>adsa</ElButton>
  </div>
</template>
<script lang="ts">
import { ElButton } from 'element-plus'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'XbRadio',
  props: {
    a: {

    }
  },
  components: {
    ElButton
  }
})

</script>

<style scoped lang="scss">

</style>
