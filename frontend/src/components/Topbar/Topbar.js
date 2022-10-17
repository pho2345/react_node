import {BrowserRouter , Switch, Route , NavLink} from 'react-router-dom';
import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faGear, faUser} from "@fortawesome/free-solid-svg-icons"
function Topbar(){
  return (
            <div className="header">
              <span className='logo'>
                Iamadmin
              </span>
              <div className='topBarRight'>
                <div className='topBarIcoins'>
                <div className='bell__name'>
                <FontAwesomeIcon icon= {faBell} className="icons__bell" >              </FontAwesomeIcon>
                      Notifications
                </div>
                <div className='gear__name' >
                <FontAwesomeIcon icon={faGear} className = "icons__gear" />
                      Setting
                </div>
                <FontAwesomeIcon icon={faUser}  className="icons__user"/>
              </div>
              </div>
              <div className='header__navlink'>
              <NavLink activeClassName="active" to="/login">Login</NavLink>
              </div>
            </div>
      )
}    
export default Topbar;