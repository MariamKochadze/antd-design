import Forms from './components/signInForms/signInForms';
import { Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home/home';
import Books from './components/books/Books';
import ContactUs from './components/contactUs/contactUs'
import BookMenu from './components/menu/Menu'
import Footer from './components/footer/footer'


function App() {
    return (
        <div>
            <Router>
            <BookMenu/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contactUs" element={<ContactUs />} />
                    <Route path='signInForms' element={<Forms/>}/>
                    <Route path='books' element={<Books/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
