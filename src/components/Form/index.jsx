import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import { FaPlus } from 'react-icons/fa'


export default function Form({handleSumit, handleChanges, novaTarefa}){
    return (
    <form onSubmit={handleSumit} action='#' className='form'>
        <input 
            onChange={handleChanges} 
            type="text" 
            value={novaTarefa}
        />
        <button type='submit'>
            <FaPlus />
        </button>
    </form>
    );
}

Form.defaultProps = {
    novaTarefa: ''
};

Form.propTypes = {
    handleSumit: PropTypes.func.isRequired,
    handleChanges: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string,
};
