import React,{Component} from 'react'
import {NavLink,Route} from 'react-router-dom'
// 引入路由组件
import Home from './pages/Home'
import About from './pages/About'
// 引入一般组件



import Header from './components/Header'
// 创建并暴露App外壳组件
//SPA 单页面多组件
export default class App extends Component{
  render() {
        return(
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*          <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a>*/}
                        {/*  在原生html中，靠<a>跳转不同页面  */}
                        {/*  React中靠路由链接Link实现切换组件 --编写路由链接 */}
                            <NavLink activeClassName="route-demo" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="route-demo" className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                      <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                            {/*  注册路由  */}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
  }
}

