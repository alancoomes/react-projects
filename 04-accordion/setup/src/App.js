import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data)
  return <main>
    <div className="container">
    <h3>Questions And Answers About Login</h3>
    <div >
      {questions.map((question) => <SingleQuestion key={question.id} {...question}/>)}
    </div>
    </div>
  </main>;
}

export default App;
