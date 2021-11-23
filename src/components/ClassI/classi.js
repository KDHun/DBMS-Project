import * as clas from "./classicss.module.css";
function ClassI(props) {
  return (
    <div className={clas.div1} onClick={props.onClick}>
      <h1>Class Information</h1>
      <table className={clas.table1}>
        <tbody>
          <tr className={clas.colum1}>
            <td>Class ID</td>
            <td>{props.class_id}</td>
          </tr>
          <tr className={clas.colum1}>
            <td>Course Code</td>
            <td>{props.course_code}</td>
          </tr>
          <tr className={clas.colum1}>
            <td>Start Date</td>
            <td>{props.start_date}</td>
          </tr>
          <tr className={clas.colum1}>
            <td>Insrtuctor ID</td>
            <td>{props.instructor_id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ClassI;
