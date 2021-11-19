import * as f from './fourmcss.module.css'
import {Card} from 'react-bootstrap'
function Fourm(props) {
    return(
        <div className= {f.div1}>
            <Card className={'text-center' + 'f.card'}>
            <Card.Header>Fourm</Card.Header>
            <Card.Body>
                <Card.Title>Question ID :{props.Qid}</Card.Title>
                <Card.Text>
                {props.Q}
                </Card.Text>
            </Card.Body>
            <Card.Footer className={'f.cfoot' + 'text-muted'}>Date : {props.date} Time : {props.time}</Card.Footer>
            </Card>
        </div>
    );
}
export default Fourm;






