'use client'
import NavBarDashs from '@/app/Parts/Dashboard/NavBarDash/NavBarDash'
import TableForm from '@/app/Parts/Dashboard/TableForm/TableForm'
import { Profile, AboutMe, Education, WorkHistory, Programming, Projects } from "../../../../Events/Events"
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableFormAbout from '@/app/Parts/Dashboard/TableForm/TableFormAbout';
import TableFormEducation from '@/app/Parts/Dashboard/TableForm/TableFormEducation';
import TableFormWorkHistory from '@/app/Parts/Dashboard/TableForm/TableFormWorkHistory';
import TableProgrammingSkills from '@/app/Parts/Dashboard/TableForm/TableProgrammingSkills';
import TableFormProjects from '@/app/Parts/Dashboard/TableForm/TableFormProjects';


export default function Dashboard() {
  const [getProfile, setProfile] = useState([]);
  const [getAboutMe, setAboutMe] = useState([]);
  const [getEducation, setEducation] = useState([]);
  const [getWorkHistory, setWorkHistory] = useState([]);
  const [getProgrammingSkills, setProgrammingSkills] = useState([]);
  const [getProject, setProject] = useState([]);
  function getData(){
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Profile`).then((result) => {
      setProfile(result.data.User)
    });
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/AboutMe`).then((result) => {
      setAboutMe(result.data.AboutMe)
    });
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Education`).then((result) => {
      setEducation(result.data.Education)
    });
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/WorkHistory`).then((result) => {
      setWorkHistory(result.data.WorkHistory)
    });
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/ProgrammingSkills`).then((result) => {
      setProgrammingSkills(result.data.ProgrammingSkills)
    });
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Project`).then((result) => {
      setProject(result.data.Project)
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBarDashs />
      <div>
        <main className="lg:pl-72">
          <div className="">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
              <TableForm TiTleHeader={Profile} Title="Profile" getProfile={getProfile} />
              <TableFormAbout TiTleHeader={AboutMe} Title="AboutMe" getAboutMe={getAboutMe} />
              <TableFormEducation TiTleHeader={Education} Title="ResumeEducation" getEducation={getEducation} />
              <TableFormWorkHistory TiTleHeader={WorkHistory} Title="ResumeWorkHistory" getWorkHistory={getWorkHistory} />
              <TableProgrammingSkills TiTleHeader={Programming} Title="ResumeProgramming" getProgrammingSkills={getProgrammingSkills} />
              <TableFormProjects TiTleHeader={Projects} Title="ResumeProjects" getProject={getProject} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
