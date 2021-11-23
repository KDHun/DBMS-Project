import * as res from "./resultcss.module.css";
function Result(props) {
  return (
    <div id={res.resultdiv}>
      <table>
        <tbody>
          <tr>
            <td>Name </td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Roll Number </td>
            <td>{props.id}</td>
          </tr>
        </tbody>
      </table>
      <h3 id={res.resulth1}>Congratulations...! You are Pass.</h3>
    </div>
  );
}

export default Result;
