import { Outlet } from "react-router-dom";

import MainMenu from "../components/mainMenu"
import MainTopbar from "../components/mainTopbar";

export default function Root() {
    return (
        <div className="h-screen w-screen flex ">
            <MainMenu />
            <Outlet />
        </div>

    );
}