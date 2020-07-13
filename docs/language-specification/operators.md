---
sidebarDepth: 2
---

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

## 8. 其他操作符

### 8.1 展开操作符

展开操作符（`*.`），用于调用集合对象的所有项的操作。它相当于在每个项目上调用操作，并将结果收集到一个列表中：

```groovy
class Car {
    String make
    String model
}
def cars = [
       new Car(make: 'Peugeot', model: '508'),
       new Car(make: 'Renault', model: 'Clio')]       // 注释 1
def makes = cars*.make                                // 注释 2
assert makes == ['Peugeot', 'Renault']                // 注释 3
```

- 注释 1：建立一个列表（其中的一个元素为`null`）
- 注释 2：使用展开操作符`*.`将不会抛出`NullPointerException`
- 注释 3：接收器也可能为`null`，在这种情况下，返回值也为`null`

展开操作符可以用于任何实现了`Iterable`接口的类：

```groovy
class Component {
    Long id
    String name
}
class CompositeObject implements Iterable<Component> {
    def components = [
        new Component(id: 1, name: 'Foo'),
        new Component(id: 2, name: 'Bar')]

    @Override
    Iterator<Component> iterator() {
        components.iterator()
    }
}
def composite = new CompositeObject()
assert composite*.id == [1,2]
assert composite*.name == ['Foo','Bar']
```

在处理本身包含集合的集合时，可以多次使用展开运算符（此处为 cars\*.models\*.name）：

```groovy
class Make {
    String name
    List<Model> models
}

@Canonical
class Model {
    String name
}

def cars = [
    new Make(name: 'Peugeot',
             models: [new Model('408'), new Model('508')]),
    new Make(name: 'Renault',
             models: [new Model('Clio'), new Model('Captur')])
]

def makes = cars*.name
assert makes == ['Peugeot', 'Renault']

def models = cars*.models*.name
assert models == [['408', '508'], ['Clio', 'Captur']]
assert models.sum() == ['408', '508', 'Clio', 'Captur'] // flatten one level
assert models.flatten() == ['408', '508', 'Clio', 'Captur'] // flatten all levels (one in this case)
```

考虑对集合的集合使用`collectNested` DGM方法而不是展开操作符：

```groovy
class Car {
    String make
    String model
}
def cars = [
   [
       new Car(make: 'Peugeot', model: '408'),
       new Car(make: 'Peugeot', model: '508')
   ], [
       new Car(make: 'Renault', model: 'Clio'),
       new Car(make: 'Renault', model: 'Captur')
   ]
]
def models = cars.collectNested{ it.model }
assert models == [['408', '508'], ['Clio', 'Captur']]
```

#### 8.1.1 展开方法参数

可能会有这样的情况，当一个方法调用的参数可以在一个列表中找到，你需要适应方法参数。在这种情况下，你可以使用展开操作符来调用方法。例如，想象你有以下方法定义：

```groovy
int function(int x, int y, int z) {
    x*y+z
}
```

然后你有如下列表：

```groovy
def args = [4,5,6]
```

你可以在不定义中间变量的情况下调用该方法：

```groovy
assert function(*args) == 26
```

甚至可以把常规的参数和展开操作符混合在一起：

```groovy
args = [4]
assert function(*args,5,6) == 26
```

#### 8.1.2 展开 List 元素

在一个列表内使用展开操作符时，就像展开元素的内容被内嵌到列表中一样：

```groovy
def items = [4,5]                      // 注释 1
def list = [1,2,3,*items,6]            // 注释 2
assert list == [1,2,3,4,5,6]           // 注释 3
```

- 注释 1：`items`是一个`list`
- 注释 2：我们想把项目列表的内容直接插入到列表中，而不需要调用`addAll`
- 注释 3：`items`的内容已经被插入到`list`中

#### 8.1.3 展开 Map 元素

spread map 操作符的工作方式与 spread list 操作符类似，但适用于 map。它允许您将 map 的内容内嵌到另一个map 中，就像下面的例子：

```groovy
def m1 = [c:3, d:4]                   
def map = [a:1, b:2, *:m1]            
assert map == [a:1, b:2, c:3, d:4]    
```

- 注释 1：`m1`是我们想要插入的 map
- 注释 2：使用`*:m1`符号将`m1`的内容插入到 map 中
- 注释 3：`map`包含`m1`的所有元素

spread map 操作符的位置是有意义的，就像下面的例子中说明的那样：

