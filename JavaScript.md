##在HTML中使用JavaScript

scrip标签：　　async：立即下载 　　　　defer：延迟执行；　　src：外部文件地址　　type：type/javascript

在JavaScript中从上至下依次预处理/执行，js是阻断式语言

标签位置：<script>放在结尾</body>前

延迟脚本：一般不要使用，延迟加载组件使用

嵌入式代码：一般使用外部文件来包含JavaScript代码

注意：外部文件也可以包含外部文件；先解析不使用defer的；async可以不阻塞文档呈现。



##基础1
#严格模式：strict mode

#js解释器会自动加分号。
两行代码，能一起就合并不能执行就加分号。代码前加分号。
return，break，controller要用（）。括号，能括号尽量括号
(圆括号（()）可以用来提高运算的优先级，因为它的优先级是最高的)
需要注意大小写：　=，‘ ’，toUpperCase()可以大写化

#数据类型：
数值（number）：整数和小数（比如1和3.14）
字符串（string）：文本（比如Hello World）。
布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）
undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
null：表示空值，即此处的值为空。
Symbol：是用来定义对象的唯一属性名的不二之选
对象（object）：各种值组成的集合。

#typeof、instanceof、constructor
`(typeof * )`　　操作符返回类型，字符串。
typeof只能检测基本数据类型，对于null还有一个Bug。
function返回function，underfined返回underfined，null返回object。

`instanceof`    检测某个对象的原型链是否包含prototype属性
[1, 2, 3] instanceof Array // true
({}) instanceof Object // true

`.constructor`   属性返回一个指向创建了该对象原型的函数引用
var a = new Animal;
a.constructor === Animal; // => true

#计算的本质--对数据的处理
基础的数据类型，动态数据类型，定义时没有决定，取用时决定数据类型，更改数据是更改引用关系。

underfined：变量未被赋值返回underfined；
null==underfined  //ture　　　null===underfined  //flash
boolean:turn/flash
number：基本数字面量格式十进制，js中是以52位浮点数计算(浮点数就是包含小数)。
NaN是非数值的数字，不等于本身，isNaN(),Number.isNaN()。

#underfined和null区别
null表示空值,undefined表示“未定义”。
#相同：
都只有一个值，
参与判断都返回false，
两者都没有方法
#不同点：
变量未被赋值返回underfined
underfined不是关键字，null是关键字。
underfined是window的属性。(可以先定义underfined，优化)
underfined未初始化，null已初始化。
typeof查看类型，underfined是underfined，null是对象。
转换数组，null是0，underfined是NaN
#建议：
变量不想赋值时用null，
非变量不想赋值时用underfined
全等检测不存在时用underfined，
全等检测为空时null
`定义变量时使用null`
`判断某值为空时判断用==null`

#Boolean布尔值
用于判断比较，所以类型可转换为布尔值。
布尔值代表“真”和“假”两个状态。“真”用关键字true表示，“假”用关键字false表示。布尔值只有这两个值。
#下面六个值被转为false
undefined，null，false，0，NaN，""或''（空字符串）
#转换Boolean()和！！




##number和string

#number
number：基本数字面量格式十进制，js中是以52位浮点数计算(浮点数就是包含小数)。
NaN是非数值的数字，不等于本身，isNaN(),Number.isNaN()。
小数点可不写0
小数点后的零多于5个，科学计数法。
0.1+0.2不等于0.3，js中是以二进制52位浮点数计算

#数值转换，Number(),  parseInt(),parseFloat()，Nub-0，+'1'===1
Number()是number对象方法，只能转数字
parseInt(a,b)是`整数方法`，字符串转为整数
parseFloat()是`浮点小数方法`，字符串转为浮点数。自动转换科学计数法，不能转换的不转换
isNaN(),Number.isNaN()可以用来判断一个值是否为NaN。

#string
字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。
转义：\n  换行。Base64转码：btoa()和atob()

#字符串转换，String()，toString()，加''空字符串
toString()，转换null和underfined报错
object.toString()   '[object,Object]'
用JSON来转换，JSON.parsen(JSON.stringify())

#自动转换
不同类型互相转换，
对非布尔值判断时转布尔值，
对非数字用一元符语气为数值转数值，




##Object对象
对象就是一组“键值对”（key-value）的集合，`是一种无序的复合数据集合`
`有属性，有方法，可改变`
内部对象：js本身自带对象(17个内部对象),错误对象，常用对象，内置对象
数组对象：window，docment
自定义对象：自定义创建的对象

#隐式转换
布尔值，数组转换为对象属性为本身
字符串转为对象，属性为本身，还有length长度。
underfined，null转对象为空对象。
两个对象是同引用的对象，比较为true。
所以对象转布尔都为true，false转为对象再判断为true。


#valueOf()对象方法,toString()字符串方法
valueOf()，转换返回字符串，布尔值，数值
toString()，转换代码字符串表示

对象转字符串    先toString()再valueOf()
对象转数字      先valueOf()再toString()

#只有对象有方法，调用简单类型方法时先转化为临时对象，使用后回收。
#查询对象属性.或[]
obj.p 和 obj['p']

#in 运算符
var obj = { p: 1 };
'p' in obj // true
#for…in 循环        a.map()=>{}
它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
它不仅遍历对象自身的属性，`还遍历继承的属性`。


##一元操作符和表达式
原始表达式，对象定义表达式
9个一元操作符，递增递减，前置先运算再操作。
优先级，属性访问最高，一元操作符，运算符，赋值运算符，逗号。(！>||>&&)
一元操作符，三元操作符，赋值操作符是右结合，其余左结合
!是取反运算符
#逻辑运算符，逻辑与和逻辑或
a && b    有假值返回假值，没有返回最后值
a || b    有真值返回真值，没有返回最后值。如果并且。如果那么



##加减乘除，比较赋值
加减乘除先转换数字在求值，浮点数52位
求模运算%，结果是数字类型。非数字位NaN
#加法操作,不确定时先转换
数值类型相加为数值相加：1+1=2
存在字符串类型相加字符串拼接：1+'1'='11'
#关系运算符会转化为数值
7>6>5   //false     (由左至右运算)
#条件操作符  a>b？a=1 ：a=2

#判断最好只用全等===
判断对象是对象的引用
#赋值操作符，由右至左运算
a+=1 === a++    (性能上没区别)





##基础总结

#数据类型:
基础数据类型，
复杂数据类型(无序的数列)，对象是引用类型

#null和underfined
null是关键字，定义变量underfined。
null本质是一个空对象，underfined是window的一个属性，
null返回0，underfined返回NaN。
null为空，underfined为是否存在

#Boolean，布尔类型
null，underfined，false，NaN，0，'' 为false其余为true。
#number
整数使用十进制，小数浮点数二进制计算。parseInt、parseFloat
小数点后52位。保留小数位，转换为整数后除。
NaN是表示非数字的数值，NaN不等于本身。
#string
字符串本质是Unicode编码
属性的调用，js会判断.前面的表达式是否为对象，不是对象会转化临时对象引用属性。
#object
对象有属性，有方法，可改变
内部对象，数组对象，自定义对象

#类型转换
原始类型转字符串，加''引号
原始类型转数值，underfined为NaN，null为0。
原始类型转布尔值，null，underfined，false，NaN，0，'' 为false其余为true
数字和布尔值转对象，原始值
字符串转换对象，原始值，length，key索引

#创建对象的方法，{}和new操作符
#对象转换
`对象转换数字，先valueOf()后toString()。得到原始类型`
`对象转换字符串，先toString()后valueOf()。得到原始类型`
`对象转原始值，先valueOf()后toString()`
`data对象转原始值，直接toString()`
深拷贝
`用JSON.stringify()把对象转化为字符串`
`用JSON.parse()把字符串变对象`


#空数组转数字为0，[]转为''转为0
[]+[]=''    1+[1,2]='11,2'
#空对象转数字为NaN，{}转为[object,object]转为NaN
{}+{}=NaN   1+{}='1object,object'   {}+1=1


#var 定义变量
用var是局部变量，不用是全局。
用var是创建变量不能删除，不用是全局属性可以删除。只能回收。
用var会变量提升。
`使用var定义变量，不用var是window的一个属性`
#let定义局部变量
let定义不会变量提升，在{}中是局部变量，不可被删除，不可重复声明。
#const是常量
不能改变量只能改引用，其他和let相同

#操作符
一元加，一元减后面可转数字，减法是数字差，加法可数字可字符串。
a++和a--
#混合运算
加减混合运算中，underfined，null，布尔值会转换成数字

#typeOf是操作符
(typeOf *)
#与或非，
！转换布尔值取反
a || b    有真值返回真值，没有返回最后值
a && b    有假值返回假值，没有返回最后值
# > < >= <= !==  ===



##语句
表达式会返回值，语句会产生改变带有副作用

#表达式语句
函数条件语句，
`复合语句{}`，代码块
`空语句 ;`，解释器跳过。使用在模块开头防止合并报错。循环当中分号当大括号
`声明语句`：声明变量和函数，var定义变量，function定义函数。函数作用域。
变量提升，函数提升。定义变量赋值函数不会函数提升。
`流程控制语句`：
分支语句：if语句，else于就近if作匹配。if()else{} === ? : 三元运算符
多分支语句：switch语句，switch(){case * break; default：*}
`循环语句`:while/for语句
while(){}
for(let i=0;i<length;i+=1){}
初始化，判断，执行，更新    (可以先定义len=length)

