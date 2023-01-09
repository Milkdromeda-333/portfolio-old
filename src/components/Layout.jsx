import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function layout() {

    return (
        <>
            <Navbar />
            <Outlet />

            {/* <Footer /> */}
        </>
    );
}