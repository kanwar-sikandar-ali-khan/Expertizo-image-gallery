import React from 'react'
import { useEffect, useState } from "react";


const EachUser = (props) => {

    const [photos, setPhotos] = useState([])
    const { userid, boolval } = props

    // console.log('useridddddddddd', props)

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/albums/${userid}/photos`)
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setPhotos(json));

    }, [])

    // console.log(photos)


    const setboolfun = () => {
        // console.log("check")
        boolval()
    }


    return (
        <div>
            <h2 className="text-center">PHOTOS</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <button onClick={setboolfun} type="button" className="btn btn-info">Back</button>
                    </div>
                </div>
            </div>




            <div className="container">
                <div className="row">
                    {photos.map((v, i) => {
                        return (
                            <div className="col-md-3" style={{ border: "2px solid black" }} key={i}>
                                <h2>TITLE: {v.title}</h2>
                                <h2>ID:{v.id}</h2>
                                <h2>ALBUMID: {v.albumId}</h2>
                                <img src={v.thumbnailUrl} height="100px" width="100px" alt="photos" />
                                <img src={v.url} height="100px" width="100px" alt="photos" />
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* each user   Album id */}
        </div>
    )
}

export default EachUser
