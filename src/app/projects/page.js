import { projects } from "@/app/projects/data";
import Image from "next/image";
import newImg from "./../../../public/Screenshot (39).png";
export default function projectGallery() {
    return(
        <>
        {projects.map((project,index) => {
            return (
              <div
                key={index}
                className="grid 
                grid-cols-12          
                items-center
                mt-20"
              >
                <div className="sm:col-span-6 col-start-1 col-span-12">
                  <h1 className="text-4xl mb-3">{project.name}</h1>
                  <p className=" text-xl mb-4">{project.description}</p>
                  <p className="text-lg">{project.learning}</p>
                </div>
                <Image
                  src={project.sampleImage}
                  alt="sample Image"
                  className="sm:col-span-4 sm:col-start-8 col-span-12"
                />
              </div>
            );
        })}
        </>
    )
}