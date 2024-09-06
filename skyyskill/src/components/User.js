import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import './segment.css'
import instance from '../config/axios.config';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { TextField, Button } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';




const User = () => {
  const [display, setDisplay] = useState(false)
  const [error, setError] = useState('')
  const [modaldisplay, setModalDisplay] = useState(false)
  const [edit, setEdit] = useState('')
  const [userdata, setUserdata] = useState([])
  const [role, setRole] = useState([])
  const [phone, setPhone] = useState()
  const [emailid, setEmailid] = useState()
  const [rollid, setRollid] = useState()
  const [uid,setUid] = useState('')


  function getuser() {
    instance.get('/get/users')
      .then((res) => {
        console.log('testing....', res.data)
        setUserdata(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }

  function getrole() {
    instance('/get/role')
      .then((res) => {
        setRole(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }


  function postuserdata() {
    const payLoad = { mobile: phone, email: emailid, roleid: rollid };
    if (phone !== '' && emailid !== '' && rollid !== '') {
      instance.post('/add/users', payLoad)
        .then((res) => {
          toast('Segement added sucessfully')
          console.log(res.data)
          setDisplay(false)
          setError('')
          getuser()
        }
        )
        .catch((err) => {
          console.log("add segment failed", err)
        })
    } else {
      setError('***PLEASE FILL ALL INPUT FIELDS***')
    }
  }

  function deletuser() {
    if (edit === "Delete") {
      instance.delete(`/delete/users/${uid}`)
        .then((res) => {
          console.log("sucessful", res)
          setModalDisplay(false)
          getuser()
        })
        .catch((err) => {
          console.log("failed", err)
        })
    }
  }

  function deletee(userid) {
    setEdit('Delete')
    setModalDisplay(true)
    setUid(userid)
  }


useEffect(
  () => {
    getuser()
    getrole()
  }, [])

return (
  <div>
    {
      display ? (
        <div className='form_container'>

          <h1>User-Data</h1>

          <TextField id="outlined-basic" label="User Mobile" value={phone} variant="outlined" onChange={(e) => setPhone(e.target.value)} />


          <TextField id="outlined-basic" label="User Email" value={emailid} variant="outlined" onChange={(e) => setEmailid(e.target.value)} />

          <select value={rollid} onChange={(e) => setRollid(e.target.value)}>
            {
              role.map((e) => (
                <option value={e.roleid} key={e.roleid}>{e.name}</option>
              ))
            }

          </select>

          <h2>{error}</h2>
          {
            edit === 'Edit' ? (
              <Button className='btn btn-sucess' variant="outlined">Update</Button>
            ) : (
              <Button className='btn btn-sucess' variant="outlined" onClick={()=>postuserdata()}>Submit</Button>
            )
          }



        </div>
      ) : (null)
    }

    <div className='tab'>

      <h1 className='us'>User-Data</h1>
      <button className='r_btn' onClick={() => setDisplay(true)}><PersonAddAltIcon />Add Userdata</button>

      <table className="table table-striped table-bordered">

        <tr className='bg-info'>
          <th ><input type='checkbox' className='mr-2' />Mobile</th>
          <th>Email</th>
          <th>rname</th>
          <th>Action</th>
        </tr>

        {
          userdata.map((e) => (
            <tr>
              <td><input type='checkbox' className='mr-2' />{e.mobile}</td>
              <td>{e.email}</td>
              <td>{e.rname}</td>
              <td><DeleteForeverIcon className='delete' onClick={()=>deletee(e.userid)} /> </td>
            </tr>
          ))
        }



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
            <button onClick={()=>deletuser(false)}>{edit}</button>
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
export default User