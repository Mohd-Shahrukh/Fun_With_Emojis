import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐": "Grinning Face",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Smiling Face with Open Hands",
  "๐คญ": "Face with Hand Over Mouth",
  "โค๏ธ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Disappointed Face",
  "๐": "Downcast Face with Sweat",
  "๐ฉ": "Weary Face",
  "๐ซ": "Tired Face",
  "๐ฅฑ": "Yawning Face",
  "๐ค": "Face with Steam From Nose",
  "๐ก": "Enraged Face",
  "๐ ": "Angry Face",
  "๐คฌ": "Face with Symbols on Mouth",
  "๐": "Smiling Face with Horns",
  "๐ฟ": "Angry Face with Horns",
  "๐": "Waving Hand",
  "๐ค": "Raised Back of Hand",
  "๐๏ธ": "Hand with Fingers Splayed",
  "โ": "Raised Hand",
  "๐": "Vulcan Salute",
  "๐": "OK Hand",
  "๐ค": "Pinching Hand",
  "โ๏ธ": "Victory Hand",
  "๐ค": "Crossed Fingers",
  "๐ค": "Love-You Gesture",
  "๐ค": "Sign of the Horns",
  "๐ค": "Call Me Hand"
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  var emojiWeKnow = Object.keys(emojiDictionary);
  // console.log(emojiWeKnow);

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 className="head">Fun With Emojis</h1>
      <input
        placeholder="Paste your Emojis here to know meaning"
        onChange={emojiInputHandler}
      />
      <div>
        <h2>{meaning}</h2>
      </div>
      <h3>Emojis We Know</h3>
      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ padding: "2rem", fontSize: "3rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}

      <footer
        style={{
          fontSize: "1rem",
          backgroundColor: "#6366f1",
          height: "4rem",
          paddingBottom: "2rem",
          margin: "0rem",
          borderTopLeftRadius: "1rem",
          bottom: "0px"
        }}
      >
        <h1 style={{ paddingTop: "1rem", paddingBottom: "0rem" }}>About</h1>
        <p className="para">
          Are you emojis lover then try out this app. It's fun to play with this
          app.
        </p>
      </footer>
    </div>
  );
}
