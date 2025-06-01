import React, { useState } from "react";
import { API } from "../../Api";

function UseUploadImage() {
    const upload = async (params) => {
        await API.post("/api/image", params, {
            headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => {
            console.log(res);
        });
    };

    return { upload };
}

export default UseUploadImage;
