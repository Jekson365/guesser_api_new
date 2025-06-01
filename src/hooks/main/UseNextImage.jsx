import { useState } from 'react'
import { API } from '../../Api'

function useNextImage() {
    const [loading, setLoading] = useState(true)
    const [nextImage, setNextImage] = useState(null)

    const loadNextImage = async () => {
        try {
            const res = await API.get("/api/image/next")
            setNextImage(res.data)
            setLoading(false)
            return res.data
        } catch (err) {
            setLoading(false)
            console.error("Failed to load next image:", err)
            throw err
        }
    }

    return { nextImage, loading, loadNextImage }
}

export default useNextImage
