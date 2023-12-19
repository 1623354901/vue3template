import type {App} from 'vue'
import {hasPerm} from './permission';
// 全局注册directive
export function setupDirective(app:App<Element>){
  // 使用v-hasPerm,在所有组件中都可用
  app.directive('hasPerm',hasPerm)
}