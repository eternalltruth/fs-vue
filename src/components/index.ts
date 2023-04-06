import type { Component } from 'vue'

// 组件全局注入 组件名称为文件名

const getFileName = (fileName: string) => fileName.split('/')[1]

const requireComponents: any = import.meta.glob('../components/*/*.vue', {
  eager: true,
  import: 'default',
})

const components: { [propName: string]: Component } = {}

for (const key in requireComponents) {
  components[getFileName(key)] = requireComponents[key]
}

export default components