```groovy
def m1 = [c:3, d:4]                   // 注释 1
def map = [a:1, b:2, *:m1, d: 8]      // 注释 2
assert map == [a:1, b:2, c:3, d:8]    // 注释 3
```

- 注释 1：`m1`是我们想要插入的 map
- 注释 2：我们使用`*:m1`符号将`m1`的内容展开到`map`中，但在展开后会键`d`会被重新定义
- 注释 3：`map`包含了所有预期的键，但`d`被重新定义了

### 8.2 范围操作符

Groovy 支持范围的概念，并提供了一个符号(`..`)来创建对象的范围：

```groovy
def range = 0..5                                    // 注释 1
assert (0..5).collect() == [0, 1, 2, 3, 4, 5]       // 注释 2
assert (0..<5).collect() == [0, 1, 2, 3, 4]         // 注释 3
assert (0..5) instanceof List                       // 注释 4
assert (0..5).size() == 6                           // 注释 5
```

- 注释 1：一个简单的整数范围，存储在一个局部变量中。
- 注释 2：一个包含边界的`IntRange`
- 注释 3：一个包含上边界的`IntRange`
- 注释 4：一个实现`List`接口的`groovy.lang.Range`
- 注释 5：可以调用`size`方法

Ranges 的实现是轻量级的，这意味着只存储下界和上界。你可以从任何具有`next()`和`forever()`方法的`Comparable`对象创建一个范围，以确定范围内的下一个/上一个项目。例如，你可以这样创建一个字符的范围：

```groovy
assert ('a'..'d').collect() == ['a','b','c','d']
```

### 8.3 宇宙飞船操作符

宇宙飞船操作符（`<=>`）委托给`compareTo`方法：

```groovy
assert (1 <=> 1) == 0
assert (1 <=> 2) == -1
assert (2 <=> 1) == 1
assert ('a' <=> 'z') == -1
```

### 8.4 下标操作符

下标操作符是`getAt`或`putAt`的简称，取决于你是在赋值操作符（`=`）的左边还是右边使用它：

```groovy
def list = [0,1,2,3,4]					
assert list[2] == 2                     // 注释 1
list[2] = 4                             // 注释 2
assert list[0..2] == [0,1,4]            // 注释 3
list[0..2] = [6,6,6]                    // 注释 4
assert list == [6,6,6,3,4]              // 注释 5
```

- 注释 1：`[2]`可以替代`getAt(2)`
- 注释 2：如果在赋值操作符的左边，将调用`putAt`
- 注释 3：`getAt`也支持范围
- 注释 4：`putAt`也一样
- 注释 5：list 已经改变

下标操作符结合`getAt`/`putAt`的可以实现一种方便的对象重构方式：

```groovy
class User {
    Long id
    String name
    def getAt(int i) {                                             // 注释 1
        switch (i) {
            case 0: return id
            case 1: return name
        }
        throw new IllegalArgumentException("No such element $i")
    }
    void putAt(int i, def value) {                                 // 注释 2
        switch (i) {
            case 0: id = value; return
            case 1: name = value; return
        }
        throw new IllegalArgumentException("No such element $i")
    }
}
def user = new User(id: 1, name: 'Alex')                           // 注释 3
assert user[0] == 1                                                // 注释 4
assert user[1] == 'Alex'                                           // 注释 5
user[1] = 'Bob'                                                    // 注释 6
assert user.name == 'Bob'                                          // 注释 7
```

- 注释 1：`User`类自定义了一个`getAt`实现
- 注释 2：`User`类自定义了一个`putAt`实现
- 注释 3：创建一个简单的 user
- 注释 4：使用索引为 0 的下标操作符可以访问 user id
- 注释 5：使用索引为 1 的下标操作符可以访问 user name
- 注释 6：可以使用下标操作符来写入一个属性，这是因为对`putAt`进行了重写
- 注释 7：检查 user 的 name 属性的真实值

### 8.5 安全索引操作符

Groovy 3.0.0 引入了安全索引操作符（`?[]`），类似于`?.`，举个例子：

