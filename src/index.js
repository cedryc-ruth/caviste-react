import React from "react";
import ReactDOM from "react-dom";

const winesMock = [
    {
        name: 'Pinot noir',
        price: 9.99,
        country: 'France',
    },
    {
        name: 'Bordeau',
        price: 18.99,
        country: 'France',
    },
    {
        name: 'Beaujolais',
        price: 17.69,
        country: 'France',
    },
    {
        name: 'Chianti',
        price: 12.99,
        country: 'Italy',
    },
    {
        name: 'Trebbiano d\'Abruzzo',
        price: 18.99,
        country: 'Italy',
    },
];

class FilterableProductTable extends React.Component {
    render() {
        return <div>
            <div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="checkbox" /> <label>Only show red wines</label>
                </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr><th>Name</th><th>Price</th></tr>
                    </thead>
                    <tbody>
                        <tr><td colSpan="2" className="country">France</td></tr>
                        <tr><td>BLOCK NINE</td><td>21.00</td></tr>
                        <tr><td>BLOCK NINE</td><td>21.00</td></tr>
                        <tr><td>BLOCK NINE</td><td>21.00</td></tr>
                        <tr><td colSpan="2" className="country">Italy</td></tr>
                        <tr><td>BLOCK NINE</td><td>21.00</td></tr>
                        <tr><td>BLOCK NINE</td><td>21.00</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}

ReactDOM.render(<FilterableProductTable />, document.getElementById('root'));