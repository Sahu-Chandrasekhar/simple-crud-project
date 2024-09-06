import React, { useEffect, useState } from 'react'
import './MasterData.css'
import { Grid, TextField } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import instance from '../config/axios.config';
import toast, { Toaster } from 'react-hot-toast';



const MasterData = () => {
  const [data, setData] = useState([])
  const [modalDisplay, setModalDisplay] = useState(false)
  const [edit, setEdit] = useState('Delete')
  const [uid, setUid] = useState('')
  const [lname, setLname] = useState('')
  const [display, setDisplay] = useState(false)
  const [displayy, setDisplayy] = useState(false)
  const [btncon, setBtncon] = useState('Submit')
  const [lid, setLid] = useState(1)
  const [syslidata, setSyslidata] = useState([])
  const [sublist, setSublist] = useState('');
  const [listitid, setListitid] = useState('')
  const [list, setList] = useState('')

  function deletee(lisid) {
    setUid(lisid)
    setEdit('Delete')
    setModalDisplay(true)
    setList('list')
  }
  function deletesublist(sublisid) {
    setListitid(sublisid)
    setEdit('Delete')
    setModalDisplay(true)
    setList('sublist')
  }
  function sublistfun() {
    setDisplayy(true)
    setBtncon('Submit')
  }
  function getMasterdata() {
    instance.get('/get/systemList')
      .then((res) => {
        console.log("list", res.data)
        setData(res.data)
      })
      .catch((err) => {

      })
  }
  function deleteeh() {
    if (list === 'list') {
      instance.delete(`delete/systemList/${uid}`)
        .then((res) => {
          console.log(res.data)
          getMasterdata()
          toast('deleted list successfully')
        })
        .catch((err) => {

        })
    } else {
      instance.delete(`/delete/systemListItem/${listitid}`)
        .then((res) => {
          console.log('del', res.data)
          getsublistitem()
          toast('deleted list successfully')
          setModalDisplay(false)
        })
        .catch((err) => {

        })
    }

  }
  const editfun = (lisid) => {
    setDisplay(true)
    setBtncon('update')
    setUid(lisid)
  }
  function postmd() {
    const payLoad = { listName: lname }
    if (btncon === 'Submit') {
      if (lname !== '') {
        instance.post(`/add/systemList`, payLoad)
          .then((res) => {
            getMasterdata()
            setDisplay(false)
            toast('List added successfully')


          })
          .catch((err) => {

          })
      }
    } else {
      instance.put(`/put/systemList/${uid}`, payLoad)
        .then((res) => {
          getMasterdata()
          setDisplay(false)
          toast('Updated successfully')
        })
        .catch((err) => {

        })
    }

  }
  function getsublistitem() {
    instance.get(`/get/systemListItem/${lid}`)
      .then((res) => {
        console.log("li......", res.data)
        setSyslidata(res.data)
      })
      .catch((err) => {
        console.log("li", err)
      })
  }
  function postsublist() {

    if (btncon === 'Submit') {
      const payLoad = { listid: lid, listItemName: sublist }

      if (sublist !== '') {
        instance.post(`/add/systemListItem/${lid}`, payLoad)
          .then((res) => {
            getsublistitem()
            setDisplayy(false)
            toast('Sublist added successfully')
            setSublist("")

          })
          .catch((err) => {

          })
      }
    }
    else {
      const payLoadd = { listItemName: sublist }
      if (sublist !== '') {
        instance.put(`/put/systemListItem/${listitid}`, payLoadd)
          .then((res) => {
            getsublistitem()
            setDisplayy(false)
            toast('Updated successfully')
            setSublist('')
          })
          .catch((err) => {

          })
      }
    }
  }
  function editsublist(editlis) {
    setDisplayy(true)
    setBtncon('update')
    setListitid(editlis)
  }
  useEffect(() => {
    getMasterdata()

  }, [])
  useEffect(() => {
    getsublistitem()
  }, [lid])
  console.log('dem', lid)
  console.log('testing', listitid)
  console.log('h', sublist)
  return (


    <div>
      <Toaster toastOptions={{
        className: 'costum_alert'
      }} />


      <h1 className="master-h" style={{ color: "white", fontWeight: "500" }}>Master-Data</h1>

      <Grid container item spacing={1} className="Contain">

        <Grid className='gridd' item xs={12} md={6} lg={6}>
          <button className='add-btn' onClick={() => setDisplay(true)}>Add list</button>

          {
            display ? (<div className='form_contain'>
              <TextField id="outlined-basic" label="List name" className='text' variant="outlined" value={lname} onChange={(e) => setLname(e.target.value)} />
              <button className='list-btn' onClick={() => postmd()}>{btncon}</button>
            </div>) : (null)
          }

          <ul style={{ marginTop: display ? 10 : 60, height: display ? "46vh" : "60vh" }} className="list-group lis-gp">

            {
              data.map((e) => (
                <li className="list-group-item" key={e.listId} onClick={() => setLid(e.listId)}> {e.listName} <DeleteForeverIcon className='delete' onClick={() => deletee(e.listId)} /> <EditIcon className='edit' onClick={() => editfun(e.listId)} /></li>
              ))
            }

          </ul>
        </Grid>
        <Grid item xs={12} md={6} lg={6} >
          <button className='add-btn' onClick={() => sublistfun()}>Add Sublist</button>

          {
            displayy ? (<div className='form_contain'>
              <TextField id="outlined-basic" label="ListItemName" className='text' variant="outlined" value={sublist} onChange={(e) => setSublist(e.target.value)} />
              <button className='list-btn' onClick={() => postsublist()}>{btncon}</button>
            </div>) : (null)
          }

          <ul style={{ marginTop: displayy ? 10 : 60, height: displayy ? "46vh" : "60vh" }} className="list-group lis-gp">

            {
              syslidata.map((e) => (
                <li className="list-group-item" key={e.listItemId}>{e.listItemName}<DeleteForeverIcon className='delete' onClick={() => deletesublist(e.listItemId)} /><EditIcon className='edit' onClick={() => editsublist(e.listItemId)} /></li>
              ))
            }

          </ul>

        </Grid>
      </Grid>
      
      {
        modalDisplay ? (
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
              <button onClick={deleteeh} >{edit}</button>
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

export default MasterData