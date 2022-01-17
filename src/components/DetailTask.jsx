import React from 'react'

import {Typography, Button} from '@material-ui/core'


const DetailTask = (props) => {

    const {task, handleClose} = props

    return (
        <>
            <div className='detail-task'>
                <Button
                color='secondary'
                size='small'
                onClick={handleClose}
                >
                    Close
                </Button>
                <Typography
                variant='h6'
                >{task.title}</Typography>
                <Typography
                variant='p'
                >{task.description}</Typography>
            </div>
        </>
    )
    
}


export default DetailTask