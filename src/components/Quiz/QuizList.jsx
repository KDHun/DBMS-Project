import Quiz from "./quiz";

function QuizList(props) {
  if(props.quiz==null)
  return null;
  console.log(props.quiz.length);
  const list = props.quiz.map((quiz) => <Quiz key={quiz.quiz_id} {...quiz} />);
  return list;
}
export default QuizList;
