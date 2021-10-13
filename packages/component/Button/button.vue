<template>
  <div class="xb-button">
    <h1 class="xb-button-test">This is Button1</h1>
    <h1 class="xb-button-test2">This is Button2</h1>
    <div
      v-for="(item, index) of arr"
      :key="index"
    >
      {{ item }}
    </div>
    <el-button>adsa11111</el-button>
  </div>
</template>
<script lang="ts">
import { ElButton } from 'element-plus'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'XbButton',
  props: {

  },
  components: {
    ElButton
  },
  data() {
    return {
      arr: [1, 2, 3]
    }
  }
})

</script>

<style scoped lang="scss">

</style>
