---
sidebarDepth: 2
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

引用标识符出现在`.`表达式后面，例如`person.name`表达式的`name`的部分可以使用`person.'name'`或者`person."name"`的表示。有个值得注意的地方是，一些在 Java 中不能使用的非法字符（例如破折号、空格、感叹号等字符）是可以在 Groovy 中使用的。

```groovy
def map = [:]

map."an identifier with a space and double quotes" = "ALLOWED"
map.'with-dash-signs-and-single-quotes' = "ALLOWED"

assert map."an identifier with a space and double quotes" == "ALLOWED"
assert map.'with-dash-signs-and-single-quotes' == "ALLOWED"
```

正如我们在下面关于字符串的章节中所看到的，Groovy 提供了不同的字符串字元。实际上，所有类型的字符串都可以在点后使用。

```groovy
map.'single quote'
map."double quote"
map.'''triple single quote'''
map."""triple double quote"""
map./slashy string/
map.$/dollar slashy string/$
```

简单字符串和 Groovy 的 GStrings （插值字符串）是有区别的，因为在后者的情况下，内插值被插入到最终的字符串中，用于计算整个变量。

```groovy
def firstname = "Homer"
map."Simpson-${firstname}" = "Homer Simpson"

assert map.'Simpson-Homer' == "Homer Simpson"
```

## 4. 字符串

文本以一串字符的形式表示，称为字符串。Groovy 允许你实例化`java.lang.String`对象，以及GStrings（`groovy.lang.GString`），GStrings 在其他编程语言中也被称为插值字符串。

### 4.1 单引号字符串

单引号字符串是由单引号包围的一系列字符：

```groovy
'一个单引号字符串'
```

单引号字符串是普通的`java.lang.String`，不支持插值。

### 4.2 连接字符串

所有的 Groovy 字符串都可以用`+`操作符进行连接：

```groovy
assert 'ab' == 'a' + 'b'
```

### 4.3 三个单引号的字符串

三个单引号字符串是指由三个单引号包围的一系列字符。

```groovy
'''这是一个三个单引号包围的字符串'''
```

三个单引号的字符串是普通的`java.lang.String`，不支持插值。

三个单引号的字符串可以跨越多行。字符串的内容可以跨越行边界，而不需要将字符串分割成几段，也不需要`+`连接或换行符：

```groovy
def aMultilineString = '''第一行
第二行
第三行'''
```

如果你的代码有缩进，例如在一个类的方法体中，你的字符串将包含缩进的空白字符。GDK(Groovy Development Kit)  中包含了`String#stripIndent()`方法和`String#stripMargin()`方法，这两个方法可以去除缩进，`String#stripMargin()`方法使用一个定界符来标识需要从哪里开始删除字符串的空白字符。

当创建一个字符串时，如下所示：

```groovy
def startingAndEndingWithANewline = '''
第一行
第二行
第三行
'''
```

你会注意到，生成的字符串包含一个换行符作为第一个字符。可以通过用反斜杠转义来删除该字符：

```groovy
def strippedFirstNewline = '''\
第一行
第二行
第三行
'''

assert !strippedFirstNewline.startsWith('\n')
```

#### 4.3.1 转义特殊字符

你可以用反斜杠字符转义单引号，以避免被识别为字符串的边界：

```groovy
'an escaped single quote: \' needs a backslash'
```

还可以使用双斜杠来转义 转义字符 本身：

```groovy
'an escaped escape character: \\ needs a double backslash'
```

一些特殊字符可以通过转义得到

|          |                                            |                              |
| :------: | :----------------------------------------: | :--------------------------: |
| 转义字符 |                    含义                    |             注释             |
|    \b    |                 backspace                  |            回退符            |
|    \f    |                  formfeed                  |            换页符            |
|    \n    |                  newline                   |            换行符            |
|    \r    |              carriage return               |            回车符            |
|    \s    |                single space                |            单引号            |
|    \t    |                 tabulation                 |            制表符            |
|    \\    |                 backslash                  |             斜杠             |
|   \\'    | single quote within a single-quoted string | 单引号字符串包含单引号时使用 |
|   \\"    | double quote within a double-quoted string | 双引号字符串包含双引号时使用 |

当后面涉及到其他类型的字符串时，我们会看到一些更多的转义细节。

#### 4.3.2 Unicode 转义

