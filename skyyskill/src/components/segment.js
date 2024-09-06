import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import './segment.css'
import instance from '../config/axios.config';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { TextField, Button } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const Segment = () => {
  const [display, setDisplay] = useState(false)
  //-----api start------
  const [segmentdata, setSegmentdata] = useState([])
  const [categorydata, setCategorydata] = useState([])
  const [sname, setSname] = useState("")
  const [cid, setCid] = useState(1)
  const [error, setError] = useState('')
  const [modaldisplay, setModalDisplay] = useState(false)
  const [edit, setEdit] = useState('')
  const [sid, setSid] = useState('')


  function newsegment() {
    setDisplay(!display)
    setSname('')
    setCid('')
  }

  function updatesegment() {
    const payLoad = { name: sname, categoryid: cid };
    instance.put(`put/segment/${sid}`, payLoad)
      .then((res) => {
        console.log('segment update success')
        toast('Segment update successfully')
        newsegment()
        setDisplay(false)
        getsegment()
        // setHide(false)
      }
      ).catch((err) => {
        console.log("update user failed", err)
      })
  }

  function delhandler() {
    if (edit === "Delete") {
      instance.delete(`delete/segment/${sid}`)
        .then((res) => {
          console.log("sucessful", res)
          setModalDisplay(false)
          getsegment()
        })
        .catch((err) => {
          console.log("failed", err)
        })
    }
  }

  function changeedit(segid) {
    setEdit('Edit')
    setSid(segid)
    setDisplay(true)
  }

  function changedelete(segid) {
    setEdit('Delete')
    setModalDisplay(true)
    setSid(segid)
  }
  console.log("testing segmentid......", sid)

  const getsegment = () => {
    instance.get('get/segment')
      .then((res) => {
        setSegmentdata(res.data.results)
      })
      .catch((e) => {
        console.log(e);
      })
  }


  function postsegment() {
    const payLoad = { name: sname, categoryid: cid };
    if (sname !== '' && cid !== '') {
      instance.post('add/segment', payLoad)
        .then((res) => {
          toast('Segement added sucessfully')
          console.log(res.data)
          getsegment()
          setDisplay(false)
          setError('')
          setSname('')
          setCid(1)
        }
        )
        .catch((err) => {
          console.log("add segment failed", err)
        })
    } else {
      setError('***PLEASE FILL ALL INPUT FIELDS***')
    }
  }

  function getcategory() {
    instance.get('get/category')
    .then((res) => {
      setCategorydata(res.data)
    }).catch((e) => {
      console.log(e);
    })
  }

  useEffect(
    () => {
      getsegment()
      getcategory()
    }, [])
  console.log(categorydata)

  console.log('testing.....', sid)

  return (
    <div>

      {
        display ? (
          <div className='form_container'>

            <h1>Segment</h1>

            <TextField id="outlined-basic" label="Segment name" variant="outlined" value={sname} onChange={(e) => setSname(e.target.value)} />

            <select value={cid} onChange={(e) => setCid(e.target.value)}>

              {
                categorydata.map((e) => (
                  <option value={e.categoryid} key={e.categoryid}>{e.name}</option>
                ))
              }
            </select>

            <h2>{error}</h2>

            {
              edit === 'Edit' ? (
                <Button className='btn btn-sucess' variant="outlined" onClick={() => updatesegment()}>Update</Button>
              ) : (
                <Button className='btn btn-sucess' variant="outlined" onClick={() => postsegment()}>Submit</Button>
              )
            }

          </div>
        ) : (null)
      }

      <div className='tab'>

        <h1 className='us'>SEGMENT</h1>
        <button className='r_btn' onClick={() => newsegment()}><PersonAddAltIcon />Add Segment</button>

        <table className="table table-striped table-bordered">

          <tr className='bg-info'>
            <th ><input type='checkbox' className='mr-2' />segment</th>
            <th>catagory</th>
            <th>Action</th>
          </tr>

          {
            segmentdata.map((e) => (
              <tr key={e.segmentid}>
                <td><input type='checkbox' className='mr-2' />{e.name}</td>
                <td>{e.categoryname}</td>
                <td> <EditIcon className='edit' onClick={() => changeedit(e.segmentid)} />
                  <DeleteForeverIcon className='delete' onClick={() => changedelete(e.segmentid)} /> </td>
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
              <button onClick={delhandler} >{edit}</button>
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

export default Segment