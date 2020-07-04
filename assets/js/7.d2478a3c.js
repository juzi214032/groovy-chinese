(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{353:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("本章介绍 Groovy 编程语言的语法。该语言的语法来源于 Java 语法，但用 Groovy 的特定结构对其进行了增强，并允许进行某些简化。")]),t._v(" "),a("h2",{attrs:{id:"_1-注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-注释"}},[t._v("#")]),t._v(" 1. 注释")]),t._v(" "),a("h3",{attrs:{id:"_1-1-单行注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-单行注释"}},[t._v("#")]),t._v(" 1.1. 单行注释")]),t._v(" "),a("p",[t._v("单行注释使用"),a("code",[t._v("//")]),t._v("。在"),a("code",[t._v("//")]),t._v("后面的字符，直到行尾，都被认为是注释的一部分。")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是单行注释")]),t._v("\nprintln "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"hello"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这也是单行注释")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-2-多行注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-多行注释"}},[t._v("#")]),t._v(" 1.2 多行注释")]),t._v(" "),a("p",[t._v("多行注释以"),a("code",[t._v("/*")]),t._v("开头，"),a("code",[t._v("/*")]),t._v("后面的字符被视为注释的一部分，包括换行符，直到第一个"),a("code",[t._v("*/")]),t._v("结束注释。因此，多行注释可以放在语句的末尾，甚至可以放在语句内部。")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 多行注释\n   可以跨越两行 */")]),t._v("\nprintln "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"hello"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 多行注释\n                   也可以放在行尾 */")]),t._v("\nprintln "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 一 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 二 */")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-3-groovydoc-注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-groovydoc-注释"}},[t._v("#")]),t._v(" 1.3 Groovydoc 注释")]),t._v(" "),a("p",[t._v("与多行注释类似，Groovydoc 注释也是多行的，但以"),a("code",[t._v("/**")]),t._v("开始，以"),a("code",[t._v("*/")]),t._v("结束。在第一行 Groovydoc 注释之后的行可以选择以星号"),a("code",[t._v("*")]),t._v("开头。这些注释与以下内容相关联。")]),t._v(" "),a("ul",[a("li",[t._v("类型定义（classes, interfaces, enums, annotations）")]),t._v(" "),a("li",[t._v("变量和属性定义")]),t._v(" "),a("li",[t._v("方法定义")])]),t._v(" "),a("p",[t._v("即时你不写 Groovydoc 编译器也不会报错，但是出于代码规范的目的，你也应该在这些定义之前加上 Groovydoc 注释。")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Class 描述\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 一个人的名字 */")]),t._v("\n    String name\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 向一个人问好\n     *\n     * @param otherPerson 需要问好的人\n     * @return 欢迎语\n     */")]),t._v("\n    String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String otherPerson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Hello '),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("otherPerson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Groovydoc 与 Java 的 Javadoc 遵循相同的约定。所以你可以使用和 Javadoc 一样的标签。")]),t._v(" "),a("p",[t._v("此外，Groovy 从 3.0.0 开始支持 Runtime Groovydoc，即 Groovydoc 可以在运行时保留。")]),t._v(" "),a("p",[t._v("运行时 Groovydoc 默认是禁用的。可以通过添加 JVM 选项 "),a("code",[t._v("Dgroovy.attach.runtime.groovydoc=true")]),t._v("开启。")]),t._v(" "),a("p",[t._v("运行时 Groovydoc 以"),a("code",[t._v("/**@")]),t._v("开头，以"),a("code",[t._v("*/")]),t._v("结尾。")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**@\n * Foo类的描述\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**@\n     * bar() 方法的描述\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groovydoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Some class groovydoc for Foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groovydoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Some method groovydoc for bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),a("ul",[a("li",[t._v("第 11 行：运行时获取 Foo 类的 Groovydoc")]),t._v(" "),a("li",[t._v("第 12 行：运行时获取 bar() 方法的 Groovydoc")])]),t._v(" "),a("h3",{attrs:{id:"_1-4-shebang-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-shebang-line"}},[t._v("#")]),t._v(" 1.4 Shebang Line")]),t._v(" "),a("p",[t._v("除了单行注释之外，还有一个特殊的注释，通常被 UNIX 系统理解为 Shebang Line，它允许脚本直接从命令行运行。前提是你已经安装了 Groovy 发行版，并且在 PATH 中配置了 Groovy。")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang comment"}},[t._v("#!/usr/bin/env groovy")]),t._v("\nprintln "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Hello from the shebang line"')]),t._v("\n")])])]),a("p",[a("code",[t._v("#")]),t._v("字符必须是文件的第一个字符。任何缩进都会产生编译错误。")]),t._v(" "),a("blockquote",[a("p",[t._v("关于 Shebang，据说是来源于，Sharp 和 bang 两个单词的合并；Sharp 代表乐谱中的‘升号’，这个符号和‘井号’，长得一样；而 bang 这个词，则代表‘砰的一声’，之所以用它来表示‘！’，则是出自于漫画，因为漫画中，巨大声响后面都有个‘！’号。")])]),t._v(" "),a("h2",{attrs:{id:"_2-关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-关键字"}},[t._v("#")]),t._v(" 2. 关键字")]),t._v(" "),a("p",[t._v("下述列表是 Groovy 语言的所有关键字")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("as")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("assert")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("break")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("case")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("catch")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("class")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("const")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("continue")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("def")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("default")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("do")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("else")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("extends")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("finally")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("for")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("goto")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("if")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("implents")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("import")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("in")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("instanceof")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("interface")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("new")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("package")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("return")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("super")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("switch")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("this")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("throw")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("throws")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("trait")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("try")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("var")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("while")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("h2",{attrs:{id:"_3-标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-标识符"}},[t._v("#")]),t._v(" 3. 标识符")]),t._v(" "),a("h3",{attrs:{id:"_3-1-普通标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-普通标识符"}},[t._v("#")]),t._v(" 3.1 普通标识符")]),t._v(" "),a("p",[t._v("标识符以字母、``$"),a("code",[t._v("或")]),t._v("_`开头，不能以数字开头。")]),t._v(" "),a("p",[t._v("字母可在以下范围内：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("a")]),t._v(" to "),a("code",[t._v("z")]),t._v(" （小写 ascii 字符）")]),t._v(" "),a("li",[a("code",[t._v("A")]),t._v(" to "),a("code",[t._v("Z")]),t._v(" （大写 ascii 字符）")]),t._v(" "),a("li",[a("code",[t._v("\\u00C0")]),t._v(" to "),a("code",[t._v("\\u00D6")])]),t._v(" "),a("li",[a("code",[t._v("\\u00D8")]),t._v(" to "),a("code",[t._v("\\u00F6")])]),t._v(" "),a("li",[a("code",[t._v("\\u00F8")]),t._v(" to "),a("code",[t._v("\\u00FF")])]),t._v(" "),a("li",[a("code",[t._v("\\u0100")]),t._v(" to "),a("code",[t._v("\\uFFFE")])])]),t._v(" "),a("p",[t._v("字母之后的字符可以包含数字")]),t._v(" "),a("p",[t._v("下面是几个有效标识符的例子（在这里是变量名）：")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" item3\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" with_underscore\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),t._v("dollarStart\n")])])]),a("p",[t._v("以下的都是无效的标识符：")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" 3tier\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" a#b\n")])])]),a("p",[t._v("以"),a("code",[t._v(".")]),t._v("开头的标识符也是有效的：")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v("\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v("\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v("\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-2-引用标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-引用标识符"}},[t._v("#")]),t._v(" 3.2 引用标识符")]),t._v(" "),a("p",[t._v("引用标识符出现在"),a("code",[t._v(".")]),t._v("表达式后面，例如"),a("code",[t._v("person.name")]),t._v("表达式的"),a("code",[t._v("name")]),t._v("的部分可以使用"),a("code",[t._v("person.'name'")]),t._v("或者"),a("code",[t._v('person."name"')]),t._v("的表示。有个有趣的地方是，一些在 Java 中不能使用的非法字符（例如破折号、空格、感叹号等字符）是可以在 Groovy 中使用的。")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"an identifier with a space and double quotes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"ALLOWED"')]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'with-dash-signs-and-single-quotes'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"ALLOWED"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"an identifier with a space and double quotes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"ALLOWED"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'with-dash-signs-and-single-quotes'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"ALLOWED"')]),t._v("\n")])])]),a("p",[t._v("正如我们在下面关于字符串的章节中所看到的，Groovy 提供了不同的字符串字元。实际上，所有类型的字符串都可以在点后使用。")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single quote'")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"double quote"')]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'''triple single quote'''")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"""triple double quote"""')]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string regex"}},[t._v("/slashy string/")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v("$/dollar slashy string/$")]),t._v("\n")])])]),a("p",[t._v("简单字符串和 Groovy 的 GStrings （插值字符串）是有区别的，因为在后者的情况下，内插值被插入到最终的字符串中，用于计算整个变量。")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" firstname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Homer"')]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Simpson-'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("firstname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Homer Simpson"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Simpson-Homer'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"Homer Simpson"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);