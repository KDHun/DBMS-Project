import * as cour from './coursecss.module.css'
function Course(props) {
    return(
        <div className= {cour.div1}>
            <h1>Course Information</h1>
            <table className = {cour.table1}>
                <tr className ={cour.colum1}>
                    <td>Course Code</td>
                    <td>{props.course_code}</td>
                </tr>
                <tr className= {cour.colum1}>
                    <td>Name</td>
                    <td>{props.name}</td>
                </tr>
                <tr className= {cour.colum1}>
                    <td>Credit</td>
                    <td>{props.credit}</td>
                </tr>
                <tr className ={cour.colum1}>
                    <td>Type</td>
                    <td>{props.type}</td>
                </tr>
                <tr className ={cour.colum1}>
                    <td>Lab</td>
                    <td>{props.lab}</td>
                </tr>
                <tr className ={cour.colum1}>
                    <td>Lectuer</td>
                    <td>{props.lecture}</td>
                </tr>
    
                
            </table>
            

        </div>
    );
}
export default Course;






