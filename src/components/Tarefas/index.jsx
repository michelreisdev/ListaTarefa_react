import React from 'react';
import PropTypes from 'prop-types';
import './Tarefas.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa'

export default function Tarefas({ratefas, handleEdit, handleDelete}){
    return(
        <ul className='tarefas'>
            {ratefas.map((tarefa, index) =>(
                <li key={tarefa}>
                    {tarefa}
                    <span>
                        <FaEdit 
                            className='edit'
                            onClick={(e)=>handleEdit(e, index)}
                        />
                        <FaWindowClose 
                            className='delete'
                            onClick={(e)=>handleDelete(e, index)}
                        />
                    </span>
                </li>
            ))}
        </ul>
    );
}

Tarefas.defaultProps = {

};

Tarefas.propTypes = {
    ratefas: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.string,
};