#for-in 枚举属性，包括原型链。对象属性使用，数组用forEach方法,map
for(let key in a){}
执行表达式，判断转换对象，属性赋值结果，循环体
数值类型布尔类型不循环，字符串转对象再循环
for(let a[i++] in b){}


#break和continue与reaten
switch语句中用，退出循环语句。一般用break，退出当前分支项目。
循环语句中break前迁建判断。
label标签语句，label：name。js是面向过程语言，一般不用


##变量
JS中变量是存名字，使用时才定义类型。
简单类型存数据，复杂类型存引用内存地址。
创建变量名字，定义作用域，声明提升。
赋值简单类型，数据放变量中；赋值复杂类型，引用地址放变量，数据放内存。
#属性方法增减
简单类型的属性方法为原型链上，复杂类型可以增删属性方法。
深拷贝，浅拷贝。

#方法和函数(面向对象)
`当一个函数是一个对象的属性时，我们把这个函数称为对象的方法`

#函数封装多条语句，参数的传递
function a(){return a+b}
a(1,2)===3
返回值为 return的值
参数是函数中的局部变量修改

#检测对象类型 instanceof
[1, 2, 3] instanceof Array // true



##作用域和内存
函数会覆盖变量，作用域不可重叠。
作用域：存储的规则
作用域链：访问的规则
let和function具有作用域
词法语法分析，生成代码，代码执行
垃圾回收机制，释放内存。




##数组
数组（array）是按次序排列的一组值，有序的合集
可以放置任何类型，可以改变长度。
创建方式。[]和new Array()
#读取写入
索引以0开始，不一致性。写入操作删除操作长度改变。
length属于对象的一种，赋值长度多增少减。

#检测数组 instanceof() / Array.isArray()
[1, 2, 3] instanceof Array ;// true
Array.isArray([1]) ;// true

#数组方法
`push()`    方法将一个或多个元素添加到数组的末尾，并返回新数组的长度。
pop ()      方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

unshift()   方法将一个或多个元素添加到数组的开头，并返回新数组的长度。
shift()     方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

includes()  方法用来判断一个数组是否包含一个指定的值
indexOf()   方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1

`map()`     方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
`forEach()` 方法对数组的每个元素执行一次提供的函数。不返回结果。

sort()      方法用原地算法对数组的元素进行 排序(可以接受一个函数，compareFunction(a, b)小于0，a在b之前))
join()      方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
reduce()    方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其简化为单个值。
`splice()`  方法通过删除现有元素和/或添加新元素来更改一个数组的内容。参数一位置，参数二删除个数，参数三插入新元素。
`concat()`  方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
`filter()`  方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素





##数组去重   https://www.jianshu.com/p/d9d111a434a4
`indexOf/includes方法去重`
~~~
    for(let i=0;i< array.length;i++){
        if (arr.indexOf(array[i]) === -1){
            arr.push(array[i]) }
            }
    return arr
    }
~~~
`相邻元素去重`  调用了sort()，然后遍历相邻元素比对
~~~
    for (let i = 1; i < arr.length; i++) {
            if (arr[i] !== arr[i-1]) {
                res.push(arr[i])
            }
        }
        return res

    }
~~~
`set与解构赋值去重` ES6中新增了数据类型set
~~~
array = [1,5,2,3,4,2,3,1,3,4]
function unique(array){
// return [...new Set(array)]
return Array.from(new Set(array)); 
}
~~~

#时间对象
创建一个日期对象    let now = new Date()
#Math对象
Math.max()和Math.max.apply(Math,arry)
Math.random()   函数返回一个浮点,  伪随机数在范围[0，1)
~~~
    function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
    }
~~~


##函数对象
函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。(变量名提升，执行时间))
`当一个函数是一个对象的属性时，我们把这个函数称为对象的方法`

#声明方式
具名声明：      var function x(a,b){}
匿名函数：      function(a,b){}
声明函数：      var a=function(a,b){}
构造函数：      f = new Function('a','b','return a+b')
箭头函数        ()=>{}      可省略括号,可固定this，没有aguments
函数生成器      function*   没有return有yield，结果赋值，返回迭代器对象。
#具名和匿名函数
具名函数可以获得一个变量名，有name属性。
具名函数函数体中一个变量名，递归。

#调用函数        
f(agument)===f.call(this,agument)
函数可以调用自身，这就是递归。不能在条件语句中声明函数。同名的参数取最后出现的值。
函数体内部的return语句，表示返回值
name属性返回函数的名字。
length属性返回函数预期传入的参数个数。
toString方法返回一个字符串，内容是函数的源码。


