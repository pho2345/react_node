import "./widgetSm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-regular-svg-icons'
const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widget__tittle">New join member</span>
            <ul className="widgetsm__list">
                <li className="widgetsm__list-items">
                    <img src= "https://tse2.mm.bing.net/th?id=OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa&pid=Api&P=0" className="widget__img" />
                    <div className="widgetSmUser">
                    <span className="widgetsm__user-name">Via</span>
                    <span className="widgetsm__user-tittle">FE</span>
                    </div>
                    <button className="widgetsm__button">
                        <FontAwesomeIcon icon={faEye} className="widgetSm__icons"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetsm__list">
                <li className="widgetsm__list-items">
                    <img src= "https://tse2.mm.bing.net/th?id=OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa&pid=Api&P=0" className="widget__img" />
                    <div className="widgetSmUser">
                    <span className="widgetsm__user-name">Via</span>
                    <span className="widgetsm__user-tittle">FE</span>
                    </div>
                    <button className="widgetsm__button">
                        <FontAwesomeIcon icon={faEye} className="widgetSm__icons"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetsm__list">
                <li className="widgetsm__list-items">
                    <img src= "https://tse2.mm.bing.net/th?id=OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa&pid=Api&P=0" className="widget__img" />
                    <div className="widgetSmUser">
                    <span className="widgetsm__user-name">Via</span>
                    <span className="widgetsm__user-tittle">FE</span>
                    </div>
                    <button className="widgetsm__button">
                        <FontAwesomeIcon icon={faEye} className="widgetSm__icons"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetsm__list">
                <li className="widgetsm__list-items">
                    <img src= "https://tse2.mm.bing.net/th?id=OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa&pid=Api&P=0" className="widget__img" />
                    <div className="widgetSmUser">
                    <span className="widgetsm__user-name">Via</span>
                    <span className="widgetsm__user-tittle">FE</span>
                    </div>
                    <button className="widgetsm__button">
                        <FontAwesomeIcon icon={faEye} className="widgetSm__icons"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetsm__list">
                <li className="widgetsm__list-items">
                    <img src= "https://tse2.mm.bing.net/th?id=OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa&pid=Api&P=0" className="widget__img" />
                    <div className="widgetSmUser">
                    <span className="widgetsm__user-name">Via</span>
                    <span className="widgetsm__user-tittle">FE</span>
                    </div>
                    <button className="widgetsm__button">
                        <FontAwesomeIcon icon={faEye} className="widgetSm__icons"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );

};
export default WidgetSm