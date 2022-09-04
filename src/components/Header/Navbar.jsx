import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from '../../assets/images/logo.png'



export default function Navbar() {

    return (
        <>
            <nav className='navbar-container'>
              
                    <>
                    <Link to='/'>
                        <img src={Logo} alt="" />
                    </Link>
                    </>
                   
                       
            
            </nav>
        </>
    );
}