​	对于键盘上没有的字符，你可以使用 Unicode 转义字符串。Unicode 格式是：一个反斜杠，后面是`u`，然后是4个十六进制数字。

例如，欧元货币符号可以用以下方式表示：

```groovy
'The Euro currency symbol: \u20AC'
```

### 4.4 双引号字符串

双引号字符串是由双引号包围的一系列字符：

```groovy
"a double-quoted string"
```

如果没有插值表达式，双引号字符串是普通的`java.lang.String`，但如果存在插值，则是`groovy.lang.GString`实例。

要转义双引号，可以使用反斜杠字符：`"一个双引号字符: \"".`

#### 4.4.1 字符串插值

除了单引号和三引号字符串外，任何 Groovy 表达式都可以在所有字符串字面中进行插值。插值是指在计算字符串时，用其值替换字符串中的占位符的行为。占位符表达式由`${}`包围。对于不明确的点号表达式，大括号可以省略，也就是说，在这些情况下，我们可以只使用`$`前缀。如果 GString 被传递给一个取字符串的方法，占位符中的表达式值将被计算为其字符串表示形式（通过调用该表达式上的`oString()`），并将得到的字符串传递给该方法。

一个引用了本地变量的占位符字符串，如下所示：

```groovy
def name = 'Guillaume' // a plain string
def greeting = "Hello ${name}"

assert greeting.toString() == 'Hello Guillaume'
```

任何Groovy表达式都是有效的，在这个例子中我们可以看到一个算术表达式：

```groovy
def sum = "The sum of 2 and 3 equals ${2 + 3}"
assert sum.toString() == 'The sum of 2 and 3 equals 5'
```

`${}`占位符之间除了可以使用表达式外，还可以使用语句。但是，语句的值会被计算为`null`。因此，如果在该占位符中插入了几个语句，最后一个语句应该以某种方式返回一个有意义的值来插入。例如，`1 和 2 之和等于 ${def a = 1; def b = 2; a + b}`是被支持的，并且可以正常工作，但是一个好的做法通常是在 GString 占位符中只使用简单的表达式。

除了` ${} `占位符之外，我们还可以在点表达式前使用一个单独的 `$` 符号：

```groovy
def person = [name: 'Guillaume', age: 36]
assert "$person.name is $person.age years old" == 'Guillaume is 36 years old'
```

但只有`a.b`、`a.b.c`等形式的点表达式才有效。包含小括号的表达式，如方法调用、用于闭合的大括号、不属于属性表达式的点或算术运算符都是无效的。以下给出一个数字的变量定义：

```groovy
shouldFail(MissingPropertyException) {
    println "$number.toString()"
}
```

`$number.toString()`被解析器解释为`${number.toString}()`。

同样，如果表达方式有歧义，你需要保留大括号：

```groovy
String thing = 'treasure'
assert 'The x-coordinate of the treasure is represented by treasure.x' ==
    "The x-coordinate of the $thing is represented by $thing.x"   // <= 不允许，因为有歧义
assert 'The x-coordinate of the treasure is represented by treasure.x' ==
        "The x-coordinate of the $thing is represented by ${thing}.x"  // <= 必须保留大括号
```

如果你需要转义 GString 中的`$`或`${}`占位符，使它们能直接显示出来，你只需要使用一个反斜线字符来转义`$`符号：

```groovy
assert '$5' == "\$5"
assert '${name}' == "\${name}"
```

#### 4.4.2 插值表达式的特殊情况

到目前为止，我们已经看到我们可以在 `${}` 占位符内插入任意表达式，但是闭包表达式有一个特殊的情况和符号。当占位符中包含一个箭头`${->}`时，该表达式实际上是一个闭包表达式。你可以把它看作是一个前面加了一个`$`符号的闭包：

```groovy
def sParameterLessClosure = "1 + 2 == ${-> 3}" // 注释 1
assert sParameterLessClosure == '1 + 2 == 3'

def sOneParamClosure = "1 + 2 == ${ w -> w << 3}" // 注释 2
assert sOneParamClosure == '1 + 2 == 3'
```

- 注释 1 ：该闭包是一个不接受参数的无参数闭包。
- 注释 2 ：在这里，闭包需要一个单一的`java.io.StringWriter`参数，你可以用`<<`操作符来追加内容。无论哪种情况，两个占位符都是嵌入式闭包。

