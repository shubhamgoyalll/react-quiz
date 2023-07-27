function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>WELCOME TO THE REACT QUIZ!</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;
