import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PublicLayout = () => {

    return (

        <>

            <Navbar />

            <main className="min-h-screen">

                <Outlet />

            </main>

            <footer className=" pt-10 text-center">

                <Footer/>

            </footer>

        </>

    );

};

export default PublicLayout;