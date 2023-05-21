"use client"
import Image from "next/image"
import { useState } from "react"

import ProjectModal from "./ProjectModal"
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight"
import { formatDate } from "../lib/date"

export default function ProjectCard({ project }){
    const [modalVisibility, setModalVisibility] = useState(false)
    return(
        <>
            <ProjectModal project={project} isVisible={modalVisibility} setVisible={setModalVisibility}/>
            <div className="cursor-pointer w-full max-w-2xl flex flex-col xs:flex-row shadow-lg shadow-blue-50 rounded-lg border-[1px] border-black border-opacity-[0.15] hover:border-blue-700 overflow-hidden transition-colors duration-300" onClick={() => setModalVisibility(true)}>
                <div className="relative xs:max-w-[192px] w-full h-full aspect-video xs:aspect-auto">
                    <Image src={project.images[0]} alt={project.title} fill className="object-cover"/>
                </div>
                <div className="w-full flex flex-col p-4">
                    <p className="text-xs md:text-sm mb-1 text-black text-opacity-80">{formatDate(new Date(project.createdAt))}</p>
                    <h3 className="text-base md:text-lg font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm md:text-base text-black text-opacity-80 line-clamp-3 flex-grow mb-3">{project.description}</p>
                    <div className="flex justify-end">
                        <div className="flex items-center gap-1 text-blue-700">
                            <p className="text-sm font-semibold">More Detail</p>
                            <BsArrowRight size={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}