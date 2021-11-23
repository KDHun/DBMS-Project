import * as stu from "./studentcss.module.css";
function Student(props) {
  return (
    <div className={stu.div1}>
      <h1>Student Information</h1>
      <table className={stu.table1}>
        <tbody>
          <tr className={stu.colum1}>
            <td>Roll Number</td>
            <td>{props.roll_number}</td>
          </tr>
          <tr className={stu.colum1}>
            <td>Name</td>
            <td>{props.name}</td>
          </tr>
          <tr className={stu.colum1}>
            <td>Date of Birth</td>
            <td>{props.DOB}</td>
          </tr>
          <tr className={stu.colum1}>
            <td>Email</td>
            <td>{props.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Student;
