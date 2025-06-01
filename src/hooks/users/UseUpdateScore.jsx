import React from 'react'
import { API } from '../../Api'

function UseUpdateScore() {
    const updateScore = async (params) => {
        try {
            await API.post("/api/user/update_score", params)
        } catch (err) {

        }
    }

    return { updateScore }
}

export default UseUpdateScore