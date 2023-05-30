import Image from "next/image"
import Link from "next/link"

import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiOutlineLink } from "@react-icons/all-files/ai/AiOutlineLink"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"

export default async function UserBanner(){
    const githubUser = await fetch("https://api.github.com/users/ervin-sungkono", {next: {revalidate: 60}}).then(res => res.json())
    const socialLinks = [
        {icon: <AiFillGithub size={24}/>, url: githubUser.html_url},
        {icon: <AiFillInstagram size={24}/>, url: "https://www.instagram.com/ervin.cs_09/"},
        {icon: <AiOutlineLink size={24}/>, url: `https://${githubUser.blog}`},
    ]
    return (
        <section className="container max-w-none py-8 md:py-12 flex flex-col md:flex-row justify-center items-center gap-6 bg-blue-50">
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg">
                <Image src={githubUser.avatar_url} alt="Github Profile Image" fill priority className="object-contain"/>
            </div>
            <div className="max-w-lg flex flex-col items-center md:items-start gap-6">
                <div className="flex flex-col gap-2 text-center md:text-start">
                    <h1 className="text-2xl md:text-4xl font-bold">{githubUser.name}</h1>
                    <p className="text-sm md:text-base text-black text-opacity-80">
                        Hello!, this is my personal website to showcase projects from&nbsp;
                        <span className="text-blue-700 font-semibold hover:underline">
                            <Link href={"https://frontendmentor.io/profile/ervin-sungkono"} target="_blank">Frontend Mentor</Link>
                        </span>
                    </p>
                </div>
                <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                        <Link href={social.url} target="_blank" key={index} className="hover:text-blue-700 transition-colors duration-300">{social.icon}</Link>
                    ))}
                </div>
            </div>
        </section>
    )
}