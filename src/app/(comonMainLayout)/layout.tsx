
import Footer from "@/components/shared/Footer/Footer";
import Navber from "@/components/shared/Navber/Navber";
import React from "react";


const MainLayoutPage = ({ children }: React.ReactNode) => {
    return (
        <div>
            <Navber></Navber>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default MainLayoutPage;