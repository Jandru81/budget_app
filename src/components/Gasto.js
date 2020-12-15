import React from 'react';
import PropTypes from 'prop-types';


const Gasto = ({gasto}) => (
    <li className="gastos">
        <p>
            {gasto.nombre}

            <spam className="gasto">€ {gasto.cantidad} </spam>
            </p> 
    
    </li>
);

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired

}

export default Gasto;