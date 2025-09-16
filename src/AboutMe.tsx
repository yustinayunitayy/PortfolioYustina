import AnimatedBackground from "./AnimatedBackground";
import image from "./assets/gradupic.jpg";
import {
  FaPython,
  FaHtml5,
  FaJava,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { PiFileSql } from "react-icons/pi";

export default function AboutMe() {
  const skills = [
    { icon: FaPython, name: "Python" },
    { icon: FaHtml5, name: "HTML" },
    { icon: IoLogoCss3, name: "CSS" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: FaJava, name: "Java" },
    { icon: FaReact, name: "React.js" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: BiLogoTailwindCss, name: "Tailwind" },
    { icon: BiLogoPostgresql, name: "PostgreSQL" },
    { icon: DiMongodb, name: "MongoDB" },
    { icon: PiFileSql, name: "SQL Query" },
  ];

  return (
    <div id="about" className="relative bg-black min-h-screen">
      <AnimatedBackground group="light" />

      {/* About Me */}
      <section className="relative z-10 py-20 grid grid-cols-1 md:grid-cols-2 md:gap-[40px] justify-center items-center text-center md:text-left">
        <div className="content-center p-20">
          <h1 className="text-2xl md:text-4xl font-bold coral md:text-justify text-center mb-10">
            About Me
          </h1>
          <div
            className="
            text-white
            text-base
            md:text-lg
            text-justify
            space-y-4
          "
          >
            <p>
              I'm a Fresh Graduate in Informatics from President University
              focusing on Artificial Intelligence. I like exploring on how
              technology can solve real-world problems and make life easier. I
              enjoy blending creative ideas with technical skills to build
              solutions that can solve real world problems.
            </p>
            <p>
              I am interested in the development of a Website or Application and
              also how Artificial Intelligence can be used to help humans manage
              their work easier. I also enjoy learning new technologies,
              experimenting with ideas, and collaborating with others to create
              innovative solutions.
            </p>
            <p>
              My goal is to continue growing as a person who can build systems
              that are secure, reliable, and make a positive impact, while
              always staying curious and open to learning new things.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden">
            <img src={image} alt="Profile Image" />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative z-10">
        <div className="px-20 md:mr-20 mb-10">
          <h1 className="text-2xl md:text-4xl text-center md:text-right coral font-bold">
            Skills
          </h1>
        </div>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-5 md:grid-cols-6 text-center">
            {skills.slice(0, 5).map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <Icon className="text-3xl md:text-5xl coral" />
                  <span className="text-base md:text-lg text-white mt-2">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-5 text-center md:ml-20">
            {skills.slice(6, 11).map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <Icon className="text-3xl md:text-5xl coral" />
                  <span className="text-base md:text-lg text-white mt-2">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
