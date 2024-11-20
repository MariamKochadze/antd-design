import {Menu} from 'antd';
import './Menu.css';
import {useNavigate} from'react-router-dom';

const BookMenu = () => {
    const navigate = useNavigate();

    const handleMenuClick = (e) =>{
        navigate(`/${e.key}`)
    }

    return(
        <>
        <Menu 
        className='menu'
        mode='horizontal'
        onClick={handleMenuClick}
        items={
            [
                {label:'Home', key:''},
                {label:'Books', key:'books'},
                {label:'Conact us', key:'contactUs'},
                {label:'Sign-in', key:'signInForms'}
            ]
        }
        />
        </>
    )
}


export default BookMenu;