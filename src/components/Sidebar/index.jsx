import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import jslogo from '../../assets/images/js-v-logo.png'
import jsname from '../../assets/images/JAYS-SURYA-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faEnvelope,
  faHome,
  faMailReply,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={jslogo} alt="jslogo" />
        <img className=".jsname" src={jsname} alt="jaya_surya" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#7852a9" />
        </NavLink>
        {/* <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#7852a9" />
        </NavLink> */}
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#7852a9" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="skill-link"
          to="./skill"
        >
          <FontAwesomeIcon icon={faBook} color="#7852a9" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/surya-immadisetty-9b1037228/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#7852a9" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/immadisetty-jaya-surya"
          >
            <FontAwesomeIcon icon={faGithub} color="#7852a9" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdkmJLpRqWcbQpcmBBMKRQPtTpLNhQvFZnzSmjRdqhmDCKLTxbTjNdwXQVWLMlfxxQSfL"
          >
            <FontAwesomeIcon icon={faMailReply} color="#7852a9" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
