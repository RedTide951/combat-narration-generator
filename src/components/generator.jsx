import React, { useState } from "react";
import Button from "@mui/material/Button";

const Generator = () => {
  const verbsArray = [
    "Batter",
    "Bang",
    "Blast",
    "Bludgeon",
    "Break",
    "Burst",
    "Clash",
    "Crack",
    "Crash",
    "Crunch",
    "Crush",
    "Cut",
    "Destroy",
    "Dislocate",
    "Drive",
    "Eviscarate",
    "Grind",
    "Impale",
    "Jab",
    "Kick",
    "Open",
    "Pound",
    "Pierce",
    "Pulverize",
    "Pummel",
    "Punch",
    "Puncture",
    "Rake",
    "Rip",
    "Scrape",
    "Sever",
    "Shatter",
    "Skewer",
    "Slam",
    "Slice",
    "Skin",
    "Slash",
    "Smack",
    "Splinter",
    "Split",
    "Stab",
    "Stirke",
    "Tear",
    "Thrust",
    "Wrench",
  ];
  const bodyLocationsArray = [
    "Abdomen",
    "Arm",
    "Brain",
    "Chest",
    "Collarbone",
    "Ear",
    "Elbow",
    "Eye Socket",
    "Face",
    "Femur",
    "Forearm",
    "Groin",
    "Head",
    "Intestine",
    "Kidney",
    "Jaw",
    "Lung",
    "Neck",
    "Nose",
    "Pelvis",
    "Ribs",
    "Shin",
    "Skull",
    "Spine",
    "Stomach",
    "Thigh",
    "Throat",
    "Torso",
  ];

  const gruesomePhrasesArray = [
    "Arterial Spray",
    "Blood Curdling Shriek",
    "Bouncing head",
    "Crumpled on the floor",
    "Cut in Two",
    "Clutching entrails",
    "Exploding into mist",
    "Disembowel",
    "Dislocating the arm",
    "Flopping on the floor",
    "Flying across the room",
    "Gasping for breath",
    "Gouts of blood",
    "Gurgling",
    "Mass of pulpy tissue",
    "Screaming in pain",
    "Sickening crunch",
    "Shattering ribs",
    "Spraying teeth",
    "Splashing blood",
    "Twitching",
    "Vomiting blood",
  ];

  const arrays = [verbsArray, bodyLocationsArray, gruesomePhrasesArray];
  const [currentItems, setCurrentItems] = useState(["", "", ""]);

  const handleClick = () => {
    const randomItems = arrays.map((array) => {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    });
    setCurrentItems(randomItems);
  };

  const outcomeStyle = {
    fontFamily: "Caslon Antique, serif",
    fontSize: "1.5rem",
  };

  return (
    <div>
      <div style={{ padding: "5vw 2vh" }}>
        <Button
          onClick={handleClick}
          variant="contained"
          style={{
            width: "30%",
            textAlign: "center",
            ...outcomeStyle,
            borderRadius: "5px",
            fontSize: "1.5rem",
            backgroundColor: "#868e97",
            color: "#000000",
          }}
        >
          Generate Hit Effect
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1vh",
          backgroundColor: "#868e97",
        }}
      >
        <div style={{ width: "50%", textAlign: "center", ...outcomeStyle }}>
          <p>Verb</p>
          <h3>{`${currentItems[0]}`}</h3>
        </div>
        <div style={{ width: "50%", textAlign: "center", ...outcomeStyle }}>
          <p>Location</p>
          <h3>{`${currentItems[1]}`}</h3>
        </div>
        <div style={{ width: "50%", textAlign: "center", ...outcomeStyle }}>
          <p>Effect</p>
          <h3>{`${currentItems[2]}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default Generator;
