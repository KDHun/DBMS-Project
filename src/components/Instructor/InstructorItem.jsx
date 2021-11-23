import * as ins from "./instructorcss.module.css";
function Instructor(props) {
  return (
    <div className={ins.div1}>
      <h1>Instructor Information</h1>
      <table className={ins.table1}>
        <tbody>
          <tr className={ins.colum1}>
            <td>ID</td>
            <td>{props.id}</td>
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
        </tbody>
      </table>
    </div>
  );
}
export default Instructor;
