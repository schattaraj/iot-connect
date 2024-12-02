import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }){
    return (
        <>
        <div className="layout-wrapper">
            <div className="left-side">
                <Sidebar/>
            </div>
            <div className="right-side">
            <Header/>
            {children}
            </div>
        </div>
        </>
    )
}