import React from 'react'
import { useEffect, useState } from "react";
import EachUser from "./eachUser";

const Gallary = () => {

    const [album, setAlbum] = useState([])
    const [bool, setBool] = useState(false)
    const [userId, setUserId] = useState()

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setAlbum(json));

    }, [])

    // console.log(album)

    const eachUser = (userId) => {
        setBool(true)
        setUserId(userId)
    }


    const backfunc = () => {
        setBool(false)
    }


    return (
        <div className=''>
            <h1 className="text-center">IMAGE GALLARY</h1>
            {bool ? <EachUser userid={userId} boolval={backfunc} />
                :
                <div>
                    <h2 className="text-center">ALBUMS</h2>
                    <div className="container main ">
                        <div className="row">

                            {
                                album.map((v, i) => {
                                    return (
                                        <div className="col-md-3" onClick={() => { eachUser(v.userId) }} style={{ border: "5px solid black" }} key={i}>
                                            <h2>TITLE: {v.title}</h2>
                                            <h2>ID:{v.id}</h2>
                                            <h2>USERID: {v.userId}</h2>
                                        </div>
                                    )
                                })

                            }

                        </div>
                    </div>
                </div>
            }
            {/* userid */}
        </div >
    )
}

export default Gallary;
