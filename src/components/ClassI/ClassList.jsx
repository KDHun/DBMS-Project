import ClassI from "./classi";
import { useNavigate } from 'react-router'

function ClassList(props) {
  const pushRoute = useNavigate();
  console.log(props.classi.length);
  const list = props.classi.map((classi) => <ClassI onClick={() => pushRoute(`${classi.class_id}`)} key={classi.class_id} {...classi} />);
  return list;
}
export default ClassList;