从表面上看，它像是用一种比较啰嗦的定义表达式的方式来进行插值，但闭包比单纯的表达式有一个重要的优势：惰性求值。

让我们看看以下例子：

```groovy
def number = 1 // 注释 1
def eagerGString = "value == ${number}"
def lazyGString = "value == ${ -> number }"

assert eagerGString == "value == 1" // 注释 2
assert lazyGString ==  "value == 1" // 注释 3

number = 2 // 注释 4
assert eagerGString == "value == 1" // 注释 5
assert lazyGString ==  "value == 2" // 注释 6
```

- 注释 1 ：我们定义了一个值为 1 的 number 变量，然后在两个 GString 中进行插值，`eagerGString`使用普通表达式，`lazyGString`使用闭包表达式
- 注释 2 ：我们希望`eagerGString`中的`number`值为 1
- 注释 3 ：对 `lazyGString`也是一样的
- 注释 4 ：然后，我们将变量的值改为一个新的数字
- 注释 5 ：如果是普通的插值表达式，那么在创建 GString 的时候，这个值实际上已经被固定了
- 注释 6 ：但如果是使用闭包表达式的话，每次修改变量值时都会调用闭包，其字符串值也会进行更新。

嵌入式闭包表达式如果接收一个以上的参数，会在运行时产生异常。因此只闭包表达式只能接收零或一个参数。

#### 4.4.3 与 Java 的互操作性

当一个方法（不管是在 Java 还是 Groovy 中实现的）期望一个`java.lang.String`，但我们传递的是`groovy.lang.GString`实例时，GString 的`toString()`方法会被隐式调用。

``` groovy
String takeString(String message) {         // 注释 4
    assert message instanceof String        // 注释 5
    return message
}

def message = "The message is ${'hello'}"   // 注释 1
assert message instanceof GString           // 注释 2

def result = takeString(message)            // 注释 3
assert result instanceof String
assert result == 'The message is hello'
```

- 注释 1 ：创建一个 GString 变量
- 注释 2：检查它是一个 GString 变量
- 注释 3 ：然后将该 GString 传递给一个以 String 为参数的方法
- 注释 4 ：`takeString()`方法的定义明确表示它的唯一参数是一个字符串
- 注释 5：验证了参数确实是一个字符串，而不是一个 GString

#### 4.4.4 GString 和 String hashCodes

虽然插值字符串可以代替 Java 字符串，但它们与字符串有一个特殊的区别：它们的 hashCodes 不同。Java 字符串是不可改变的，而 GString 的结果 String 表示可以根据其插值的不同而变化。即使对于相同的结果字符串，GStrings 和 Strings 的HashCode 也不一样。

```groovy
assert "one: ${1}".hashCode() != "one: 1".hashCode()
```

GString 和 Strings 具有不同的 hashCode 值，因此应该避免使用 GString 作为 Map Key，特别是当我们试图用 String 而不是 GString 来检索关联值时。

```groovy
def key = "a"
def m = ["${key}": "letter ${key}"]     // 注释 1

assert m["a"] == null                   // 注释 2
```

- 注释 1 ：这个 Map 使用一个 GString 作为 Key 创建
- 注释 2 ：当试图用 String Key 来获取值时，会获取不到，因为 Strings 和 GString 有不同的 hashCode 值

### 4.5 三个双引号的字符串

三个引号的字符串的行为和双引号字符串一样，只是它们和三个单引号的字符串一样是多行的。

```groovy
def name = 'Groovy'
def template = """
    Dear Mr ${name},

    You're the winner of the lottery!

    Yours sincerly,

    Dave
"""

assert template.toString().contains('Groovy')
```

在三个双引号的字符串中，双引号和单引号都不需要转义。

### 4.6 斜杠字符串

除了常用的引号字符串，Groovy 还提供了使用`/`作为开头和结尾定界符的斜杠字符串。斜杠字符串对于定义正则表达式和模式特别有用，因为不需要转义反斜杠。

斜杠字符串的例子如下：

```groovy
def fooPattern = /.*foo.*/
assert fooPattern == '.*foo.*'
```

只有正斜杠需要用反斜杠来转义：

```groovy
def escapeSlash = /The character \/ is a forward slash/
assert escapeSlash == 'The character / is a forward slash'
```

斜杠字符串可以多行表示：

