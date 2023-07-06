'use client'
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { navbar } from "@/Events/Events"
import MenuOpen from "@/../public/Home/menu.png"
import MenuClose from "@/../public/Home/close.png"
import Wand from "@/../public/Home/Wand.png"
import ligth from "@/../public/Home/ligth.png"
import DropDown from '../DropDown/DropDown';

interface NavBarProps {
        getTeam: string;
        setTeam: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavBar(props: NavBarProps) {
        const [OpenMenu, setOpenMenu] = useState(false);
        const [getCode, setCode] = useState("");
        const t = useTranslations('Navbar');
        const handleIsOpen = () => {
                setOpenMenu(!OpenMenu)
        }
        const [activeId, setActiveId] = useState(1)

        useEffect(() => {
                if (props.getTeam === "dark") {
                        document.documentElement.classList.add("dark");
                } else {
                        document.documentElement.classList.remove("dark");
                }
                const getCockie = window.location.pathname
                if (getCockie !== null) setCode(getCockie.slice(1, 3));
        }, [props.getTeam]);

        const handleTeam = () => {
                props.setTeam(props.getTeam === "dark" ? "light" : "dark")
        }

        return (
                <div className='p-0 tablet:relative flex justify-center items-center w-full box-border py-12 dark:bg-black'>
                        {
                                OpenMenu === true ?
                                        <div >
                                                <div className="top-0 left-0 absolute w-full h-screen flex justify-center items-center bg-bg-background-menu backdrop-opacity-10 tablet:z-10">
                                                        <ul className="flex flex-col items-center">
                                                                {navbar.map((val, key) => (
                                                                        <li key={key} onClick={() => setActiveId(val.id)} className="my-6">
                                                                                <a className='text-white text-xl' href={val.Link} >
                                                                                        <span className={activeId === val.id ? "text-ligth-color-text dark:text-dark-color-text" : ""}>
                                                                                                {t(val.name)}
                                                                                        </span>
                                                                                </a>
                                                                        </li>
                                                                ))}
                                                                <li className='my-6'>
                                                                        <DropDown />
                                                                </li>
                                                                <li className='my-6'>
                                                                        <div onClick={handleTeam} className=''>
                                                                                <Image className='WandImag' width={50} height={50} src={Wand} alt='Wand' />
                                                                                {props.getTeam === "dark" ? <div className='relative -mt-20 ltr:-ml-8 rtl:mr-5'>
                                                                                        <Image width={60} height={60} src={ligth} alt='ligth' />
                                                                                </div> : null}

                                                                        </div>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div onClick={handleIsOpen}>
                                                        <Image src={MenuClose} alt="menu hamburger" className="block tablet:hidden absolute top-12 right-12 w-8 h-8" />
                                                </div>
                                        </div>
                                        :
                                        <div>
                                                <div className="hidden tablet:block">
                                                        <ul className="no-underline m-0 p-0 flex font-semibold text-2xl">
                                                                {navbar.map((val, key) => (
                                                                        <li key={key} onClick={() => setActiveId(val.id)} className={`px-8 ${activeId === val.id ? "text-ligth-color-text dark:text-dark-color-text" : ""}`}>
                                                                                <div className="active Dark">
                                                                                        <a href={val.Link} >{t(val.name)}</a>
                                                                                </div>
                                                                        </li>
                                                                ))}
                                                                <li className="px-8">
                                                                        <DropDown />
                                                                </li>
                                                                <li className="px-8">
                                                                        <div onClick={handleTeam} className='-mt-2'>
                                                                                <Image className='WandImag' width={50} height={50} src={Wand} alt='Wand' />
                                                                                {props.getTeam === "dark" ? <div className='relative -mt-20 ltr:-ml-8 rtl:mr-7'>
                                                                                        <Image width={55} height={55} src={ligth} alt='ligth' />
                                                                                </div> : null}
                                                                        </div>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div onClick={handleIsOpen}>
                                                        <Image src={MenuOpen} alt="menu hamburger" className="block tablet:hidden absolute top-12 right-12 w-8 h-8" />
                                                </div>
                                        </div>
                        }
                </div >
        )
}
