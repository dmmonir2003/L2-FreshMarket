import React, { ReactNode } from "react";
import Footer from "@/components/shared/Footer/Footer";
import Navber from "@/components/shared/Navber/Navber";

interface MainLayoutPageProps {
    children: ReactNode;
}

const MainLayoutPage: React.FC<MainLayoutPageProps> = ({ children }) => {
    return (
        <div>
            <Navber />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayoutPage;
