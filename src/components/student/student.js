import * as stu from './studentcss.module.css'
function Student(props) {
    return(
        <div className= {stu.div1}>
            <h1>Student Information</h1>
            <table className = {stu.table1}>
                <tr className ={stu.colum1}>
                    <td>Roll Number</td>
                    <td>{props.id}</td>
                </tr>
                <tr className= {stu.colum1}>
                    <td>Name</td>
                    <td>{props.name}</td>
                </tr>
                <tr className= {stu.colum1}>
                    <td>Date of Birth</td>
                    <td>{props.dob}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Phone Number</td>
                    <td>{props.pno}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Email</td>
                    <td>{props.email}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Address</td>
                    <td>{props.address}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Gender</td>
                    <td>{props.gender}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>CPI</td>
                    <td>{props.CPI}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Hieght</td>
                    <td>{props.hieght} cm</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Weight</td>
                    <td>{props.weight} Kg</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Health Condition</td>
                    <td>{props.health}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Batch</td>
                    <td>{props.batch}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Joining Date</td>
                    <td>{props.joindate}</td>
                </tr>
                    
            </table>
            

        </div>
    );
}
export default Student;






