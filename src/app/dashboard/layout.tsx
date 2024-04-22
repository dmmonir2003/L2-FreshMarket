import Sidebar from "@/components/shared/Sidebar.tsx/Sidebar";



const MainLayoutPage = ({ children }) => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3"><Sidebar></Sidebar></div>
            <div className="col-span-9">{children}</div>

        </div>
    );
};

export default MainLayoutPage;