---
sidebar: auto
---

本章介绍 Groovy 编程语言的语法。该语言的语法来源于 Java 语法，但用 Groovy 的特定结构对其进行了增强，并允许进行某些简化。

## 1. 注释

  ### 1.1. 单行注释
  单行注释使用`//`。在`//`后面的字符，直到行尾，都被认为是注释的一部分。
  ```groovy
  // 这是单行注释
  println "hello" // 这也是单行注释
  ```

  ### 1.2 多行注释
  多行注释以`/*`开头，`/*`后面的字符被视为注释的一部分，包括换行符，直到第一个`*/`结束注释。因此，多行注释可以放在语句的末尾，甚至可以放在语句内部。

```groovy
/* 多行注释
   可以跨越两行 */
println "hello" /* 多行注释
                   也可以放在行尾 */
println 1 /* 一 */ + 2 /* 二 */
```

### 1.3 Groovydoc 注释

与多行注释类似，Groovydoc 注释也是多行的，但以`/**`开始，以`*/`结束。在第一行 Groovydoc 注释之后的行可以选择以星号`*`开头。这些注释与以下内容相关联。

- 类型定义（classes, interfaces, enums, annotations）
- 变量和属性定义
- 方法定义

即时你不写 Groovydoc 编译器也不会报错，但是出于代码规范的目的，你也应该在这些定义之前加上 Groovydoc 注释。

```groovy
/**
 * Class 描述
 */
class Person {
    /** 一个人的名字 */
    String name

    /**
     * 向一个人问好
     *
     * @param otherPerson 需要问好的人
     * @return 欢迎语
     */
    String greet(String otherPerson) {
       "Hello ${otherPerson}"
    }
}
```

Groovydoc 与 Java 的 Javadoc 遵循相同的约定。所以你可以使用和 Javadoc 一样的标签。

此外，Groovy 从 3.0.0 开始支持 Runtime Groovydoc，即 Groovydoc 可以在运行时保留。

运行时 Groovydoc 默认是禁用的。可以通过添加 JVM 选项 `Dgroovy.attach.runtime.groovydoc=true`开启。

运行时 Groovydoc 以`/**@`开头，以`*/`结尾。

```groovy
/**@
 * Foo类的描述
 */
class Foo {
    /**@
     * bar() 方法的描述
     */
    void bar() {
    }
}

assert Foo.class.groovydoc.content.contains('Some class groovydoc for Foo') 
assert Foo.class.getMethod('bar', new Class[0]).groovydoc.content.contains('Some method groovydoc for bar') 
```

- 第 11 行：运行时获取 Foo 类的 Groovydoc
- 第 12 行：运行时获取 bar() 方法的 Groovydoc

### 1.4 Shebang Line

除了单行注释之外，还有一个特殊的注释，通常被 UNIX 系统理解为 Shebang Line，它允许脚本直接从命令行运行。前提是你已经安装了 Groovy 发行版，并且在 PATH 中配置了 Groovy。

```groovy
#!/usr/bin/env groovy
println "Hello from the shebang line"
```

`#`字符必须是文件的第一个字符。任何缩进都会产生编译错误。

> 关于 Shebang，据说是来源于，Sharp 和 bang 两个单词的合并；Sharp 代表乐谱中的‘升号’，这个符号和‘井号’，长得一样；而 bang 这个词，则代表‘砰的一声’，之所以用它来表示‘！’，则是出自于漫画，因为漫画中，巨大声响后面都有个‘！’号。



## 2. 关键字

下述列表是 Groovy 语言的所有关键字

|  as   |  assert  |  break  |  case   |   catch    |   class   |
| :---: | :------: | :-----: | :-----: | :--------: | :-------: |
| const | continue |   def   | default |     do     |   else    |
| enum  | extends  |  false  | finally |    for     |   goto    |
|  if   | implents | import  |   in    | instanceof | interface |
|  new  |   null   | package | return  |   super    |  switch   |
| this  |  throw   | throws  |  trait  |    true    |    try    |
|  var  |  while   |         |         |            |           |



## 3. 标识符

### 3.1 普通标识符

标识符以字母、``$`或`_`开头，不能以数字开头。

字母可在以下范围内：

- `a` to `z` （小写 ascii 字符）
- `A` to `Z` （大写 ascii 字符）
- `\u00C0` to `\u00D6`
- `\u00D8` to `\u00F6`
- `\u00F8` to `\u00FF`
- `\u0100` to `\uFFFE`

字母之后的字符可以包含数字

下面是几个有效标识符的例子（在这里是变量名）：

```groovy
def name
def item3
def with_underscore
def $dollarStart
```

以下的都是无效的标识符：

```groovy
def 3tier
def a+b
def a#b
```

以`.`开头的标识符也是有效的：

```groovy
foo.as
foo.assert
foo.break
foo.case
foo.catch
```

### 3.2 引用标识符

引用标识符出现在`.`表达式后面，例如`person.name`表达式的`name`的部分可以使用`person.'name'`或者`person."name"`的表示。有个有趣的地方是，一些在 Java 中不能使用的非法字符（例如）