##js中的作用域  (解决命名污染，提升性能，全局命名)
 立即执行函数(IIFE)：     !function(){}.call()        (function(){}).call()
 let 块级作用域：          {let    }

#eval(),可以解析代码字符串
可以动态声明局部变量，执行时才创建。严格模式下访问不到。无法调试。编译影响性能。安全隐患。

#call,apply,bind
call()可以接受this和agument。apply()可以接受数组。
bind()，会创建一个函数实例，this会绑定传给函数的值。




 ##闭包详解     
 `执行环境中函数内调用外部变量；使得有权访问另一个函数作用域内变量的函数都是闭包。`

 JavaScript 有两种作用域：全局作用域和函数作用域。函数内部可以直接读取全局变量。
 * 闭包就是函数f2
 ~~~
    function f1() {
    var n = 999;
    function f2() {
    　　console.log(n); // 999
    }
    return f2;
    }
    var result = f1();  // 999
~~~

#闭包的用处
可以读取函数内部的变量
让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。
#内存释放垃圾回收



##包装对象和内置对象
基础属性的包装对象是临时对象，在调用属性和方法之后删除

#数值类型：
.toFixed()          保留小数位数，上限20。
.toExponential()    科学计数法
.toPrecision()      保留位数，不够使用科学计数法

#字符串类型：
concat()              返回拼接结果
`slice(a,b)`          返回a开始的b个字符
`split()`             使用指定的分隔符字符串将一个String对象分割成字符串数组。
substring()           返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
toUpperCase()         大写转换
toLowerCase()         小写转换
trim()                返回创建字符串副本，删除前后空格。trimLeft() trimRight()
join("")              方法将数组中所有元素连接为一个字符串。

* repeat()          返回一个指定数量重复的字符串。
* replace()         返回由替换值替换模式的新字符串。模式可以是字符串或正则, 替换值可以是字符串或函数。

#字符串反转     a.split("").reverse().join("")

function  reverse(s){
if(s.length > 1){
    console.log(s)
   return reverse(s.slice(1)).concat(s.slice(0, 1))
   
}else{
    return s
}
}



##面向对象模式、编程(OOP)
#工厂模式/构造模式
function Person(){}
let person = new Person()
#构造函数模式区别
创建新对象过程放在new，没有显示创建对象。
属性方法赋值给this
没有显示的return语句
构造函数第一字母大写

#this 的用法(this是参数)
函数中的this指向全局作用域(window对象)/严格模式(undefined)/node-js中(global)
对象方法属性调用时，this指向前面的对象
构造函数中调用，this指向创建的实例
call()apply()可强行指向对象，bind()绑定this对象
`this是call()的第一个参数，指向调用的对象`

#new操作符
创建一个对象
赋值新对象(实例)，this指向新对象
实行函数代码
返回新对象

#constructor属性    指向实例的构造函数
#每一个方法都要在实例上重新创建一遍，函数定义转到构造函数外部

#原型模式
同名屏蔽问题，delete删除属性。
~~~
    function Person(){}
    Person.prototype.age=18
    let person = new Person()
~~~
`person.__peotot__=== Person.prototype`

#isprototypeOf()    检测对象是否是原型
Person.prototype.isprototypeOf(person)  //ture
#getprototypeOf()   获取对象的原型
Object.getprototypeOf(person)===Person.prototype

#for-in可枚举原型，in是操作符会。存在实例原型中返回turn
#Person.prototype.age = 18

#原型的动态性
先创建构造函数
为构造函数原型添加属性和方法
实例化对象
调用对象属性和方法



##继承
#原型链
实例的__proto__指向构造函数的prototype。
js是面向过程的语言，原型链模拟继承
原型链继承，只有一行代码就能实现原型链上的方法。
`优点`：使用简单。父类原型增加删改不影响A。
`缺点`：无法实现多继承。所有属性共享。原型链模式无法传递参数

#借用构造函数模式
子类的构造函数使用call(this)/aplly(this)
多继承，解决共享，解决不能传参。
子类的实例非父类实例,只能继承属性不能继承方法，
~~~
    function a(name){this.name=name}
    function b(){a.call(this,'Leo')}
    let c = new b()
~~~

#组合式继承
父类构造函数写入属性，原型写入方法。子类调用构造函数传参并定义属性。
function SuperType(){}
SuperType.pototype.a = function(){}
function SubType(){SuperType.call(this,name)}

#寄生继承
#寄生组合继承 - 完美继承
function SuperType(){}
SuperType.pototype.a = function(){}
function SubType(){SuperType.call(this,name)}
SubType.pototype = new SuperType()


##综合知识复习
#变量
基础类型保存到变量。 复杂数据类型保存到内存，地址保存到变量。
对变量的修改，相当于重新赋值
对变量赋值。基础类型深拷贝。复杂类型前拷贝变量保存的地址复制。
变量作为函数的参数，简单类型复制作为局部变量。复杂类型复杂是值的传递。
`参数传递是值的传递，不是引用的传递`

