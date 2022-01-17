import React from 'react'
import {Checkbox, Typography,Button} from '@material-ui/core'



const Task = (props) => {

    const {task, handleViewTask} = props
    const {title, description, checked} = task

    return (
        <>
            <div className='task'>
                <Typography variant='p'>{title}</Typography>
                <div style={{'flex':'1'}}></div>
                <Button
                onClick={()=>handleViewTask(task)}
                variant='text'
                color='primary'
                size='small'
                >View</Button>
                <div style={{'flex':'1'}}></div>
                <Checkbox 
                color='primary'
                checked={checked}/>
            </div>
        </>
    )
}



export default Task