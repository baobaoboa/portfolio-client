import { PhotoProvider, PhotoView } from "react-photo-view";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-photo-view/dist/react-photo-view.css";

interface Image {
  src: string;
  alt: string;
}

interface WorkProp {
  project: string;
  role: string;
  description: string;
  technologies: string;
  images: Image[];
}

export default function ProjectHighlight(props: WorkProp) {
  return (
    <div className="card-neumorphism transition-all ~p-4/8 hover:scale-105">
      <p className="oswald-medium ~text-xl/4xl">{props.project}</p>
      <p className="marvel-regular text-gray-400 ~text-xs/sm ~pb-2/4">
        {props.role}
      </p>
      <p className="antic-regular ~text-sm/base ~pb-1/2">{props.description}</p>

      <div className="flex space-x-2 overflow-auto p-2">
        <PhotoProvider>
          {props.images.map((image, index) => (
            <PhotoView src={image.src}>
              <LazyLoadImage
                className="aspect-square cursor-pointer rounded-md object-cover transition-all hover:scale-105"
                src={image.src}
                alt={image.alt}
                height="100px"
                width="100px"
              />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>

      <p className="antic-regular text-gray-400 ~text-xs/sm ~pt-1/2">
        {props.technologies}
      </p>
    </div>
  );
}
