import { Route , BrowserRouter, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";

import UserProtected from "./UserProtected";
import Login from "../Pages/Login/login";
import Category from "../Pages/Category/Category";
import CategoryItems from "../Pages/CategoryItems/CategoryItems";
import ItemPage from "../Pages/ItemPage/ItemPage";



const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            }, {
                path:'category',
              
                children:[{
                    index:true,
                    element:<Category />,
                },{
                    path:'categoryid',
                    children:[
                        {
                            index:true,
                            element:<CategoryItems />
                        },{
                            path:'itemid',
                            element:<ItemPage />
                        }
                    ]
                    

                }]
          
            },
          
            {
                element:<UserProtected />,
                children:[
                    {
                        path:'user',
                        element:<User />
                    }
                ]

            }
        ]
    },{
                path:'profile',
                element:<Login /> 
            }
])




const AppRouter = () =>{
    return(
        <RouterProvider router={router} />
    )

    
}
export default AppRouter