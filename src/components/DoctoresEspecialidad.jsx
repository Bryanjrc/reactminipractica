import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class DoctoresEspecialidad extends Component {

    state = {
        doctores: [],
        especialidades: []
    }

    selectEspecialidad = React.createRef();

    loadEspecialides = () => {
        let request = "api/doctores/"

        axios.get(Global.urlApiDoctores + request).then((response) => {
            this.setState({
                especialidades: response.data
            })
        })
    }

    buscarDoctores = (event) => {
        event.preventDefault();
        
        let especialidad = this.selectEspecialidad.value;
        let request = "api/Doctores/DoctoresEspecialidad/" + especialidad;

        axios.get(Global.urlApiDoctores + request).then((response) => {
            this.setState({
                doctores: response.data
            })
        })
    }
    
    componentDidMount = () => {
        this.loadEspecialides();
    }

    render() {
        return (
            <div>
                <h1>Doctores Especialidad</h1>

                <form>
                    <label>Elige una especialidad: </label>
                    
                    <select ref={this.selectEspecialidad}>
                        {/*
                            this.state.especialidades && (
                                <select ref={this.selectEspecialidad}>
                                    <option>{this.state.especialidades}</option>
                                </select>
                            )
                            
                        */}

                        {
                            this.state.especialidades.map((especialidad, index) => {
                                return(
                                    <option value= {especialidad.idDoctor} key={index}>
                                        {especialidad.especialidad}
                                    </option>
                                )
                            })
                            
                        }
                    </select>
                    

                    <button onClick={this.buscarDoctores}>Buscar</button>
                </form>
                <ul>
                {
                    this.state.doctores.map((doctor, index) => {
                        return(
                            <li key={index}>
                                Apellido: {doctor.apellido}
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}
