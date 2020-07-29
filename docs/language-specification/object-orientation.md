本章介绍了 Groovy 的面向对象特性。

## 1. 类型

### 1.1 基本类型

Groovy 支持与 Java 语言规范所定义的相同的基本类型：

- 整数类型：`byte`(8 位),`short`(16 位),`int`(32位)和`long`(64 位)
- 浮点数类型：`float`(32 位)和`double`(64 位)
- `boolean`类型（`true`和`false`）
- `char`类型(16 位，可作为数字类型使用，代表 UTF-16 编码。)

虽然 Groovy 将基本字段和变量声明并存储为基元，但由于它使用 Objects 来处理所有事情，所以它对基元的引用进行了自动包装。就像 Java 一样，它使用的包装类是：

表 1. 基本类型包装类

| 基本类型 | 包装类型  |
| -------- | --------- |
| boolean  | Boolean   |
| char     | Character |
| short    | Short     |
| int      | Integer   |
| long     | Long      |
| float    | Float     |
| double   | Double    |

下面是一个使用`int`的例子：

```groovy
class Foo {
  static int i
}

assert Foo.class.getDeclaredField('i').type == int.class
assert Foo.i.class != int.class && Foo.i.class == Integer.class
```

现在您可能会担心，这意味着每次在一个基本类型的引用上使用数学运算符时，都会产生拆箱和装箱基本类型的成本。但事实并非如此，因为 Groovy 会将你的运算符编译成它们的方法等价物，并使用这些方法等价物。此外，当调用一个接受基本类型参数的 Java 方法时，Groovy 会自动拆箱到基本类型，并自动从 Java 中框定基元方法的返回值。但是，要注意与 Java 的方法解析有一些区别。

### 1.2 类

Groovy 类与 Java 类非常相似，在 JVM 层面与 Java 类兼容。它们可以有方法、字段和属性（想想 JavaBean 的属性，但少了一些模板）。类和类成员可以拥有与 Java 中相同的修饰符（public、protected、private、static等），但在源码级别上有一些小的差异，这些差异将在下文解释。

Groovy类与Java类之间的主要区别是：

- 没有可见性修饰符的类或方法默认为 `public` （可以使用特殊的注解来实现包的私有可见性）。
- 没有可见性修饰符的字段会自动变成属性，这就减少了代码的冗余，因为不需要明确的 getter 和 setter 方法。关于这方面的更多内容将在字段和属性部分介绍。
- 类不需要和它们的源文件定义有相同的名称，但在大多数情况下，还是建议用相同的名称（可以参考脚本相关内容）。
- 一个源文件可能包含一个或多个类（但如果一个文件包含任何不在类中的代码，它就被认为是一个脚本）。脚本只是一些特殊约定的类，其名称与源文件相同（所以不要在脚本中包含与脚本源文件名称相同的类定义）。

下面的代码是一个例子：

```groovy
class Person {                       // 注释 1

    String name                      // 注释 2
    Integer age

    def increaseAge(Integer years) { // 注释 3
        this.age += years
    }
}
```

- 注释 1：名为`Person`的类开始
- 注释 2：名为`name`的 String 类型的属性
- 注释 3：方法定义

#### 1.2.1 普通类

普通类指的是顶层和具体的类，这意味着它们可以不受任何其他类或脚本的限制而被实例化。这样，它们只能是公共的（即使公共关键字可能被抑制）。类是通过调用它们的构造函数，使用new关键字来实例化的，就像下面的例子一样：

```groovy
def p = new Person()
```

#### 1.2.2 内部类

内类是在另一个类中定义的。外部类可以像平常一样使用内部类。另一方面，一个内部类可以访问它的外部类的成员，即使它们是私有的。除了包围类之外的其他类是不允许访问内类的。下面是一个例子。

```groovy
class Outer {
    private String privateStr

    def callInnerMethod() {
        new Inner().methodA()       // 注释 1
    }

    class Inner {                   // 注释 2
        def methodA() {
            println "${privateStr}." // 注释 3
        }
    }
}
```

- 注释 1：内部类被实例化，方法被调用
- 注释 2：内部类定义
- 注释  3：即使是私有的，外部类的字段也可以被内部类访问

为什么要使用内部类：

- 有一些类不需要暴露出去，使用内部类将其封装起来，这也使得包和工作空间更加干净
- 内部类提供很好的组织性，可以实现分组的功能
- 内部类使代码可维护性增强，因为内部类通常就在他们被调用处的旁边

在一些情况下，内部类是外部类需要其方法的接口的实现。下面的代码用常见的线程用法来说明这个问题：

