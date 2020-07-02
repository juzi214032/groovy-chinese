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