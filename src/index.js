import React from "react";
import ReactDOM from "react-dom";

let winesMock = [
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

const API_URL = 'https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines';

class FilterableProductTable extends React.Component { 
    constructor(props) {
        super(props);
        
        this.state = {
            wines: winesMock
        }
    }

    componentDidMount() {
        fetch(API_URL)
	        .then(response => response.json())
	        .then(json => {
                console.log(json);
                this.setState({wines:json});
                this.render();
            })
    }

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
                    <tbody>{/* TODO Transform into a componant */}
                        <tr><td colSpan="2" className="country">France</td></tr>
                        { winesMock.filter(wine => wine.country==='France').map(wine => 
                            <tr><td>{wine.name}</td><td>{wine.price}</td></tr>
                         ) }

                        <tr><td colSpan="2" className="country">Italy</td></tr>
                        { winesMock.filter(wine => wine.country==='Italy').map(wine => 
                            <tr><td>{wine.name}</td><td>{wine.price}</td></tr>
                         ) }
                    </tbody>
                </table>
            </div>
        </div>
    }
}

ReactDOM.render(<FilterableProductTable />, document.getElementById('root'));