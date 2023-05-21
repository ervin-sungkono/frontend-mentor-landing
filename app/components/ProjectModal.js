"use-client"
import dynamic from "next/dynamic"
import Link from "next/link"

import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiOutlineLink } from "@react-icons/all-files/ai/AiOutlineLink"
import { formatDate } from "../lib/date"
const ImageSlider = dynamic(() => import("./ImageSlider"))

export default function ProjectModal({project, isVisible, setVisible}){
    return(
        <div className={`w-full h-full p-6 flex justify-center items-center bg-black bg-opacity-60 fixed ${isVisible ? "top-0" : "-top-full"} left-0 z-50 transition-all duration-500`}>
            <div className="relative flex flex-col items-center max-w-4xl w-full max-h-[512px] h-auto overflow-y-scroll px-4 py-6 md:px-6 md:py-8 bg-white rounded-lg border-[1px] border-black border-opacity-[0.15]">
                <button className="absolute right-0 top-0 p-2 z-50" onClick={() => setVisible(false)}>
                    <AiOutlineClose size={24}/>
                </button>
                <div className="w-full max-w-lg aspect-video mb-10">
                    <ImageSlider images={project.images}/>
                </div>
                <div className="flex flex-col gap-2 text-center mb-4">
                    <h2 className="text-xl md:text-3xl font-bold">{project.title}</h2>
                    <p className="text-sm md:text-base text-black text-opacity-80">{project.description}</p>
                    <p className="font-medium">Created at {formatDate(new Date(project.createdAt))}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span className="px-3 py-1 bg-blue-700 rounded-full text-white font-medium text-xs md:text-sm">{tag}</span>
                    ))}
                </div>
                <div className="w-full justify-center flex flex-col md:flex-row items-center gap-4">
                    <Link href={project.siteUrl} className="px-4 py-2 md:px-6 md:py-3 flex justify-center w-full sm:w-auto items-center gap-2 bg-blue-700 hover:bg-blue-500 rounded-md text-white font-semibold transition-colors duration-300">
                        <AiOutlineLink size={24}/>
                        <p className="text-sm md:text-base">Website</p>
                    </Link>
                    <Link href={project.repoUrl} className="px-4 py-2 md:px-6 md:py-3 flex justify-center w-full sm:w-auto items-center gap-2 border-blue-700 border-[1px] hover:bg-blue-700 hover:text-white rounded-md text-blue-700 font-semibold transition-colors duration-300">
                        <AiFillGithub size={24}/>
                        <p className="text-sm md:text-base">Github</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}