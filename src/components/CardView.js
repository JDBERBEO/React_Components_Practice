import React from 'react'
import { datos } from '../utils/Db'

export const CardView = ({dato, handleEdit, handleDelete}) => {
   

    return (<>
        <div className="card">
        <div className="card-header">PERSONAL</div>
            <div className="card-body">
                <h5 className="card-title">{dato.name}</h5>
                <p className="card-text">{dato.address}</p>
                <a href="#" className="btn btn-primary" onClick={handleEdit}>EDIT</a>
                <a href="#" className="btn btn-danger" onClick={handleDelete}>DELETE</a>
            </div>
        </div>

      </>
    )}
