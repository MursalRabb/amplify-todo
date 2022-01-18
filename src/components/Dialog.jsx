import React from 'react'
import {Button, TextField} from '@material-ui/core'

import {createTodo} from '../graphql/mutations'
import {API, graphqlOperation, Storage} from  'aws-amplify'


const Dialog = (props) => {


    const {handleDialog, handleTaskAdd} = props 

    const imageRef = React.useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = new FormData(event.target)
        data = Object.fromEntries(data)
        const image = imageRef.current.files

        async function addTodo () {
            try {
                await API.graphql(graphqlOperation(createTodo, {input: data}))
                // await Storage.put(image.name, image);
                handleTaskAdd(data)
            } catch (e) {
                
                console.log(e)
            }
        }   
        addTodo()
    }

    // const handleImageBrowserUpload = (event) => {
    //     console.log(imageRef.current.files)
    // }

    return (
        <>
            <form className='dialog'  onSubmit={handleSubmit}>
                <Button
                onClick={handleDialog}
                size='small'
                color='secondary'
                >Close</Button>
                <TextField
                placeholder='title'
                name='name'
                style={{'marginBottom': '8px'}}
                />
                <TextField
                multiline
                rows={4}
                placeholder='description'
                name='description'
                style={{'marginBottom': '8px'}}
                />
                <input
                ref={imageRef}
                type="file" 
                // onChange={handleImageBrowserUpload}
                />
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