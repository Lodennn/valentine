import { useState, useEffect } from "react";
import "./App.css";

const DEFAULT_URL =
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXc5OGJzd2FnNHFvNHFnaThpc2xtbXBicjhlZ3FoYTUybzJoOXhwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7yNblRfoEho5BhON1s/giphy.gif";
const YES_URL =
  "https://i.pinimg.com/originals/df/d4/63/dfd4631087fe6b50ba60adbb9de19e9b.gif";
const YES_TEXT = `
Happy Valentine’s Day ❤️

I hope this is only the beginning of a lifetime where we walk side by side, growing, dreaming, and smiling together.
I wish for us to stay together through every season of life — the easy days and the hard ones — always choosing each other.

You make ordinary moments feel special, and I hope we keep creating beautiful memories that never end.
May our love always feel safe, warm, and full of laughter.

I don’t just want today with you, I want every tomorrow.
I hope we grow old together, still holding hands, still laughing at the same silly things, and still loving each other more every day.

With you, forever doesn’t feel long enough.
`;

const NO_SENTENCES = [
  "No",
  "Think again",
  "Are you sure?",
  "But I love you :(",
  "CMOON",
  "Pleaaase??",
  "Don't do this to me",
  "Wait wait wait!",
  "You're breaking my heart 💔",
  "Say it ain't so!",
  "I'll be sad forever",
  "Nooo don't click that!",
  "Pick the other one 👉",
  "Wrong button babe!",
  "Are you testing me?",
  "Pretty please with a cherry on top?",
  "The correct answer is YES",
  "Try again sweetie",
  "Nope, wrong choice",
  "Honey nooo",
  "You're joking right?",
  "I know you didn't mean that",
  "Let me see that finger... click YES",
  "My heart can't take it",
  "Baby pls 😭",
  "I'm gonna pretend I didn't see that",
  "Accidents happen, try YES",
  "POV: You're about to make a mistake",
  "Sike! Click YES",
  "Nice try, now the other one",
  "I believe in second chances",
  "Let's try that again",
  "Nah fam wrong one",
  "The YES button is right there 👀",
  "Don't you love me?",
  "I'll give you unlimited hugs",
  "Reconsider? Please?",
  "My love for you is dying rn",
  "That hurt ngl",
  "Okay but what if you clicked YES tho",
  "Imagine saying no to this face",
  "I'll make it worth your while",
  "Pretty please?? 🥺",
  "I'm not above begging",
  "The YES button misses you",
  "Do it for us",
  "Think of the memories we could make",
  "I already told everyone you said yes",
  "My mom will be so disappointed",
  "The cat said you have to say yes",
  "I'll never ask for anything again",
  "Okay fine I'll do the dishes",
  "Name your price",
  "I'm on my knees metaphorically",
  "This is a prank right?",
  "You're so funny haha... now click YES",
  "I knew you were a jokester",
  "Okay you got me, now YES",
  "My disappointment is immeasurable",
  "And my day is ruined",
  "Just kidding... unless? 👉👈",
  "The universe wants you to say YES",
  "I consulted a fortune cookie",
  "It said you'd say yes",
  "Don't fight destiny",
  "YES has a nice ring to it",
  "C'mon don't leave me hanging",
  "I've been practicing my proposal",
  "I even got a haircut",
  "I washed the car",
  "I cleaned my room",
  "What more do you want from me",
  "I'll literally do anything",
  "The power of love compels you",
  "Be my valentine or else",
  "Or else I'll be really really sad",
  "That's it, that's the threat",
  "Pls I'm desperate",
  "I'm not too proud to beg",
  "Okay I'm begging",
  "PLEASE",
  "With a capital P",
  "And the L and E and A and S and E",
  "Did I mention please?",
  "One more chance?",
  "Last chance babe",
  "Okay for real last chance",
  "I'm counting to three... 1... 2...",
  "Don't make me get to 3",
  "Think of the children",
  "Our future children",
  "They need a happy family",
  "Dramatic? Me? Never",
  "Okay maybe a little",
  "But it's for love",
  "Love is worth the drama",
  "You know you want to",
  "Just give in already",
  "Resistance is futile",
  "I have the high ground",
  "It's over, click YES",
  "Make my day",
  "Make my whole year",
  "Make my whole life",
  "That's not too much to ask right",
  "I'm not crying you're crying",
  "Okay we're both crying",
  "Let's cry happy tears together",
  "Just say YES",
  "It's Valentine's Day c'mon",
  "Do it for the romance",
  "Do it for the aesthetic",
  "Do it for me 🥺",
  "I'm gonna keep asking",
  "I have 100 more of these",
  "I have nothing but time",
  "And love for you",
  "So much love",
  "An embarrassing amount of love",
  "Please put me out of my misery",
  "Say yes and end this",
  "I'll stop with the messages",
  "Promise",
  "Maybe",
  "Probably",
  "Worth a shot right",
  "You're still here reading these",
  "That means you care",
  "Click YES already you know you do",
  "I see you hovering",
  "Do it do it do it",
  "YOLO",
  "Say YES YOLO",
  "Final answer?",
  "Change your mind?",
  "There's still time",
  "The YES button is lonely",
  "Give it some love",
  "Be kind to buttons",
  "YES deserves a chance",
  "So do I",
  "Pretty please?",
  "One more pretty please?",
];

function App() {
  const [isYes, setIsYes] = useState(false);
  const [noSentenceIdx, setNoSentenceIdx] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imageSrc = isYes ? YES_URL : DEFAULT_URL;

  useEffect(() => {
    document.body.classList.toggle("yes-clicked", isYes);
    return () => document.body.classList.remove("yes-clicked");
  }, [isYes]);

  const onClickYES = () => {
    setIsYes(true);
  };

  const onClickNO = () => {
    setIsYes(false);
    setNoSentenceIdx((prev) => prev + 1);
    setYesScale((prev) => prev + 0.2);
  };

  return (
    <main className="main" style={{ "--main-scale": isYes ? 1 : yesScale }}>
      {!isImageLoaded && (
        <div className="loader-container">
          <div className="loader" aria-hidden="true" />
        </div>
      )}
      <section className="container">
        {!isYes && (
          <div className="logo">
            <img
              src={imageSrc}
              alt="logo"
              onLoad={() => setIsImageLoaded(true)}
              style={{ opacity: isImageLoaded ? 1 : 0 }}
            />
          </div>
        )}
        <div className="content">
          {!isYes && (
            <>
              <p>"Will you be my valentine?"</p>
              {!isYes && (
                <div
                  className="buttons"
                  style={{
                    "--buttons-gap": `${2 * yesScale}rem`,
                    "--buttons-margin-top": `${2 * yesScale}rem`,
                  }}
                >
                  <button
                    className="yes"
                    onClick={onClickYES}
                    style={{ "--yes-scale": yesScale }}
                  >
                    Yes
                  </button>
                  <button className="no" onClick={onClickNO}>
                    {NO_SENTENCES[noSentenceIdx]}
                  </button>
                </div>
              )}
            </>
          )}

          {isYes && (
            <div>
              <p className="yes-text">
                YAAAAY !!!! I LOVE YOU MY OPPYYYYYYYY !!! 💕❤️💗💖💕❤️
              </p>
              <p className="scroll-down-text">SCROLL DOWN PLEASE 🥺</p>
              <img src="/val.gif" alt="" className="val-gif" />
              <p className="yes-text">
                {YES_TEXT.trim()
                  .split("\n")
                  .map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
