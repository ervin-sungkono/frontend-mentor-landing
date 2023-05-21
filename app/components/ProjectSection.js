import ProjectCard from "./ProjectCard"

export default async function ProjectSection(){
    const { projects } = await fetch('https://raw.githubusercontent.com/ervin-sungkono/web-assets/master/data/projects/frontendmentor.json', {next: {revalidate: 60}}).then(res => res.json())

    return(
        <section className="container max-w-none py-8 md:py-12 flex flex-col gap-4">
            <h2 className="text-xl md:text-3xl font-bold text-center md:text-left">My Frontend Mentor Projects</h2>
            <hr/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {projects.map(project => (
                    <ProjectCard project={project} key={project.title}/>
                ))}
            </div>
        </section>
    )
}