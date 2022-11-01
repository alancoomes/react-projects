import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [clicked, setClicked] = useState(false)
  return <article className="question">
    <header>
    <h4>{title}</h4>
     <button className="btn" onClick={() => setClicked(!clicked)}>{clicked ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
    </header>
    <p>{clicked ? info : null}</p>
  </article>;
};

export default Question;
