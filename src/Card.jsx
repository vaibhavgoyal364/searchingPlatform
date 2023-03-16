import React from "react";

function Card(props) {
  return (
    <>
      <div className="main">
        <div className="card">
          <img className="img" src={props.img} alt="seriesPicture" />
          <div className="content">
            <span className="platform"> {props.platform} </span>
            <div className="title"> {props.title} </div>
            <a href={props.link} target="_blank">
              {" "}
              <button className="btn"> visit now</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
