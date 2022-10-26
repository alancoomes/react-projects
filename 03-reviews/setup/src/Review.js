import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const checkNum = (i) => {
    if (i<0)  {
      return people.length - 1
    } else if (i>people.length-1) {
      return 0
    } else
      return i
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index+1
      return people[newIndex] ? newIndex : index
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index-1
      return people[newIndex] ? newIndex : index
    })
  }

  const randomPerson = () => {
    let randNum = Math.floor(Math.random() * people.length)
    if(randNum === index) {
      randNum = index+1
    }
    setIndex(checkNum(randNum))
  }

  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <button className="prev-btn" onClick={prevPerson}>
      <FaChevronLeft />
    </button>
    <button className="next-btn" onClick={nextPerson}>
      <FaChevronRight />
    </button>
    <button className="random-btn" onClick={randomPerson}>
      Suprise Me
    </button>
  </article>;
};

export default Review;
