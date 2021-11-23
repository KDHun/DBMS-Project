import InstructorItem from "./InstructorItem";

function InstructorList(props) {
  const list = props.instructor.map((instructor) => (
    <InstructorItem {...instructor} key={instructor.id} />
  ));
  return list;
}
export default InstructorList;
