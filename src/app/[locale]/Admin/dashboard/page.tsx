'use client'
import NavBarDashs from '@/app/Parts/Dashboard/NavBarDash/NavBarDash'
import TableForm from '@/app/Parts/Dashboard/TableForm/TableForm'
import { Profile, AboutMe, Education, WorkHistory, Programming, Projects } from "../../../../Events/Events"
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Dashboard() {
  const [getProfile, setProfile] = useState([]);
  function getData(){
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Profile`).then((result) => {
      setProfile(result.data.User)
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
              <TableForm TiTleHeader={AboutMe} Title="AboutMe" getProfile={getProfile} />
              <TableForm TiTleHeader={Education} Title="ResumeEducation" getProfile={getProfile} />
              <TableForm TiTleHeader={WorkHistory} Title="ResumeWorkHistory" getProfile={getProfile} />
              <TableForm TiTleHeader={Programming} Title="ResumeProgramming" getProfile={getProfile} />
              <TableForm TiTleHeader={Projects} Title="ResumeProjects" getProfile={getProfile} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
