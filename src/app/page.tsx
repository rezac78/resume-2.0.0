import Header from "../app/Commponents/Header/Header" 
import AboutMe from "./Commponents/AboutMe/AboutMe"
import Resume from "./Commponents/Resume/Resume"
import ContactMe from "./Parts/ContactMe/ContactMe"

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-[670px] bg-white dark:bg-black font-serif">
        <Header/>
        <AboutMe/>
        <Resume/>
        <ContactMe/>
      </div>
    </>
  )
}
