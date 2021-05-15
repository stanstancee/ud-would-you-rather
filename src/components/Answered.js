import React from 'react';
import { ProgressBar } from "react-bootstrap"
import thumb from "../icons/thumb.svg"


function Answered(props) {
    const { votes: {
        totalVotes,
        optionPerc,
        optionColor,
        optionVotesLength,



    }, text, checkVote } = props
    const vote = totalVotes > 1 ? "votes" : "vote"
    return (
        <div style={{ width: "80vw" }}>
            {optionVotesLength.map((option, index) => {
                return (
                    <div key={index} style={{ margin: "10vh", border: "2px solid rgba(18, 63, 105, 0.897)" }}>

                        <h4 className="text">{text[index]}</h4>
                        {checkVote[index] && <p><small className="text-muted">You voted  this option</small><img alt="like icon" src={thumb} ></img></p>}

                        <p>{option} out of {totalVotes} {vote}</p>
                        {optionPerc[index].toFixed(0) < 1 ? <h2>{optionPerc[index].toFixed(0)}% votes</h2> :
                            <ProgressBar animated now={optionPerc[index]} variant={optionColor[index]} label={`${optionPerc[index].toFixed(0)}%`} />
                        }


                    </div>

                )
            })}





        </div>
    );
}

export default Answered;