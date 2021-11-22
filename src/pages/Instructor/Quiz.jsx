import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import * as bt from './quiz.module.css';
import QuizList from "../../components/Quiz/QuizList";
import authContext from "../../context";

const InstructorQuiz = (props) => {
  const me = useContext(authContext);
  const [quizData, setQuizData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const prevPage = () => {
    if (pageNumber >= 1) setPageNumber(pageNumber - 1);
  };
  const nextPage = () => {
    if (pageNumber <= 10) setPageNumber(pageNumber + 1);
  };
  useEffect(() => {

    axios
      .get(`http://localhost:8000/quiz`)
      .then((res) => setQuizData(res.data));
  }, [me]);
  console.log(quizData);

  return (
    <>
      <QuizList
        quiz={quizData.slice(pageNumber * 10, (pageNumber + 1) * 10)}
      />
      <Button className={bt.btn} onClick={prevPage}> PrevPage </Button>
      <Button className={bt.btn} onClick={nextPage}> NextPage </Button>
    </>
  );
};
export default InstructorQuiz;
