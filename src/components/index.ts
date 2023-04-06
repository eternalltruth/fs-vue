import type { Component } from 'vue'

// 组件全局注入 组件名称为文件名

const getFileName = (fileName: string) => fileName.split('/')[1]

const requireComponents: any = import.meta.globEager('../components/*/*.vue')

const components: { [propName: string]: Component } = {}

for (const key in requireComponents) {
        components[getFileName(key)] = requireComponents[key].default
}

export default components
