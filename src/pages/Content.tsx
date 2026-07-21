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
      role: "Software Developer II",
      location: "Systems and Software Consulting Group Inc. – Makati City, PH",
      date: "Nov 2024 – Present",
      description: [
        "Promoted from Developer I → II for strong performance and leadership.",
        "Engineered scalable in-house applications and delivered compliance system fixes.",
        "Mentored new developers and streamlined cross-team collaboration.",
      ],
    },
    {
      role: "IT Development Engineer Intern",
      location: "International School Manila – Taguig City, PH",
      date: "Mar 2024 – Jul 2024",
      description: [
        "Built an accessible, responsive professional listing website.",
        "Implemented ReactJS + Zustand with Bootstrap for modern UI.",
        "Improved data accessibility and user experience across devices.",
      ],
    },
    {
      role: "Software Developer",
      location: "JIMAC Incorporated – Quezon City, PH",
      date: "Mar 2023 – Mar 2024",
      description: [
        "Developed File Checker, POS System, and Table Extractor tools.",
        "Enhanced data processing efficiency and system integration.",
        "Delivered project-based solutions improving operational workflows.",
      ],
    },
    {
      role: "Database Documenter",
      location: "JIMAC Incorporated – Quezon City, PH",
      date: "Aug 2014 – Sept 2020",
      description: [
        "Documented and organized database structures for clarity.",
        "Created detailed schema descriptions and visualized table relationships.",
        "Improved documentation accuracy, enabling faster onboarding and analysis.",
      ],
    },
  ];

  const projectHighlights = [
    {
      project: "AML Project",
      role: "Full Stack Developer",
      description:
        "Developed and enhanced a web-based AML compliance platform using ASP.NET MVC 5, implementing secure identity integration, real-time reporting, and data-driven workflows to support financial compliance operations.",
      technologies:
        "C# .NET Framework 4.7, ASP.NET MVC 5, SQL Server, NHibernate, jQuery/Knockout.js, Bootstrap, SignalR, SSRS, Azure Storage/Email",
      images: [],
    },
    {
      project: "SmartMango",
      role: "Full Stack Developer",
      description:
        "Developed a web-based application to optimize Carabao mango precision farming, enhancing post-harvest efficiency and decision-making through data-driven technology.",
      technologies:
        "ReactJS, Flask, TailwindCSS, MySQL, YOLOv8-Nano Object Detection Model, Multiple Linear Regression",
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
      {/* WORK EXPERIENCES */}
      <div id="#work-experiences" className="space-y-4">
        <p className="oswald-medium uppercase">Work Experiences</p>

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