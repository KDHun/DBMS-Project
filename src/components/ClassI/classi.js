import * as clas from './classicss.module.css'
function ClassI(props) {
    return(
        <div className= {clas.div1}>
            <h1>Class Information</h1>
            <table className = {clas.table1}>
                <tr className ={clas.colum1}>
                    <td>Class ID</td>
                    <td>{props.classid}</td>
                </tr>
                <tr className= {clas.colum1}>
                    <td>Course Code</td>
                    <td>{props.coursecode}</td>
                </tr>
                <tr className= {clas.colum1}>
                    <td>Start Date</td>
                    <td>{props.startdate}</td>
                </tr>
                <tr className ={clas.colum1}>
                    <td>Insrtuctor ID</td>
                    <td>{props.instructorid}</td>
                </tr>
                <tr className ={clas.colum1}>
                    <td>Description</td>
                    <td>{props.description}</td>
                </tr>
    
                
            </table>
            

        </div>
    );
}
export default ClassI;






