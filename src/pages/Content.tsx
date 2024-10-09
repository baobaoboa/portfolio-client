import ProjectHighlight from "../components/ProjectHighlight";
import WorkExperience from "../components/WorkExperience";

export default function Content() {
  const workExperiences = [
    {
      role: "IT Development Engineer Intern",
      location: "International School Manila",
      description:
        "Minim cupidatat mollit adipisicing voluptate labore reprehenderit.",
    },
    {
      role: "Software Developer",
      location: "JIMAC Incorporated",
      description:
        "Minim cupidatat mollit adipisicing voluptate labore reprehenderit.",
    },
    {
      role: "Database Documenter",
      location: "JIMAC Incorporated",
      description:
        "Minim cupidatat mollit adipisicing voluptate labore reprehenderit.",
    },
  ];

  const projectHighlights = [
    {
      project: "SmartMango",
      setting: "Thesis",
      description:
        "Minim cupidatat mollit adipisicing voluptate labore reprehenderit.",
      link: "",
      images: [
        "https://picsum.photos/800",
        "https://picsum.photos/800",
        "https://picsum.photos/800",
        "https://picsum.photos/800",
        "https://picsum.photos/800",
      ],
    },
    {
      project: "iPitaka",
      setting: "UMak 11th IT Skills Olympics",
      description:
        "Minim cupidatat mollit adipisicing voluptate labore reprehenderit.",
      link: "",
      images: [
        "https://picsum.photos/800",
        "https://picsum.photos/800",
        "https://picsum.photos/800",
      ],
    },
  ];

  return (
    <section className="w-full space-y-8 text-white sm:~py-12/[5rem] sm:~pr-12/[5rem]">
      {/* WORK EXPERIENCE */}
      <div id="#work-experience" className="space-y-4">
        <p className="oswald-medium uppercase">Work Experience</p>

        <div className="space-y-6">
          {workExperiences.map((work, index) => (
            <WorkExperience key={index} {...work} />
          ))}
        </div>
      </div>

      {/* PROJECT HIGHLIGHTS */}
      <div id="#project-highlights" className="space-y-4">
        <p className="oswald-medium uppercase">Project Highlights</p>

        <div className="space-y-6">
          {projectHighlights.map((work, index) => (
            <ProjectHighlight key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
}
