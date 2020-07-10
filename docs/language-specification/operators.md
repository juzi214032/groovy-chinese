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















