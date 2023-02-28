import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Params from "../Pages/Params";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/:dato?/:textColor?/:backColor?",
        element: <Params />
    },
])