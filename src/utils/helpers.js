/**
 * @function
 * @description This function formats input data to categorise results into two distinct arrays holding  answered and unanswered questions array.
 * @param {string} type
 * @param {array} questionsId
 * @param  {object} questions
 * @param {string} authedUser
 * @returns
 *
 */

export function getQuestions(type, questionsId, questions, authedUser) {
  let questionList = questionsId.map((question) => questions[question])
  const optionOne = questionList.filter(ele => ele.optionOne.votes.includes(authedUser))
  const optionTwo = questionList.filter(ele => ele.optionTwo.votes.includes(authedUser))
  const id = [...optionOne, ...optionTwo].map(ele => ele.id)
  const idSet = new Set(id);
  switch (type) {
    case "answered":
      return questionList.filter((value) => !idSet.has(value.id));
    case "unanswered":
      return [...optionOne, ...optionTwo]
    default:
      return questionList
  }

}

/**
 * @description This function collects a question object and returns values to populate the UI of the already answered questions
 * @param {object} question
 * @returns
 */
export function formatVotes(question) {
  //desctructure question object, get votes array of the optionOne and  optionTwo properties and rename to avoid variable name conflict
  const { optionOne: { votes: optionOneVotes }, optionTwo: { votes: optionTwoVotes } } = question

  const optionVotesLength = [optionOneVotes.length, optionTwoVotes.length]
  const totalVotes = optionVotesLength[0] + optionVotesLength[1]
  const optionPerc = optionVotesLength.map(perc => (perc / totalVotes) * 100)
  const optionColor = optionPerc.map(type => returnColour(type))



  function returnColour(type) {
    if (type < 34) {
      return "danger"
    }
    else if (type > 34 && type <= 67) {
      return "warning"

    }
    else {
      return "success"
    }

  }

  return {
    totalVotes,
    optionPerc,
    optionColor,
    optionVotesLength

  }



}