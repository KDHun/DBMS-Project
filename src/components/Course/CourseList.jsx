import Course from "./course";

function CourseList(props) {
  console.log(props.course.length);
  const list = props.course.map((course) => <Course key={course.course_code} {...course} />);
  return list;
}
export default CourseList;