```groovy
def multilineSlashy = /one
    two
    three/

assert multilineSlashy.contains('\n')
```

斜杠字符串可以被认为是定义 GString 的另一种方式，但具有不同的转义规则。并且它们也是支持插值表达式的：

```groovy
def color = 'blue'
def interpolatedSlashy = /a ${color} car/

assert interpolatedSlashy == 'a blue car'
```

#### 4.6.1 特殊情况

一个空的斜线字符串不能用双斜杠表示，因为 Groovy 解析器将其理解为行注释。这就是下面的断言不会被编译的原因，因为它看起来像一行没有结束语句：

```groovy
assert '' == //
```

由于斜杠字符串的设计主要是为了让正则更容易，所以一些在 GStrings 中出错的东西，如`$()`或`$5`，都可以用斜杠字符串来处理。

请记住，反斜杠不需要转义，或者说不支持转义。斜杠字符`/\t/`不会是`\t`，而是在字符 "t "后面加上一个反斜杠。转义只允许对斜线字符进行转义，即`/\/folder/`将是一个值`/folder `的斜线字符串。斜杠转义的结果是，斜杠字符串不能以`\`结束。否则，这将会转义斜杠字符串的结束符。你可以使用一个特殊的技巧，`/ends with slash ${'\'}/`。但在这种情况下，最好的做法还是避免使用斜杠字符串。

### 4.7 美元符斜杠字符串

美元符斜杠字符串是以`$/`开头和`/$`结尾的多行 GStrings 。转义字符是美元符号，它可以转义另一个`$`或`/`。但是`$`和`/`都不需要转义，除非是转义一个字符串子序列的`$`，这个序列的开头是一个 GString 占位符序列，或者你需要转义一个序列，这个序列的开头是一个关闭的美元斜杠字符串定界符。

下面展示了一个例子：

```groovy
def name = "Guillaume"
def date = "April, 1st"

def dollarSlashy = $/
    Hello $name,
    today we're ${date}.

    $ dollar sign
    $$ escaped dollar sign
    \ backslash
    / forward slash
    $/ escaped forward slash
    $$$/ escaped opening dollar slashy
    $/$$ escaped closing dollar slashy
/$

assert [
    'Guillaume',
    'April, 1st',
    '$ dollar sign',
    '$ escaped dollar sign',
    '\\ backslash',
    '/ forward slash',
    '/ escaped forward slash',
    '$/ escaped opening dollar slashy',
    '/$ escaped closing dollar slashy'
].every { dollarSlashy.contains(it) }
```

它的创建是为了克服一些斜线字符串转义规则的限制。当它的转义规则适合你的字符串内容时，就可以使用它（通常是当它包含一些你不想转义的斜杠时）。

### 4.8 字符串总结

| 字符串名称       | 语法        | 支持插值表达式     | 多行               | 转义字符 |
| ---------------- | ----------- | ------------------ | ------------------ | -------- |
| 单引号字符串     | `'...'`     |                    |                    | `\`         |
| 三单引号字符串   | `'''...'''` |                    | :heavy_check_mark: | `\`      |
| 双引号字符串     | `"..."`     | :heavy_check_mark: |                    | `\`      |
| 三双引号字符串   | `"""..."""` | :heavy_check_mark: | :heavy_check_mark: | `\`      |
| 斜杠字符串       | `/.../`     | :heavy_check_mark: | :heavy_check_mark: | `\`      |
| 美元符斜杠字符串 | `$/.../$`   | :heavy_check_mark: | :heavy_check_mark: | `$`      |

### 4.9 字符

与 Java 不同，Groovy 没有明确的字符文字（Java 使用单引号表示字符，双引号表示字符串；但 Groovy 中单引号和双引号均是字符串）。然而，你可以通过三种不同的方式，将 Groovy 字符串明确为一个实际的字符。

```groovy
char c1 = 'A' // 方法 1
assert c1 instanceof Character

def c2 = 'B' as char // 方法 2
assert c2 instanceof Character

def c3 = (char)'C' // 方法 3
assert c3 instanceof Character
```

- 方法 1 ：显示指定 char 类型
- 方法 2 ：通过使用 as 操作符的类型转换法
- 方法 3 ：通过使用强转操作

当字符被保存在一个变量中时，第一种方法更优，而当一个 char 值必须作为方法调用的参数传递时，其他两个选项（2和3）更好。

