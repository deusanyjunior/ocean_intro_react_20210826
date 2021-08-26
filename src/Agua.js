import React from 'react';

class Agua extends React.Component {
    state = { estado: 'liquido', temperatura: '29'};

    constructor() {
        super();
        this.verEstado = this.verEstado.bind(this);
        this.estadoGelado = this.estadoGelado.bind(this);
        this.estadoLiquido = this.estadoLiquido.bind(this);
        this.estadoGasoso = this.estadoGasoso.bind(this);
    }

    verEstado(event) {
        console.log("Estado atual: " + this.state.estado);
    }

    estadoGelado(event) {
        this.setState( { estado: 'gelado', temperatura: '-273'} );
    }

    estadoLiquido(event) {
        this.setState( { estado: 'liquido', temperatura: '29'} );
    }

    estadoGasoso(event) {
        this.setState( { estado: 'gasoso', temperatura: '150'} );
    }

    render() {
        return (
            <div>
                <p>Propriedades da água:</p>
                <p>Fusão: {this.props.fusao} graus</p>
                <p>Ebulição: {this.props.ebulicao} graus</p>
                <p>Condição: {this.props.condicao}</p>

                <button onClick={ this.verEstado } > Ver estado</button>
                
                <button onClick={ this.estadoGelado } > Gelado </button>
                <button onClick={ this.estadoLiquido } > Liquido </button>
                <button onClick={ this.estadoGasoso } > Gasoso </button>
            </div>
        )
    }
}

export default Agua;