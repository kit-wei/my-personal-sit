import {useNavigate} from 'react-router-dom'
import './Header.less'
export default function Header(props){
    const navIndex = props.navIndex;
    const navigate = useNavigate();
    function changeNav(index,path){
        navigate(path);
        props.onChange(index);
    }
    const navList = [
        {
            name:'首页',
            id:1,
            path:'/',
        },{
            name:'Shop',
            id:2,
            path:'/shop',
        },{
            name:'Project',
            id:3,
            path:'/new-photos',
        },{
            name:'博客',
            id:4,
            path:'/blog',
        },
    ];
    return (
        <>
            <div className="w-full h-[50px] flex items-center bg-[#fff] pl-[60px] header-box">
                <div className="userName flex items-center justify-center text-[0px]">
                    <span className='text-xs text-[#fff]'>Awei</span>
                </div>
                {
                    navList.map((e,index)=>{
                        return(
                            <span onClick={()=>changeNav(e.id,e.path)} key={e.id} className={`navTxt ${navIndex===e.id?'isActive':''}`}>{e.name}</span>
                        )
                    })
                }
            </div>
        </>
    )
}