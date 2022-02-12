import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Smiling Face with Open Hands",
  "🤭": "Face with Hand Over Mouth",
  "❤️": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": "Enraged Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐️": "Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "🤏": "Pinching Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand"
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
