import React from "react";


function ProjectCard({ src, h3, p, github, liveDemo }) {
  return (
    <div>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <a href={github} target="_blank"> <button>Github</button> </a>
      <a href={liveDemo} target="_blank"> <button>Live Demo</button> </a>
    </div>
  );
}

export default ProjectCard;
