import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListPage from "../pages/ListPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/list",
        element: <ListPage/>,
    },
]);

export default router