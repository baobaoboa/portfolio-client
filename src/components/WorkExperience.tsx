interface WorkProp {
  role: string;
  location: string;
  description: string;
}

export default function WorkExperience(props: WorkProp) {
  return (
    <div className="card-neumorphism transition-all ~p-4/8 hover:scale-105">
      <p className="oswald-medium ~text-xl/4xl">{props.role}</p>
      <p className="marvel-regular ~text-xs/sm ~pb-2/4">{props.location}</p>
      <p className="antic-regular ~text-base/lg">{props.description}</p>
    </div>
  );
}
