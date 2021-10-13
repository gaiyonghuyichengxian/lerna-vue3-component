<template>
  <div class="main-cnt">
    <div class="flex-w-space-between">
      <div class="list-content">
        <div
          v-for="(item, index) of componentList"
          :key="index"
        >
          <!-- :href="`./${item.label}`" -->
          <el-link
            :type="item.label === activeComponent ? 'primary' : 'info'"
            @click="selectComponent(item)"
          >
            {{ item.label }}
          </el-link>
        </div>
      </div>
      <div class="markdown-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ElLink } from 'element-plus'
import { defineComponent, reactive, watch, ref, Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import packages from '@/packages'

interface ComponentSingle {
  label: string
}

export default defineComponent({
  name: 'Main',
  components: {
    ElLink
  },
  setup() {
    const { componentList, selectComponent, activeComponent } = useComponentList()
    return {
      componentList,
      selectComponent,
      activeComponent
    }
  }
})

function useComponentList() {
  const activeComponent: Ref = ref('')
  const componentList: ComponentSingle[] = reactive([])
  const route = useRoute()
  const router = useRouter()

  Object.keys(packages).forEach(key => {
    if (key !== 'install') {
      componentList.push({
        label: key
      })
    }
  })

  function routeChange() {
    console.log('监听到变化', route)
    activeComponent.value = route.path.substring(1)
  }
  routeChange()
  watch(() => route.path, routeChange)

  function selectComponent(item: ComponentSingle) {
    router.push(item.label)
  }

  return {
    componentList,
    selectComponent,
    activeComponent
  }
}
</script>

<style lang="scss" scoped>
.list-content {
  width: 200px;
  border-right: 1px solid #ccc;
}

.markdown-content {
  width: calc(100% - 220px);
}
</style>
