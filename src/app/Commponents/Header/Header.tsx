'use client'
import Footer from "@/app/Parts/FooterHeader/Footer"
import NavBar from "@/app/Parts/Navbar/navBar"
import ProFile from "@/app/Parts/ProFile/ProFile"
import { useEffect, useState } from "react";

export default function Header() {
  const [getTeam, setTeam] = useState("light");
  const [getProfile, setProfile] = useState<any>([]);
  async function getData() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Profile`,
      {
        method: "GET",
      }
    );

    const ProfileData = await response.json();
    setProfile(ProfileData.User[0])
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="dark:bg-black bg-[url('/Home/bg.svg')]">
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      </svg>
      <NavBar setTeam={setTeam} getTeam={getTeam} classes={""} />
      <ProFile getProfile={getProfile} />
      <Footer getTeam={getTeam} />
    </div>
  )
}