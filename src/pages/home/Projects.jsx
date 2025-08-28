import { houseData } from "../../data/houseData.js";
import ProjectImage from "./ProjectImage.jsx";

export default function Projects() {
  return (
    <div className="px-7 my-15">

      <h1>Projects</h1>
      <hr className="my-4 text-gray-400" />


      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
        {houseData.map((house) => {
          return <ProjectImage
            key={house.id}
            image={house.image}
            label={house.label} />
        })}

      </div>

    </div>
  )
}