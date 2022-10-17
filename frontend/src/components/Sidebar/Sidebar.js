import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGripLines,faShop,faChartSimple,faEnvelopesBulk,faMessage,faBriefcase,faChartLine,faExclamation} from "@fortawesome/free-solid-svg-icons"
import {faCalendarTimes, faBarChart, faUser ,faCreditCard,faEnvelope} from "@fortawesome/free-regular-svg-icons"
import {Link, Switch ,Route} from  "react-router-dom"
function Sidebar(){
    
    return(
            <div className="sidebar">
                <div className="sidebar__wrapper">
                    <div className="sidebar__menu">
                        <h5 className="sidebar__tittle">
                            Dashboard
                        </h5>
                        <ul className="sidebar__list">
                        <li className="sidebar__items">
                        <Link to="/" className="link" >
                            <FontAwesomeIcon icon={faGripLines} className="items__icons1 mt-3"></FontAwesomeIcon>
                                <div className="items__name">
                                    Home
                                    </div>                           
                        </Link>
                            </li>
                            <li className="sidebar__items">
                                <FontAwesomeIcon icon={faBarChart} className="items__icons"></FontAwesomeIcon>
                                <div className="items__name">Analytics</div>
                            </li>
                            <li className="sidebar__items">
                                <FontAwesomeIcon icon={faCalendarTimes} className="items__icons"></FontAwesomeIcon>
                                <div className="items__name">Sales</div>                            
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar__menu">
                        <h5 className="sidebar__tittle">
                            QuickMenu
                        </h5>
                        <ul className="sidebar__list">
                        <li className="sidebar__items">
                        <Link to="/users" className="link">
                            <FontAwesomeIcon icon={faUser} className="items__icons1 mt-3"></FontAwesomeIcon>
                                <div className="items__name">
                                    User
                                </div>                           
                        </Link>
                            </li>
                            <li className="sidebar__items">
                            <Link to="/products" className="link">
                            <FontAwesomeIcon icon={faShop} className="items__icons1 mt-3"></FontAwesomeIcon>
                                <div className="items__name">
                                    Product
                                </div>                           
                            </Link>
                            </li>
                            <li className="sidebar__items">
                                <FontAwesomeIcon icon={faCreditCard} className="items__icons"></FontAwesomeIcon>
                                <div className="items__name">Transactions</div>
                            </li>
                            <li className="sidebar__items">
                                <FontAwesomeIcon icon={faExclamation} className="items__icons"></FontAwesomeIcon>
                                <div className="items__name">Report</div>                            </li>
                        </ul>
                    </div>
                    <div className="sidebar__menu">
                        <h5 className="sidebar__tittle">
                            Staff
                        </h5>
                        <ul className="sidebar__list">
                        <li className="sidebar__items">
                            <FontAwesomeIcon icon={faBriefcase} className="items__icons"></FontAwesomeIcon>
                                <div className="items__name">
                                    Manager
                                </div>                           
                            </li>
                            <li className="sidebar__items">
                                <FontAwesomeIcon icon={faChartLine} className="items__icons"></FontAwesomeIcon>
                                <div className="items__name">Analytics</div>
                            </li>
                            <li className="sidebar__items">
                                <FontAwesomeIcon icon={faExclamation} className="items__icons"></FontAwesomeIcon>
                                <div className="items__name">Report</div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
    );
}
export default Sidebar