module.exports = {
  base: "/groovy-chinese/",
  dest: "./dist",
  title: "Groovy 中文文档",
  description: "Groovy 中文文档",
  plugins: [
    "vuepress-plugin-cat",
    ['vuepress-plugin-code-copy', {
      align:"top",
      color:"#4298b8",
      successText:"复制成功~"
    }]
  ],
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }], ["script", {
      async: true,
      type: "text/javascript",
      src: "https://s9.cnzz.com/z_stat.php?id=1279042755&web_id=1279042755"
    }], ["script", {
      async: true,
      type: "text/javascript",
      src: "https://hm.baidu.com/hm.js?c400d319a39a68ea6a3732c9dcd9073d"
    }],["meta",{
      name:"keyword",
      content:"groovy,groovy中文,groovy文档,groovy中文网"
    }]
  ],
  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: false,
    repoLabel: 'Github',
    editLinkText: '纠正错误',
    repo: "juzi214032/groovy-chinese",
    sidebar: [
      {
        title: '语法',
        path: '/language-specification/syntax.md'
      }, {
        title: '运算符',
        path: '/language-specification/operators.md'
      }, {
        title: '程序结构',
        path: '/unfinished.md'
      }, {
        title: '对象导向',
        path: '/unfinished.md'
      }, {
        title: '闭包',
        path: '/unfinished.md'
      }, {
        title: '语义',
        path: '/unfinished.md'
      }
    ],
    nav: [{
      text: "快速开始",
      link: "/getting-started/download-groovy.md"
    }, {
      text: "文档",
      link: "/language-specification/syntax"
    }]
  }
}