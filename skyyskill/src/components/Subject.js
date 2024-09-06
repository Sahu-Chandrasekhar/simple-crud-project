import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import './segment.css'
import instance from '../config/axios.config';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { TextField, Button } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


const Subject = () => {
    const [display, setDisplay] = useState(false)
    //-----api start------
    const [error, setError] = useState('')
    const [modaldisplay, setModalDisplay] = useState(false)
    const [edit, setEdit] = useState('delete')
    const [subject, setSubject] = useState([])
    const [segment, setSegment] = useState([])
    const [sname, setSname] = useState('')
    const [sid, setSid] = useState(6)
    const [uid, setUid] = useState('')


    function getsubject() {
        instance.get('get/subject')
            .then((res) => {
                console.log(res.data.results)
                setSubject(res.data.results)
            })
            .catch((err) => {
                console.log('getsubject failed', err)
            })

        instance.get('get/segment')
            .then((res) => {
                console.log('segment', res.data.results)
                setSegment(res.data.results)
            })
            .catch((err) => {
                console.log('getsegment', err)
            })
    }

    function postSubject() {
        const payLoad = { name: sname, segmentid: sid };
        if (sname !== '' && sid !== '') {
            instance.post('/add/subject', payLoad)
                .then((res) => {
                    toast('Subject Added Sucessfully')
                    console.log(res)
                    getsubject()
                    setDisplay(false)
                }
                )
                .catch((err) => {
                    console.log("postsubject error", err)
                })
        } else {
            setError('****PLEASE FILL THE FORM****')
        }
    }

    function deletehandler() {

        instance.delete(`delete/subject/${uid}`)
            .then((res) => {
                console.log("sucessful", res)
                setModalDisplay(false)
                getsubject()
                toast('Subject deleted sucessfully')
            })
            .catch((err) => {
                console.log("failed", err)
            })

    }

    function edittt(segid) {
        setEdit('Edit')
        setUid(segid)
        setDisplay(true)
    }

    function deletee(segid) {
        setUid(segid)
        setEdit('Delete')
        setModalDisplay(true)
    }
    console.log("testing segmentid......", uid)

    function updatehandler() {
        const payLoad = { name: sname, segmentid: sid }
        instance.put(`/put/subject/${uid}`, payLoad)
            .then((res) => {
                console.log('updated successful', res)
                getsubject()
                setDisplay(false)
                toast('updated successfully')
            })
            .catch((err) => {
                console.log(err)
            })
    }



    useEffect(() => {
        getsubject()
    }, [])

    return (
        <div>
            {
                display ? (
                    <div className='form_container'>

                        <h1>Subject</h1>

                        <TextField id="outlined-basic" label="Subject name" variant="outlined" value={sname} onChange={(e) => setSname(e.target.value)} />

                        <select value={sid} onChange={(e) => setSid(e.target.value)}>
                            {
                                segment.map((e) => (
                                    <option key={e.segmentid} value={e.segmentid} >{e.name}</option>
                                ))
                            }
                        </select>
                        <h2>{error}</h2>
                        {
                            edit === 'Edit' ? (
                                <Button className='btn btn-sucess' variant="outlined" onClick={() => updatehandler()}>Update</Button>
                            ) : (
                                <Button className='btn btn-sucess' variant="outlined" onClick={() => postSubject()}>Submit</Button>
                            )
                        }

                    </div>
                ) : (null)
            }

            <div className='tab'>

                <h1 className='us'>SUBJECT</h1>
                <button className='r_btn' onClick={() => setDisplay(true)}><PersonAddAltIcon />Add Subject</button>

                <table className="table table-striped table-bordered">

                    <tr className='bg-info'>
                        <th ><input type='checkbox' className='mr-2' />Subject Name</th>
                        <th>Segment name</th>
                        <th>Action</th>
                    </tr>
                    
                    {
                        subject.map((e) => (
                            <tr key={e.subjectid}>
                                <td><input type='checkbox' className='mr-2' />{e.name}</td>
                                <td>{e.segmentname}</td>
                                <td> <EditIcon className='edit' onClick={() => edittt(e.subjectid)} />
                                    <DeleteForeverIcon className='delete' onClick={() => deletee(e.subjectid)} /> </td>
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
                            <button onClick={deletehandler}>{edit}</button>
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

export default Subject