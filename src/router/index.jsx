import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/main/Main'
import IndexPage from '../pages/main/children/artProject/Index';
import ModelsPage from '../pages/main/children/models/Index';
import NaturePage from '../pages/main/children/nature/Index';
import Photographes from '../pages/main/children/photographes/Index';
import Shop from '@/pages/shop/Shop';
import NewPhotos from '../pages/new-photos/NewPhoto';
import Blog from '../pages/blog/Blog'
const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<MainPage />,
                children:[
                    {
                        path:'/',
                        element:<IndexPage></IndexPage>
                    },{
                        path:'/models',
                        element:<ModelsPage></ModelsPage>
                    },{
                        path:'/nature',
                        element:<NaturePage></NaturePage>
                    },{
                        path:'/photographes',
                        element:<Photographes></Photographes>
                    }
                ]
            },
            {
                path:'/shop',
                element:<Shop></Shop>,
            },
            {
                path:'/new-photos',
                element:<NewPhotos></NewPhotos>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])
export default router;