/// <reference types="vite/client" />
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  declare interface ImportMetaEnv {
    readonly FS_UUMS_URL: string
    readonly FS_APPID: string
    // 更多环境变量...
  }
  
  declare interface ImportMeta {
    readonly env: ImportMetaEnv,
    globEager: import('./importGlob').ImportGlobEagerFunction,
    glob: import('./importGlob').ImportGlobFunction
  }