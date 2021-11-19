import * as ins from './instructorcss.module.css'
function Instructor(props) {
    return(
        <div className= {ins.div1}>
            <h1>Instructor Information</h1>
            <table className = {ins.table1}>
                <tr className ={ins.colum1}>
                    <td>ID</td>
                    <td>{props.id}</td>
                </tr>
                <tr className= {ins.colum1}>
                    <td>Name</td>
                    <td>{props.name}</td>
                </tr>
                <tr className= {ins.colum1}>
                    <td>Date of Birth</td>
                    <td>{props.dob}</td>
                </tr>
                <tr className ={ins.colum1}>
                    <td>Email</td>
                    <td>{props.email}</td>
                </tr>
                <tr className ={ins.colum1}>
                    <td>Address</td>
                    <td>{props.address}</td>
                </tr>
                <tr className ={ins.colum1}>
                    <td>Gender</td>
                    <td>{props.gender}</td>
                </tr>
                <tr className ={ins.colum1}>
                    <td>Hieght</td>
                    <td>{props.hieght} cm</td>
                </tr>
                <tr className ={ins.colum1}>
                    <td>Weight</td>
                    <td>{props.weight} Kg</td>
                </tr>
                <tr className ={ins.colum1}>
                    <td>Health Condition</td>
                    <td>{props.health}</td>
                </tr>
                <tr className ={ins.colum1}>
                    <td>Joining Date</td>
                    <td>{props.joindate}</td>
                </tr>
                <tr className ={ins.colum1}>
                    <td>Phone Number</td>
                    <td>{props.pno}</td>
                </tr>    
            </table>
            

        </div>
    );
}
export default Instructor;






