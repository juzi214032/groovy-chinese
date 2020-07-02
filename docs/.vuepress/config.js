module.exports = {
  base: "/groovy-chinese/",
  dest: "./dist",
  title: "Groovy 中文文档",
  description: "Groovy 中文文档",
  head: [
    ["script", {
      async: true,
      type: "text/javascript",
      src: "https://s9.cnzz.com/z_stat.php?id=1279042755&web_id=1279042755"
    }],
    ["script", {
      async: true,
      type: "text/javascript",
      src: "https://hm.baidu.com/hm.js?c400d319a39a68ea6a3732c9dcd9073d"
    }]
  ],
  themeConfig: {
    repo: "juzi214032/groovy-chinese",
    repoLabel: 'Github',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '纠正错误',
    nav: [{
      text: "快速开始",
      link: "/getting-started/download-groovy.md"
    }, {
      text: "文档",
      link: "/language-specification/syntax"
    }]
  }
}