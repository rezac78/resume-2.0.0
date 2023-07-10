'use client'
import { useEffect, useState } from 'react';
import Header from "../Commponents/Header/Header"
import AboutMe from "../Commponents/AboutMe/AboutMe"
import Resume from "../Commponents/Resume/Resume"
import ContactMe from "../Commponents/ContactMe/ContactMe"
import Reload from '../Parts/Reload/Reload';

export default function Home() {
  const [alert, setAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2500);
  }, []);
  return (
    <>
      <Reload alert={alert} />
      <div className={`flex flex-col justify-between min-h-[670px] bg-white dark:bg-black font-serif ${alert ? "opacity-0" : "opacity-100"}`}>
        <Header />
        <AboutMe />
        <Resume />
        <ContactMe />
      </div>
    </>
  )
}