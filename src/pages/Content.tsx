import ProjectHighlight from "../components/ProjectHighlight";
import WorkExperience from "../components/WorkExperience";

// # ~ ~ ~ ~ ~ # SMATMANGO IMAGES # ~ ~ ~ ~ ~ # //
import SmartMango1 from "../images/smartmango_1.png";
import SmartMango2 from "../images/smartmango_2.png";
import SmartMango3 from "../images/smartmango_3.png";

// # ~ ~ ~ ~ ~ # IPTAKA IMAGES # ~ ~ ~ ~ ~ # //
import iPitaka1 from "../images/ipitaka_1.png";
import iPitaka2 from "../images/ipitaka_2.png";
import iPitaka3 from "../images/ipitaka_3.png";
import iPitaka4 from "../images/ipitaka_4.png";

export default function Content() {
  const workExperiences = [
    {
      role: "IT Development Engineer Intern",
      location: "International School Manila",
      description:
        "Developed a responsive, cross-browser website for listing professionals using ReactJS, Zustand, and Bootstrap, improving accessibility and user experience.",
    },
    {
      role: "Software Developer",
      location: "JIMAC Incorporated",
      description:
        "Developed solutions to improve data handling and system integration, including a File Checker, Point of Sales System, and Table Extractor, streamlining operations and data processing.",
    },
    {
      role: "Database Documenter",
      location: "JIMAC Incorporated",
      description:
        "Documented and organized database structures, providing clear descriptions and visualizing connections to improve accuracy and ease of management.",
    },
  ];

  const projectHighlights = [
    {
      project: "SmartMango",
      role: "Full Stack Developer",
      description:
        "Developed a web-based application to optimize Carabao mango precision farming, enhancing post-harvest efficiency and decision-making through data-driven technology.",
      technologies:
        "ReactJS, Flask, TailwindCSS, MySQL, YOLOv8 Nano-object Detection Model, Multiple Linear Regression",
      link: "",
      images: [
        {
          src: SmartMango1,
          alt: "SmartMango Image #1",
        },
        {
          src: SmartMango2,
          alt: "SmartMango Image #2",
        },
        {
          src: SmartMango3,
          alt: "SmartMango Image #3",
        },
      ],
    },
    {
      project: "iPitaka",
      role: "Frontend Developer",
      description:
        "Developed web and Android applications to help users manage their finances by analyzing spending habits and suggesting budget allocations for informed decision-making and smarter spending.",
      technologies:
        "PHP, HTML, Bootstrap, jQuery, XML, Java, MySQL, Oracle Cloud",
      link: "",
      images: [
        {
          src: iPitaka1,
          alt: "iPitaka Image #1",
        },
        {
          src: iPitaka2,
          alt: "iPitaka Image #2",
        },
        {
          src: iPitaka3,
          alt: "iPitaka Image #3",
        },
        {
          src: iPitaka4,
          alt: "iPitaka Image #4",
        },
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