访问值的作用域链。
Object.pototype.toString()
splice() 一参数截取，二参数删除，三参数修改

#时间语句
new data(month/day/year hour:minute:second)     33个方法
set/get
utc/to
Date.now()      返回UTC (世界标准时间)至今所经过的毫秒数。
Date.parse()    解析一个表示日期的字符串，并返回所经过的毫秒数。
Date.UTC()      接受和构造函数最长形式的参数相同的参数（从2到7），并返回UTC开始所经过的毫秒数。

#闭包
可以读取函数内部的变量
让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。
返回函数设置的变量为null



##BOM   
#window对象   全局作用域
delete 删除属性
frames，页面嵌套框架
screenLeft，screenTop是窗口相对于屏幕左边，上边
moveTo()方法移动新位置的x,y坐标。moveBy()是移动像素距离。
窗口大小：innerWidth() innerHeight() outerWidth() outerHeight()

#打开窗口
window.open(),参数一URL,参数二已有框架名称 不传新建窗口或_self、_parent、_top、_black。
close()方法可以关闭新打开的窗口

#定时器(异步)：

#间歇调用，超时调用，递归
setInterval(()+>{},1000)    clearInterval()
setTimeout(()=>{},1000)     clearTimeout
setTimeout 0,当前代码放最后运行
显示器刷新16ms，css创建动画，requestAnimation()

`setInterval具有累积效应，时间段内不能完成后面代码就会累积短时间内连续触发造成性能问题`
`setTimeout代替任何setInterval`
~~~
    let id = setTimeout(function code(){
        id=setTimeout(code,1000)
        },1000)
~~~




#系统对话框      阻断式，固定样式
aleat()         对话框，接受字符串返回
confirm()       对话框，确认取消
prompt()        提示框，返回文本框值  

#location对象
hash            URL的hash,#号后参数
href            当前加载页面URL
search          返回？号后查询字符串
location.search()   可创建函数解析查询参数
location.reload()   页面刷新，默认缓存最好放最后
replace()       可以导航到新URL

#history  历史对象
history.go()/history.back()     前进/后退



##DOM概览

#Document 
document.element        代表html节点
document.body           代表body节点
document.title          代表标签名
document.domain         获取/设置当前文档的原始域部分, 用于 同源策略.
document.referrer       返回跳转或打开到当前页面的那个页面的URI。

#element / text
#Node   节点
nodeType                查看节点类型(3为Element或Attr)
nodeName                节点名，字符串
nodeValue               节点值，字符串

childNodes              子节点
parentNode              父节点
previousSibling         前兄弟节点
nextSibling             后兄弟节点
firstChild              最前节点
lastChild               最后节点
textContent             节点及其后代的文本内容

hasChildNodes()         有无子节点
appendChild()           将节点添加到指定父节点的子节点列表末尾。
insertBefore()          参考节点之前插入一个节点    
removeChild()           从DOM中删除一个子节点
replaceChild()          用指定的节点替换当前节点的一个子节点
cloneNode(true)         克隆,传true深度克隆，不传浅克隆
HTML元素                id，title，dir，className

#Element
getElementsByName,getElementsByTagname,getElementById,
querySelector()   querySelectorAll()  -  节点选项器
creatElement            节点创建
#Attr
getAttribute()          返回元素上一个指定的属性值
setAttribute()          设置指定元素上的一个属性值
removeAttribute         清除指定元素上的一个属性值 

#Text
nodeType 3 , nodeName #text , 
appendData              添加文本
deleteData              删除文本
insertData              插入文本
replaceData             替换文本
substringData           提取文本
splitText               分割文本

#浏览器重绘，可以使用文档片段。IE不可靠
document.createDocumentFragment() 


#动态加载JS
* 直接document.write，document.write("<script src='package.js'><\/script>");
`动态改变已有script的src属性是无效的`但可以在固定文件在动态加载js达到动态加载js。

* 动态创建script元素（异步）
~~~
    var myScript= document.createElement("script");
            myScript.type = "text/javascript";
            myScript.src="package.js";
            document.body.appendChild(myScript);
~~~
* 动态创建script脚本（同步），js代码直接插入，IE需要输入text属性插入
~~~
    try{
        myScript.appendChild(document.createTextNode(code));
    }
    catch (ex){
        myScript.text = code;
    }   
~~~
* XMLHttpRequest/ActiveXObject异步加载
* XMLHttpRequest/ActiveXObject同步加载
* import语句导入js文件　

#js动态加载与阻塞
执行期间才阻塞，浏览器渲染的原因。