```groovy
String[] array = ['a', 'b']
assert 'b' == array?[1]      // 使用普通的数组索引获取值
array?[1] = 'c'              // 使用普通的数组索引设置值
assert 'c' == array?[1]

array = null
assert null == array?[1]     // 所有索引值都会返回 null
array?[1] = 'c'              // 尝试设置值（静默操作，下标越界不会报错）
assert null == array?[1]

def personInfo = [name: 'Daniel.Sun', location: 'Shanghai']
assert 'Daniel.Sun' == personInfo?['name']      // 使用普通的 map key 获取值
personInfo?['name'] = 'sunlan'                  // 使用普通的 map key 设置值
assert 'sunlan' == personInfo?['name']

personInfo = null
assert null == personInfo?['name']              // 所有的 map key 都会返回 null
personInfo?['name'] = 'sunlan'                  // 尝试设置值（静默操作，key 不存在不会报错）
assert null == personInfo?['name']
```

### 8.6 成员操作符

成员操作符（`in`）相当于调用`isCase`方法。在 `List` 的上下文中，它相当于调用 `contains` 方法，就像下面的例子：

```groovy
def list = ['Grace','Rob','Emmy']
assert ('Emmy' in list)                     // 注释 1
```

- 注释 1：相当于调用`list.contains('Emmy')`或`list.isCase('Emmy')`

### 8.7 身份操作符

在 Groovy 中，使用 `==`来测试是否相等（与 Java 中是不同的），它会调用`equals`方法。如果你想比较的是内存地址是否相等（像 Java 中的那样），你应该使用`is`，像下面的例子这样：

```groovy
def list1 = ['Groovy 1.8','Groovy 2.0','Groovy 2.3']        // 注释 1
def list2 = ['Groovy 1.8','Groovy 2.0','Groovy 2.3']        // 注释 2
assert list1 == list2                                       // 注释 3
assert !list1.is(list2)                                     // 注释 4
```

- 注释 1：创建一个 String 列表
- 注释 2：再创建一个包含相同元素的 String 列表
- 注释 3：使用`==`测试出对象是相同的
- 注释 4：但是使用`is`判断出他们的内存地址是不用的

### 8.8 强制操作符

强制操作符（`as`）是类型转换的一种变体，强制操作符将对象从一种类型转换为另一种类型，并且不需要他们兼容赋值。让我们举个例子：

```groovy
Integer x = 123
String s = (String) x                    // 注释 1
```

- 注释 1：`Integer`不能赋值给`String`，所以它将在运行时产生一个`ClassCastException`

可以使用强制操作符来解决这个问题：

```groovy
Integer x = 123
String s = x as String       // 注释 1
```

- 注释 1：`Integer`不能赋值给`String`，但使用`as`会将其强制转换为一个`String`

当一个对象被强制转换成另一个对象时，除非目标类型与源类型相同，否则将返回一个新对象。根据源类型和目标类型的不同，转换的规则也不同，如果没有找到转换规则，转换可能会失败。`asType`方法可以实现自定义转换规则：

```groovy
class Identifiable {
    String name
}
class User {
    Long id
    String name
    def asType(Class target) {                                              // 注释 1
        if (target == Identifiable) {
            return new Identifiable(name: name)
        }
        throw new ClassCastException("User cannot be coerced into $target")
    }
}
def u = new User(name: 'Xavier')                                            // 注释 2
def p = u as Identifiable                                                   // 注释 3
assert p instanceof Identifiable                                            // 注释 4
assert !(p instanceof User)                                                 // 注释 5
```

- 注释 1：`User`类自定义了一个从`User`类转换到`Identifiable`类的规则
- 注释 2：创建`User`实例
- 注释 3：转换`User`到`Identifiable`
- 注释 4：`p`是一个`Identifiable`实例
- 注释 5：`p`不是一个`User`实例

### 8.9 钻石操作符

钻石运算符(`<>`)是仅有的一个语法糖运算符，以支持与 Java 7 中同名运算符的兼容性。它用来表示通用类型应该从声明中推断出来：

```groovy
List<String> strings = new LinkedList<>()
```

在动态 Groovy 中，这是不需要的。在静态类型检查的 Groovy 中，它也是可选的，因为无论这个操作符是否存在，Groovy 类型检查器都会执行类型推断。

### 8.10 调用操作符

调用操作符`()`用于隐式调用一个名为`call`的方法。对于任何定义了`call`方法的对象，可以省略`.call`部分，而使用调用操作符：

```groovy
class MyCallable {
    int call(int x) {           // 注释 1
        2*x
    }
}

def mc = new MyCallable()
assert mc.call(2) == 4          // 注释 2
assert mc(2) == 4               // 注释 3
```

