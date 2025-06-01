import React from 'react'
import { API } from '../../Api'

function UseLoadImages() {
    const loadImages = async () => {
        await API.get("/api/Image/load")
            .then((res) => {
                console.log(res)
            })
    }

    return { loadImages }
}

export default UseLoadImages