import Header from './layout/Header';
import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import Footer from './layout/Footer';
import Student from './components/student/student';
import Instructor from './components/Instructor/instructor';
import Course from './components/Course/course';
import ClassI from './components/ClassI/classi';
import Fourm from './components/Fourm/fourm';
import Indexlogin from './components/IndexPage/ipage';
import Header1 from './layout/Header1';
function App() {
    return (
        <>
            
            <Routes>
                <Route path="/" element={<Indexlogin />} />
                <Route path="/login" element={<><Header1/><Login /></>} />
                <Route path="/ilogin" element={<><Header/><Login /></>} />
                <Route path="/student" element={<><Header/><Student /></>} />
                <Route path="/instructor" element={<><Header/><Instructor /></>} />
                <Route path="/classes" element={<><Header/><ClassI /></>} />
                <Route path="/course" element={<><Header/><Course /></>} />
                <Route path="/fourm" element={<><Header/><Fourm /></>} />
            </Routes>
            
            {/* <Instructor />
            <Student id="201901137" name ="Karabhai Hun" dob="2002-04-18" pno="9106619122" email="hun.karabhai@gmail.com" address="Porbandar-360575" gender="Male" CPI="7.00" hieght="170" weight="60" health="good" batch ="ICT" joindate ="2019-05-05"/>
            <Instructor id="201901137" name ="Karabhai Hun" dob="2002-04-18"  email="hun.karabhai@gmail.com" address="Porbandar-360575" gender="Male"  hieght="170" weight="60" health="good" joindate ="2019-05-05" pno="9106619122"/>
            <Fourm Qid = "00000007" Q = "This dummy dummy dummy dummy dummy dummy dummy dummy Question?" time="07:25:06" date="2019-05-01"/>
             <Course  />
             <ClassI /> */}

            <Footer />
        </>
    );
}
export default App;