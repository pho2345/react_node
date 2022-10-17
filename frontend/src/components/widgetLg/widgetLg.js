import "./widgetLg.css"
const WidgetLg = () => {
    const Button =({type}) =>{
        return <button className={"widgetLg__button" + type }>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLg__tittle">Latest transaction</h3>
            <table className="widgetLg__talbe">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amout</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLg__user">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa&pid=Api&P=0" className="widgetLg__img"/>
                        <span className="widgetLg__name">Susan Carol</span>
                    </td>
                    <td className="widgetLg__date">2 jun 2021</td>
                    <td className="widgetLg__amout">$122.00</td>
                    <td className="widgetLg__status"><Button type="Apporoved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLg__user">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa&pid=Api&P=0" className="widgetLg__img"/>
                        <span className="widgetLg__name">Susan Carol</span>
                    </td>
                    <td className="widgetLg__date">2 jun 2021</td>
                    <td className="widgetLg__amout">$122.00</td>
                    <td className="widgetLg__status"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLg__user">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa&pid=Api&P=0" className="widgetLg__img"/>
                        <span className="widgetLg__name">Susan Carol</span>
                    </td>
                    <td className="widgetLg__date">2 jun 2021</td>
                    <td className="widgetLg__amout">$122.00</td>
                    <td className="widgetLg__status"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLg__user">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa&pid=Api&P=0" className="widgetLg__img"/>
                        <span className="widgetLg__name">Susan Carol</span>
                    </td>
                    <td className="widgetLg__date">2 jun 2021</td>
                    <td className="widgetLg__amout">$122.00</td>
                    <td className="widgetLg__status"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLg__user">
                        <img src="https://tse2.mm.bing.net/th?id=OIP.2TCQ5rgg-KPeV8pAsDRwsQHaHa&pid=Api&P=0" className="widgetLg__img"/>
                        <span className="widgetLg__name">Susan Carol</span>
                    </td>
                    <td className="widgetLg__date">2 jun 2021</td>
                    <td className="widgetLg__amout">$122.00</td>
                    <td className="widgetLg__status"><Button type="Pending"/></td>
                </tr>
            </table>
        </div>
    );

};
export default WidgetLg