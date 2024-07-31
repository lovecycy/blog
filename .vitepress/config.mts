import { defineConfig } from 'vitepress'
import { resolve } from "path";
import {useGitTimestamp} from '../node/getGitLogs.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
  title: "tan 90° Blog",
  titleTemplate: ":title",
  // description: "技术，不止技术",
  appearance: 'dark',
  srcDir: 'src/docs',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'tan 90°',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '专插本', items: [
          { text: '政治理论', link: '/higherGrade/politicalTheory/' },
          { text: '高等数学', link: '/higherGrade/higherMathematics/' }
        ]
      }
    ],
    sidebar: {
      '/higherGrade/politicalTheory/': [
        {
          text: '毛概',
          items: [
            { text: '导论 马克思主义中国化时代化的历史进程与理论成果', link: '/higherGrade/politicalTheory/毛概/导论 马克思主义中国化时代化的历史进程与理论成果/' },
          ]
        }
      ],
      '/higherGrade/higherMathematics/': [
        {
          text: '高等数学',
          items: [
            { text: '不定积分', link: '/higherGrade/higherMathematics/不定积分/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

  },
  markdown: {
    math: true,
    lineNumbers: true
  },
  async transformPageData(pageData, { siteConfig }) {
    pageData.t = await useGitTimestamp(resolve(siteConfig.srcDir,pageData.filePath))
  },
  vite: {
    resolve: {
      'alias': {
        '@': resolve(process.cwd(), "src")
      }
    }
  }
})
