"use client"

export default function InputFile({ Title, Lable, FileId, onChangeUploadFile, getNameFile }: any) {
        return (
                <>
                        <div className="flex">
                                <input onChange={onChangeUploadFile} type="file" id={Lable} hidden />

                                <label className="text-white p-2 rounded-full cursor-pointer mt-4 bg-ligth-color-text" htmlFor={Lable}>{Title}</label>
                        </div>
                        <div className="flex">
                                <span className="ml-1" id={FileId}>{getNameFile}</span>
                        </div>
                </>
        )
}
