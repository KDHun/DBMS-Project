import StudentItem from "./StudentItem";

function StudentList(props) {
  const list = props.student.map((stu) => (
    <StudentItem {...stu} key={stu.roll_number} />
  ));
  return list;
}
export default StudentList;
