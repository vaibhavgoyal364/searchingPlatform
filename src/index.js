import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Data from "./data";
import "./styles.css";

const AskFavouritePlatform = prompt("what is your favourite platform");

function Result() {
  if (AskFavouritePlatform === "netflix") {
    return (
      <>
        <Card
          id={Data[0].id}
          img={Data[0].img}
          platform={Data[0].platform}
          title={Data[0].title}
          link={Data[0].link}
        />
        <Card
          id={Data[1].id}
          img={Data[1].img}
          platform={Data[1].platform}
          title={Data[1].title}
          link={Data[1].link}
        />
        <Card
          id={Data[5].id}
          img={Data[5].img}
          platform={Data[5].platform}
          title={Data[5].title}
          link={Data[5].link}
        />
        <Card
          id={Data[6].id}
          img={Data[6].img}
          platform={Data[6].platform}
          title={Data[6].title}
          link={Data[6].link}
        />
      </>
    );
  } else if (AskFavouritePlatform === "amazon") {
    return (
      <>
        <Card
          id={Data[2].id}
          img={Data[2].img}
          platform={Data[2].platform}
          title={Data[2].title}
          link={Data[2].link}
        />
        <Card
          id={Data[3].id}
          img={Data[3].img}
          platform={Data[3].platform}
          title={Data[3].title}
          link={Data[3].link}
        />
      </>
    );
  } else if (AskFavouritePlatform === "hotstar") {
    return (
      <>
        <Card
          id={Data[4].id}
          img={Data[4].img}
          platform={Data[4].platform}
          title={Data[4].title}
          link={Data[4].link}
        />
        <Card
          id={Data[7].id}
          img={Data[7].img}
          platform={Data[7].platform}
          title={Data[7].title}
          link={Data[7].link}
        />
        <Card
          id={Data[9].id}
          img={Data[9].img}
          platform={Data[9].platform}
          title={Data[9].title}
          link={Data[9].link}
        />
      </>
    );
  } else if (AskFavouritePlatform === "hulu") {
    return (
      <>
        <Card
          id={Data[8].id}
          img={Data[8].img}
          platform={Data[8].platform}
          title={Data[8].title}
          link={Data[8].link}
        />
      </>
    );
  } else {
    return (
      <img
        className="favicon"
        src="https://www.shutterstock.com/shutterstock/photos/2088679690/display_1500/stock-vector-no-result-icon-thin-linear-no-result-outline-icon-isolated-on-white-background-line-vector-no-2088679690.jpg"
      />
    );
  }
}

ReactDOM.render(
  <>
    <h1> top five my favourite series among different platforms </h1>
    <Result />
  </>,
  document.getElementById("root")
);
