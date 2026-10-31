// CSS module declarations for Vite
declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.less'
declare module '*.styl'

// Vite asset imports
declare module '*.svg' {
  export const src: string
  export const href: string
}

declare module '*.png' {
  export const src: string
  export const href: string
}

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.webp'
declare module '*.avif'

// TypeScript environment
interface ImportMeta {
  env: ImportMetaEnv
}

interface ImportMetaEnv {
  readonly MODE: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
  readonly BASE_URL: string
  readonly VITE_USER_AGENT: string
  readonly VITE_APP_VERSION: string
}
