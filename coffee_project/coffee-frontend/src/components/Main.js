import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import Home from './Home';
import Register from './Register';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Main.scss';

function Main() {

    return (
        <>
            <Router> {/* Router bileşenini ekledik */}
                <MyNavbar />
                <Routes>
                    <Route index="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <MyFooter />
            </Router>
        </>
    )
}

export default Main;