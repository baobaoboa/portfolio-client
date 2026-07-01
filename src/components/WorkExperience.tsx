interface WorkProp {
  role: string;
  location: string;
  date?: string;
  description: string | string[];
}

export default function WorkExperience(props: WorkProp) {
  return (
    <div className="card-neumorphism transition-all ~p-4/8 hover:scale-105">
      <p className="oswald-medium ~text-xl/4xl">{props.role}</p>
      <p className="marvel-regular text-gray-400 ~text-md/lg">
        {props.location}
      </p>
      <p className="marvel-regular text-gray-400 ~text-xs/sm ~pb-2/3">
        {props.date}
      </p>
      {Array.isArray(props.description) ? (
        <ul className="antic-regular list-inside ~text-sm/base">
          {props.description.map((item, idx) => (
            <li key={idx}>- {item}</li>
          ))}
        </ul>
      ) : (
        <p className="antic-regular ~text-sm/base">{props.description}</p>
      )}
    </div>
  );
}