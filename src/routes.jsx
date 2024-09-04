import NotFound from "./components/NotFound/NotFound"
import Dashboard from "./components/Dashboard/Dashboard"
import Products from "./components/Products/Products"
import Comments from "./components/Comments/Comments"
import Users from "./components/Users/Users"
import Orders from "./components/Orders/Orders"
import Offs from "./components/Offs/Offs"


let routes =[
    {path:'*',element: <NotFound />},
    {path:'/',element:<Dashboard/>},
    {path:'/products',element:<Products/>},
    {path:'/comments',element:<Comments/>},
    {path:'/users',element:<Users/>},
    {path:'/orders',element:<Orders/>},
    {path:'/offs',element:<Offs/>}
]

export default routes