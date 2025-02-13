import { projects } from "@/app/projects/data";

export default function projectGallery() {
    return(
        <>
        {projects.map((project,index) => {
            return (
              <div key={index} className="grid grid-cols-12">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <p>{project.learning}</p>
                <img src={project.sampleImage}/>
              </div>
            );
        })}
        </>
    )
}