import React from 'react'

import { CardView } from './CardView'

export const CardContainer = ({datos}) => {

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
