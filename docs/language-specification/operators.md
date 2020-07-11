本章将介绍 Groovy 编程语言的运算符。

## 1. 算术运算符

Groovy 支持数学运算符和其他编程语言（如 Java ）中常见的算术运算符，支持 Java 所有的算术运算符。让我们通过下面的例子来了解它们。

### 1.1 普通算术运算符

下表是 Groovy 中可用的二元运算符

| 运算符 | 含义   | 备注                                                         |
| ------ | ------ | ------------------------------------------------------------ |
| `+`    | 加法   |                                                              |
| `-`    | 减法   |                                                              |
| `*`    | 乘法   |                                                              |
| `/`    | 除法   | 如果是整数除法请使用`intdiv()`。关于除法的返回类型，请参见关于[整数除法](./syntax.html#_5-5-数学运算)的章节。 |
| `%`    | 取模   |                                                              |
| `*`    | 幂运算 | 更多细节，请查看[幂运算](./syntax.html#_5-5-数学运算)        |

下面是一些使用运算符的例子：

```groovy
assert  1  + 2 == 3
assert  4  - 3 == 1
assert  3  * 5 == 15
assert  3  / 2 == 1.5
assert 10  % 3 == 1
assert  2 ** 3 == 8
```

### 1.2 一元运算符

`+`和`-`也可以作为一元运算符

```groovy
assert +3 == 3
assert -4 == 0 - 4

assert -(-1) == 1 // 注释 1
```

注意使用括号将表达式括起来，以便一元运算符`-`可以生效。

一元运算符还包括`++`（自增）和`--`（自减），放在变量之前或之后都可以：

```groovy
def a = 2
def b = a++ * 3             // 注释 1

assert a == 3 && b == 6

def c = 3
def d = c-- * 2             // 注释 2

assert c == 2 && d == 6

def e = 1
def f = ++e + 3             // 注释 3

assert e == 2 && f == 5

def g = 4
def h = --g + 1             // 注释 4

assert g == 3 && h == 4
```

- 注释 1：当`++`在变量之后时，整个表达式被计算之后`a`才会自增
- 注释 2：当`--`在变量之后时，整个表达式被计算之后`a`才会自减
- 注释 3：当`++`在变量之前时，整个表达式被计算之前`a`就会自增
- 注释 4：当`--`在变量之前时，整个表达式被计算之前`a`就会自减

### 1.3 赋值算术运算符

上面我们看到的二元算术运算符也有赋值形式：

- `+=`
- `-=`
- `*=`
- `/=`
- `%=`
- `**=`

下面看些例子：

```groovy
def a = 4
a += 3

assert a == 7

def b = 5
b -= 3

assert b == 2

def c = 5
c *= 3

assert c == 15

def d = 10
d /= 2

assert d == 5

def e = 10
e %= 3

assert e == 1

def f = 3
f **= 2

assert f == 9
```

## 2. 关系运算符

关系运算符允许在对象之间进行比较，知道两个对象是相同还是不同，或者一个大于、小于或等于另一个。

下表是可用的操作符：

| 运算符 | 比较目的                        |
| ------ | ------------------------------- |
| `==`   | 相等                            |
| `!=`   | 不等                            |
| `<`    | 小于                            |
| `<=`   | 小于等于                        |
| `>`    | 大于                            |
| `>=`   | 大于等于                        |
| `===`  | 严格相等（Groovy 3.0.0 后支持） |
| `!==`  | 严格不等（Groovy 3.0.0 后支持） |

下面是一些使用这些运算符进行简单数字比较的例子：

```groovy
assert 1 + 2 == 3
assert 3 != 4

assert -2 < 3
assert 2 <= 2
assert 3 <= 4

assert 5 > 1
assert 5 >= -2
```

` ===` 和 `!==` ，与调用 is() 方法和否定调用 is() 方法效果相同。

```groovy
import groovy.transform.EqualsAndHashCode

@EqualsAndHashCode
class Creature { String type }

def cat = new Creature(type: 'cat')
def copyCat = cat
def lion = new Creature(type: 'cat')

assert cat.equals(lion) // Java 逻辑判等
assert cat == lion      // Groovy 快速判等

assert cat.is(copyCat)  // Groovy 特有的判等
assert cat === copyCat  // 快速判等
assert cat !== lion     // 快速判不等
```

## 3. 逻辑运算符

Groovy 为布尔表达式提供了三种逻辑运算符：

- `&&`：逻辑与
- `||`：逻辑或
- `!`：逻辑非

我们用下面的例子来说明：

```groovy
assert !false           // 注释 1
assert true && true     // 注释 2
assert true || false    // 注释 3
```

- 注释 1：true
- 注释 2：true
- 注释 3：true

### 3.1 优先级

逻辑非`!`的优先级高于逻辑与`&&`。

```groovy
assert (!false && false) == false // 注释 1
```

- 注释 1：这里断言为 `true`（括号里的表达式为`false`），因为`!`的优先级高于`&&`，所以`!`只作用于第一个`false`。

逻辑与`&&`的优先级高于逻辑或`||`。

```groovy
assert true || true && false  // 注释 1
```

- 注释 1：这里断言为`true`，因为逻辑与`&&`的优先级高于逻辑或`||`，所以`||`最后执行，返回`true`.

### 3.2 短路

逻辑或`||`操作符支持短路：如果左操作数为`true`，它知道结果在任何情况下都会为`true`，**所以它不会对右操作数进行计算。只有当左操作数为假时，才会对右操作数进行计算。**

同样，对于逻辑与`&&`操作符来说，如果左操作数为`false`，它知道在任何情况下结果都是`false`的，所以它不会计算右操作数。只有当左操作数为`true`时，才会对右操作数进行计算。

```groovy
boolean checkIfCalled() {   // 注释 1
    called = true
}

called = false
true || checkIfCalled()
assert !called              // 注释 2

called = false
false || checkIfCalled()
assert called               // 注释 3

called = false
false && checkIfCalled()
assert !called              // 注释 4

called = false
true && checkIfCalled()
assert called               // 注释 5
```

- 注释 1：创建一个函数，每当被调用时就将`called`的值设置为`true`
- 注释 2：逻辑或`||`的左操作数为`true`，则`checkIfCalled()`函数不会被调用，因为逻辑或`||`会使右操作数的计算短路。
- 注释 3：逻辑或`||`的左操作数为`false`，则`checkIfCalled()`函数会被调用
- 注释 4：逻辑与`&&`的左操作数为`false`，则`checkIfCalled()`函数不会被调用，最终结果肯定为`false`
- 注释 5：逻辑与`&&`的左操作数为`true`，则`checkIfCalled()`函数会被调用

## 4. 位运算

Groovy 提供了 4 种位运算符：

- `&`：按位与
- `|`：按位或
- `^`：按位异或
- `~`：按位非

位运算符作用于`byte`或`int`并返回一个`int`：

```groovy
int a = 0b00101010
assert a == 42
int b = 0b00001000
assert b == 8
assert (a & a) == a                     // 注释 1
assert (a & b) == b                     // 注释 2
assert (a | a) == a                     // 注释 3
assert (a | b) == a                     // 注释 4

int mask = 0b11111111                   // 注释 5
assert ((a ^ a) & mask) == 0b00000000   // 注释 6
assert ((a ^ b) & mask) == 0b00100010   // 注释 7
assert ((~a) & mask)    == 0b11010101   // 注释 8
```

- 注释 1：按位与
- 注释 2：按位与并返回公共位
- 注释 3：按位或
- 注释 4：按位或并返回所有为 `1` 的位
- 注释 5：设置一个掩码，只检查最后 8 位
- 注释 6：按位异或
- 注释 7：按位异或
- 注释 8：按位非

值得注意的是，基元类型的内部表示遵循 [Java 语言规范](http://docs.oracle.com/javase/specs/jls/se8/html/jls-4.html)。特别是，基元类型是有符号的，这意味着对于按位非，使用掩码只检索必要的位总是好的。

在 Groovy 中，位运算符具有[可重载](http://groovy-lang.org/operators.html#Operator-Overloading)的特性，这意味着你可以为任何类型的对象定义这些运算符的行为。

## 5. 条件运算符

### 5.1 非运算符

非运算符使用`!`表示，可以反转布尔表达式的结果。特别是可以将非运算符与 [Groovy truth](https://docs.groovy-lang.org/latest/html/documentation/core-semantics.html#Groovy-Truth)结合使用：

```groovy
assert (!true)    == false                      // 注释 1
assert (!'foo')   == false                      // 注释 2
assert (!'')      == true                       // 注释 3
```

- 注释 1：`true`的否定是`false`
- 注释 2：`'foo'`不是一个空字符串，布尔计算结果为`true`，所以加上`!`后返回`false`
- 注释 3：`''`是一个空字符串，布尔计算结果为`false`，所以加上`!`后返回`true`

### 5.2 三元运算符

三元运算符是一个快捷表达式，相当于一个 if/else 分支，将一些值分配给一个变量。

可以取代这样的代码：

```groovy
if (string!=null && string.length()>0) {
    result = 'Found'
} else {
    result = 'Not found'
}
```

你可以这样写：

```groovy
result = (string!=null && string.length()>0) ? 'Found' : 'Not found'
```

三元表达式也兼容 [Groovy truth](https://docs.groovy-lang.org/latest/html/documentation/core-semantics.html#Groovy-Truth)，所以你可以让他更简单：

```groovy
result = string ? 'Found' : 'Not found'
```

### 5.3 Elvis 运算符

Elvis 运算符是三元运算符的简短表达。其中一个方便的例子是：当一个表达式解析为`false`时（如 [Groovy truth](https://docs.groovy-lang.org/latest/html/documentation/core-semantics.html#Groovy-Truth)）。如下是一个简单的例子：

```groovy
displayName = user.name ? user.name : 'Anonymous'   // 注释 1
displayName = user.name ?: 'Anonymous'              // 注释 2
```

- 注释 1：使用三元运算符，你必须重复你要指定的值
- 注释 2：使用 Elvis 运算符，当被测试的值不为`false`时，`?:`后的值就会被使用

使用 Elvis 操作符让代码不那么啰嗦，并降低了重构时出错的风险，因为不需要在条件和正向返回值中重复测试表达式。

### 5.4 Elvis 指定运算符

Groovy 3.0.0 引入了 Elvis 运算符，例子如下：

```groovy
import groovy.transform.ToString

@ToString
class Element {
    String name
    int atomicNumber
}

def he = new Element(name: 'Helium')
he.with {
    name = name ?: 'Hydrogen'   // 旧的 Elvis 运算符
    atomicNumber ?= 2           // Elvis 指定运算符更简洁
}
assert he.toString() == 'Element(Helium, 2)'
```

## 6. 对象操作符

### 6.1 安全导航操作符

安全导航操作符可以避免`NullPointerException`。通常情况下，当你有一个引用对象时，你可能需要在访问该对象的方法或属性之前验证它是否为`null`。为了避免这种情况，安全导航操作符将简单地返回`null`，而不是抛出异常，就像这样：

```groovy
def person = Person.find { it.id == 123 }    // 注释 1
def name = person?.name                      // 注释 2
assert name == null                          // 注释 3
```

- 注释 1：`find`将会返回`null`
- 注释 2：使用`null`安全的操作符防止`NullPointerException`
- 注释 3：返回`null`

### 6.2 直接字段访问操作符

通常在 Groovy 中，你写的代码像这样：

```groovy
class User {
    public final String name                 
    User(String name) { this.name = name}
    String getName() { "Name: $name" }       
}
def user = new User('Bob')
assert user.name == 'Name: Bob'              
```

- 公共变量`name`
- 一个返回自定字符串的对于`name`的`getter`方法
- 调用 getter 方法

user.name 的调用会触发对同名属性的调用，也就是说，这里是对 `name` 的 getter 的调用。如果你想检索字段而不是调用 getter，你可以使用直接字段访问操作符：

```groovy
assert user.@name == 'Bob'                   // 注释 1
```

- 注释 1：使用`.@`替代 getter 直接访问变量

### 6.3 方法指针操作符

方法指针操作符(`.&`)可以用来在变量中存储对方法的引用，以便以后调用它：

```groovy
def str = 'example of method reference'            // 注释 1
def fun = str.&toUpperCase                         // 注释 2
def upper = fun()                                  // 注释 3
assert upper == str.toUpperCase()                  // 注释 4
```

- `str`是一个`String`类型的变量
- 我们将对`str`实例的`toUpperCase`方法的引用存储在一个名为`fun`的变量中
- `fun`可以像普通方法一样被调用
- 我们可以检查结果是否与直接调用`str`相同

使用方法指针有多种优势。首先，这种方法指针的类型是`groovy.lang.Closure`，所以它可以用在任何会用到闭包的地方。特别是，它适合于转换一个现有的方法以满足策略模式的需要：

```groovy
def transform(List elements, Closure action) {                    // 注释 1
    def result = []
    elements.each {
        result << action(it)
    }
    result
}
String describe(Person p) {                                       // 注释 2
    "$p.name is $p.age"
}
def action = this.&describe                                       // 注释 3
def list = [
    new Person(name: 'Bob',   age: 42),
    new Person(name: 'Julia', age: 35)]                           // 注释 4
assert transform(list, action) == ['Bob is 42', 'Julia is 35']    // 注释 5
```

- 注释 1：`transform`方法获取列表中的每一个元素，并对其调用`action`闭包，返回一个新的 list
- 注释 2：定义一个函数，接受一个`Person`并返回一个字符串
- 注释 3：在该函数上创建一个方法指针
- 注释 4：我们创建我们想要收集描述符的元素列表
- 注释 5：方法指针可以用在需要使用`Closure`的地方

方法指针是通过接收器和方法名绑定的。参数是在运行时解析的，也就是说，如果你有多个同名的方法，语法并没有什么不同，只是在运行时解析相应的被调用的方法。

```groovy
def doSomething(String str) { str.toUpperCase() }    // 注释 1
def doSomething(Integer x) { 2*x }                   // 注释 2
def reference = this.&doSomething                    // 注释 3
assert reference('foo') == 'FOO'                     // 注释 4
assert reference(123)   == 246                       // 注释 5
```

- 注释 1：定义一个重载的`doSomething`方法，接受一个`String`作为参数。
- 注释 2：定义一个重载的`doSomething`方法，接受一个`Integer`作为参数。
- 注释 3：在`doSomething`上创建一个方法指针，而不指定参数类型。
- 注释 4：使用带有`String`的方法指针调用`String`的`doSomething`
- 注释 5：使用带有`Integer`的方法指针调用`Integer`的`doSomething`

为了与 Java 8 方法引用的期望保持一致，在 Groovy 3 及以上版本中，你可以使用new作为方法名来获取构造函数的方法指针：

```groovy
def foo  = BigInteger.&new
def fortyTwo = foo('42')
assert fortyTwo == 42G
```

同样在Groovy 3及以上版本中，你可以获得一个方法指针，指向一个类的实例方法。这个方法指针需要一个额外的参数，就是要调用该方法的接收器实例：

```groovy
def instanceMethod = String.&toUpperCase
assert instanceMethod('foo') == 'FOO'
```

为了向后兼容，在这种情况下，任何静态方法如果恰好有正确的调用参数，将优先于实例方法。

### 6.4 方法引用操作符

​	Groovy 3+ 中的 Parrot 解析器支持 Java 8+ 方法引用操作符。方法引用运算符(`::`)可用于在期望功能接口的上下文中引用一个方法或构造函数，这与 Groovy 的方法指针运算符提供的功能有些重叠。事实上，对于动态 Groovy 来说，方法引用操作符只是方法指针操作符的别名。对于静态 Groovy 来说，该操作符产生的字节码与 Java 在相同上下文中产生的字节码类似。

下面的脚本中显示了一些例子，突出了各种支持的方法参考案例：

```groovy
import groovy.transform.CompileStatic
import static java.util.stream.Collectors.toList

@CompileStatic
void methodRefs() {
    assert 6G == [1G, 2G, 3G].stream().reduce(0G, BigInteger::add)                           // 注释 1
    assert [4G, 5G, 6G] == [1G, 2G, 3G].stream().map(3G::add).collect(toList())              // 注释 2
    assert [1G, 2G, 3G] == [1L, 2L, 3L].stream().map(BigInteger::valueOf).collect(toList())  // 注释 3
    assert [1G, 2G, 3G] == [1L, 2L, 3L].stream().map(3G::valueOf).collect(toList())          // 注释 4
}

methodRefs()
```

- 注释 1：类实例方法引用：add(BigInteger val) 是 BigInteger 中的一个实例方法。
- 注释 2：对象实例方法引用：add(BigInteger val) 是对象 3G 的实例方法。
- 注释 3：类静态方法引用：valueOf(long val) 是类 BigInteger 的静态方法。
- 注释 4：对象静态方法引用：valueOf(long val) 是对象 3G 的静态方法(有人认为在正常情况下这种风格不好)

下面的脚本中显示了一些例子，突出了各种支持的构造函数引用情况：

```groovy
@CompileStatic
void constructorRefs() {
    assert [1, 2, 3] == ['1', '2', '3'].stream().map(Integer::new).collect(toList())  // 注释 1

    def result = [1, 2, 3].stream().toArray(Integer[]::new)                           // 注释 2
    assert result instanceof Integer[]
    assert result.toString() == '[1, 2, 3]'
}

constructorRefs()
```

- 注释 1：类构造方法引用
- 注释 2：数组狗仔方法引用

## 7. 正则表达式操作符

### 7.1 模式操作符

模式操作符`~`提供了一种简单的方法去创建`java.util.regex.Pattern`实例：

```groovy
def p = ~/foo/
assert p instanceof Pattern
```

虽然在一般情况下，你会发现模式操作符的表达式是在一个斜杠字符串`slashy-string`中，但在 Groovy 中它可以用于任何类型的`String`：

```groovy
p = ~'foo'                                                        // 注释 1
p = ~"foo"                                                        // 注释 2
p = ~$/dollar/slashy $ string/$                                   // 注释 3
p = ~"${pattern}"                                                 // 注释 4
```

- 注释 1：用于单引号字符串
- 注释 2：用于双引号字符串
- 注释 3：用于斜杠字符串
- 注释 4：也可以用于 `GString`

### 7.2 查找操作符

可以使用`find`操作符`=~`直接创建一个`java.util.regex.Matcher`实例：

```groovy
def text = "some text to match"
def m = text =~ /match/                                           // 注释 1
assert m instanceof Matcher                                       // 注释 2
if (!m) {                                                         // 注释 3
    throw new RuntimeException("Oops, text not found!")
}
```

- 注释 1：使用`=~`右侧的模式，针对`text`创建一个匹配器
- 注释 2：`=~`的返回类型是`Matcher`
- 注释 3：相当于调用`if (!m.find(0))`

由于`Matcher`通过调用它的`find`方法来转换到`boolean`，所以当它作为谓词出现时（在`if`、`?:`等中），`=~`操作符与Perl的`=~`操作符的简单使用是一致的。当意图是迭代指定模式的匹配时（在`while`等中），直接在匹配器上调用`find()`或使用`iterator`DGM。

### 7.3 匹配操作符

匹配操作符(`==~`)是查找操作符的一个细微变化，它不返回`Matcher`，而是返回一个 boolean，并且要求输入字符串严格匹配：

```groovy
m = text ==~ /match/                                              // 注释 1
assert m instanceof Boolean                                       // 注释 2
if (m) {                                                          // 注释 3
    throw new RuntimeException("Should not reach that point!")
}
```

- 注释 1：`==~`用正则表达式匹配主题，但必须严格匹配。
- 注释 2：`==~`的返回类型是`boolean`
- 注释 3：相当于调用`if (text ==~ /match/)`
















































