import React from 'react'

import { datos } from '../utils/Db'
import { CardView } from './CardView'

export const CardContainer = () => {

    const handleEdit = () => {
        console.log('EDIT')
    }

    const handleDelete = () => {
        console.log('DELETE')
    }


    return (<>
        {datos.map((dato) => <CardView 
            dato = { dato }
            key={dato.id}
            handleDelete = {handleDelete}
            handleEdit = {handleEdit}
            
            />)}
        </>
    )
}
