import { useRouter } from "next/router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

export default function Layout({ children }){
    const router = useRouter()
    const LayoutNotRequired = ["/Login","/404"]
    useEffect(()=>{
console.log("router",LayoutNotRequired.includes(router.route));

    },[])
    return (
        <>
         {
            !LayoutNotRequired.includes(router.route)
            &&
        <div className="layout-wrapper">
            <div className="left-side">
           
            <Sidebar/>
        
            </div>
            <div className="right-side"> <Header/>
            {children}
            </div>
        </div>
}
{
     LayoutNotRequired.includes(router.route)
     &&
     <>
     {children}
     </>
}
        </>
    )
}