#动态加载css
* 改变href属性，页面渲染实时执行(网页换图，加id)
* 动态加载css文件
~~~
    var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
~~~
* 动态加载css脚本(文本节点)
~~~
    var style = document.createElement("style");
        style.type = "text/css";
        try{                             // firefox、safari、chrome和Opera            
            style.appendChild(document.createTextNode(cssText));
        }catch(ex) {                     // IE早期的浏览器 ,需要使用style元素的stylesheet属性的cssText属性   
            style.styleSheet.cssText = cssText;
        }
        document.getElementsByTagName("head")[0].appendChild(style);
~~~
* 远程动态加载css文件:
~~~
    $('#btn').click(function(){
        $('head').children(':last').attr({
            rel: "stylesheet",
            type: 'text/css',
            href: './style.css',
        });
    })
~~~










#JS中的动态合集与静态合集

#JS中的动态合集     （对变量没操作，对属性操作反应到变量中）
NodeList(节点的集合),NamedNodeMap(元素属性的集合)和HTMLCollection(html元素的集合)的实例。
jQuery得到自定义对象没有动态性
* childNodes 获取 NodeList(节点的集合,包换换行等)
* children 获取 HTMLCollection(html元素的集合)
都是伪数组，转数字用slice()方法

#获取动态合集方法
`getElementsByName,getElementsByTagname,getElementById`,
`进行DOM的for循环操作，插入div会造成死循环，缓存length解决`



#JS的静态合集       (是静态的快照)
`querySelectorAll()、querySelector()和matchesSelector()`这3种方法获取静态合集
通过CSS选择符查询DOM文档取得元素的引用的功能变成了原生的API，解析和树查询操作在浏览器内部通过编译后的代码来完成。

#区别   (建议使用动态合集选择器)
动态合集对属性操作反应到变量中，静态合集对属性操作不反应到变量中。
getElementById 比 querySelector() 速度快100倍。
* 动态合集是DOM树缓存，使用getElementById是创建变量返回
* querySelector()是css选择器，解析字符串创建选择器结构，DOM树创建静态快照比对后返回



# class和焦点管理
* 通过id获取比class获取性能更高

#classList       返回一个元素的类属性的实时DOMTokenList 集合。
`add`( String [, String] )            添加指定的类值
`remove`( String [,String] )          删除指定的类值。
`contains`( String )                  检查元素的类属性中是否存在指定的类值。
`toggle` ( String [, force] )         切换 class value;

#焦点管理
document.hasFocus() 和 document.activeElement属性
* 文档加载期间指向null，加载后指向body
* 鼠标点击，Tab键，插件快捷键
* focus() 强制当前元素获取焦点
# 判断文档是否获得焦点(判断用户是否进行交互))   document.hasFocus()

#焦点管理意义
* 标准的焦点管理可以让HTML代码开发标准化
* 无障碍开发
* document.hasFocus()可以判断用户是否在使用网页



