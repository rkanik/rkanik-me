export const view = (name: string) => () => import(`@/views/${name}.vue`)
export const layout = (name: string) => () => import(`@/layouts/${name}.vue`)
export const app = (name: string) => () => import(`@/apps/${name}.vue`)
