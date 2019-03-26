#react,JSX
~~~
function render(){
    let h = React.createElement
    ReactDOM.render(
    h('div',{className:'parent'},
    h('span',{className:'red'},number),
    h('button',{onClick:onClickButton},'+'),
    h('button',{onClick:onClickButton2},'-')
    ),
    document.querySelector('#root'))
}
~~~

/*React.createElement('div),
  babeljs.io 可以转换JSX    
  <div class='parent'>
  <span class='red'>{number}</span>
  <button onClick={onClickButton}>+</button>
  <button onClick={onClickButton2}>-</button>
  </div>*/



#组件
//`只能设置函数里的对象和属性`
import React from 'react'

class App extends React.Component {     //`App继承React组件`
    constructor(props) {    //`构造函数（传入属性）`
        super(props)
        this.state = {      //`自有属性`
            number: 0
        }
    }
    add() {
        this.setState({ //`设置状态`
            number: this.state.number + 1
        })
    }
    minus() {
        this.setState({ 
            number: this.state.number - 1
        })
    }
    render() {  //`局部render`
        return (//`.bind(this)来绑定this`    
            <div>
                <span>{this.state.number}</span>
                <button onClick={this.add.bind(this)}>+</button>   
                <button onClick={this.minus.bind(this)}>-</button>
            </div>
        )
    }
}

#组合控件
class App extends React.Component {  //首字母必须大写
    return(
        <div>
        <Box1 name='jake'/>
        <Box2 name='rose'/>
        </div>  
    )
}

#引用控件
ReactDOM.render(
        <App />, //React.createlement(App)
        document.querySelector('#root')
    )

`class组件案例：http://js.jirengu.com/midoyuluci/1/edit?html,js,output`