
#MVVM模式
(`视图层和数据层的双向绑定，让我们无需再去关心DOM操作的事情，更多的精力放在数据和业务逻辑上去`)
* MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想。
Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；
View 代表UI 组件，它负责将数据模型转化成UI 展现出来，
ViewModel 是一个同步View 和 Model的对象。

* 在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的，因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
* ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

#Vue.js优点  -  面向数据编程
`低耦合`。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
`可重用性`。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
`独立开发`。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。
`可测试`。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写易用灵活高效


#MVC模式
MVC模式（Model-View-Controller）是软件工程中的一种软件架构模式，把软件系统分为三个基本部分：
模型（Model）、视图（View）和控制器（Controller）
* view是页面控制，el是选择器，template是模板内容，render是渲染到页面的过程
* model是数据库，接受输出data对象
* controller是控制器，init初始化，所有模块都会在这里执行

#订阅发布模式
* eventHub(事件中心)
emit是发布事件
on是监听事件

#MVC的优点
* 低耦合性
视图层和业务层分离，这样就允许更改视图层代码而不用重新编译模型和控制器代码，同样，一个应用的业务流程或者业务规则的改变只需要改动MVC的模型层即可。因为模型与控制器和视图相分离，所以很容易改变应用程序的数据层和业务规则。
* 高重用性和可适用性
　 　随着技术的不断进步，现在需要用越来越多的方式来访问应用程序。MVC模式允许你使用各种不同样式的视图来访问同一个服务器端的代码。它包括任何 WEB（HTTP）浏览器或者无线浏览器（wap），比如，用户可以通过电脑也可通过手机来订购某样产品，虽然订购的方式不一样，但处理订购产品的方式是 一样的。由于模型返回的数据没有进行格式化，所以同样的构件能被不同的界面使用。例如，很多数据可能用HTML来表示，但是也有可能用WAP来表示，而这 些表示所需要的命令是改变视图层的实现方式，而控制层和模型层无需做任何改变。
* 较低的生命周期成本
　　MVC使开发和维护用户接口的技术含量降低。
* 快速的部署
　　使用MVC模式使开发时间得到相当大的缩减，它使程序员（Java开发人员）集中精力于业务逻辑，界面程序员（HTML和JSP开发人员）集中精力于表现形式上。
* 可维护性
　　分离视图层和业务逻辑层也使得WEB应用更易于维护和修改。
* 有利于软件工程化管理
　　由于不同的层各司其职，每一层不同的应用具有某些相同的特征，有利于通过工程化、工具化管理程序代码。

#   Vue组件
有结构HTML
有样式CSS
有交互（效果）
行为
信号量存数据








#环境搭建，入口
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17-beta.0/vue.min.js"></script>
#实例挂载
var app = new Vue({
    el:'#id',   //实例挂载DOM中
    data:{      //双向绑定数据
        msg:2
    }           
})
#挂载点    实例指定的节点为挂载点

#访问Vue实例属性
app.$el     app.$date

#访问date元素的属性(直接访问date数据)
app.msg

#生命周期(钩子)
created:function(){alert('创建完成，还未挂载')},
mounted:function(){alert('已经挂载马上渲染')}

