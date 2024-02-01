## Made with

- [Vue](https://cn.vuejs.org/)
- [Vite](https://vitejs.cn/vite3-cn/)
- [Arco Design](https://arco.design/)
- [pixi-spine](https://github.com/pixijs/spine)
- [Iconfont](https://www.iconfont.cn/)

## To run

> **You need：**
>
> node > 16.16.0  
> npm > 8.15.0

1. yarn

```bash
# yarn
npm install -g yarn
```

```bash
# install
yarn install

# dev
yarn dev

# build
yarn build

# preview
yarn preview
```

> You can use static hosting platforms such as Vercel and Netlify to import and automatically deploy them with one click.

## Edit

> Open `_config.json` in the root directory, where you will see the following content

```json5
{
  // Website configuration
  title: 'Blue Archive', // Website's Title
  description: 'Homepage in blue archive style!', // Website's Description
  favicon: '/favicon144.png', // Website's Icon
  author: 'kirixenyt', // Author
  keywords: 'bluearchive,kirixenyt', // keyword description
  ICP: '',
  manifest: {
    name: 'Blue archive', // App name
    short_name: 'blue archive', // Short name
    description: 'Homepage in blue archive style!', // description
    theme_color: '#128AFA',
    start_url: '/',
    id: 'Homepage',
    icons: [
      {
        src: '/favicon512.png', // Icon
        sizes: '512x512', // size
        purpose: 'any maskable'
      }
    ]
  },
  level: 75,
  exp: 114514,
  nextExp: 1919,
  iconfont: 'https://at.alicdn.com/t/c/font_4336463_0i6ly0yvyzb.js',
  dock: [
    {
      name: 'Music bot', // Project name
      href: 'https://github.com/KirixenYT/music-bot', // Project link
      imgSrc: 'https://cdn-icons-png.flaticon.com/512/1031/1031737.png' // Project image
    }
  ],
  contact: [
    {
      name: 'KiriXenYT', // Contact info
      href: 'https://example.com/kirixenyt', // Your info link
      iconfont: 'icon-qq'
    }
  ],
  task: {
    name: 'Blog', // Name
    href: 'https://example.com' // link
  }
}
```

## 有关学生回忆大厅L2D文件获取

1. 自己去解包（[教程1](https://www.bilibili.com/read/cv15934670/)、[教程2](https://www.bilibili.com/read/cv18073492/)）
2. 去[基沃托斯古书馆](https://kivo.wiki/)中的“角色图鉴”——“切换到鉴赏模式”——“回忆大厅”当中自行获取
