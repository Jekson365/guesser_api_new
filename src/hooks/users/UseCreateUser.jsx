import React from 'react'
import { API } from '../../Api'

function UseCreateUser() {
    const createUser = async (params) => {
        try {
            var res = await API.post("/api/user/create", params)
            return res
        } catch (err) {
            throw err
        }
    }

    return { createUser }
}

export default UseCreateUser