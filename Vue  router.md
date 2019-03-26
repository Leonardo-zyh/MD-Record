
#Vue Router
 <!-- 路由匹配到的组件将渲染在这里 -->
 <router-view></router-view>
 <!-- 使用 router-link 组件来导航. -->
<!-- 通过传入 `to` 属性指定链接. -->
<router-link to="/foo">Go to Foo</router-link>

* 动态路径参数 以冒号开头
{ path: '/user/:id', component: User }

* 在嵌套的出口中渲染组件
routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]


* 编程式的导航
声明式	
<router-link :to="...">
编程式
* router.push(...)
router.push({ name: 'user', params: { userId: '123' }})
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
* router.replace(...)
* router.go(n)          history 记录中向前或者后退多少步
router.go(-1)

* 命名视图
<router-view class="view two" name="a"></router-view>
components: {
        default: Foo,
        a: Bar,
        b: Baz
      }

* 重定向
routes: [
    { path: '/a', redirect: '/b' }
  ]

* 路由组件传参
<div>User {{ $route.params.id }}</div>
 routes: [
    { path: '/user/:id', component: User }
  ]      

* vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
#导航守卫
* router.beforeEach注册一个全局前置守卫




#Vuex      Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
Vuex 的状态存储是响应式的。你不能直接改变 store 中的状态。显式地提交 (commit) mutation。


#State      状态
* Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：
 computed: {
    count () {
      return this.$store.state.count
    }
  }

* mapState 辅助函数
import { mapState } from 'vuex'
computed: mapState([
  <!-- 映射 this.count 为 store.state.count -->
  'count'
])


#Getter     计算属性
* Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }

* mapGetters 辅助函数
...mapGetters([
      'doneTodosCount',
      'anotherGetter',
    ])

#Mutation       更改状态，类似事件
* 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件
mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
store.commit('increment')

* mapMutations
...mapMutations([
      'increment', 
      <!--  将 `this.increment()` 映射为 `this.$store.commit('increment')`
       `mapMutations` 也支持载荷： -->
      'incrementBy' 
      <!-- 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)` -->
    ]),
    ...mapMutations({
      add: 'increment' 
      <!-- 将 `this.add()` 映射为 `this.$store.commit('increment')` -->
    })        

#Action     提交Mutation,异步操作
actions: {
  increment ({ commit }) {
    commit('increment')
  }
}

* 分发 Action    
store.dispatch('increment')
* mapActions
...mapActions([
      'increment'          
    ]),


#Module         单一状态树
* 将 store 分割成模块（module）。
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态