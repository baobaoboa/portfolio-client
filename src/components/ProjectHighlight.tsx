import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface WorkProp {
  project: string;
  setting: string;
  description: string;
  link: string;
  images: string[];
}

export default function ProjectHighlight(props: WorkProp) {
  return (
    <div
      className="card-neumorphism transition-all ~p-4/8 hover:scale-105"
      title={props.link ? props.link : "No link to project."}
    >
      <p className="oswald-medium ~text-xl/4xl">{props.project}</p>
      <p className="marvel-regular ~text-xs/sm ~pb-2/4">{props.setting}</p>
      <p className="antic-regular ~text-base/lg">{props.description}</p>

      <div className="flex space-x-2 overflow-auto pb-2">
        <PhotoProvider>
          {props.images.map((image, index) => (
            <PhotoView src={image}>
              <img className="rounded-md cursor-pointer" src={image} width="100px" alt="" />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>
    </div>
  );
}
