const App = () => {
  return (
    <div>
      <Person
        name="John Doe"
        age={18}
        hobbies={["Feed animals", "Walk dogs", "Exercise"]}
      />
      <Person
        name="Jane Doe"
        age={15}
        hobbies={["Feed animals", "Walk dogs", "Exercise"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
