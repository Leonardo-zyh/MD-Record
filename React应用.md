这是我的第一个React应用
#Create React App创建
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start

#分析代码
import './index.css'   (引入css) 
import App from './App.js'  (引入js)
ReactDOM.render(<App />,div );  (render,标签渲染且放置在div)

App标签
简写XML,通过JSX转换为js
onClick={function(){alert('hi')}}  花括号内为js，括号外为XML

#代码实时更新（npm start）

#展示页面
npm run-script build
package中加  "homepage" : "https://leonardo-zyh.github.io/react-learn/build",

.gitignore中production去除build，使得能够git add
