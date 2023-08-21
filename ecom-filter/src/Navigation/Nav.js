import { AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai';
import './Nav.css';
import { FiHeart } from 'react-icons/fi';

const Nav = ({ query, handleInputChange }) => {
    return (

        <nav>
            <div className='nav-container'>
                <input onInput={handleInputChange} value={query} type='text' placeholder='Enter your Search' className='search-input' />
            </div>
            <div className='profile-container'>
                <a href='#'>
                    <FiHeart className='nav-icons' />
                </a>
                <a href='#'>
                    <AiOutlineShoppingCart className='nav-icons' />
                </a>
                <a href='#'>
                    <AiOutlineUserAdd className='nav-icons' />
                </a>
            </div>
        </nav>
    )
}

export default Nav