function StartScreen({ numQues, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQues} questions to test your react mastery.</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Lets's Start
      </button>
    </div>
  );
}

export default StartScreen;
