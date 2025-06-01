import { useState } from 'react';
import { API } from '../../Api';

function useCurrentUser() {
    const [currentUserData, setCurrentUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getCurrentUser = async () => {
        try {
            const res = await API.get("/api/user/current");
            setCurrentUserData(res.data);
            return res.data
        } catch (err) {
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { getCurrentUser, currentUserData, loading };
}

export default useCurrentUser;
