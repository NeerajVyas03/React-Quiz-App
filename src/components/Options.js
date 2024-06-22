function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((data, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered && index === question.correctOption
              ? "correct"
              : index === answer
              ? "wrong"
              : ""
          }`}
          key={data}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {data}
        </button>
      ))}
    </div>
  );
}

export default Options;
