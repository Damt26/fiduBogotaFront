import {createRoot} from 'react-dom/client'
import './index.css'
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import CreateAccount from "./pages/Create/Create.tsx";
import AccountDetail from "./pages/Detail/Detail.tsx";
import Transaction from "./pages/Transaction/Transaction.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/detail",
        element: <AccountDetail/>,
    }
    ,
    {
        path: "/create",
        element: <CreateAccount/>,
    },
    {
        path: "/transaction",
        element: <Transaction/>,
    }
], {
    basename: "/"
});

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
