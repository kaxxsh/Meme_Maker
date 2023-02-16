import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import memesdata from "../Components/Data";
import { Link } from "react-router-dom";
export default function Meme() {
  const [Top, setTop] = useState("test top");
  const [Bottom, setBottom] = useState("test bottom");
  const [Generate, setGenerate] = useState(false);
  const [Url, setUrl] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    const randomnumber = Math.floor(
      Math.random() * memesdata.data.memes.length
    );
    setUrl(memesdata.data.memes[randomnumber].url);
    setGenerate(true);
  };

  
  return (
    <div className="main_element">
      <form className="memeform">
        <TextField
          label="input"
          onChange={(e) => setTop((prev) => e.target.value)}
        ></TextField>
        <TextField
          label="input"
          onChange={(e) => setBottom((prev) => e.target.value)}
        ></TextField>

        <button className="submit_button" onClick={handleGenerate}>
          click to generate
        </button>
      </form>
        

      <div className="memeedit">
        <div className="top">{Generate && Top}</div>
        <img className="memeimg" src={Url} alt="" />
        <div className="bottom">{Generate && Bottom}</div>
      </div>
    </div>
  );
}
