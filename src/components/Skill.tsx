interface WorkProp {
  title: string;
  description: string;
}

export default function Skill(props: WorkProp) {
  return (
    <div className="card-neumorphism transition-all ~p-4/8 hover:scale-105">
      <p className="oswald-medium ~text-xl/4xl ~pb-2/4">{props.title}</p>
      <p className="antic-regular ~text-sm/base">{props.description}</p>
    </div>
  );
}
