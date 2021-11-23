import * as qui from './quizcss.module.css'
function Quiz(props) {
    return(
        <div className= {qui.div1}>
            <h1>Quiz Information</h1>
            <table className = {qui.table1}>
                <tr className ={qui.colum1}>
                    <td>Course Code</td>
                    <td>{props.quiz_id}</td>
                </tr>
                <tr className= {qui.colum1}>
                    <td>Name</td>
                    <td>{props.start_time}</td>
                </tr>
                <tr className= {qui.colum1}>
                    <td>Credit</td>
                    <td>{props.end_time}</td>
                </tr>
                <tr className ={qui.colum1}>
                    <td>Type</td>
                    <td>{props.duration}</td>
                </tr>
                <tr className ={qui.colum1}>
                    <td>Lab</td>
                    <td>{props.deadline}</td>
                </tr>
                <tr className ={qui.colum1}>
                    <td>Plateform</td>
                    <td>{props.plateform}</td>
                </tr>
                <tr className ={qui.colum1}>
                    <td>Link</td>
                    <td><a href={props.link} target="_blank" >Quiz Link</a></td>
                </tr>
                <tr className ={qui.colum1}>
                    <td>Total Marks</td>
                    <td>{props.total_mark}</td>
                </tr>
               
                <tr className ={qui.colum1}>
                    <td>Date</td>
                    <td>{props.date}</td>
                </tr>

                
            </table>
            

        </div>
    );
}
export default Quiz;






