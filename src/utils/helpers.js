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