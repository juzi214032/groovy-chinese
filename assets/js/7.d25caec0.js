(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{363:function(s,t,a){"use strict";a.r(t);var r=a(17),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本章将介绍 Groovy 编程语言的运算符。")]),s._v(" "),a("h2",{attrs:{id:"_1-算术运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-算术运算符"}},[s._v("#")]),s._v(" 1. 算术运算符")]),s._v(" "),a("p",[s._v("Groovy 支持数学运算符和其他编程语言（如 Java ）中常见的算术运算符，支持 Java 所有的算术运算符。让我们通过下面的例子来了解它们。")]),s._v(" "),a("h3",{attrs:{id:"_1-1-普通算术运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-普通算术运算符"}},[s._v("#")]),s._v(" 1.1 普通算术运算符")]),s._v(" "),a("p",[s._v("下表是 Groovy 中可用的二元运算符")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("运算符")]),s._v(" "),a("th",[s._v("含义")]),s._v(" "),a("th",[s._v("备注")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("+")])]),s._v(" "),a("td",[s._v("加法")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("code",[s._v("-")])]),s._v(" "),a("td",[s._v("减法")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("code",[s._v("*")])]),s._v(" "),a("td",[s._v("乘法")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("code",[s._v("/")])]),s._v(" "),a("td",[s._v("除法")]),s._v(" "),a("td",[s._v("如果是整数除法请使用"),a("code",[s._v("intdiv()")]),s._v("。关于除法的返回类型，请参见关于"),a("RouterLink",{attrs:{to:"/language-specification/syntax.html#_5-5-数学运算"}},[s._v("整数除法")]),s._v("的章节。")],1)]),s._v(" "),a("tr",[a("td",[a("code",[s._v("%")])]),s._v(" "),a("td",[s._v("取模")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("code",[s._v("*")])]),s._v(" "),a("td",[s._v("幂运算")]),s._v(" "),a("td",[s._v("更多细节，请查看"),a("RouterLink",{attrs:{to:"/language-specification/syntax.html#_5-5-数学运算"}},[s._v("幂运算")])],1)])])]),s._v(" "),a("p",[s._v("下面是一些使用运算符的例子：")]),s._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n")])])]),a("h3",{attrs:{id:"_1-2-一元运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-一元运算符"}},[s._v("#")]),s._v(" 1.2 一元运算符")]),s._v(" "),a("p",[a("code",[s._v("+")]),s._v("和"),a("code",[s._v("-")]),s._v("也可以作为一元运算符")]),s._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注释 1")]),s._v("\n")])])]),a("p",[s._v("注意使用括号将表达式括起来，以便一元运算符"),a("code",[s._v("-")]),s._v("可以生效。")]),s._v(" "),a("p",[s._v("一元运算符还包括"),a("code",[s._v("++")]),s._v("（自增）和"),a("code",[s._v("--")]),s._v("（自减），放在变量之前或之后都可以：")]),s._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注释 1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注释 2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注释 3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" g "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("g "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注释 4")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" g "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])])]),a("ul",[a("li",[s._v("注释 1：当"),a("code",[s._v("++")]),s._v("在变量之后时，整个表达式被计算之后"),a("code",[s._v("a")]),s._v("才会自增")]),s._v(" "),a("li",[s._v("注释 2：当"),a("code",[s._v("--")]),s._v("在变量之后时，整个表达式被计算之后"),a("code",[s._v("a")]),s._v("才会自减")]),s._v(" "),a("li",[s._v("注释 3：当"),a("code",[s._v("++")]),s._v("在变量之前时，整个表达式被计算之前"),a("code",[s._v("a")]),s._v("就会自增")]),s._v(" "),a("li",[s._v("注释 4：当"),a("code",[s._v("--")]),s._v("在变量之前时，整个表达式被计算之前"),a("code",[s._v("a")]),s._v("就会自减")])]),s._v(" "),a("h3",{attrs:{id:"_1-3-赋值算术运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-赋值算术运算符"}},[s._v("#")]),s._v(" 1.3 赋值算术运算符")]),s._v(" "),a("p",[s._v("上面我们看到的二元算术运算符也有赋值形式：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("+=")])]),s._v(" "),a("li",[a("code",[s._v("-=")])]),s._v(" "),a("li",[a("code",[s._v("*=")])]),s._v(" "),a("li",[a("code",[s._v("/=")])]),s._v(" "),a("li",[a("code",[s._v("%=")])]),s._v(" "),a("li",[a("code",[s._v("**=")])])]),s._v(" "),a("p",[s._v("下面看些例子：")]),s._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\ne "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n")])])]),a("h2",{attrs:{id:"_2-关系运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-关系运算符"}},[s._v("#")]),s._v(" 2. 关系运算符")]),s._v(" "),a("p",[s._v("关系运算符允许在对象之间进行比较，知道两个对象是相同还是不同，或者一个大于、小于或等于另一个。")]),s._v(" "),a("p",[s._v("下表是可用的操作符：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("运算符")]),s._v(" "),a("th",[s._v("比较目的")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("==")])]),s._v(" "),a("td",[s._v("相等")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("!=")])]),s._v(" "),a("td",[s._v("不等")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("<")])]),s._v(" "),a("td",[s._v("小于")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("<=")])]),s._v(" "),a("td",[s._v("小于等于")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v(">")])]),s._v(" "),a("td",[s._v("大于")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v(">=")])]),s._v(" "),a("td",[s._v("大于等于")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("===")])]),s._v(" "),a("td",[s._v("严格相等（Groovy 3.0.0 后支持）")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("!==")])]),s._v(" "),a("td",[s._v("严格不等（Groovy 3.0.0 后支持）")])])])]),s._v(" "),a("p",[s._v("下面是一些使用这些运算符进行简单数字比较的例子：")]),s._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),a("p",[a("code",[s._v("===")]),s._v(" 和 "),a("code",[s._v("!==")]),s._v(" ，与调用 is() 方法和否定调用 is() 方法效果相同。")]),s._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" groovy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("transform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("EqualsAndHashCode\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EqualsAndHashCode")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Creature")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" String type "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Creature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" copyCat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cat\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" lion "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Creature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Java 逻辑判等")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" lion      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Groovy 快速判等")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("copyCat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Groovy 特有的判等")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" copyCat  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 快速判等")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" lion     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 快速判不等")]),s._v("\n")])])]),a("h2",{attrs:{id:"_3-逻辑运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-逻辑运算符"}},[s._v("#")]),s._v(" 3. 逻辑运算符")])])}),[],!1,null,null,null);t.default=e.exports}}]);