- 注释 1：`MyCallable`定义了一个名为`call`的方法。注意，它不需要实现`java.util.concurrent.Callable`
- 注释 2：我们可以使用传统的方法调用语法调用它
- 注释 3：或者我们使用调用操作符

## 9. 操作符优先级

下表按顺序列出了所有groovy运算符：

| Level | Operator(s)                  | Name(s)                                      |
| ----- | ---------------------------- | -------------------------------------------- |
| 1     | `new` `()`                   | 对象创建，显式括号                           |
|       | `()` `{}` `[]`               | 方法调用，闭包，list/map 字面量              |
|       | `.` `.&` `.@`                | 成员访问，方法闭包，字段/属性访问            |
|       | `?.` `*` `*.` `*:`           | 安全解引用，展开方法参数，展开属性，map 展开 |
|       | `~` `!` `(type)`             | 按位非/模式操作符，非，类型转换              |
|       | `[]` `?[]` `++` `--`         | list/map/array （安全）索引，(post)自增/自减 |
| 2     | `**`                         | 指数运算                                     |
| 3     | `++` `--` `+` `-`            | （pre）自增/自减，一元加，一元减             |
| 4     | `*` `/` `%`                  | 乘，除，取模                                 |
| 5     | `+` `-`                      | 加，减                                       |
| 6     | `<<`  `>>`  `>>>`  `..`  `..<` | （无符号）左移/右移，范围 |
| 7 | `<`  `<=`  `>`  `>=`  `in`  `!in`  `instanceof`  `!instanceof`  `as` | 小于，小于等于，大于，大于等于，in，!in，判断类型，转换类型 |
| 8 | `==`  `!=`  `<=>`  `===`  `!==` | 等于，不等于，比较，严格等于，严格不等于 |
| 9 | `&` | 按位与 |
| 10 | `^` | 按位异或 |
| 11 | `|` | 按位或 |
| 12 | `&&` | 逻辑与 |
| 13 | `||` | 逻辑或 |
| 14 | `?:` | 三元运算 |
| 15 | `=`  `**=`  `*=`  `/=`  `%=`  `+=`  `-=`  `<<=`  `>>=`  `>>>=`  `&=`  `^=`  `|=`   `?=` | 赋值操作 |

## 10. 操作符重载

Groovy 允许你重载各种操作符，这样就可以在你自己的类中使用它们。看看这个简单的类：

```groovy
class Bucket {
    int size

    Bucket(int size) { this.size = size }

    Bucket plus(Bucket other) {                     // 注释 1
        return new Bucket(this.size + other.size)
    }
}
```

- 注释 1：`Bucket`实现了一个叫`plus()`的特殊方法

只要实现`plus()`方法，`Bucket`类就可以像这样使用`+`操作符了：

```groovy
def b1 = new Bucket(4)
def b2 = new Bucket(11)
assert (b1 + b2).size == 15                         // 注释 1
```

- 注释 1：两个`Bucket`对象可以用`+`操作符相加

所有（非比较器）Groovy 运算符都有一个相应的方法，你可以在自己的类中实现。唯一的要求是你的方法是公共的，有正确的名称，并且有正确的参数数量。参数类型取决于你想在操作符的右侧支持什么类型。例如，你可以支持以下语句：

```groovy
assert (b1 + 11).size == 15
```

实现`plus()`方法：

```groovy
Bucket plus(int capacity) {
    return new Bucket(this.size + capacity)
}
```

下面是一个完整的运算符及其对应方法的列表：

| 运算符 | 方法          | 运算符     | 方法                    |
| ------ | ------------- | ---------- | ----------------------- |
| `+`    | a.plus(b)     | `a[b]`     | a.getAt(b)              |
| `-`    | a.minus(b)    | `a[b] = c` | a.putAt(b,c)            |
| `*`    | a.multiply(b) | `a in b`   | b.isCase(a)             |
| `/`    | a.div(b)      | `<<`       | a.leftShift(b)          |
| `%`    | a.mod(b)      | `>>`       | a.rightShift(b)         |
| `**`   | a.power(b)    | `>>>`      | a.rightShiftUnsigned(b) |
| `|`    | a.or(b)       | `++`       | a.next()                |
| `&`    | a.and(b)      | `--`       | a.previous()            |
| `^`    | a.xor(b)      | `+a`       | a.positive()            |
| `as`   | a.asType(b)   | `-a`       | a.negative()            |
| `a()`  | a.call()      | `~a`       | a.bitwiseNegate()       |


















