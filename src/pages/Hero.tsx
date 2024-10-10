import Skill from "../components/Skill";

import Resume from "../files/resume.pdf";

export default function Hero() {
  const skills = [
    {
      title: "Languages",
      description: "Java, C++ / CLI, VB.Net, HTML, CSS, JavaScript, PHP ",
    },
    {
      title: "Technologies",
      description:
        "Git, API Integration, MySQL, ReactJS, Azure DevOps, Android Studio",
    },
  ];

  return (
    <section className="top-0 w-full space-y-8 text-white sm:sticky sm:~py-12/[5rem] sm:~pl-12/[5rem]">
      {/* HERO */}
      <div
        id="#hero"
        className="card-neumorphism transition-all ~p-4/8 hover:scale-105"
      >
        {/* INFORMATION */}
        <div className="~pb-8/12">
          <p className="oswald-medium ~text-4xl/7xl">Lorenz Jedd</p>
          <p className="marvel-regular ~text-xl/4xl ~pb-4/8">
            Junior Programmer
          </p>
          <p className="antic-regular w-3/4 text-gray-400 ~text-sm/base">
            I am a developer driven by creativity and a passion for
            problem-solving.
          </p>
          <p className="antic-regular w-3/4 text-gray-400 ~text-sm/base">
            I am someone who turns challenges into meaningful digital
            experiences.
          </p>
        </div>

        {/* ACCOUNTS */}
        <div className="flex space-x-4">
          <a
            href="mailto:lorenzjeddalvarez2@gmail.com"
            className="~text-xs/sm"
            title="lorenzjeddalvarez2@gmail.com"
          >
            Google
          </a>
          <a
            href="https://www.linkedin.com/in/lorenz-jedd-alvarez/"
            rel="noopener noreferrer"
            target="_blank"
            className="~text-xs/sm"
            title="in/lorenz-jedd-alvarez/"
          >
            Linkedin
          </a>
          <a
            href={Resume}
            rel="noopener noreferrer"
            target="_blank"
            className="~text-xs/sm"
            title="Resume"
          >
            Resume
          </a>
        </div>
      </div>

      {/* SKILLS */}
      <div id="#skills" className="space-y-4">
        <p className="oswald-medium uppercase">Skills</p>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
