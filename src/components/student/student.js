import * as stu from './studentcss.module.css'
function Student(props) {
    return(
        <div className= {stu.div1}>
            <h1>Student Information</h1>
            <table className = {stu.table1}>
                <tr className ={stu.colum1}>
                    <td>Roll Number</td>
                    <td>{props.roll_number}</td>
                </tr>
                <tr className= {stu.colum1}>
                    <td>Name</td>
                    <td>{props.name}</td>
                </tr>
                <tr className= {stu.colum1}>
                    <td>Date of Birth</td>
                    <td>{props.DOB}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Phone Number</td>
                    <td>{props.phone_number}</td>
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
                    <td>{props.health_condition}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Batch</td>
                    <td>{props.batch}</td>
                </tr>
                <tr className ={stu.colum1}>
                    <td>Joining Date</td>
                    <td>{props.joining_date}</td>
                </tr>
                    
            </table>
            

        </div>
    );
}
export default Student;






