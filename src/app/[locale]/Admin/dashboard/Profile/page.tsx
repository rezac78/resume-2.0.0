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
import Dividers from '@/app/Parts/Dividers/Dividers';
import Link from 'next/link';


export default function Profile() {
  const form: any = useRef();
  const [getTitel, setTitel] = useState("");
  const [getcode, setcode] = useState("");
  const [alert, setAlert] = useState(false);
  const [image, setImage] = useState<any>("");
  const [PDFfa, setPDFfa] = useState<any>("");
  const [PDFen, setPDFen] = useState<any>("");
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
      console.log(result)
    });
  }
  return (
    <>
      <NavBarDashs />
      <div>
        {alert ? <Alerts getTitel={getTitel} getcode={getcode} CodeSucss={undefined} /> : null}
        <main className="lg:pl-72">
          <div className="text-black">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="col-span-full">
                <div className="mt-2 flex items-center gap-x-3">
                  <input type="file" accept='image/*' name="file" onChange={handleUploadimag} />
                  {image === "" || image == null ? <img className='h-12 w-12' src={getProfile.image?.slice(11, -2)} /> : <img className='h-12 w-12' src={image} />}
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {FormInputProfile.map((e) => (
                    <TextArea onInputChange={onInputChange} getProfile={getProfile} key={e.id} code={e.Code} Lable={e.name} TiTel="Summary" Register={register} errors={undefined} />
                  ))}
                </div>
                <div className="text-black">
                  <Dividers Title="FA" />
                  <input type="file" name="file" onChange={handleUploadImagFileFA} />
                  <Link
                    href={getProfile.FileFa?.slice(11, -2) ?? "#"}
                    target="_blank"
                  >
                    ResumepdfFA
                  </Link>
                </div>
                <div className="text-black">
                  <Dividers Title="EN" />
                  <input type="file" name="file" onChange={handleUploadImagFileEN} />
                  <Link
                    href={getProfile.FileEn?.slice(11, -2) ?? "#"}
                    target="_blank"
                  >
                    ResumepdfEN
                  </Link>
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-white mt-10 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  upload
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}
