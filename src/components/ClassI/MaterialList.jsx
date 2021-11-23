import Material from "./Material";

function MaterialList(props) {
  const list =
    props.material?.map((assignment) => (
      <Material {...assignment} key={assignment.date} />
    )) || null;
  return list;
}
export default MaterialList;
