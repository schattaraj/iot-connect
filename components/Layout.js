import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout({ children }){
    return (
        <>
        <div className="layout-wrapper">
            <div className="left-side">
                <Sidebar/>
            </div>
            <div className="right-side">
            <Header/>
            </div>
        </div>
        </>
    )
}