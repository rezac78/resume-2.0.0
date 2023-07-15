'use client'
import Alerts from '@/app/Parts/Alerts/Alerts';
import NavBarDashs from '@/app/Parts/Dashboard/NavBarDash/NavBarDash'
import { SchemaProfile } from "@/../Schemas/FormSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextArea from "../../../../Parts/TextArea/TextArea"
import { FormInputProfile } from "../../../../../Events/Events"
import axios from 'axios';
import NavBar from '@/app/Parts/Navbar/navBar';
import IconSocialMedia from '@/app/Parts/IconSocialMedia/IconSocialMedia';
import Bouttons from '@/app/Parts/Bouttons/Boutton';
import Footer from '@/app/Parts/FooterHeader/Footer';
import InputFile from '@/app/Parts/InputFile/InputFile';
import AboutMe from "../AboutMe/page"

export default function Profile() {
  const form: any = useRef();
  const [getTitel, setTitel] = useState("");
  const [getcode, setcode] = useState<any>();
  const [alert, setAlert] = useState(false);
  const [image, setImage] = useState<any>("");
  const [PDFfa, setPDFfa] = useState<any>("");
  const [PDFen, setPDFen] = useState<any>("");
  const [getNameFileFa, setNameFileFa] = useState("");
  const [getNameFileEn, setNameFileEn] = useState("");
  const [getProfile, setProfile] = useState<any>([]);
  function getData() {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Profile`).then((result) => {
      setProfile(result.data.User[0])
    });
  }
  useEffect(() => {
    getData();
  }, []);
  const { register, handleSubmit, formState: { errors: clientFormError } } = useForm({
    resolver: yupResolver(SchemaProfile),
  });

  const onInputChange = (e: any) => {
    setProfile({ ...getProfile, [e.target.name]: e.target.value });
  };
  const handleUploadimag = (e: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  };
  const handleUploadImagFileFA = (A: any) => {
    setNameFileFa(A.target.files[0].name)
    const reader = new FileReader();
    reader.readAsDataURL(A.target.files[0]);
    reader.onload = () => {
      setPDFfa(reader.result);
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  }

  const handleUploadImagFileEN = (A: any) => {
    setNameFileEn(A.target.files[0].name)
    const reader = new FileReader();
    reader.readAsDataURL(A.target.files[0]);
    reader.onload = () => {
      setPDFen(reader.result);
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  }
  const onSubmit = (item: any) => {
    const Data = {
      img: image === "" ? getProfile?.image : JSON.stringify({ base64: image }),
      FileFa: PDFfa === "" ? getProfile.FileFa : JSON.stringify({ base64: PDFfa }),
      FileEn: PDFen === "" ? getProfile.FileEn : JSON.stringify({ base64: PDFen }),
      summaryEn: getProfile.summaryEn,
      summaryFA: getProfile.summaryFA,
      summaryDE: getProfile.summaryDE,
    }
    const NewData = { ...item, ...Data };
    const options = {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', "Access-Control-Allow-Origin": "*" },
    };
    axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Profile/${getProfile._id}`, NewData, options).then((result) => {
      setTitel(result.data.Message)
      setcode(result.status)
    });
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }
  return (
    <>
      <div className="bg-[url('/Home/bg.svg')]">
        <NavBarDashs />
        <div>
          <main className="lg:pl-72">
            <div className="text-white">
              {alert ? <Alerts getTitel={getTitel} getcode={getcode} CodeSucss={undefined} /> : null}
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <NavBar setTeam={undefined} getTeam={undefined} classes={"pointer-events-none"} />
                <div className="flex items-center text-center  justify-center h-1/6 min-h-fit">
                  <div className="flex flex-col-reverse items-center tablet:flex tablet:flex-row">
                    <div className="text-xl tablet:text-2xl mt-10 tablet:m-0 tablet:mr-20 ">
                      <div className="flex justify-center">
                        <IconSocialMedia classes={"pointer-events-none"} />
                      </div>
                      <div className="text-2xl tablet:text-3xl">
                        <span className="text-white">
                          {" "}
                          Hello, Im <span className="text-ligth-color-text dark:text-dark-color-text">reza</span>
                        </span>
                      </div>
                      <div className="flex flex-col mt-3.5 ml-0 tablet:ml-6">
                        <span className="text-white text-3xl tablet:text-4xl">
                          {" "}
                          <h1 className="w-auto">
                            <div className="w-auto dark:text-dark-color-text">
                              {" "}
                              Full stack Developer 🖥️
                            </div>
                          </h1>
                          <span className="text-xl tablet:text-2xl">
                            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                              {FormInputProfile.map((e) => (
                                <TextArea onInputChange={onInputChange} getProfile={getProfile} key={e.id} code={e.Code} Lable={e.name} TiTel="Summary" Register={register} errors={undefined} />
                              ))}
                            </div>
                          </span>
                        </span>
                      </div>
                      <div className="flex justify-evenly mt-5">
                        <Bouttons LinkHref="#ContactMe" download="#" Title="ContactMe" Label="ContactMe" classButtons="w-40 border-inherit dark:border-dark-color-text border-2 hover:border-ligth-color-text hover:dark:border-white pointer-events-none" />
                        <Bouttons LinkHref={"#"} download={"#"} Label="GetResume" Title="GetResume" classButtons="w-40 bg-ligth-color-text dark:bg-dark-color-text dark:text-black hover:bg-white hover:dark:bg-white hover:text-black pointer-events-none" />
                      </div>
                      <div className="mt-5">
                        <InputFile Title="Choose File FA" Lable="FA-btn" FileId="file-chosen-Fa" getProfile={getProfile} onChangeUploadFile={handleUploadImagFileFA} getNameFile={getNameFileFa} />
                        <InputFile Title="Choose File EN" Lable="EN-btn" FileId="file-chosen-En" getProfile={getProfile} onChangeUploadFile={handleUploadImagFileEN} getNameFile={getNameFileEn} />
                      </div>
                      <div className="mt-5">
                        <button
                          type="submit"
                          className="w-40 border-inherit dark:border-dark-color-text border-2 hover:border-ligth-color-text hover:dark:border-white rounded-full py-3.5 text-sm font-semibold text-white shadow-sm"
                        >
                          upload
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center shadow-lg shadow-white rounded-full w-72 h-72 tablet:h-[33.5%] tablet:w-[33.5%]">
                      <div className="bg-cover bg-no-repeat bg-center rounded-full h-[98%] w-[98%] hover:scale-105 ease-out duration-300 delay-200">
                        {image === "" || image == null ? <img className='rounded-full h-full w-full' width={100} height={100} src={getProfile.image?.slice(11, -2)} alt="ProfileImg" /> : <img className='rounded-full h-full w-full' src={image} />}
                        <div className="-mt-10">
                          <input className='' type="file" accept='image/*' name="file" id="Image-btn" onChange={handleUploadimag} hidden />
                          <label className="text-white p-2 rounded-full cursor-pointer bg-ligth-color-text" htmlFor="Image-btn">Choose Image</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer getTeam={undefined} />
              </form>
            </div>
          </main>
        </div>
      </div>
      <AboutMe/>
    </>
  )
}
