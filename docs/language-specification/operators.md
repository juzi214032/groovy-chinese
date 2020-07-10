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











