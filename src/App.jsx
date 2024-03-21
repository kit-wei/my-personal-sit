import React from "react"
import Header from "./components/header/Header"
import {Outlet,useLocation} from 'react-router-dom'
import './App.css'
function AppPage(){
  const location = useLocation();
  let pathName = location.pathname;
  let nav_index = 1;
  if(pathName.includes('/shop')){
    nav_index = 2;
  }
  if(pathName.includes('/new-photos')){
    nav_index = 3;
  }
  if(pathName.includes('/blog')){
    nav_index = 4;
  }
  return(
    <App idx={nav_index}></App>
  )
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navIndex:props.idx,
    }
    this.changeIndex = this.changeIndex.bind(this);
  }
  changeIndex = (index)=>{
    this.setState({
      navIndex:index
    })
  }
  render(){
    return (
      <>
        <div>
          <Header navIndex={this.state.navIndex} onChange={this.changeIndex}></Header>
          <div className="main-box">
            <Outlet></Outlet>
          </div>
        </div>
      </>
    )
  }
}

export default AppPage
