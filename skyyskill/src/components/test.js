import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import './segment.css'
import instance from '../config/axios.config';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { TextField, Button } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const SUbject = () => {
  const [display, setDisplay] = useState(false)
  //-----api start------
  const [error, setError] = useState('')
  const [modaldisplay, setModalDisplay] = useState(false)
  const [edit, setEdit] = useState('')



  return (
    <div>
      {
        display ? (
          <div className='form_container'>

            <h1>Subject</h1>

            <TextField id="outlined-basic" label="Segment name" variant="outlined"/>

            <select>
            <option>xyzz</option>
            <option>xyzz</option>
            <option>xyzz</option>
            <option>xyzz</option>
            </select>
            
            <h2>{error}</h2>
            {
              edit === 'Edit' ? (
                <Button className='btn btn-sucess' variant="outlined">Update</Button>
              ) : (
                <Button className='btn btn-sucess' variant="outlined">Submit</Button>
              )
            }



          </div>
        ) : (null)
      }

      <div className='tab'>

        <h1 className='us'>Segment</h1>
        <button className='r_btn' onClick={()=>setDisplay(true)}><PersonAddAltIcon />Add Subject</button>

        <table className="table table-striped table-bordered">

          <tr className='bg-info'>
            <th ><input type='checkbox' className='mr-2' />Subject</th>
            <th>catagory</th>
            <th>Action</th>
          </tr>

         
              <tr>
                <td><input type='checkbox' className='mr-2' />Static</td>
                <td>fgf</td>
                <td> <EditIcon className='edit' />
                  <DeleteForeverIcon className='delete' /> </td>
              </tr>
      
        </table>

      </div>

      {
        modaldisplay ? (
          <div className='confrim'>
            <div className='icon_container'>

              {
                edit === 'Delete' ? (<DeleteForeverIcon className='deletee' />) : (<EditIcon className='deletee' />)
              }

            </div>

            <h5>You are about {edit}</h5>
            <p>This will {edit} your segment Are you sure?</p>

            <div className='btn_holder'>
              <button onClick={() => setModalDisplay(false)} >cancel</button>
              <button>{edit}</button>
            </div>

          </div>
        ) : (
          null
        )
      }


      <Toaster toastOptions={{ className: 'costum_alert' }} />

    </div>
  )
}

export default SUbject