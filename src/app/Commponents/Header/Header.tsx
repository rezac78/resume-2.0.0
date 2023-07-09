'use client'
import Footer from "@/app/Parts/FooterHeader/Footer"
import NavBar from "@/app/Parts/Navbar/navBar"
import ProFile from "@/app/Parts/ProFile/ProFile"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Header(data: any) {
        const [getTeam, setTeam] = useState("light");
        const [getProfile, setProfile] = useState<any>([]);
        function getData() {
          axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Profile`).then((result) => {
            setProfile(result.data.User[0])
          });
        }
        useEffect(() => {
          getData();
        }, []);
        return (
                <div className="dark:bg-black bg-[url('/Home/bg.svg')]">
                        <NavBar setTeam={setTeam} getTeam={getTeam} />
                        <ProFile getProfile={getProfile} />
                        <Footer getTeam={getTeam} />
                </div>
        )
}