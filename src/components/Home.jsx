import React from "react";
import vg from "../assets/2.webp";
import { FaReact,FaJs,FaFigma,FaCss3,FaHtml5,FaBootstrap,FaGitAlt } from "react-icons/fa";


const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechGeek</h1>
          <p>Your Search Is Over</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            i am here for Providing the Perfect Frotend Development Service using the React Js framework and other tools.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>WHO AM I?</h1>
          <p>
          Hello everyone its Ashish Tharu .I am currently a BSC .CSIT student at Academia International College, where I am actively expanding my knowledge and skills in the dynamic field of computer science.

My expertise spans a range of programming languages, including Go, Javascript, HTML, CSS. I have experience in web development, having worked with framework React for frontend development. This proficiency allows me to design and implement robust, user-friendly web applications.along with that i have basic knowledge on the design tools like Figma.addition to that i have knowledge on the Database like Mysql and  Version control system GIT along with platforms like Github,Gitlab etc.i also have experience on working on different OS platform including the Windows and Linux.I am passionate about staying updated on the latest industry trends and continuously enhancing my skills to meet the demands of the ever-evolving tech landscape. As I progress in my academic journey, I am exploring various facets of computer science, including algorithms, data structures, and software engineering principles

If you are looking for a dedicated,skilled,patient & energetic professional with interest in computer science and a commitment to ongoing learning, I would be delighted to connect and explore potential opportunities.

Thank you for visiting my profile. Feel free to reach out for collaborations, discussions, or any inquiries.
          </p>
        </div>
      </div>

      <div className="home4" id="skills">
        <div>
          <h1>Skills</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <FaReact />
              <p>React-JS</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <FaGitAlt/>
              <p>Git</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <FaJs />
              <p>Javascript</p>
            </div>

            <div
              style={{
                animationDelay: "0.4s",
              }}
            >
              <FaFigma />
              <p>Figma</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <FaCss3/>
              <p>CSS</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <FaHtml5/>
              <p>HTML</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <FaBootstrap/>
              <p>BootStrap</p>
            </div>
            
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
