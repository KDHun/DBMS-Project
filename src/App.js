import Header from './layout/Header';
import { Routes, Route } from 'react-router';
import Login from './pages/Login';

function App() {
    return (
        <>
            <Header>
            </Header>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}
export default App;