```groovy
class Outer2 {
    private String privateStr = 'some string'

    def startThread() {
       new Thread(new Inner2()).start()
    }

    class Inner2 implements Runnable {
        void run() {
            println "${privateStr}."
        }
    }
}
```

注意，定义`Inner2`类只是为了提供运行到`Outer2`类的方法的实现。在这种情况下，匿名内部类有助于消除啰嗦代码。

自 Groovy 3.0.0 以来，支持非静态内类实例化的 Java 语法，例如：

```groovy
class Computer {
    class Cpu {
        int coreNumber

        Cpu(int coreNumber) {
            this.coreNumber = coreNumber
        }
    }
}

assert 4 == new Computer().new Cpu(4).coreNumber
```

##### 匿名内部类

最后一个内类的例子可以用一个匿名内类来简化。同样的功能可以通过以下代码实现。

```groovy
class Outer3 {
    private String privateStr = 'some string'

    def startThread() {
        new Thread(new Runnable() {      // 注释 1
            void run() {
                println "${privateStr}."
            }
        }).start()                       // 注释 2
    }
}
```

- 注释 1：与上一节的最后一个例子相比，`new Inner2()`被 `new Runnable()`所取代。
- 注释 2：`start`方法被调用

因此，只使用一次的话，就没有必要定义一个新的类。

#### 1.2.3 抽象类

抽象类代表通用概念，因此，它们不能被实例化，或被创建为子类。它们的成员包括字段/属性和抽象或具体方法。抽象方法没有实现，必须由具体的子类来实现。

```groovy
abstract class Abstract {         // 注释 1
    String name

    abstract def abstractMethod() // 注释 2

    def concreteMethod() {
        println 'concrete'
    }
}
```

- 注释 1：抽象类必须使用`abstract`关键字声明
- 注释 2：抽象方法必须使用`abstract`关键字声明

抽象类通常与接口进行比较。两者之间有重要的区别。首先，抽象类可能包含字段/属性和具体方法，而接口可能只包含抽象方法（方法签名）。此外，一个类可以实现多个接口，而它可以只扩展一个类，无论是否抽象。

### 1.3 接口

一个接口定义了一个类需要遵守的契约。一个接口只定义了一个需要实现的方法列表，但并没有定义方法的实现。

```groovy
interface Greeter {                                         // 注释 1
    void greet(String name)                                 // 注释 2
}
```

- 注释 1：需要使用接口关键字来声明一个接口
- 注释 2：一个接口只定义方法签名

接口的方法必须是`public`的。在接口中不能使用`protected`或`private`

```groovy
interface Greeter {
    protected void greet(String name)           // 注释 1
}
```

- 注释 1：使用 `protected` 会产生一个编译期错误

如果一个类在它的实现列表中定义了接口，或者它的任何一个父类实现了接口，那么这个类就实现了一个接口。

```groovy
class SystemGreeter implements Greeter {                    // 注释 1
    void greet(String name) {                               // 注释 2
        println "Hello $name"
    }
}

def greeter = new SystemGreeter()
assert greeter instanceof Greeter                           // 注释 3
```

- 注释 1：`SystemGreeter`使用`implements`关键字实现了`Greeter`接口
- 注释 2：实现`greet`方法
- 注释 3：`SystemGreeter`的任何实例都是`Greeter`接口的实例。

一个接口可以扩展另一个接口：

```groovy
interface ExtendedGreeter extends Greeter {                 // 注释 1
    void sayBye(String name)
}
```

- 注释 1：`ExtendedGreeter`接口使用`extends`关键字扩展了`Greeter`接口

值得注意的是，一个类要成为一个接口的实例，必须是显式的。例如，下面这个类定义了`greet`方法，虽然它是在`Greeter`接口中声明的，但是这个类并没有实现Greeter：

```groovy
class DefaultGreeter {
    void greet(String name) { println "Hello" }
}

greeter = new DefaultGreeter()
assert !(greeter instanceof Greeter)
```

换句话说，Groovy没有定义结构类型。然而，可以在运行时使用`as`转换符，让一个对象的实例实现一个接口：

```groovy
greeter = new DefaultGreeter()                              // 注释 1
coerced = greeter as Greeter                                // 注释 2
assert coerced instanceof Greeter                           // 注释 3
```

- 注释 1：创建一个没有实现接口的`DefaultGreeter`类的实例
- 注释 2：在运行时将实例转换为一个`Greeter`
- 注释 3：被转换的实例实现了`Greeter`接口

你可以看到，有两个不同的对象：一个是源对象，一个`DefaultGreeter`实例，它没有实现接口。另一个是委托给转换对象的`Greeter`实例。

