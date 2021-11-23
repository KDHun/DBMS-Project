import Admin from "./admin";

function AdminList(props) {
  console.log(props.admin.length);
  const list = props.admin.map((admin) => <Admin key={admin.user_name} {...admin} />);
  return list;
}
export default AdminList;
