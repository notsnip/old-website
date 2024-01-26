import { React, useEffect } from "react";
import "../styles/Work.css";
import { themeChange } from "theme-change";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// projects images
import snipc_me from "../assets/projects/snipc_me.jpeg";
import tribute_to_steve from "../assets/projects/tribute_to_steve.png";
import sni_blog from "../assets/projects/blog.png";

function Work() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const projects = [
    {
      name: "Blog",
      des: "My Blog where I share my thoughts and ideas",
      github: "https://github.com/realsnipc/blog",
      img: sni_blog,
      link: "https://blog.snipc.me",
    },
    {
      name: "Tribute to Steve",
      des: "Tribute to 'Steven Paul Jobs'. To remember his revolutionary contributions to the world, I've created this website.",
      github: "https://github.com/realsnipc/TributeToSteve",
      img: tribute_to_steve,
      link: "https://realsnipc.github.io/TributeToSteve/",
    },
    {
      name: "website",
      des: " You are here, my personal website - built with React.js, Vite and a lot of >3!",
      github: "https://github.com/realsnipc/website",
      img: snipc_me,
      link: "https://snipc.me",
    },
  ];
  return (
    <>
      <meta
        name="description"
        content="Projects I (Shaurya) have made and I'm working on."
      />
      <title>work | snipc</title>
      <div id="hero_text">
        <h2 className="text_hero_text fade-in">Projects</h2>
        <p className="text_hero_text fade-in">
          Projects I've worked on so far.
        </p>
      </div>

      <div id="repos_container fade-in">
        {projects.map((project) => (
          <div className="repo" key={project.link}>
            <LazyLoadImage
              effect="blur"
              src={project.img}
              alt=""
              height="230px"
              width="350px"
            />
            <div id="info_text">
              <h2>{project.name}</h2>
              <p>{project.des}</p>
              <p id="link">
                <a
                  href={project.github}
                  target="_blank"
                  className="project_link"
                >
                  <iconify-icon
                    icon="mingcute:github-line"
                    height="1.5em"
                  ></iconify-icon>
                </a>
                <a href={project.link} className="project_link">
                  <iconify-icon icon="uil:link" height="1.5em"></iconify-icon>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Work;
