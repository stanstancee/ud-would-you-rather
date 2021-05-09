import React from 'react';

import toggleOnIcon from '../icons/toggle_on_black_48dp.svg'
import toggleOffIcon from "../icons/toggle_off_black_48dp.svg"
import questionIcon from "../icons/icons8-ask-question-100.png"


function Unanswered(props) {

    const { question,handleClick ,option} = props
    const { optionOne, optionTwo } = question
    return (
        <div className="unanswered">
            <div>
                <img src={questionIcon} alt="icon"></img>
            </div>
            <div>
                <div className="unanswered" id="optionOne" onClick={handleClick}>
                    <img src={option==="optionOne" ? toggleOnIcon:toggleOffIcon} alt={optionOne.text}></img>
                    <p>{optionOne.text}</p>
                </div>
                <div  className="unanswered" id="optionTwo" onClick={handleClick}>
                    <img src={option==="optionTwo" ? toggleOnIcon:toggleOffIcon} alt={optionTwo.text}></img>
                    <p>{optionTwo.text}</p>
                </div>


            </div>





        </div>
    );
}

export default Unanswered;