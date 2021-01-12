const App = () => {
  return (
    <div>
      <Tweet
        username="loseW8Fast"
        user="John Doe"
        date={new Date().toDateString()}
        tweet="Check out these 5 tips to losing weight!"
      />
      <Tweet
        username="like2clean"
        user="Jane Cleaners"
        date={new Date().toDateString()}
        tweet="How to clean your house the right way!"
      />
      <Tweet
        username="findJobsFast"
        user="James Fast"
        date={new Date().toDateString()}
        tweet="How to find a job less than 3 weeks!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
