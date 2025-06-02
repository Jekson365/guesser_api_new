import React, { useEffect } from 'react'
import '../../styles/leaderboard/leaderboard.scss'
import UseUsers from '../../hooks/users/UseUsers'
import { Box, Stack } from '@mui/material';
import SubmitButton from '../../commons/SubmitButton';


function LeaderBoard() {
    const { getUsers, data, loading } = UseUsers();

    useEffect(() => {
        getUsers();
    }, [loading])
    return (
        <>
            <Box
                maxWidth={"600px"}
                gap={'50px'}
                margin={"40px auto"}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Stack
                    className='cover-m'
                    direction={'column'}
                    gap={'20px'} justifyContent={'flex-start'} width={'100%'}>
                    {data && data.map((user) => {
                        return (
                            <>
                                <Stack direction={'row'} className='inside' justifyContent={'space-between'}>
                                    <div className='name'>{user.name}</div>
                                    <div className='score'>3000</div>
                                </Stack>
                            </>
                        )
                    })}
                </Stack>
                <SubmitButton handler={()=> window.location.href = '/welcome'} FSize={20} type={'bg-danger'} text={'უკან დაბრუნება'} />
            </Box>
        </>
    )
}

export default LeaderBoard