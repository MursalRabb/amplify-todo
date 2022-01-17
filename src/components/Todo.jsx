import React from 'react'
import {Typography, Button} from '@material-ui/core'

import Task from './Task'

const Todo = (props) => {

    const {handleDialog, handleViewTask} = props

    const [tasks, setTasks] = React.useState(
        [
            {id: 1, title: 'one', description: 'one', checked: false},
            {id: 2, title: 'two', description: 'two', checked: false},
            {id: 3, title: 'three', description: 'three', checked: true}
        ]
    )

    return (
        <div className='todo'>
            <Typography variant='h6'>Welcome to todo app</Typography>
            <Button
            onClick={handleDialog}
            variant='outlined'
            color='primary'
            size='small'
            style={{'width': '100%'}}
            >Add a task</Button>
            <div>
                {
                    tasks.map(
                        (element)=>{
                            return <Task task={element} key={element.id} handleViewTask={handleViewTask}/>
                        }
                    )
                }
            </div>
        </div>
    )
}



export default Todo