Groovy 接口不像 Java 8接口那样支持默认实现。如果你正在寻找类似的东西（但不等于），traits 接近于接口，但允许默认实现以及本手册中描述的其他重要特性。

### 1.4 构造函数

构造函数是一种特殊的方法，用来初始化一个对象的特定状态。与普通方法一样，一个类可以声明多个构造函数，只要每个构造函数有一个唯一的类型签名。如果一个对象在构造过程中不需要任何参数，它可以使用无参数构造函数。如果没有提供构造函数，Groovy 编译器将提供一个空的无参数构造函数。

Groovy支持两种调用方式：

- *位置参数*的使用方式与使用 Java 构造函数的方式类似。
- *具名参数*允许你在调用构造函数时指定参数名。

#### 1.4.1 位置参数

为了使用位置参数创建对象，各类需要声明一个或多个构造函数。在有多个构造函数的情况下，每个构造函数必须有唯一的类型签名。构造函数也可以使用 groovy.transform.TupleConstructor 注解添加到类中。

通常情况下，一旦声明了至少一个构造函数，就只能通过调用它的一个构造函数来实例化这个类。值得注意的是，在这种情况下，通常不能用命名参数创建类。Groovy 确实支持命名参数，只要类中包含一个无参数的构造函数，或者提供一个将 Map 参数作为第一个（可能是唯一的）参数的构造函数—详见下一节。

使用声明的构造函数有三种形式。第一种是正常的 Java 方式，使用 `new` 关键字。其他的则是依靠将 list 转换成所需类型。在这种情况下，可以用 `as` 关键字和通过静态键入变量来进行转换。

```groovy
class PersonConstructor {
    String name
    Integer age

    PersonConstructor(name, age) {          // 注释 1
        this.name = name
        this.age = age
    }
}

def person1 = new PersonConstructor('Marie', 1)  // 注释 2
def person2 = ['Marie', 2] as PersonConstructor  // 注释 3
PersonConstructor person3 = ['Marie', 3]         // 注释 4
```

- 注释 1：声明构造函数
- 注释 2：使用 Java 的方式调用构造函数
- 注释 3：用 as 关键字转换
- 注释 3：直接使用 list

#### 1.4.2 具名参数

如果没有声明（或者没有声明参数）构造函数，则可以通过以映射（属性/值对）的形式传递参数来创建对象。在想要允许多个参数组合的情况下，这很方便。否则，如果使用传统的位置参数，就必须声明所有可能的构造函数。我们也支持使用第一个（也许是唯一的）参数是`Map`参数的构造函数 - 这样的构造函数也可以使用`groovy.transform.MapConstructor`注解来添加。

```groovy
class PersonWOConstructor {                                  // 注释 1
    String name
    Integer age
}

def person4 = new PersonWOConstructor()                      // 注释 2
def person5 = new PersonWOConstructor(name: 'Marie')         // 注释 3
def person6 = new PersonWOConstructor(age: 1)                // 注释 4
def person7 = new PersonWOConstructor(name: 'Marie', age: 2) // 注释 5
```

- 注释 1：没有声明构造函数
- 注释 2：实例化时未给参数
- 注释 3：实例化时传递 `name` 参数
- 注释 4：实例化时传递 `age` 参数
- 注释 5：实例化时传递`name`和 `age` 参数
- 注释 5：实例化时传递 `name` 参数

然而，需要强调的是，这种方法赋予构造函数调用者更多的权力，同时也增加了调用者的责任，要求传递正确的名称和值类型。因此，如果希望有更大的控制权，那么使用位置参数来声明构造函数可能会更好。

注意：

- 虽然上面的例子没有提供构造函数，但你也可以提供一个无参数的构造函数，或者第一个参数是`Map`的构造函数，最典型的是它是唯一的参数。
- 当没有声明（或无参数）构造函数时，Groovy 会用调用无参数构造函数来代替命名构造函数的调用，然后再调用每个提供的命名属性的 setter
- 当第一个参数是 Map 时，Groovy 会将所有命名的参数合并成一个 Map（不考虑顺序），并将 Map 作为第一个参数提供。如果你的属性被声明为 `final`（因为它们将在构造函数中设置，而不是在事后用 setter 设置），这可能是一个好方法。
- 你可以通过提供位置构造函数以及 no-arg 或 Map 构造函数来支持命名和位置构造。
- 你可以通过使用一个构造函数来支持混合构造，在这个构造函数中，第一个参数是一个 Map，但也有额外的位置参数。请谨慎使用这种风格。