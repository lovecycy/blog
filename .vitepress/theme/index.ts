import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Vue } from 'vitepress/vue-demi'
import CommitRecord from '@/components/CommitRecord/index.vue'

const { h } = Vue
export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'aside-ads-before': () => h(CommitRecord)
        })
    }
} satisfies Theme