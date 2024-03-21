import React from "react";
import {Outlet,useNavigate} from 'react-router-dom'
import './Main.less'
function Header(props){
    const index = props.index;
    const activeIndex = props.activeIndex;
    const name = props.name;
    const path = props.path;
    const navigate = useNavigate();
    const changeNav = () =>{
        navigate(path)
        props.onClick(index);
    }
    return(
        <span onClick={changeNav} className={`navTxt ${activeIndex === index?'isActive':''}`}>{name}</span>
    )
}
class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex:1,
            navList:[
                {
                    name:'Art Projects',
                    id:1,
                    path:'/'
                },{
                    name:'Photographes',
                    id:2,
                    path:'/photographes'
                },{
                    name:'Nature',
                    id:3,
                    path:'/nature'
                },{
                    name:'Models',
                    id:4,
                    path:'/models'
                }
            ]
        }
        this.changeIndex = this.changeIndex.bind(this);
    }
    changeIndex(index){
        this.setState({
            activeIndex:index
        })
    }
    render(){
        return(
            <>
                <div className="w-full h-full">
                    <div className="head-img"></div>
                    <div className="body-box">
                        <div className="my-info">
                            <div className="info">
                                <div className="user-head flex items-center">
                                    <div className="avatar"></div>
                                    <div className="left-info">
                                        <span className="text-lg font-[500] text-[#000]">Awei Sir</span>
                                        <span className="text-sm text-[#000]">Personal introduction</span>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024" data-v-ea893728="">
                                                <path fill="#666" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32"></path>
                                                <path fill="#666" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"></path>
                                                <path fill="#666" d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320"></path>
                                            </svg>
                                            <span className="text-sm text-[#000] ml-2">China</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024" data-v-ea893728="">
                                                <path fill="#666" d="M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450m0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5m253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125"></path>
                                                <path fill="#666" d="M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125"></path>
                                                <path fill="#666" d="M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"></path>
                                            </svg>
                                            <span className="text-sm text-[#000] ml-2">Male</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="nav-header flex items-center">
                                {
                                    this.state.navList.map((e,index)=>{
                                        return(
                                            <Header index={index+1} name={e.name} path={e.path} onClick={this.changeIndex}  activeIndex={this.state.activeIndex} key={e.id}></Header>
                                        )
                                    })
                                }
                            </div>
                            <div className="pl-[50px]">
                                <Outlet></Outlet>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default MainPage;