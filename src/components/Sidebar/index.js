import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/TheGuptaEmpire'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/suryagupt_sg'>
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://twitter.com/TheGuptaEmpire4'>
                    <FontAwesomeIcon icon={faSquareXTwitter}></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar