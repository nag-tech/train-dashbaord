import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../../pages/DashBaord";
import ErrorPage from "../../pages/others/Error";
import AddOrEditTrain from "../../pages/AddOrEditTrain";
export default function AppRoutes(){


    const routeDetails = [{
        path: "/",
        element: <DashBoard/>,
        name: "Home"
    },
    {
        path: "/dashBoard",
        element: <DashBoard/>,
        name: "dashBoard"
    },
    {
        path: "/add",
        element: <AddOrEditTrain/>,
        name: "addOrEdit"
    },
    {
        path: "/edit/:id",
        element: <AddOrEditTrain/>,
        name: "addOrEdit"
    },
    {
        path: "/*",
        element: <ErrorPage/>,
        name: "error"
    }]

    const routes = routeDetails.map(route=> <Route path={route.path} key={route.name} element={route.element}/>);

    return (<BrowserRouter><Routes>{routes}</Routes></BrowserRouter>)
}