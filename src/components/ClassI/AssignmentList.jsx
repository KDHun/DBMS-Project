import Assignment from "./Assignment";

function AssignmentList(props) {
  const list = props.assignment?.map((assignment) => (
    <Assignment {...assignment} key={assignment.assignment_id} />
  ));
  return list;
}
export default AssignmentList;
