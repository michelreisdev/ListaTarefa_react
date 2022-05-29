import {Component} from 'react';
import './Main.css';
//Form
import { FaPlus } from 'react-icons/fa'

export default class Main extends Component {

    state = {
        novaTarefa: '',
    };

    handleChanges = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    }


    render(){
        const {novaTarefa} = this.state;

        return (
          <div className='main'>
              <h1>{novaTarefa}</h1>
              <form action='#' className='form'>
                <input 
                    onChange={this.handleChanges} 
                    type="text" 
                    value={novaTarefa}
                />
                <button type='submit'>
                    <FaPlus />
                </button>
              </form>
          </div>
        );
    };
}