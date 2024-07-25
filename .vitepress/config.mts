import { defineConfig } from 'vitepress'
import { resolve } from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tan 90° Blog",
  titleTemplate: ":title",
  description: "技术，不止技术",
  appearance: 'dark',
  srcDir: 'src/docs',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'tan 90°',
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
            { text: '导论 马克思主义中国化时代化的历史进程与理论成果', link: '/higherGrade/politicalTheory/毛概/导论 马克思主义中国化时代化的历史进程与理论成果' },
            { text: 'Runtime API Examples', link: '' }
          ]
        }
      ],
      '/higherGrade/higherMathematics/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

  },
  vite: {
    resolve: {
      'alias': {
        '@': resolve(process.cwd(), "src")
      }
    }
  }
})
