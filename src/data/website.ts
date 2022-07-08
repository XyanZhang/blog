import { Friends } from './friend'
export interface Website {
  name: string
  logo: string
  desc?: string
  href: string
  tags?: string[]
}

export interface WebsiteCategory {
  name: string
  websites: Website[]
}

const friends: Website[] = Friends.map((f) => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  }
})
console.log(friends)

export const websiteData: WebsiteCategory[] = [
  {
    name: '友链',
    websites: friends,
  },
  {
      name: '站点',
      websites: [
        {
          name: '程序员盒子',
          desc: '程序员一站式编程导航，专注于程序员学习编程提效，官网',
          logo: 'https://www.coderutil.com/favicon.ico',
          href: 'https://www.coderutil.com/',
          tags: [''],
        },
        {
          name: 'Road To Coding',
          desc: 'Road To Coding，意为「编程自学之路」，是自学编程以来所用资源和分享内容的大聚合',
          logo: 'https://r2coding.com/favicon.ico',
          href: 'https://r2coding.com/',
          tags: [''],
        },
  {
    name: '印记中文',
    desc: '深入挖掘国外前端新领域，为中国 Web 前端开发人员提供优质文档！',
    logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/al1nd-ai8jt.png',
    href: 'https://docschina.org/',
    tags: ['前端', '文档'],
  },
      ]
    },
  {
    name: '工具',
    websites: [
      {
        name: '菜鸟教程',
        desc: '学的不仅是技术，更是梦想！',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596',
        href: 'https://code.visualstudio.com/',
        tags: ['教程'],
      },
      {
        name: '在线工具',
        desc: '在线工具,开发人员工具,代码格式化、压缩、加密、解密,下载链接转换,ico图标制作,字帖生成',
        logo: 'https://tool.lu/favicon.ico',
        href: 'https://tool.lu/',
        tags: ['工具'],
      },
      {
        name: '一个工具箱',
        desc: '好用的在线工具都在这里！',
        logo: 'http://www.atoolbox.net/favicon.ico',
        href: 'http://www.atoolbox.net/',
        tags: ['工具'],
      },
      {
        name: '菜鸟工具',
        desc: '菜鸟工具，为开发设计人员提供在线工具，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具。',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596',
        href: 'https://c.runoob.com/',
        tags: ['工具'],
      },
      {
        name: 'ProcessOn',
        desc: '免费在线流程图思维导图',
        logo: 'https://processon.com/favicon.ico',
        href: 'https://processon.com/',
        tags: ['工具', '思维导图'],
      },
      {
        name: 'transform',
        desc: '各类数据格式与对象转换',
        logo: 'https://transform.tools/static/favicon.png',
        href: 'https://transform.tools',
        tags: ['工具', '格式转换'],
      },
      {
        name: ' JsonT.run',
        desc: '一个简洁的在线 JSON 解析器',
        logo: 'https://www.jsont.run/favicon.ico',
        href: 'https://www.jsont.run/',
        tags: ['工具'],
      },
    ],
  },
  {
    name: '代码托管',
    websites: [
      {
        name: 'GitHub',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', '代码托管', '项目源码', '社区'],
      },
      {
        name: 'Gitee',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        logo: 'https://gitee.com/static/images/logo-black.svg',
        href: 'https://gitee.com/',
        tags: ['代码托管', '项目源码'],
      },
      {
        name: 'Gitlab',
        desc: '更快地交付安全代码，部署到任何云，并推动业务成果。',
        logo: 'https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png?width=64',
        href: 'https://gitlab.com/',
        tags: ['代码托管', '项目源码'],
      },
      {
        name: 'Vercel',
        desc: 'Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合。',
        logo: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
        href: 'https://vercel.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Netlify',
        desc: 'Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能。',
        logo: 'https://www.netlify.com/v3/static/favicon/apple-touch-icon.png',
        href: 'https://www.netlify.com/',
        tags: ['代码托管'],
      },
    ],
  },
  {
    name: '在线代码',
    websites: [
      {
        name: 'CodePen',
        desc: '是构建、测试和发现前端代码的最佳场所。',
        logo: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
        href: 'https://codepen.io/',
        tags: ['在线编码', '开发平台'],
      },
      {
        name: 'CodesandBox',
        desc: 'CodeSandbox是一个在线代码编辑器和原型工具，可以更快地创建和共享web应用程序',
        logo: 'https://codesandbox.io/favicon.ico',
        href: 'https://codesandbox.io/',
        tags: ['在线编码', '开发平台'],
      },
      {
        name: 'vscode.dev',
        desc: 'vscode官方提供在线Web版vscode代码编写网站',
        logo: 'https://vscode.dev/static/stable/favicon.ico',
        href: 'https://vscode.dev/',
        tags: ['在线编码', '开发平台'],
      },
    ],
  },
  {
    name: 'Vue',
    websites: [
      {
        name: 'Vue.js',
        desc: '渐进式 JavaScript 框架',
        logo: 'https://vuejs.org/logo.svg',
        href: 'https://vuejs.org',
        tags: ['前端', 'Vue','框架'],
      },
      {
        name: 'Vite',
        desc: '下一代的前端工具链，为开发提供极速响应',
        logo: 'https://cn.vitejs.dev/logo.svg',
        href: 'https://cn.vitejs.dev',
        tags: ['前端', 'Vue','框架'],
      },
      {
        name: 'Vitest',
        desc: '一个 Vite 原生单元测试框架。它很快！',
        logo: 'https://vitest.dev/favicon.ico',
        href: 'https://cn.vitest.dev/',
        tags: ['前端', 'Vue','框架'],
      },
      {
        name: 'Nuxt.js',
        desc: '使用 NuxtJS 充满信心地构建您的下一个 Vue.js 应用程序。 一个 开源 框架，让 Web 开发变得简单而强大。',
        logo: 'https://nuxtjs.org/_nuxt/icons/icon_64x64.a3b4ce.png',
        href: 'https://nuxtjs.org/',
        tags: ['前端', 'Vue', '文档', '框架'],
      },
      {
        name: 'Pinia',
        desc: '您将会喜欢使用的 Vue 状态管理',
        logo: 'https://pinia.vuejs.org/logo.svg',
        href: 'https://pinia.vuejs.org/',
        tags: ['前端', 'Vue', '文档', '框架'],
      },
      {
        name: 'VueUse',
        desc: '基本 Vue 合成实用程序的集合',
        logo: 'https://vueuse.org/favicon.ico',
        href: 'https://vueuse.org/',
        tags: ['前端', 'Vue', '文档', '框架'],
      },
        {
        name: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        logo: 'https://element-plus.gitee.io/images/element-plus-logo-small.svg',
        href: 'https://element-plus.gitee.io/',
        tags: ['前端', 'Vue', '组件库'],
      },
      {
        name: 'VbenAdmin',
        desc: 'Vben是一个基于Vue3、Vite、TypeScript等最新技术栈开发的后台管理框架',
        logo: 'https://vvbin.cn/doc-next/logo.png',
        href: 'https://vvbin.cn/doc-next/',
        tags: ['前端', 'Vue', '后台', '项目'],
      },
      {
        name: 'uni-app',
        desc: 'uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台。',
        logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png',
        href: 'https://uniapp.dcloud.io/',
        tags: ['Vue', '小程序'],
      },
    ],
  },
  {
    name: 'React',
    websites: [
      {
        name: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        logo: 'https://reactjs.org/favicon.ico',
        href: 'https://reactjs.org',
        tags: ['前端', 'React','框架'],
      },
      {
        name: 'Next.js',
        desc: 'Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置。',
        logo: 'https://nextjs.org/static/favicon/favicon.ico',
        href: 'https://nextjs.org/',
        tags: ['前端', 'React', '框架'],
      },
      {
        name: 'Remix',
        desc: 'Remix 是一个全栈 Web 框架，可让您专注于用户界面，并通过 Web 标准进行回溯，以提供快速、流畅且有弹性的用户体验',
        logo: 'https://remix.run/favicon-light.1.png',
        href: 'https://remix.run',
        tags: ['前端', 'React', '框架'],
      },
      {
        name: 'Ant Design',
        desc: '一套企业级 UI设计语言和 React 组件库',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        href: 'https://ant.design',
        tags: ['前端', 'React', '组件库'],
      },
      {
        name: 'Ant Design Pro',
        desc: '开箱即用的中台前端/设计解决方案',
        logo: 'https://pro.ant.design/favicon.png',
        href: 'https://pro.ant.design',
        tags: ['前端', 'React', '后台', '项目'],
      },
      {
        name: 'MUI',
        desc: '当下流行的 React UI 框架',
        logo: 'https://mui.com/static/favicon.ico',
        href: 'https://mui.com',
        tags: ['前端', 'React', '组件库'],
      },
      {
        name: 'UmiJS',
        desc: '用 Umi 构建你的下一个应用，带给你简单而愉悦的 Web 开发体验',
        logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        href: 'https://umijs.org',
        tags: ['前端', 'React', '脚手架'],
      },
      {
        name: 'ahooks',
        desc: '一个高质量和可靠的 React Hooks 库',
        logo: 'https://ahooks.js.org/simple-logo.svg',
        href: 'https://ahooks.js.org/',
        tags: ['前端', 'React', '脚手架'],
      },
      {
        name: 'Taro',
        desc: '多端统一开发解决方案',
        logo: 'https://taro-docs.jd.com/taro/img/taroLogo180.png',
        href: 'https://taro.jd.com',
        tags: ['前端', 'React', '小程序'],
      },
      {
        name: 'react-spring',
        desc: '通过简单的动画基元使您的组件栩栩如生',
        logo: 'https://react-spring.dev/favicon.ico',
        href: 'https://react-spring.dev/',
        tags: ['前端', 'React', '小程序'],
      },
    ],
  },
  {
    name: 'CSS',
    websites: [
      {
        name: 'CSS参考-MDN',
        desc: 'MDN的CSS参考手册',
        logo: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
        href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference',
        tags: ['Css', '教程'],
      },
      {
        name: 'Bootstrap',
        desc: 'Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和 mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于 Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站。',
        logo: 'https://img.kuizuo.cn/20210907055816.png',
        href: 'https://v5.bootcss.com/',
        tags: ['Css', '框架'],
      },
      {
        name: 'CSS常用样式',
        desc: 'CSS常用样式',
        logo: 'https://tse1-mm.cn.bing.net/th?id=OIP-C.EgSPriuEnAtlIWJV8R_E1QHaGs&w=107&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        href: 'https://github.com/QiShaoXuan/css_tricks',
        tags: ['Css', '样式'],
      },
      {
        name: 'w3schools Css 教程',
        desc: 'w3schools 从基础到高级的CSS教程',
        logo: 'https://www.w3schools.com/favicon.ico',
        href: 'https://www.w3schools.com/css',
        tags: ['Css', '样式'],
      },
      {
        name: 'TailwindCSS',
        desc: 'Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计',
        logo: 'https://www.tailwindcss.cn/favicon-32x32.png',
        href: 'https://www.tailwindcss.cn',
        tags: ['Css', '框架'],
      },
      {
        name: 'WindiCSS',
        desc: 'Windi CSS 是下一代工具优先的 CSS 框架。',
        logo: 'https://windicss.org/assets/logo.svg',
        href: 'https://windicss.org',
        tags: ['Css', '框架'],
      },
      {
        name: 'Twind',
        desc: '现存最小、最快、功能最齐全的完整 Tailwind-in-JS 解决方案',
        logo: 'https://camo.githubusercontent.com/8520cf430a36d4a093b3c67ef774a94758ea39adcaf3fcb46806ad878bf5318f/68747470733a2f2f7477696e642e6465762f6173736574732f7477696e642d6c6f676f2d616e696d617465642e737667',
        href: 'https://github.com/tw-in-js/twind',
        tags: ['Css', '框架'],
      },
      {
        name: 'UnoCSS',
        desc: '即时按需原子 CSS 引擎',
        logo: 'https://uno.antfu.me//favicon.svg',
        href: 'https://uno.antfu.me/',
        tags: ['Css', '框架'],
      },
      {
        name: 'NES.css',
        desc: '一个像素风格的CSS框架',
        logo: 'https://nostalgic-css.github.io/NES.css/favicon.png',
        href: 'https://nostalgic-css.github.io/NES.css/',
        tags: ['Css', '框架'],
      },
      {
        name: 'clay.css',
        desc: 'claymorphism 泥陶态风格CSS',
        logo: 'https://codeadrian.github.io/clay.css/apple-touch-icon.png',
        href: 'https://codeadrian.github.io/clay.css/',
        tags: ['Css', '框架'],
      },
      {
        name: 'uiverse.io',
        desc: '丰富的 UI 元素助您脱颖而出，开源且免费使用',
        logo: 'https://uiverse.io/favicon.ico',
        href: 'https://uiverse.io/',
        tags: ['Css', '动画'],
      }
    ],
  },
  {
    name:'设计',
    websites:[
      {
        name: 'Mastergo',
        desc: '面向团队的专业 UI/UX 设计工具，多人同时编辑、随时在线评审、设计一键交付，让想法更快实现',
        logo: 'https://mastergo.com/favicon.ico',
        href: 'https://mastergo.com/',
        tags: ['设计'],
      },
      {
        name: '即时设计',
        desc: '可云端编辑的专业级 UI 设计工具，为中国设计师量身打造，Windows 也能用的「协作版 Sketch」',
        logo: 'https://img.js.design/assets/webImg/favicon.ico',
        href: 'https://js.design/',
        tags: ['设计'],
      },
      {
        name: 'Pixso',
        desc: '一站式完成原型、设计、交互与交付，为数字化团队协作提效',
        logo: 'https://cms.pixso.cn/images/logo.svg',
        href: 'https://pixso.cn/',
        tags: ['设计'],
      },
    ]
  },
  {
    name: '字体图标',
    websites: [
      {
        name: 'iconify',
        desc: '数千个图标，一个统一的框架。',
        logo: 'https://icon-sets.iconify.design/favicon.ico',
        href: 'https://icon-sets.iconify.design/',
        tags: ['图标'],
      },
      {
        name: 'iconfont',
        desc: 'iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。',
        logo: 'https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg',
        href: 'https://www.iconfont.cn/',
        tags: ['图标'],
      },
      {
        name: 'Font Awesome',
        desc: '在您的网站上使用Font Awesome展示矢量图标和社交标志，这可是网络上最流行的图标集和工具包。',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610874224065-%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A120210117-170325@2x.png',
        href: 'https://fa5.dashgame.com',
        tags: ['图标'],
      },
      {
        name: 'feathericons',
        desc: '简单美丽的开源图标',
        logo: 'https://feathericons.com/favicon.ico',
        href: 'https://feathericons.com/',
        tags: ['图标'],
      },
      {
        name: 'undraw',
        desc: '一个不断更新的设计项目与美丽的SVG图像，使用完全免费',
        logo: 'https://undraw.co/apple-touch-icon.png',
        href: 'https://undraw.co/',
        tags: ['图标', 'svg'],
      },
      {
        name: 'Shields.io',
        desc: '为你的开源项目生成高质量小徽章图标',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1617853921212-6254238.png',
        href: 'https://shields.io/',
        tags: ['图标', '首页'],
      },
      {
        name: 'Emojiall',
        desc: 'Emoji表情大全',
        logo: 'https://www.emojiall.com/apple-touch-icon.png',
        href: 'https://www.emojiall.com/zh-hans',
        tags: ['图标', 'emoji'],
      },
      {
        name: '渐变色网站',
        desc: '数百万个自动生成的渐变的网站',
        logo: 'https://gradihunt.com/favicon.ico',
        href: 'https://gradihunt.com/',
        tags: ['配色', '背景'],
      },
      {
        name: 'WebGradients',
        desc: 'WebGradients是180个线性渐变的免费集合，您可以将其用作网站任何部分的内容背景',
        logo: 'https://webgradients.com/img/other/logos/webgradients_logo.png',
        href: 'https://webgradients.com',
        tags: ['配色', '背景'],
      },
      {
        name: '中国色',
        desc: '整合所有的中国色',
        logo: 'http://zhongguose.com/img/favicon.ico',
        href: 'http://zhongguose.com/',
        tags: ['配色'],
      },
      // {
      //   name: '谷歌字体',
      //   desc: '一个生成渐变色背景的网站',
      //   logo: 'https://googlefonts.cn/favicon.ico',
      //   href: 'https://googlefonts.cn/',
      //   tags: ['字体'],
      // },
    ],
  },
  {
    name:'站点生成',
    websites:[
      {
        name: 'VitePress',
        desc: 'Vue 驱动并使用Vite构建的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vitepress.vuejs.org/',
        tags: ['前端', 'Vue', '静态站点'],
      },
      {
        name: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vuepress.vuejs.org/',
        tags: ['前端', 'Vue', '静态站点'],
      },
      {
        name: 'Docusaurus',
        desc: '快速构建以内容为核心的最佳网站',
        logo: 'https://docusaurus.io/img/docusaurus.png',
        href: 'https://docusaurus.io',
        tags: ['前端', 'React', '静态站点'],
      },
      {
        name: 'Hexo',
        desc: '快速、简洁且高效的博客框架',
        logo: 'https://hexo.io/favicon.ico',
        href: 'https://hexo.io',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'GitBook',
        desc: 'GitBook帮助您为用户发布漂亮的文档，并集中您的团队的知识进行高级协作。',
        logo: 'https://assets-global.website-files.com/600ead1452cf056d0e52dbed/6246d2036225eac4d74cff27_Favicon_Blue.png',
        href: 'https://www.gitbook.com/',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'Docsify',
        desc: 'docsify 可以快速帮你生成文档网站。',
        logo: 'https://docsify.js.org/_media/icon.svg',
        href: 'https://docsify.js.org',
        tags: ['前端', '静态站点'],
      },
      {
        name: 'WordPress',
        desc: 'WordPress是一款能让您建立出色网站、博客或应用程序的开源软件。',
        logo: 'https://s.w.org/images/wmark.png',
        href: 'https://cn.wordpress.org/',
        tags: ['前端', '站点'],
      },
      {
        name: 'Halo',
        desc: '一款现代化的开源博客/CMS系统，值得一试。',
        logo: 'https://halo.run/themes/run.halo.official2/assets/favicons/favicon-96x96.png',
        href: 'https://halo.run/',
        tags: ['前端', '站点'],
      },
    ]
  },
  {
    name: '杂项',
    websites: [
      {
        name: 'Gitstar Ranking',
        desc: '针对用户、组织和存储库的非官方 GitHub 星级排名。‎',
        logo: 'https://github.com/favicon.ico',
        href: 'https://gitstar-ranking.com/',
        tags: ['Github', '素材', '其他'],
      },
      {
        name: 'Github主页 README 生成器',
        desc: '一个Github 个人主页 README 生成器',
        logo: 'https://github.com/favicon.ico',
        href: 'https://rahuldkjain.github.io/gh-profile-readme-generator/',
        tags: ['Github', '素材', '其他'],
      },
      {
        name: 'Github 统计生成器',
        desc: 'Github 在你的 README 中获取动态生成的 GitHub 统计信息！',
        logo: 'https://github.com/favicon.ico',
        href: 'https://github.com/anuraghazra/github-readme-stats',
        tags: ['Github', '素材', '其他'],
      },
      {
        name: '前端工坊',
        desc: 'Most Popular JavaScript Library 2022 Front End Framework Ranking',
        logo: 'https://github.com/favicon.ico',
        href: 'https://www.javascript.fun/',
        tags: ['前端', '其他'],
      },
    ],
  },
]
