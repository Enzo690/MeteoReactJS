import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { getDefaultNormalizer } from '@testing-library/react';

class Meteo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVille: "",
        }
    }

    submit = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputVille}&appid=bebfc9a4d43ef4f1a5ab0d1fbb69ddb1`)
            .then(response => response.json())
            .then(resData => {
                console.log(resData)
                this.setState({
                    isLoaded: true,
                    resData: resData
                });
            })
    }

    render() {
            
        const { resData, isLoaded } = this.state;

        if (resData) {

            return (

                <div>

                    <InputGroup className="mb-3">
                        <FormControl
                            type="text"
                            onChange={e => this.setState({ inputVille: e.target.value })}
                            placeholder="Ville de votre choix"
                        />
                        <InputGroup.Append>
                            <Button onClick={this.submit} variant="outline-secondary">Classement</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <ul>

                        <h1>{resData.name}</h1>
                        <h4>{resData.sys.country}</h4>
                        <img src={`http://openweathermap.org/img/wn/${resData.weather[0].icon}@2x.png`} />
                        <li className="d-flex justify-content-around">

                            <div>{Math.round(resData.main.temp_min - 273.15) + "°C"}</div>
                            <div>{Math.round(resData.main.temp_max - 273.15) + "°C"}</div>

                        </li>
                    </ul>

                </div>
            )
        }

        return (

            <div>

                <InputGroup className="mb-3">
                    <FormControl
                        type="text"
                        onChange={e => this.setState({ inputVille: e.target.value })}
                        placeholder="Ville de votre choix"
                    />
                    <InputGroup.Append>
                        <Button onClick={this.submit} variant="outline-secondary">Chercher</Button>
                    </InputGroup.Append>
                </InputGroup>



            </div>
        );
    }
}

export default Meteo;