#配置 npm 淘宝源
npm config set registry https://registry.npm.taobao.org/
#安装
npm install typescript@2.9.2 -g
npm install ts-node@7.0.0 -g

#Windows 用户，这里需要单独运行一些命令
 npm init -y
 npm i -D ts-node typescript

#配置 tsconfig.json
主要是将 sourceMap 设置为true。
~~~
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": true,
        "outDir": "./dist",
        "sourceMap": true
    },
    "include": [
        "src/**/*"
    ]
}
~~~

#配置 launch.json
打开 DEBUG 界面，添加 配置
或者编辑 /.vscode/launch.json。
~~~
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Current TS File",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/node_modules/ts-node/dist/_bin.js",
            "args": [
                "${relativeFile}"
            ],
            "cwd": "${workspaceRoot}",
            "protocol": "inspector"
        }
    ]
}
~~~
#转换 tsc -w index.html

#调试
* 打开要调试的 ts 文件，添加debugger。
* 打开 debug 界面。
* 在DEBUG后 选择 launch.json 中对应的配置，此处为Current TS File。
* 点击运行按键或者按 F5 运行。

#最简单的命令行程序
#!/usr/bin/env ts-node
console.log('hello world')
"lib":["es2015","dom","es2016","es2017","es2018",]      声明版本

#加法
const a: number = parseInt(process.argv[2]);    parseInt类型转换
 process.exit(1)                                过程 

#族谱
class类
public chlidren     公共初始化
name:string         定义属性
n?: number          n未定义

#split()
'0123456789'.split('')    分割成字符串数组

#变量，类型
textList:Array<string>

#calculator-demo优化
给所有代码加上注释，
把注释放到class
代码顺序放到construction



`基础类型`
#JS 七种类型 + 枚举 + any + void + never
#any    不确定类型
不清楚类型的变量指定一个类型。
#枚举
enum类型是对JavaScript标准数据类型的一个补充。
#void   表示没有任何类型
当一个函数没有返回值时，其返回值类型是 void
#Null 和 Undefined
和 void相似，它们的本身的类型用处不是很大.可以赋值任何类型。
~~~
enum Gender {
  Man = 'man',
  Woman = 'woman',
}

let gender: Gender = Gender.Man
console.log(gender);
gender = Gender.Woman;
console.log(gender);
~~~

#类型断言(函数)
主观上确保类型，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
let n: any = "this is a string";
let strLength: number = (`<string>n`).length;

#ts无法隐式转换
#用JSON.stringify()把对象转化为字符串
#用JSON.parse()把字符串变对象

#var不要用，let不能重复赋值，const不能改的常量但可以改引用

#对象的解构。
let {name,age,nation} = obj
{
    let arr = ['a','b','c']
    let [a,b,c] = arr
}
function sayHi({name,age}){}

#展开运算
let a = [1,2,3]
let b = [4,5,6]
let c = [...a,...b]


##接口  (就是告诉你有什么)
#interface      描述一个对象必须有哪些属性
`当一个函数是一个对象的属性时，我们把这个函数称为对象的方法`

#只读属性   
做为变量使用的话用 const，若做为属性则使用readonly。
~~~
interface Human{
    readonly name: string,
    readonly age: number
}
~~~

#想要传入 Interface 之外的属性，可以：

* 使用类型断言
 let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
* 使用索引签名
 interface SquareConfig {
     color?: string;
     width?: number;
     [propName: string]: any;
 }
* 使用临时变量（不推荐）
接口就是用代码描述一个对象必须有什么属性。

`? 表示随意存在`

#如果这个属性是函数怎么办？
interface Human{
    name: string,
    age: number,
    add(a:number, b:number): number
}

#如果这个对象是函数怎么办？
interface SearchFunc {
    (source: string, subString: string): boolean;
}

#如果这个对象是函数，而且这个对象的属性也是函数怎么办？
~~~
interface 二则运算 {
    (a: number, b: number): number;
    逆运算(a: number, b: number): number;
}
let fn = (): 二则运算 => {
    let x: any = function(a: number, b: number): number {
        return a + b;
    };

    x.逆运算 = function(a: number, b: number): number {
        return a - b;
    };
    return x;
}

let add: 二则运算 = fn();
console.log(add(1, 2));
~~~

#如果这个对象是数组怎么办？
~~~
interface StringArray {
[index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
~~~

#interface可以继承(类型重复不同就报错)
`interface Animal{}`
`interface Human extends Animal{}`





##类
接口是低配类，类是高配接口

#声明类
class Point(){}
let frank = new Point()

#声明对象的非函数属性/函数属性，使用constructor。
~~~
    constructor(x=1,y=2){  
        this.x = x;
        this.y = y
        this.move()
    }
    move():void{
        console.log('move');  
    }
~~~

#static 声明类属性/静态属性
static xxx = 1
console.log(Point.xxx);

#class中this指向当前对象实例

#类继承
class a extends b{}
constructor中必须有 super()

#修饰符(作用范围)
#private         私有属性(作用域class)
#public          默认属性
#protected       作用域class和子代

#get/set模式
~~~
    private _age:number
    get age(){
        return this._age
    }
    set age(value:number){
        if(value<0){
            this._age=0
        }
    }
~~~
#抽象类一定有子类，当基类(爸爸)用，不能实例化
~~~
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
~~~ 


##函数       特殊的对象，可以被调用
方法         如果一个函数是另外一个对象的属性，就又叫做方法。

#形参，实参。
形参是声明arguments变量。arguments[i]]表示第几个参数。
实参是传入的参数

#this是参数
this就是call的第一个参数
prientThis.call(this,argument)
add.call(undefined,1,2)

#箭头函数
没有this和arguments只作为参数引用。
let fn = (a:number,b:number)=>{
    return a+b
}


##泛型
一个组件可以支持多种(广泛)类型的数据。
#泛型变量
function returnIt<T>(arg:T[])：T[]{}

#泛型类型   T当做类型占位符。
~~~
    function identity<T>(arg: T): T {return arg;}
    let myIdentity:<T>(arg: T) => T = identity;
    let stringAdd:identity<string> = (a1:string,b1:string):string=>{}
~~~
#泛型约束
~~~
    interface Lengthwise {length: number;}
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);
        return arg;
    }
~~~
#泛型使用类
~~~
    function create<T>(c: { new(): T }) {return new c()}
        class Humer { }
        let frank = create<Humer>(Humer)
~~~


#this   是上下文判断(你所需要的)，在每次调用时改变
#this是个参数
点击事件是点击事件
构造函数是实例
函数是window
对象内函数是对象
let fn=b.a   fn()是window 

##重载      支持多个函数，不支持不同个数参数
function add(n1:number,n2:number)
function add(n1:string,n2:string)
function add(a,b){
    return a+b
}

#类型兼容性
TypeScript里的类型兼容性是基于结构子类型的。
interface Human{name:string,age:number}
let y = { name: 'Alice',age:21, location: 'Seattle' };
x = y;
#soundness   可靠性