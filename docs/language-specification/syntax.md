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

标识符以字母、`$`或`_`开头，不能以数字开头。

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

## 4. String

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

## 5. Number

Groovy支持不同类型的整数和小数，并有 Java 常用的 Number 类型支持。

### 5.1 整数

整数类型和 Java 一样：

- `byte`
- `char`
- `short`
- `int`
- `long`
- `java.lang.BigInteger`

你可以用下面的声明创建这些类型的整数：

```groovy
// primitive types
byte  b = 1
char  c = 2
short s = 3
int   i = 4
long  l = 5

// infinite precision
BigInteger bi =  6
```

如果你通过使用`def`关键字来使用可选的输入法，那么数字的类型就会有所不同：它会自动选择合适的类型。

对于正数：

```groovy
def a = 1
assert a instanceof Integer

// Integer.MAX_VALUE
def b = 2147483647
assert b instanceof Integer

// Integer.MAX_VALUE + 1
def c = 2147483648
assert c instanceof Long

// Long.MAX_VALUE
def d = 9223372036854775807
assert d instanceof Long

// Long.MAX_VALUE + 1
def e = 9223372036854775808
assert e instanceof BigInteger
```

对于负数：

```groovy
def na = -1
assert na instanceof Integer

// Integer.MIN_VALUE
def nb = -2147483648
assert nb instanceof Integer

// Integer.MIN_VALUE - 1
def nc = -2147483649
assert nc instanceof Long

// Long.MIN_VALUE
def nd = -9223372036854775808
assert nd instanceof Long

// Long.MIN_VALUE - 1
def ne = -9223372036854775809
assert ne instanceof BigInteger
```

#### 5.1.1 其他进制

数字也可以用二进制、八进制、十六进制和十进制来表示。

##### 二进制

二进制数字以`0b`前缀开始：

```groovy
int xInt = 0b10101111
assert xInt == 175

short xShort = 0b11001001
assert xShort == 201 as short

byte xByte = 0b11
assert xByte == 3 as byte

long xLong = 0b101101101101
assert xLong == 2925l

BigInteger xBigInteger = 0b111100100001
assert xBigInteger == 3873g

int xNegativeInt = -0b10101111
assert xNegativeInt == -175
```

##### 八进制

八进制以`0`作为前缀

```groovy
int xInt = 077
assert xInt == 63

short xShort = 011
assert xShort == 9 as short

byte xByte = 032
assert xByte == 26 as byte

long xLong = 0246
assert xLong == 166l

BigInteger xBigInteger = 01111
assert xBigInteger == 585g

int xNegativeInt = -077
assert xNegativeInt == -63
```

##### 十六进制

十六进制以`0x`作为前缀

```groovy
int xInt = 0x77
assert xInt == 119

short xShort = 0xaa
assert xShort == 170 as short

byte xByte = 0x3a
assert xByte == 58 as byte

long xLong = 0xffff
assert xLong == 65535l

BigInteger xBigInteger = 0xaaaa
assert xBigInteger == 43690g

Double xDouble = new Double('0x1.0p0')
assert xDouble == 1.0d

int xNegativeInt = -0x77
assert xNegativeInt == -119
```

### 5.2 小数

小数类型与 Java 中相同：

- `floagt`
- `double`
- `java.lang.BigDecimal`

你可以通过以下声明创建这些类型的小数：

```groovy
// primitive types
float  f = 1.234
double d = 2.345

// infinite precision
BigDecimal bd =  3.456
```

小数可以使用指数表达，指数字母为`e`或`E`，后面是正负号（可选），再跟着一个代表指数的整数：

```groovy
assert 1e3  ==  1_000.0
assert 2E4  == 20_000.0
assert 3e+1 ==     30.0
assert 4E-2 ==      0.04
assert 5e-1 ==      0.5
```

