import ClassI from "./classi";

function ClassList(props) {
  console.log(props.classi.length);
  const list = props.classi.map((classi) => <ClassI key={classi.class_id} {...classi} />);
  return list;
}
export default ClassList;