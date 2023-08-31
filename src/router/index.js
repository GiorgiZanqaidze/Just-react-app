import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListPage from "../pages/ListPage";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/:id",
        element: <ListPage/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    }
]);

export default router