import React from 'react'
import {Button, TextField} from '@material-ui/core'


const Dialog = (props) => {

    const {handleDialog} = props 

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
    }

    return (
        <>
            <form className='dialog' enctype='multipart/form-data' onSubmit={handleSubmit}>
                <Button
                onClick={handleDialog}
                size='small'
                color='secondary'
                >Close</Button>
                <TextField
                placeholder='title'
                name='title'
                style={{'marginBottom': '8px'}}
                />
                <TextField
                multiline
                rows={4}
                placeholder='description'
                name='desription'
                style={{'marginBottom': '8px'}}
                />
                <input type="file" />
                <Button
                color='primary'
                variant='contained'
                type='submit'
                >
                    Create task
                </Button>
            </form>
        </>
    )
}


export default Dialog