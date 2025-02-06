import React from "react";

export const ProjectCard = ({ imgUrl, description, url }) => {
  return (
    <div className="proj-imgbx" onClick={() => window.open(url, "_blank")}>
      <img src={imgUrl} alt={description} />
      <div className="proj-txtx">
        <h4>{description}</h4>
      </div>
    </div>
  );
};
