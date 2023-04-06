<template>
  <component :is="layout">
  </component>
</template>

<!-- 设置主题引入对应的UI框架容器 -->
<script setup lang="ts">
import AppLayoutDefault from './views/layouts/defaultLayout.vue'
import { computed, markRaw, watch, ref } from 'vue';
import { RouterLink, RouterView,useRoute } from 'vue-router'

const layout = markRaw(AppLayoutDefault)
const route = useRoute()

// 根据meta的layout属性引入布局
watch(route.meta, 
  async () => {
    try{
      const component = await import(`@/views/layouts/${route.meta.layout}.vue`)
      layout.value = component?.default || AppLayoutDefault
    } catch (e) {
      layout.value = AppLayoutDefault
    }
  },
  {
    immediate: true
  }
)
</script>