为了方便进行精确的小数计算，Groovy 选用`java.lang.BigDecimal`作为其十进制数类型。此外，`float`和`double`都被支持，但需要明确的类型声明、类型强转或使用[类型后缀](./### 5.4 数字类型后缀)。即使`BigDecimal`是十进制数的默认类型，在采用`float`或 `double`作为参数类型的方法或闭包中，也可以接受这种类型。

小数不能用二进制、八进制或十六进制表示。

### 5.3 下划线

在写长的文字数字时，眼睛比较难看出一些数字是如何分组的。可以在数字字面量中通过下划线`_`来进行区分：

```groovy
long creditCardNumber = 1234_5678_9012_3456L
long socialSecurityNumbers = 999_99_9999L
double monetaryAmount = 12_345_132.12
long hexBytes = 0xFF_EC_DE_5E
long hexWords = 0xFFEC_DE5E
long maxLong = 0x7fff_ffff_ffff_ffffL
long alsoMaxLong = 9_223_372_036_854_775_807L
long bytes = 0b11010010_01101001_10010100_10010010
```

### 5.4 数字类型后缀

我们可以通过给出一个后缀（见下表）来强制一个数字（包括二进制、八进制和十六进制）有一个特定的类型（后缀不区分大小写）。

| 类型       | 后缀     |
| ---------- | -------- |
| BigInteger | `G`或`g` |
| Long       | `L`或`l` |
| Integer    | `I`或`i` |
| BigDecimal | `G`或`g` |
| Double     | `D`或`d` |
| Float      | `F`或`f` |

举例：

```groovy
assert 42I == new Integer('42')
assert 42i == new Integer('42') // lowercase i more readable
assert 123L == new Long("123") // uppercase L more readable
assert 2147483648 == new Long('2147483648') // Long type used, value too large for an Integer
assert 456G == new BigInteger('456')
assert 456g == new BigInteger('456')
assert 123.45 == new BigDecimal('123.45') // default BigDecimal type used
assert 1.200065D == new Double('1.200065')
assert 1.234F == new Float('1.234')
assert 1.23E23D == new Double('1.23E23')
assert 0b1111L.class == Long // binary
assert 0xFFi.class == Integer // hexadecimal
assert 034G.class == BigInteger // octal
```

### 5.5 数学运算

虽然后面会讲到[运算符](http://www.groovy-lang.org/syntax.html#_operators)，但讨论数学运算的行为以及它们的结果类型是什么很重要。

除法和幂运算暂不介绍（后文将介绍）。

- 在`byte`、`char`、`short`和`int`之间进行二元运算的结果是`int`
- 在`long`与`byte`、`char`、`short`和`int`之间进行二元运算的结果是`long`
- 在`BigInteger`和任何其他整数类型的二元运算结果是`BigInteger`
- 涉及`BigDecimal`的二元运算，有`byte`、`char`、`short`、`int`和`BigInteger`，结果是`BigDecimal`
- 在`float`、`double`和`BigDecimal`之间进行二元运算，结果是`double`
- 两个`BigDecimal`之间的二元运算结果为`BigDecimal`

下表概述了这些规则：

|            | byte | char | short | int  | long | BigInteger | float  | double | BigDecimal |
| ---------- | ---- | ---- | ----- | ---- | ---- | ---------- | ------ | ------ | ---------- |
| byte       | int  | int  | int   | int  | long | BigInteger | double | double | BigDecimal |
| char       |      | int  | int   | int  | long | BigInteger | double | double | BigDecimal |
| short      |      |      | int   | int  | long | BigInteger | double | double | BigDecimal |
| int        |      |      |       | int  | long | BigInteger | double | double | BigDecimal |
| long       |      |      |       |      | long | BigInteger | double | double | BigDecimal |
| BigInteger |      |      |       |      |      | BigInteger | double | double | BigDecimal |
| float      |      |      |       |      |      |            | double | double | double     |
| double     |      |      |       |      |      |            |        | double | double     |
| BigDecimal |      |      |       |      |      |            |        |        | BigDecimal |

由于 Groovy 的运算符重载，通常的算术运算符在`BigInteger`和`BigDecimal`中也能很好地工作，不像在 Java 中，你必须使用显式方法调用对这些数字进行操作。

#### 5.5.1 除法运算

如果操作数是`float`或`double`，除法运算符`/`（和`/=`用于除法和赋值）会产生一个`double`结果，否则会产生一个`BigDecimal`结果（当两个操作数都是`short`、`char`、`byte`、`int`、`long`、`BigInteger`或`BigDecimal`类型的任意组合）。

如果除法是精确的（即产生的结果可以在相同精度和比例的范围内表示），或者使用`MathContext`，[精度](http://docs.oracle.com/javase/7/docs/api/java/math/BigDecimal.html#precision())为两个操作数精度的最大值加上一个额外的10的精度，[比例](http://docs.oracle.com/javase/7/docs/api/java/math/BigDecimal.html#scale())为10的最大值和操作数比例的最大值，则使用`divide()`方法进行`BigDecimal`除法。

对于像 Java 中的整数除法，你应该使用`intdiv()`方法，因为 Groovy 没有提供专门的整数除法运算符符号。

#### 5.5.2 幂运算

幂运算用`**`运算符表示，有两个参数：基数和指数。幂运算的结果取决于它的操作数和运算结果（特别是如果结果可以用积分值表示）。

Groovy 的幂运算使用以下规则来确定结果类型：

- 如果指数是小数
  - 如果结果可以用`Integer`表示，则返回一个`Integer`
  - 否则，如果结果可以用`Long`表示，则返回一个`Long`
  - 否则返回一个`Double`
- 如果指数是整数
  - 如果指数是严格的负数，那么返回一个`Integer`、`Long`或`Double`（如果结果值适合该类型）
  - 如果指数是正数或零
    - 如果基数是`BigDecimal`，则返回一个`BigDecimal`结果值
    - 如果基数是`BigInteger`，则返回一个`BigInteger`结果值
    - 如果基数是一个`Integer`，那么如果结果值适合，则返回一个`Integer`，否则返回一个`BigInteger`
    - 如果基数是`Long`，结果合适的话，则返回一个`Long`，否则返回一个`BigInteger`

我们可以用几个例子来说明这些规则：

```groovy
// base and exponent are ints and the result can be represented by an Integer
assert    2    **   3    instanceof Integer    //  8
assert   10    **   9    instanceof Integer    //  1_000_000_000

// the base is a long, so fit the result in a Long
// (although it could have fit in an Integer)
assert    5L   **   2    instanceof Long       //  25

// the result can't be represented as an Integer or Long, so return a BigInteger
assert  100    **  10    instanceof BigInteger //  10e20
assert 1234    ** 123    instanceof BigInteger //  170515806212727042875...

// the base is a BigDecimal and the exponent a negative int
// but the result can be represented as an Integer
assert    0.5  **  -2    instanceof Integer    //  4

// the base is an int, and the exponent a negative float
// but again, the result can be represented as an Integer
assert    1    **  -0.3f instanceof Integer    //  1

// the base is an int, and the exponent a negative int
// but the result will be calculated as a Double
// (both base and exponent are actually converted to doubles)
assert   10    **  -1    instanceof Double     //  0.1

// the base is a BigDecimal, and the exponent is an int, so return a BigDecimal
assert    1.2  **  10    instanceof BigDecimal //  6.1917364224

// the base is a float or double, and the exponent is an int
// but the result can only be represented as a Double value
assert    3.4f **   5    instanceof Double     //  454.35430372146965
assert    5.6d **   2    instanceof Double     //  31.359999999999996

// the exponent is a decimal value
// and the result can only be represented as a Double value
assert    7.8  **   1.9  instanceof Double     //  49.542708423868476
assert    2    **   0.1f instanceof Double     //  1.0717734636432956
```

## 6. Boolean

布尔型是一种特殊的数据类型，用于表示真值：`true`和`false`。使用这种数据类型来追踪真/假[条件](布尔型是一种特殊的数据类型，用于表示真值：真和假。使用这种数据类型来追踪真/假条件的简单标志。)的简单标志。

布尔值可以存储在变量中，指定到字段中，就像任何其他数据类型一样：

```groovy
def myBooleanVariable = true
boolean untypedBooleanVar = false
booleanField = true
```

`true`和`false`是唯一的两个原始布尔值。但更复杂的布尔表达式可以用[逻辑运算符](http://www.groovy-lang.org/syntax.html#_bitwise_and_logical_operators)来表示。

此外，Groovy 有[特殊的规则](https://docs.groovy-lang.org/latest/html/documentation/core-semantics.html#Groovy-Truth)（通常被称为 Groovy Truth ），用于将非布尔对象转换为布尔值。

## 7. List

Groovy 使用逗号分隔 List 的值，并用方括号括起来。Groovy 的 List 是 `java.util.List`，因为Groovy没有定义自己的集合类。在定义 List 变量时使用的具体列表实现默认是`java.util.ArrayList`，除非你另行指定（后面会介绍）。

```groovy
def numbers = [1, 2, 3]          // 注释 1   

assert numbers instanceof List   // 注释 2
assert numbers.size() == 3       // 注释 3
```

- 注释 1 ：以逗号为分隔符，并用方括号括起来定义一个 List，并将该 List 赋值到一个变量中
- 注释 2 ：该 List 是 Java 的 `java.util.List`接口的一个实例
- 注释 3 ：List 的长度可以用`size()`方法查询，显示该 List 包含3个元素

在上面的例子中，我们使用的是元素类型相同的列表，你也可以创建元素类型不同的列表：

```groovy
def heterogeneous = [1, "a", true]   // 注释 1
```

- 注释 1 ：	该 List 中包含一个数字、一个字符串和一个布尔值

上文提到，在默认情况下，List 实际上是`java.util.ArrayList`的实例，但可以使用`as`操作符实现类型强转，或者进行显式类型声明，都可以让 List 支持不同的类型：

```groovy
def arrayList = [1, 2, 3]
assert arrayList instanceof java.util.ArrayList

def linkedList = [2, 3, 4] as LinkedList    // 注释 1
assert linkedList instanceof java.util.LinkedList

LinkedList otherLinked = [3, 4, 5]          // 注释 2        
assert otherLinked instanceof java.util.LinkedList
```

- 注释 1 ：使用`as`操作符将类型强转为`java.util.LinkedList`
- 注释 2 ：显示声明类型为 `LinkedList`

你可以用`[]`下标操作符访问列表中的元素（无论是读值还是设值），负数表示从列表末尾访问元素。也可以用范围来访问，并使用`<<`左移操作符将元素追加到列表中：

```groovy
def letters = ['a', 'b', 'c', 'd']

assert letters[0] == 'a'     // 注释 1
assert letters[1] == 'b'

assert letters[-1] == 'd'    // 注释 2
assert letters[-2] == 'c'

letters[2] = 'C'             // 注释 3
assert letters[2] == 'C'

letters << 'e'               // 注释 4
assert letters[ 4] == 'e'
assert letters[-1] == 'e'

assert letters[1, 3] == ['b', 'd']         // 注释 5
assert letters[2..4] == ['C', 'd', 'e']    // 注释 6
```

- 注释 1 ：访问列表的第一个元素(从 0 开始)
- 注释 2 ：访问列表的最后一个元素。-1 表示列表最后一个元素
- 注释 3 ：为列表的第三个元素设置一个新的值
- 注释 4 ：使用`<<`左移操作符在列表末尾添加一个元素
- 注释 5 ：同时访问两个元素，返回一个包含这两个元素的新列表
- 注释 6 ：使用一个范围从列表中访问一个范围的值，从开始到结束的元素位置

由于列表可以是异构的，所以列表也可以包含其他列表，以创建多维列表：

```groovy
def multi = [[0, 1], [2, 3]]     // 注释 1
assert multi[1][0] == 2          // 注释 2 
```

- 注释 1 ：定义一个嵌套的数字列表
- 注释 2 ：访问最外层列表的第二个元素的第一个元素

## 8. Arrays

Groovy 为定义数组也是使用和 List 一样的中括号和逗号，但要使它成为数组而不是列表，需要通过强制类型转换或显式类型声明来明确定义数组的类型。

```groovy
String[] arrStr = ['Ananas', 'Banana', 'Kiwi']  // 注释 1

assert arrStr instanceof String[]    // 注释 2
assert !(arrStr instanceof List)

def numArr = [1, 2, 3] as int[]      // 注释 3

assert numArr instanceof int[]       // 注释 4
assert numArr.size() == 3
```

- 注释 1：使用显式类型声明定义数组
- 注释 2：断言``arrStr`是一个 String 数组
- 注释 3：使用 `as`操作符创建一个数组
- 注释 4：断言`numArr`是一个 int 数组

你也可以创建多维数组：

```groovy
def matrix3 = new Integer[3][3]   // 注释 1      
assert matrix3.size() == 3

Integer[][] matrix2               // 注释 2
matrix2 = [[1, 2], [3, 4]]
assert matrix2 instanceof Integer[][]
```

- 注释 1：你可以定义一个数组的大小
- 注释 2：也可以不指定数组大小

访问数组元素的方法与访问列表的方法相同：

```groovy
String[] names = ['Cédric', 'Guillaume', 'Jochen', 'Paul']
assert names[0] == 'Cédric' // 注释 1    

names[2] = 'Blackdrag'      // 注释 2
assert names[2] == 'Blackdrag'
```

- 注释 1：访问数组的第一个元素
- 注释 2：给数组的第三个元素设置一个新值

Groovy 不支持使用大括号初始化数组，因为大括号会和 Groovy 的闭包产生歧义。

### 8.1  Java 风格的数组初始化

Groovy 一直支持使用方括号定义列表和数组，并避免使用 Java 风格的大括号，以免与闭包定义冲突。然而，如果大括号紧跟在数组类型声明之后，则不会与闭包定义产生歧义，所以现在也支持用 Java 风格的方式定义数组。

举个栗子：

```groovy
def primes = new int[] {2, 3, 5, 7, 11}
assert primes.size() == 5 && primes.sum() == 28
assert primes.class.name == '[I'

def pets = new String[] {'cat', 'dog'}
assert pets.size() == 2 && pets.sum() == 'catdog'
assert pets.class.name == '[Ljava.lang.String;'

// traditional Groovy alternative still supported
String[] groovyBooks = [ 'Groovy in Action', 'Making Java Groovy' ]
assert groovyBooks.every{ it.contains('Groovy') }
```

## 9. Maps

在其他语言中有时也叫字典或关联数组，Groovy 将其称作 Map。Map 将 Key 与 Value 关联起来，用冒号分隔 Key 和 Value ，每个 key/value 对用逗号分隔，整个键和值用方括号包围。

```groovy
def colors = [red: '#FF0000', green: '#00FF00', blue: '#0000FF']   // 注释 1

assert colors['red'] == '#FF0000'    // 注释 2
assert colors.green  == '#00FF00'    // 注释 3

colors['pink'] = '#FF00FF'           // 注释 4
colors.yellow  = '#FFFF00'           // 注释 5

assert colors.pink == '#FF00FF'
assert colors['yellow'] == '#FFFF00'

assert colors instanceof java.util.LinkedHashMap
```

- 注释 1：定义一个颜色名称和色值对应的 Map
- 注释 2：在中括号填入 key 来访问与其相关联的值
- 注释 3：使用`.`操作符访问与 key 相关联的值
- 注释 4：使用方括号来设置值
- 注释 5：使用`.`操作符设置值

上面的例子中使用 key 时，实际上是在 Map 中定义的是字符串类型的 key

Groovy 创建的 Map 实际上是`java.util.LinkedHashMap`的实例。

如果你尝试访问一个 Map 中不存在的 key 时：

```groovy
assert colors.unknown == null
```

你会得到一个`null`

在上面的例子中，我们使用了字符串类型的 key，你也可以使用其他类型的值作为 key

```groovy
def numbers = [1: 'one', 2: 'two']

assert numbers[1] == 'one'
```

在这里，我们使用 Number 类型的值作为 key ，因为 Number 可以确切地被识别为数字，所以 Groovy 不会像我们之前的例子那样创建一个字符串类型的 key。如果你想传递一个变量来代替 key，让这个变量的值成为 key：

```groovy
def key = 'name'
def person = [key: 'Guillaume']      // 注释 1

assert !person.containsKey('name')   // 注释 2
assert person.containsKey('key')     // 注释 3
```

- 注释 1：这里的`key`实际上是一个字符串`key`，而不是变量`key`的值
- 注释 2：这个 Map 没有 `name`这个key
- 注释 3：相反，这个 Map 包含一个值为`"key"`的key

你也可以传递带引号的字符串作为 key：["name": "Guillaume"]. 如果你传递的作为 key 的字符串不是一个有效的标识符，就必须加上引号。例如，你想创建一个包含哈希值的字符串类型的 key，比如：["street-name": "Guillaume"]

当你需要在 Map 中传递变量值作为 key 时，你必须用小括号将变量或表达式括起来：

```groovy
person = [(key): 'Guillaume']        // 注释 1

assert person.containsKey('name')    // 注释 2
assert !person.containsKey('key')    // 注释 3
```

- 注释 1：用小括号将 key 括起来，以指示解析器我们传递的是一个变量，而不是定义一个字符串 key
- 注释 2：Map 中值 `"name"`的 key
- 注释 3：Map 中没有值为`"key"`的 key