#文本插值   {{msg}}    v-text/v-html
`Vue.js 只支持单行表达式，不支持语句和流控制`
{{ 6+6 *3}}                 可以进行简单的运算
{{ 6<3 ? msg :a}}           可以用三元运算符
{{if(6>3){}}                注意：文本插值的形式，其中不能书写表达式,支持单个表达式
{{var a = 6}}               也是多行表达式----var a ;a = 6;



#过滤器 - filters对象
`Vue. 支持在｛｛｝｝插值的尾部添加一小管道符 “ | ” 对数据进行过滤，`
经常用于格式化文本，比如字母全部大写、货币千位使用逗号分隔等。
过滤的规则是自定义的， 通过给 Vue 实例添加选项 filters 来设置
过滤器：{{ data | filter1 |filter2}}
{{date | formatDate(66,99)}} 中的第一个和第二个参数，分别对应过滤器的第二个和第三个参数



#v-text     解析文本字符串,转译
#v-html     解析html文本
#v-bind     绑定活的属性，动态更新HTML元素上的属性，比如 id 、class 等,
#v-model    双向绑定
#v-on       绑定事件监听
vue实例中用 到的`所有方法都定义在methods中`

#语法糖     //点击同时改变
语法糖是指在不影响功能的情况下 ， 添加某种简洁方法实现同样的效果 ， 从而更加方便程序开发。
`v-bind ——> : (冒号)`
`v-on ——> @`

#计算属性  -  computed对象
所有的计算属性都以函数的形式写在 Vue 实例内的computed 选项内，最终返回计算后的结果。
`只要其中任一数据变化，计算属性就会重新执行，视图也会更新`
`模板内的表达式实际上只用于简单的运算，对于复杂逻辑，使用计算属性。`
computed对象有get和set方法，如果直接跟function，使用getter函数
计算属性可以依赖其他计算属性。
计算属性不仅可以依赖当前 Vue 实例的数据，还可以依赖其他实例的数据
#方法 - methods对象  ( 如果调用方法，页面重新渲染，方法重新执行)

#计算属性缓存   依赖属性变化才会重新计算
`调用 methods 里的方法也可以与计算属性起到同样的作用`
页面中的方法： 如果是调用方法，只要页面重新渲染。方法就会重新执行，不需要渲染，则不需要重新执行
计算属性：不管渲染不渲染，只要计算属性依赖的数据未发生变化，就永远不变

结论: 没有使用计算属性，在 methods 里定义了一个方法实现了相同的效果，甚至该方法还可以接受
参数，使用起来更灵活。既然使用 methods 就可以实现，那么为什么还需要计算属性呢？
`原因就是计算属性是基于它的依赖缓存的。一个计算属性所依赖的数据发生变化时，它才会重新取值，所以text 只要不改变，计算属性也就不更新`
何时使用:使用计算属性还是 methods 取决于你是否需要缓存，当遍历大数组和做大量计算时，应当使用计算属性。

#案例：https://jsfiddle.net/50wL7mdz/412206/




#v­-bind的复习
动态更新HTML元素上的属性，比如 id 、class 等，数据变化时页面绑定就会变化。


#绑定 class 的几种方式

#变量语法
`v-bind：class = "变量"，变量形式 ,这里的变量的值，通常是在css定义好的类名；`
     v-bind:href="www.baidu.com"

#对象语法
`v-­bind:class 设置一个对象，可以动态地切换 class `
     :class="{divstyle:isActive}    (isActive值对应true ,false)
    当 class 的表达式过长或逻辑复杂时，还可以绑定一个计算属性

#数组语法
`当需要应用多个 class 时， 可以使用数组语法` ， 
     v-bind:class= "[变量1，变量2]" 



#绑定内联样式   (用 v-­bind:style)
vue中只要是大写字母，就会转化为-加小写。(A -a)
注意 : css属性名称使用驼峰命名(came!Case) 或短横分隔命名(kebab­case)
:style="{'color':color,'font-size':fontSize+'px'}"

* 应用多个样式对象时 ， 可以使用数组语法 ：在实际业务 中,style 的数组语法并不常用 ， 
    因为往往可以写在一个对象里面 ： 而较为常用 的应当是计算属性
* 使用 :style 时， Vue .js 会自动给特殊的 css 属性名称增加前缀， 比如 transform 。
* 无需再加前缀属性！！！！


#监听器  -  watch
监听数据变量发生变化，进行函数逻辑运算

#案例：https://jsfiddle.net/50wL7mdz/412252/
~~~
watch: {
		firstName: function(current) {
				this.firstName = current
				this.fullName = this.firstName + this.lastName
		},
	}
~~~




`内置命令`
#v-­cloak             一般与display：none进行结合使用。防止闪烁
#v-once              定义它的元素和组件只渲染一次，不再进行渲染

`条件渲染指令`
#v-­if, v­-eles-­if ,v­-else    用法： 必须跟着屁股走
* v-if的弊端：    Vue 在渲染元素时 ，会复用已有的元素而非重新渲染， 因此只会渲染变化的元素，input元素被复用。
* 解决方法：      加key，唯一，提供key值可以来决定是否复用该元素               

#v-if和v-show,布尔值为trun显示。
v-if="show"         实时渲染：页面显示就渲染，不显示就移除
v-show="show"       元素永远存在页面中，只改变了css属性display，

#v-if 与 v-for 一起使用
当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。

#v-for          当需要将一个数组遍历或枚举一个对象属性的时候循环显示(列表)
遍历多个对象,遍历一个对象的多个属性
可以用 of 替代 in 作为分隔符，JavaScript 迭代器的语法
`v-for="vueMth in list" `
`v-for="(item,index) of lest" :key="index"`

#key
当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。
数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序
`不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。`
给 Vue 一个提示，以便它能跟踪每个节点的身份,需要为每项提供一个唯一 key 属性。

#数组更新，过滤与排序
• push()            在末尾添加元素
• pop()             将数组的最后一个元素移除
• unshift()         在数组的第一个元素位置添加一个元素
• shift()           删除数组的第一个元素
• splice()          可以添加或者删除函数—返回删除的元素
                    * 第一个参数 表示开始操作的位置
                    * 第二个参数表示：要操作的长度
                    * 第三个为可选参数，添加数据。
• sort（）：        排序
• reverse()

# 两个数组变动,vue可能检测不到:
*  改变数组的指定项(set方法)         Vue.set(app.arr,1,'car')
*  改变数组长度(splice方法)          app.arr.splice(1)       

#过滤：filter
this.arr.filter((book)=>{return book.match(/oo/);}
arr必须是数组字符串


#方法和事件
事件名和数据变量名会冲突，
如果方法中带有参数，但是没有加括号，默认传原生事件对象event[object MouseEvent]

#监听事件，v-on修饰符
在vue中传入event对象用 $event

向上冒泡：
stop            阻止单击事件向上冒泡
prevent         提交事件并且不重载页面(form表单上)
self            只是作用在元素本身而非子元素的时候调用(互不干涉)
once            只执行一次的方法
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当事件在该元素本身（比如不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>

#可以监听键盘事件：
<input @keyup.13 ="submitMe"> ——­指定的keyCode
vueJS为我们提供了：
.enter
.tab
.delete
 




#表单与v-­model         用于在表单类元素上双向绑定事件
可以用于input框，以及textarea等
注意： 所显示的值只依赖于所绑定的数据，不再关心初始化时的插入的value

#单选按钮
单选按钮，直接用`v­-bind`绑定一个布尔值，不可以用v­-model
多个单选框组合使用，就需要`v­-model`来配合value使用，绑定选中的单选框的value值
#复选框
单个复选框，直接用定一个布尔值，可以用`v­-model`可以用`v­-bind`
多个复选框 ，需要`v­-model`来配合value使用，v-­model绑定一个数组,
如果绑定的是字符串，会转化为true、false，与所有绑定的复选框的checked属性相对应
#下拉框
如果是单选，所绑定的value值初始化可以为数组或字符串，有value直接优先匹配一个value值，没有value就匹配一个text值
如果是多选，就需要v­-model来配合value使用，v­-model绑定一个数组，与复选框类似
v­-model一定是绑定在select标签上
#总结一下：如果是单选，初始化最好给定字符串，因为v­-model此时绑定的是静态字符串或者布尔值


#绑定值
单选按钮：  只需要用v-­bind给单个单选框绑定一个value值，此时，v­-model绑定的就是他的value值
复选框、下拉框：    在select标签上绑定value值对option并没有影响
<input type="checkbox" v-model="toggle" :true-value="value1" :false-value="value2">

#修饰符-
lazy        v-­model默认是在input输入时实时同步输入框的数据，而lazy修饰符，可以使其在失去焦点或者敲回车键之后在更新
number      将输入的字符串转化为number类型
triz        trim自动过滤输入过程中收尾输入的空格






#Vue组件   (每一个组件都是Vue的实例)
#使用组件的原因
作用：提高代码的复用性
组件名就是 Vue.component 的第一个参数

#全局注册
Vue.component('todo-item',{template:'<li>item</li>'})
<todo-item></todo-item>
优点：所有的nue实例都可以用
缺点：权限太大，容错率降低

#局部注册
components:{'todo-item':{template:'<li>item</li>'}
<todo-item></todo-item>

#限制
`table中使用组件无效需使用is属性。<table is="todo-item"></tbody>`


#组件使用的奇淫技巧
1. 推荐使用小写字母加­进行命名（必须） child, my-­componnet命名组件

2. template中的内容必须被一个DOM元素包括 ，也可以嵌套。

3. 在组件的定义中，除了template之外的其他选项 — data,computed,methods

4. data必须是一个方法



#组件传递参数
`使用props传递数据 父组件向子组件传递数据`
1. 在组件中使用props来从父亲组件接收参数，注意:在props中定义的属性，可以在组件中直接使用

2. props来自父级，而组件中data return的数据就是组件自己的数据，两种情况作用域就是组件本身，可以在template，computed，methods中直接使用

3. props的值有两种，一种是字符串数组，一种是对象，本节先只讲数组

4. 可以使用v-­bind动态绑定父组件来的内容。
~~~
    <todo-item content="Vue的组件"></todo-item>

    Vue.component('todo-item',{
        props:['title', 'likes', 'isPublished', 'commentIds', 'author']
        //props: {title: String,likes: Number,isPublished: Boolean,commentIds: Array,author: Object}
        template:'<li>{{content}}</li>'})
~~~

#单向数据流
通过` props 传递数据` 是单向的了， 也就是父组件数据变化时会传递给子组件，但是反过来不行。
目的是尽可能将父子组件解稿，避免子组件无意中修改了父组件的状态。
业务场景：业务中会经常遇到两种需要改变 prop 的情况

# 一种是父组件传递初始值进来，子组件将它作为初始值保存起来，
在自己的作用域下可以随意使用和修改。这种情况可以在组件 data 内再声明一个数据，引用父组件的 prop
步骤一：注册组件
步骤二：将父组件的数据传递进来，并在子组件中用props接收
步骤三：将传递进来的数据通过初始值保存起来

~~~
    <my-comp init-count="666"></my-comp>

    var app = new Vue({
            el:'#app',
            components:{
                'my-comp':{
                    props:['init-count'],
                    template:'<div>{{init-count}}</div>',
                    data:function () {
                        return{
                            count:this.initCount
        }}}}})
~~~



# 另一种情况就是 prop 作为需要被转变的原始值传入。这种情况用计算属性就可以了
步骤一：注册组件
步骤二：将父组件的数据传递进来，并在子组件中用props接收
步骤三：将传递进来的数据通过计算属性进行重新计算

~~~
    <my-component :width="width"></my-component>
    
    Vue.component('my-component', {
            props: ['width'],
            template: '<div :style="style">Vue的全局组件</div>',
            computed: {
                style: function () {
                    return {
                        width: this.width + 'px',
                        background: 'red'
                    }
                }
            }
        })
~~~


#数据验证   (html中不驼峰,传递数据短横线,template中驼峰,data中驼峰)
@ vue组件中camelCased (驼峰式) 命名与 kebab­case（短横线命名）

* @ 在html中, myMessage 和 mymessage 是一致的,
    因此在组件中的html中使用必须使用kebab­case（短横线）命名方式。`在html中不允许使用驼峰`！！！！！！

* @ 在`组件中, 父组件给子组件传递数据必须用短横线`。
    `在template中，必须使用驼峰命名方式`，若为短横线的命名方式。则会直接保错。

* @ `在组件的data中,用this.XXX引用时,只能是驼峰命名`方式。
    若为短横线的命名方式，则会报错。




#验证的type 
* 类型可以是：String 、  Number 、 Boolean 、  Object 、  Array 、  Function

~~~
    Vue.component （ 'my-compopent'， ｛
        props : {
                    ／／必须是数字类型
            propA : Number ,

                    ／／必须是字符串或数字类型
            propB : [String , Number] ,

                    ／／布尔值，如果没有定义，默认值就是 true
            propC: {
                type : Boolean ,
                default : true
            },

                    ／／数字，而且是必传
            propD: {
                type: Number ,
                required : true
            },
                    ／／如果是数组或对象，默认值必须是一个函数来返回
            propE: {
                type : Array ,
                default : function () {
                return [] ;
                }
            },
                    ／／自定义一个验证函数
            propF: {
                validator : function (value) {
                return value > 10;
        }}}});
~~~


# 组件通信
组件关系可分为父子组件通信、兄弟组件通信、跨级组件通信
自定义事件—子组件给父组件传递数据
使用v­-on 除了监昕 DOM 事件外，还可以用于组件之间的自定义事件。
`JavaScript 的设计模式` 一一观察者模式， dispatchEvent 和 addEventListener这两个方
法。 Vue 组件也有与之类似的一套模式，

子组件用`$emit()来 触发事件` ，父组件用`$on()来 监昕子组件的事件` 。
* 第一步： 自定义事件
* 第二步： 在子组件中用$emit触发事件，第一个参数是事件名，后边的参数是要传递的数据
* 第三步： 在父组件用v-on监听事件来接受参数，然后赋值到data数据中

* 实例代码：https://jsfiddle.net/50wL7mdz/761651/



# 在组件中使用v­-model
`v-model可以代替父组件的监听，$emit触发input事件。`
$emit的代码,这行代码实际上会触发一个 input事件, ‘input’后的参数就是传递给v­-model绑定的属性的值

#v-­model 其实是一个语法糖，这背后其实做了两个操作
* v-­bind 绑定一个 value 属性
* v-­on 指令给当前元素绑定 input 事件

#要使用v-­model,要做到:
* 接收一个 value 属性。
* 在有新的 value 时触发 input 事件
~~~
    <btn-compnent v-model="total"></btn-compnent>
    data:{
        total:0
    },
    
    this.$emit('input',this.count);
~~~




# 非父组件之间的通信
* 父链：this.$parent
* 子链：this.$refs      (提供了为子组件提供索引的方法，用特殊的属性ref为其增加一个索引)
hods:{
    getChildData:function () {     
        //用来拿子组件中的内容 ---- $refs
        this.formchild = this.$refs.c.msg;
    }

* 实例代码：https://jsfiddle.net/50wL7mdz/761652/




## 使用slot分发内容

#编译的作用域
在深入内容分发 API 之前，我们先明确内容在哪个作用域里编译。假定模板为：
<child-component>
{{ message }}
</child-component>

message 应该绑定到父组件的数据，还是绑定到子组件的数据？
答案是`父组件`。组件作用域简单地说是：
* 父组件模板的内容在父组件作用域内编译；
* 子组件模板的内容在子组件作用域内编译。


#什么是slot(插槽)
为了让组件可以组合，我们需要一种方式来混合父组件的内容与子组件自己的模板。这个过
程被称为 内容分发.Vue.js 实现了一个内容分发 API，使用特殊的 ‘slot’ 元素作为原始内容的
插槽。


#插槽的用法
父组件的内容与子组件相混合，从而弥补了视图的不足
混合父组件的内容与子组件自己的模板。
组件物内容可显示slot内容
* 单个插槽：
    <div id="app" >
        <my-component>
            <p>我是父组件的内容</p>
        </my-component>
    </div>

        Vue.component('my-component',{
            template:'<div>\
                        <slot>\
                        如果父组件没有插入内容，我就作为默认出现\
                        </slot>\
                    </div>'
        })

* 具名插槽：



# 作用域插槽
`作用域插槽是一种特殊的slot，使用一个可以复用的模板来替换已经渲染的元素 -- 从子组件获取数据`
`template模板是不会被渲染的`

~~~
    Vue.component('my-component',{
    template:'<div>\
    <slot text="我是来自子组件的数据" ss="fdjkfjlsd" name="abc"
    >\
    </slot>\
    </div>'
    })
~~~



## 访问slot
* 通过this.$slots.(NAME)
~~~
    mounted:function () {
    //访问插槽
    var header = this.$slots.header;
    var text = header[0].elm.innerText;
    var html = header[0].elm.innerHTML;
    console.log(header)
    console.log(text)
    console.log(html)
    }
~~~



# 组件高级用法–动态组件
VUE给我们提供 了一个元素叫component
* 作用是： 用来动态的挂载不同的组件
* 实现：`使用is特性来进行实现`
`<component :is="thisVuew"></component>`



# 自定义指令
自定义指令的基本用法
和组件类似分全局注册和局部注册，区别就是把component换成了derectiv



## render函数初步了解
不使用render函数，template下只允许有一个子节点


#render函数的第一个参数
在render函数的方法中，`第一个参数必须是createElement`,createElement的类型是function。
render函数的第一个参数可以是 String | Object | Function

#render函数的第二个参数
第二个参数可选,`第二个参数是数据对象----只能是Object`
可以写入 类、内联样式、html属性、原生的DOM属性

#render函数的第三个参数
`第三个参数也是可选===String | Array`
作为我们构建函数的子节点来使用 的


# this.$slots在render函数中的应用
`第三个 参数存的就是VNODE`
createElement(‘header’,header), 返回的就是VNODE
var header = this.$slots.header; //–这返回的内容就是含有=VNODE的数组


# 在render函数中使用props传递数据
:show="show"
props:['show'],

# v­-model在render函数中的使用
接受从子组件传递的数据，赋值给绑定的变量
var a = this;
//此处的this指的是什么？指的就是window
self.$emit('input',event.target.value)


#作用域插槽在render函数中的使用
<template scope="prop">
{{prop.text}}
</template>
相当于  <div><slot :text="text"></slot> </div>


# 函数化组件的应用
使用context的转变,得到上下文对象
`functional: true,表示该组件无状态无实例`
`render :function(createElement,context)`
`console.log(context.props.value);`
* this.text   -               context.props.text
* this.$slots.default -       context.children


#Vue响应式原理
* Vue通过Object.defineProperty的 getter/setter 对收集的依赖项进行监听,在属性被访问和修改时通知变化,进而更新视图数据；
* Vue是通过数据劫持的方式来做数据绑定的，其中最核心的方法便是通过Object.defineProperty()来实现对属性的劫持，达到监听数据变动的目的。发布者通知所有订阅者更新内容。
其实在 Vue 中初始化渲染时，视图上绑定的数据就会实例化一个 Watcher，依赖收集就是是通过属性的 getter 函数完成的，文章一开始讲到的 Observer 、Watcher 、Dep 都与依赖收集相关。其中 Observer 与 Dep 是一对一的关系， Dep 与 Watcher 是多对多的关系，Dep 则是 Observer 和 Watcher 之间的纽带。依赖收集完成后，当属性变化会执行被 Observer 对象的 dep.notify() 方法，这个方法会遍历订阅者

