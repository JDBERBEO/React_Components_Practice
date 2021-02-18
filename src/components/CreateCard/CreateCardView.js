import React,{ useState }  from 'react'
import { datos } from '../../utils/Db'



export const CreateCardView = ( {values, handleInput, handleOnSubmit }) => {


    console.log(values)


    return (
        <>
        <form>
            <div className="mb-3">
                <label htmlFor='name' className="form-label" >Name</label>
                <input type="text" 
                className="form-control"
                name='name' 
                value={values.name} 
                onChange={handleInput}/>

            </div>
            <div className="mb-3">
                <label htmlFor='address' className="form-label" >address</label>
                <input type="text" 
                className="form-control" 
                name='address' 
                value={values.address} 
                onChange={handleInput}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleOnSubmit}>Submit</button>
        </form>
        </>
    )
}
