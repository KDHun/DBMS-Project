import axios from "axios";
import { useContext, useEffect, useState } from "react"
import Student from "../components/student/student"
import authContext from "../context"

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

const StudentPage = (props) => {
    const me = parseJwt(useContext(authContext).token);
    console.log(me);
    const [studentData, setStudentData] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/student/${me.name}`).then((res) => setStudentData(res.data))
    }, [])
    return (
        <Student {...studentData} />
    )
}
export default StudentPage;