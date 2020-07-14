本章将会介绍 Groovy 的程序结构

## 1. 包名

包名的作用与 Java 中的作用完全相同。它们使我们能够在没有任何冲突的情况下分离代码库。Groovy 类必须在类定义之前指定它们的包，否则就采用默认的包。

定义包名和 Java 中非常相似：

```groovy
// 定义一个名为 com.yoursite 的包
package com.yoursite
```

要引用`com.yoursite.com`包中的某个类`Foo`，你需要使用完全限定的名称`com.yoursite.com.Foo`，或者你可以使用导入语句，我们将在下面看到。

## 2. 导入

为了引用任何一个类，你需要对它的包进行限定引用。Groovy 遵循 Java 的概念，允许使用导入语句来解析类引用。

例如，Groovy 提供了几个构建类，比如`MarkupBuilder`。`MarkupBuilder`在包`groovy.xml`里面，所以为了使用这个类，你需要导入它，如下所示：

```groovy
// 导入 MarkupBuilder 类
import groovy.xml.MarkupBuilder

// 使用导入的类创建一个对象
def xml = new MarkupBuilder()

assert xml != null
```

### 2.1 默认导入

默认导入是指Groovy语言默认提供的导入。例如下面的代码：

```groovy
new Date()
```

同样的代码在 Java 中需要向`Date`类导入语句，比如：import java.util.Date。Groovy 默认会帮你导入这些类。

以下是由 groovy 为你默认导入的包：

```groovy
import java.lang.*
import java.util.*
import java.io.*
import java.net.*
import groovy.lang.*
import groovy.util.*
import java.math.BigInteger
import java.math.BigDecimal
```

这样做是因为这些包中的类是最常用的。通过默认导入这些包去减少重复的代码。

### 2.2 简单导入

简单导入是指在导入语句中，将类名与包名一起完整定义。例如下面代码中的导入语句 import groovy.xml.MarkupBuilder 就是一个简单的导入，它直接引用一个包内的类。

```groovy
// 导入 MarkupBuilder 类
import groovy.xml.MarkupBuilder

// 使用导入的类创建一个对象
def xml = new MarkupBuilder()

assert xml != null
```

### 2.3 星号导入

Groovy和Java一样，提供了一种特殊的方式来使用`*`从一个包中导入所有的类，即所谓的星号导入。`MarkupBuilder`是一个类，它在包`groovy.xml`中，与另一个类`StreamingMarkupBuilder`一起。如果你需要使用这两个类，你可以这样做：

```groovy
import groovy.xml.MarkupBuilder
import groovy.xml.StreamingMarkupBuilder

def markupBuilder = new MarkupBuilder()

assert markupBuilder != null

assert new StreamingMarkupBuilder() != null
```

这是完全有效的代码。但是通过`*`的导入，我们只需要一行就可以达到同样的效果。star导入了`groovy.xml`包下的所有类：

```groovy
import groovy.xml.*

def markupBuilder = new MarkupBuilder()

assert markupBuilder != null

assert new StreamingMarkupBuilder() != null
```

星号导入的一个问题是，它们会使你的本地命名空间混乱。但如果使用 Groovy 提供的别名，这个问题就可以轻松解决。

### 2.4 静态导入

Groovy 的静态导入功能允许你引用导入的类，就像在自己的类中引用静态方法一样：

```groovy
import static Boolean.FALSE

assert !FALSE //use directly, without Boolean prefix!
```

这类似于 Java 的静态导入功能，但比 Java 更动态，只要你的类型不同，就可以定义与导入方法同名的方法：

```groovy
import static java.lang.String.format // 注释 1

class SomeClass {

    String format(Integer i) { // 注释 2
        i.toString()
    }

    static void main(String[] args) {
        assert format('String') == 'String' // 注释 3
        assert new SomeClass().format(Integer.valueOf(1)) == '1'
    }
}
```

- 注释 1：静态导入方法

- 注释 2：声明方法的名称与上面静态导入的方法相同，但参数类型不同。

- 注释 3：在 Java 中会编译错误，但在 Groovy 中是正确的

  如果类型相同，导入的类优先级更高。

### 2.5 静态导入别名

使用`as`关键字的静态导入为命名空间问题提供了一个优雅的解决方案。假设你想获得一个`Calendar`实例，使用它的`getInstance()`方法，这是一个静态方法，所以我们可以使用静态导入。当与它的类名分开时，会产生歧义，我们可以使用别名导入，而不是每次都调用`getInstance()`，这样可以增加代码的可读性：

```groovy
import static Calendar.getInstance as now

assert now().class == Calendar.getInstance().class
```

现在它清爽多了！

### 2.6 静态星号导入

静态星号导入与常规星号导入非常相似。它将导入给定类的所有静态方法。

例如，假设我们需要为我们的应用程序计算正弦和余弦。`java.lang.Math`类中有名为`sin`和`cos`的静态方法，它们符合我们的需求。在静态星号导入的帮助下，我们可以这样做：

