import React,{useState} from 'react'
import { CardView } from '../CardView'
import { CreateCardView } from './CreateCardView'
import { datos } from '../../utils/Db'

const initialState = {name: '', address: ''}

export const CreateCardContainer = ({updateDatosState}) => {

    const [state, setState] = useState(initialState)
   
    const handleInputOnChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value }) 
   }



   const handleOnSubmit = (e) => {
        e.preventDefault()
        // datos.push({id: datos.length + 1, ...state})
        updateDatosState(state)
        setState({name:'', address: ''})
            
    }
    return (
        <div>
            <CreateCardView 
            values={state}
            handleInput={handleInputOnChange}
            handleOnSubmit={handleOnSubmit}
            />
        </div>
    )
}
