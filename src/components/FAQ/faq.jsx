import React from 'react'
import './faq.css'
import { frequentlyAskedQuestions } from '../../Module/General'
const Faq = () => {
  return (
    <div className='mainFAQ'>
      {
        frequentlyAskedQuestions.map((e , key)=>(
          <div className="mainCards">
             <div className="imgbox">
              <img src='faqimg.png'></img>
              </div>
              <div className="content">
                  <h1 id={key}>{e[0].label}</h1>
                  <p>{e[0].content}</p>
              </div>
          </div>
      ))
      }
    </div>
  )
}

export default Faq