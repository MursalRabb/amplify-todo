import React from 'react'

import {Typography, Button} from '@material-ui/core'
import {Storage} from  'aws-amplify'


const DetailTask = (props) => {

    const {task, handleClose} = props

    const [image, setImage] = React.useState(null)

    React.useEffect(
        ()=>{
           async function fetch ( ) {
            let key = task.image
            console.log(key)
            const res = await Storage.get(key)
            setImage(res)
            
           }
           fetch()
        },
        []
    )

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
                <img src={image} alt="no image" />
            </div>
        </>
    )
    
}


export default DetailTask