```groovy
import static java.lang.Math.*

assert sin(0) == 0.0
assert cos(0) == 1.0
```

如你所见，我们能够直接访问方法`sin`和`cos`，而无需`Math.`前缀。

### 2.7 别名导入

通过类型别名，我们可以使用我们选择的名称来引用一个完全限定的类名。这可以通过`as`关键字来实现，就像前面一样。

例如，我们可以将`java.sql.Date`导入为`SQLDate`，并将其与`java.util.Date`在同一个文件中使用，而不必使用任何一个类的完全限定名。

```groovy
import java.util.Date
import java.sql.Date as SQLDate

Date utilDate = new Date(1000L)
SQLDate sqlDate = new SQLDate(1000L)

assert utilDate instanceof java.util.Date
assert sqlDate instanceof java.sql.Date
```

## 3. 脚本与类

### 3.1 public static void main 与 script

Groovy 同时支持脚本和类。以下面的代码为例：

Main.groovy

```groovy
class Main {                                    // 注释 1
    static void main(String... args) {          // 注释 2
        println 'Groovy world!'                 // 注释 3
    }
}
```

- 注释 1：定义一个`Main`类，名称是任意的。
- 注释 2：`public static void main(String[])`方法可以作为类的主方法使用
- 注释 3：main 的方法体

这是典型的来自 Java 的代码，代码必须嵌入到一个类中才能执行。Groovy 让它变得更简单，下面的代码含义与上面相同：

Main.groovy

```groovy
println 'Groovy world!'
```

脚本可以看作是一个类，而不需要声明它，这是脚本与类的一部分区别。

### 3.2 脚本类

脚本总是被编译成一个类。Groovy 编译器将为你编译这个类，并将脚本的主体复制到一个运行方法中。因此，前面的例子被编译成了下面的样子：

Main.groovy

```groovy
import org.codehaus.groovy.runtime.InvokerHelper
class Main extends Script {                     // 注释 1
    def run() {                                 // 注释 2
        println 'Groovy world!'                 // 注释 3
    }
    static void main(String[] args) {           // 注释 4
        InvokerHelper.runScript(Main, args)     // 注释 5
    }
}
```

- 注释 1：`Main`类继承自`groovy.lang.Script`类
- 注释 2：`groovy.lang.Script`需要一个有返回值的`run`方法。
- 注释 3：脚本主体在`run`方法内
- 注释 4：`main`方法会自动生成
- 注释 5：委托`run`方法执行脚本。

如果脚本在一个文件中，那么文件的基本名称将被用来确定生成的脚本类的名称。在这个例子中，如果文件的名字是`Main.groovy`，那么脚本类将是`Main`。

### 3.3 方法

可以在脚本中定义方法，如图所示：

```groovy
int fib(int n) {
    n < 2 ? 1 : fib(n-1) + fib(n-2)
}
assert fib(10)==89
```

你也可以将方法和代码混合在一起。生成的脚本类会将所有方法带入脚本类，并将所有脚本体组装到运行方法中：

```groovy
println 'Hello'                                 // 注释 1

int power(int n) { 2**n }                       // 注释 2

println "2^6==${power(6)}"                      // 注释 3
```

- 注释 1：脚本开始
- 注释 2：一个方法定义在脚本主体重
- 注释 3：脚本继续

此代码在内部转换为：

```groovy
import org.codehaus.groovy.runtime.InvokerHelper
class Main extends Script {
    int power(int n) { 2** n}                   // 注释 1
    def run() {
        println 'Hello'                         // 注释 2
        println "2^6==${power(6)}"              // 注释 3
    }
    static void main(String[] args) {
        InvokerHelper.runScript(Main, args)
    }
}
```

- 注释 1：`power`方法被原样复制到生成的脚本类中
- 注释 2：第一条语句被复制到运行方法中
- 注释 3：第二条语句被复制到运行方法中

即使 Groovy 从你的脚本中创建一个类，对用户来说也是完全透明的。特别是，脚本会被编译成字节码，并且保留了行号。这意味着，如果在脚本中抛出异常，堆栈跟踪将显示对应于原始脚本的行号，而不是我们显示的生成代码。

### 3.4 变量

脚本中的变量不需要类型定义。这意味着这个脚本：

```groovy
int x = 1
int y = 2
assert x+y == 3
```

将表现为：

```groovy
x = 1
y = 2
assert x+y == 3
```

然而两者在语义上是有区别的：

- 如果变量的声明和第一个例子一样，那么它就是一个局部变量。它将在编译器生成的`run`方法中声明，在脚本主体之外将不可见。特别要注意：这样的变量在脚本的其他方法中是不可见的。
- 如果变量未声明，它就会进入脚本绑定中。绑定在方法中是可见的，如果你使用脚本与应用程序交互，并且需要在脚本和应用程序之间共享数据，那么绑定就显得尤为重要。读者可以参考集成指南了解更多信息。

如果你想让一个变量在不进入`Binding`的情况下成为类的一个字段，你可以使用`@Field`注解。