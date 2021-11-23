import * as ins from "./Admin.module.css";
function Admin(props) {
  return (
    <div className={ins.div1}>
        <h3>Admin Information</h3>
      <table className={ins.table1}>
        <tbody>
        <tr className={ins.colum1}>
          <td>Username</td>
          <td>{props.user_name}</td>
        </tr>
        <tr className={ins.colum1}>
          <td>Name</td>
          <td>{props.name}</td>
        </tr>
        <tr className={ins.colum1}>
          <td>Date of Birth</td>
          <td>{props.DOB}</td>
        </tr>
        <tr className={ins.colum1}>
          <td>Email</td>
          <td>{props.email}</td>
        </tr>
        <tr className={ins.colum1}>
          <td>Address</td>
          <td>{props.address}</td>
        </tr>
        <tr className={ins.colum1}>
          <td>Gender</td>
          <td>{props.gender}</td>
        </tr>
        <tr className={ins.colum1}>
          <td>Hieght</td>
          <td>{props.hieght} cm</td>
        </tr>
        <tr className={ins.colum1}>
          <td>Weight</td>
          <td>{props.weight} Kg</td>
        </tr>
        <tr className={ins.colum1}>
          <td>Health Condition</td>
          <td>{props.health_condition}</td>
        </tr>
        <tr className={ins.colum1}>
          <td>Joining Date</td>
          <td>{props.joining_date}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Admin;
