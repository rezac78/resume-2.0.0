'use client'
import Footer from "@/app/Parts/FooterHeader/Footer"
import NavBar from "@/app/Parts/Navbar/navBar"
import ProFile from "@/app/Parts/ProFile/ProFile"
import { useState } from "react";

export default function Header(data: any) {
        const [getTeam, setTeam] = useState("light");
        return (
                <div className="dark:bg-black bg-[url('/Home/bg.svg')]">
                        <NavBar setTeam={setTeam} getTeam={getTeam} />
                        <ProFile />
                        <Footer getTeam={getTeam} />
                </div>
        )
}