##字符串操作DOM节点
* innerHTML`        属性设置，仅获取元素内容的HTML表示形式或替换元素的内容。
在读模式下，innerHTML 属性返回与调用元素的所有子节点（包括元素、注释和文本节点）对应的 HTML 标记。
在写模式下，innerHTML 会根据指定的值创建新的 DOM 树，然后用这个 DOM 树`完全替换调用元素原先的所有子节点`

* outerHTML         获取描述元素（包括其后代）的序列化HTML片段。设置为给定字符串解析的节点替换元素。
在读模式下，outerHTML 返回调用它的元素及所有子节点的 HTML 标签。
在写模式下，outerHTML 会根据指定的 HTML 字符串`创建新的 DOM 子树完全替换调用元素`

* innerText 属性
    通过 innerText 属性可以操作元素中包含的所有文本内容，包括子文档树中的文本。在通过 innerText 读取值时，它会按照由浅入深的顺序，将子文档树中的所有文本拼接起来。在通过 innerText 写入值时，结果会删除元素的所有子节点，插入包含相应文本值的文本节点。

* outerText 属性
    除了作用范围扩大到了包含 调用它的节点之外，outerText 与innerText 基本上没有多大区别。在读取文本值时，outerText 与 innerText 的结果完全一样。但在写模式下，outerText 就完全不同了：outerText 不只是替换调用它的元素的子节点，而是会替换整个元素（包括子节点）。


#jQuery中的text()、html()和val()
* text():设置或者获取所选元素的文本内容；
    无参text（）：取得所有匹配元素的内容。结果是由所有匹配元素包含的文本内容组合起来的文本。返回的是一个String。
    有参text（val）：设置所有匹配元素的文本内容,与 html() 类似, 但将编码 HTML (将 "<" 和 ">" 替换成相应的HTML实体)
    返回一个jquery对象。

* html():设置或者获取所选元素的内容（包括html标记）；
    无参html（）：取得第一个匹配元素的html内容。这个函数不能用于XML文档。但可以用于XHTML文档，返回的是一个String。
    有参html（val）：设置每一个匹配元素的html内容。这个函数不能用于XML文档。但可以用于XHTML文档。返回一个jquery对象。

* val()方法主要用于获取表单元素的值，如input, select 和 textarea。当在一个空集合上调用，它返回undefined
    无参 val() :获取匹配的元素集合中第一个元素的当前值。
    有参val（val）：设置每一个匹配元素的值。返回一个jquery对象。



#textContent和innerText
* innerText不包含style标签scrip标签，textContent包含
* innerText返回值依赖页面的显示，textContent依赖代码的值。
* innerText会触发回流，textContent不会触发回流
    回流：从子节点找到根节点，然后向下重绘，性能开销大。
    重绘：是当前节点想子节点渲染
* innerText的值会格式化，textContent不会格式化。
* innerText页面显示什么样就什么样，textContent返回什么样就什么样
* nodeValue 返回结果代码什么样什么样



# JS的滚动操作

#Window.scrollTo/Window.scrollBy      滚动到文档中的某个坐标 / 指定偏移量滚动
#scrollHeight/scrollWeight            一个元素内容高度/宽度的度量
#Element.scrollTop                    属性可以获取或设置一个元素的内容垂直滚动的像素数。顶部距离               
#高性能滚动     节流函数防抖函数
#lozad  --  (滚动框架)




#面试大全 - 上

#数据类型
Number,String,Boolean,undefined,null,symbol,object
#typeOf         一元操作符
返回普通类型的数据类型
#instanceof     检测某个对象的原型链是否包含prototype属性
#Object.proptype.toString.call()    数组的判断


#数组常用的方法
* 改变自身：
push：向数组的末尾增加一项 返回值是数组的新长度
unshift：向数组开头增加一项 返回值是数组的新长度
pop:删除数组的末尾项 返回值是删除的数组项
shift:删除数组开头项 返回被删除的开头项目
splice：删除数组中的任意项 返回值是被删除的数组项
slice:复制数组 返回值是复制到的新数组 写上数值之后 不包含被复制的最后一项

* 拼接：
concat:把一个数组和另一个数组拼接在一起 返回拼接好的数组 
join:把数组中的每一项 按照指定的分隔符拼接成字符串。

* 排序：
reverse:倒序数组 返回值倒序数组 原有数组改变
sort:根据匿名函数进行冒泡排序 b-a倒序 a-b升序

* 兼容性不好：
indexOf:返回获取项在数组中的索引
lastIndexOf:返回获取项在数组中出现的最后一次索引
forEach: 循环遍历数组 参数是一个匿名函数 默认返回为undefined
map：循环遍历数组 参数是一个匿名函数，返回

* splice的拓展使用：
模拟push   ary.splice(ary.length,0,x)
模拟pop    ary.splice(ary.length-1,1)
模拟unshift   ary.splice(0,0,x)
模拟shift     ary.splice(0,1)
splice(0) 从0开始删除到末尾==>全部删除的操作 ==>返回所有数组项 ==> 克隆数组


# 数组去重
* 创建空数组，循环push进去，indexOf判断是否存在
* new Set 数组去重       newArr = [...new Set(arr)]     newArr = Array.from(new Set(arr))
* 原数组依次对比，splice()判断删除
* 创建对象，数组依次录入。对象属性不能相同的特性
* 排序然后对比相邻是否相同后去重


#伪数组
选择器节点列表，aguments对象，jQuery选择器
#伪数组转数组    
定义一个空数组，通过遍历伪数组把它们重新添加到新的数组中；
Array.prototype.slice.call(aLi)         slice()返回数组，使用call指向伪数组 
Array.from(arguments)


#字符串的常用方法
charAt()
indexOf()
lastIndexOf()
substring()
slice()
substr()
replace()
match()
split()
trim()
toLowerCase()
toUpperCase()

#数值的常用方法
NaN不等于本身，Array.isNaN()
#布尔的常用方法
六个值被转为false:undefined，null，false，0，NaN，""或''（空字符串）
Boolean()和！！ 转化换布尔值

#new操作符
创建空对象，this指针指向新的对象，运行构造函数代码，创建对象作为返回值返回
返回值为对象：return返回值不是对象会忽略，返回对象会返回设置对象

#继承
* 原型链继承
    b.prototype = new a
    只能继承原型对象上属性，无法多继承。
* 构造函数式继承
    b的构造函数中写入aguments
    只能继承构造函数属性，相互独立不共享，可以多继承，
* 组合式继承
    组合两者继承
    开发常用。父类构造函数指向两次，实例存在两次同名屏蔽。
* 原型式继承
    对象继承另外一个对象
* 寄生式继承
    在原型式基础上套函数
* 完美继承
    原型链式继承创建临时对象，prototype继承a，prototype.constructor指向b，b.prototype指向创建的对象的prototype
    代码麻烦

#defer和async区别
defer是延迟执行，由上至下依次执行
async是异步加载，下载完后立即执行
* JavaScript代码加载执行是阻塞
* 两者都是异步方式加载外部文件
* async是node事件触发前执行，defer是文档解析完成后才执行

#Promise
#创建promise对象
new Promise(success,error)
调用then,catch
#promise完成后继续调用

#Promise.all()
接受一个Promise实例数组作为参数。所有决议值传给回调
#Promise.race()
接受一个Promise实例数组作为参数，第一个决议值传给回调

#Promise中then和catch返回值
返回值都是新的promise实例，链式操作的原因
显示返回非promise对象，返回值依旧是promise实例，会立即执行

#promise和try catch
`promise能够捕获异步异常`
promise是能够直接进入reject决议，进入catch处理
try catch是try运行报错后，才会进入catch处理


#ES6 常用
* import / export  模块化导入/导出
* 解构赋值
* let，const
* class 、extends   类的继承
* 函数的拓展

#函数拓展
* 箭头函数  ()=>{}
* 传参数默认值 
* rest参数  ...
* 双冒号使用    {{}}

#字符串拓展
* 字符串模板    ` ${{}} `

#数组拓展
* Array.from
* Array.of

#对象拓展
* 拓展运算符    ...
* 属性表达式
* 解析构赋值 
* Object.assign ,  keys ,   values  ,      
* class类
* promise对象

# bable  es6转换为es5

#箭头函数区别
* 没有aguments对象
* this不会改变




# 事件实现
* 嵌入DOM
    标签中写入事件函数
* 直接绑定
    js中绑定事件函数
* 事件监听
    兼容问题，
    事件委托，提升性能
# 事件流
捕获，目标，冒泡
捕获、目标、冒泡中皆注册事件。捕获、冒泡是事件流顺序处理
`目标阶段事件冒泡顺序是书写顺序`

* stopPropagation()     阻止事件冒泡
* preventDefault()      取消默认行为

* target            属性指向目标的DOM节点
* currentTarget     属性指向当前对象的DOM节点


#网络请求问题
#HTTP状态码
1xx开头 - 信息提示
2**开头 （请求成功）
3** 开头 （请求被重定向）
4**开头 （请求错误）
5**开头（服务器错误）

# 一个页面从输入URL到页面加载显示完成的详细过程

# 实现跨域
* JSONP跨域（JSON with Padding） 是创建script标签，只能get请求，存在安全隐患
* 修改document.domain跨子域,嵌入ifram,
* CORS(Cross-Origin Resource Sharing)跨域资源共享
* window.name+iframe
* 图片ping或script标签跨域
* window.postMessage()
* 修改document.domain跨子域
* WebSocket
* 代理


#继承的两种写法

* ES 5 写法
~~~
 function Human(name){
     this.name = name
 }
 Human.prototype.run = function(){
     console.log("我叫"+this.name+"，我在跑")
     return undefined
 }
 function Man(name){
     Human.call(this, name)
     this.gender = '男'
 }

 var f = function(){}
 f.prototype = Human.prototype
 Man.prototype = new f()

 Man.prototype.fight = function(){
     console.log('糊你熊脸')
 }
~~~

* ES 6 写法（MDN 链接:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes）
 ~~~
 class Human{
     constructor(name){
         this.name = name
     }
     run(){
         console.log("我叫"+this.name+"，我在跑")
         return undefined
     }
 }
 class Man extends Human{
     constructor(name){
         super(name)
         this.gender = '男'
     }
     fight(){
         console.log('糊你熊脸')
     }
 }
~~~

* mixin、柯里化等常见术语
* mixin 混入
* curry 柯里化
* HOC 高阶函数
* Web 性能优化,各个优化



CommmonJS用于node端，是同步加载的
AMD依赖于requirejs,是异步加载的，是提前加载，立即加载 
CMD依赖于seajs,是异步加载，延后加载，就近加载，用时加载 
ES6是ES2015的简称，一般通过export来暴露模块，import来导入模块 

CommonJS
CommonJS模块化规范：
1.通过module.exports或exports来暴露模块
2.通过require来加载模块

AMD是一种异步加载模块的方式，主要用在浏览器环境中。主要依赖于require.js库
AMD模块化规范：
1.通过define()方法定义模块
2.通过require方法加载模块

ES6
模块化规范：
一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。
export 命令用于规定模块的对外接口。
import 命令用于输入其他模块提供的功能。

