import React, { useEffect, useState } from 'react'
import './testing.css'

const Testing = () => {

    const [data, setData] = useState([])

    function getData() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }
    
    useEffect(() => {
        getData()
    }, [])
    console.log("data Testing......", data)


    return (
        <div className='row m-0'>
            {
                data.slice(0, 6).map((e) => (
                    <div className='col-lg-4 col-md-6 col-sm-12' key={e.id}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src="..." alt="Card " />
                            <div className="card-body">
                                <h5 className="card-title">static</h5>
                                <p className="card-text">{e.title}</p>
                                <a href="##" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                ))
            }

        </div >
    )
}

export default Testing
