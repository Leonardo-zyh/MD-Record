//reslove接受函数作为参数
function exam (){
    return new Promise(function(reslove,reject){
      var score = Math.floor(Math.random()*101)  
      if(score>=90){
        reslove(score)
      }else{
        console.log('no');
             
        setTimeout(()=>reslove(exam())
        , 1000);
      }
    })
    
  }
  
  exam().then(score=>{console.log('ok',score);
  })
  


  $('.child').on('click',function(){
    console.log(this);        //child DOM
  })
  $('.father').on('click','.child',function(){
    console.log(this);        //child DOM
    
  })
  $('.child')[0].onclick=function(){
    console.log(this);         //child DOM   
  }
  var app ={
    init:function(){
      this.$father = $('.father')     //app对象
      this.$child = $('.child')     //app对象
      this.bind()                   //app对象
    },
    bind:function(){
      var _this=this                          //app对象
      this.$father.on('click',this.sayHi)     //app对象
      this.$child.on('click',function(){     //app对象
        _this.sayHellow()
      })
      this.$child.on('click',this.sayBye.bind())     //app对象
    },
    sayHi:function(){
      console.log(this);        //father
    },
    sayHellow:function(){
      console.log(this)         //app对象
    },
    sayBye:function(){
      console.log(this)         //app对象
    }
  }
  



*  ["1", "2", "3"].map(parseInt)
  // parseInt(currenValue, index)
  parseInt('1', 0)    // 1
  parseInt('2', 1)    // NaN
  parseInt('3', 2)    // NaN

* [typeof null, null instanceof Object]
  //typeof 返回一个表示类型的字符串
  // instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上.
  [Object, false]

* [ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]
  //Math.pow(3, 2)    // 9
  //Math.pow(9, 1)    // 9  
  //an error


//
  var val = 'smtg';
  console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
  //+的优先级大于？
  console.log('Value is true' ? 'Something' : 'Nothing')
  Something


//
  var END = Math.pow(2, 53);
  var START = END - 100;
  var count = 0;
  for (var i = START; i <= END; i++) {
      count++;
  }
  console.log(count);
  other


//
  var ary = [0,1,2];
  ary[10] = 10;
  ary.filter(function(x) { return x === undefined;});
  //但是当你遍历它时,你会发现,它并没有元素。
  []


//
  var two   = 0.2
  var one   = 0.1
  var eight = 0.8
  var six   = 0.6
  [two - one == one, eight - six == two]


//
  function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
      }
  }
  showCase(new String('A'));
  //在switch里，比较用的是 ===,答案是 Do not know!

//

  for (var i = 0; i < 5; i++) {
      setTimeout(function() {
          console.log(new Date, i);
      }, 1000);
  }
  console.log(new Date, i);
  '5 -> 5,5,5,5,5'

//
const tasks = [];
for (var i = 0; i < 5; i++) {   // 这里 i 的声明不能改成 let，如果要改该怎么做？
    ((j) => {
        tasks.push(new Promise((resolve) => {
            setTimeout(() => {
                console.log(new Date, j);
                resolve();  // 这里一定要 resolve，否则代码不会按预期 work
            }, 1000 * j);   // 定时器的超时时间逐步增加
        }));
    })(i);
  }

  Promise.all(tasks).then(() => {
      setTimeout(() => {
          console.log(new Date, i);
      }, 1000);   // 注意这里只需要把超时设置为 1 秒
  });



//
function Foo() {
  getName = function () { alert (1); };
  return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//请写出以下输出结果：
Foo.getName();    
getName();      
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();  
2,4,1,1,2,3,3

//
Array.prototype.indexOf = function(val){  
  return this.join('').indexOf(val.join(''))
}


[1 < 2 < 3, 3 < 2 < 1]
答案是 [true, true]