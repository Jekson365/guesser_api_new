import React, { useState } from 'react';
import { API } from '../../Api';

function UseSubmitAnswer() {
    const [data, setData] = useState();

    const handleSubmitAnswer = async (params) => {
        try {
            const res = await API.post("/api/Image/answer", params);
            setData(res.data);
            return res.data; // ✅ Now this returns the data properly
        } catch (err) {
            throw err;
        }
    };

    return { handleSubmitAnswer, data };
}

export default UseSubmitAnswer;
