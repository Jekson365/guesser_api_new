import React, { useState } from 'react'
import { API } from '../../Api'

function UseUsers() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getUsers = async () => {
        try {
            await API.get("/api/user/all")
                .then((res) => {
                    setData(res.data)
                    setLoading(false)
                })
        } catch (err) {
            setLoading(false)
            throw err
        }
    }

    return { getUsers, data, loading }

}

export default UseUsers