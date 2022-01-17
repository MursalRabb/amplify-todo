import React from 'react'
import Todo from './components/Todo'

import { withAuthenticator } from '@aws-amplify/ui-react'
import './components/static/style.css'

import Dialog from './components/Dialog'
import DetailTask from './components/DetailTask'



const App = () => {



  const [create, setCreate] = React.useState(false)
  const [viewTask, setViewTask] = React.useState({task: null, view: false})

  const DetailTaskRenderer = () => {
    if (viewTask.view === true) {
      return <DetailTask task={viewTask.task} handleClose={()=>setViewTask({task: null, view: false})}/>
    } else {
      return <></>
    }
  }

  const handleViewTask = (task) => {
    setViewTask({
      task,
      view: true
    })
  }

  return (
    <div className='main'>
      <Todo handleDialog={()=>setCreate(true)} handleViewTask={handleViewTask}/>
      {
        create === true?
        <Dialog handleDialog={()=>setCreate(false)}/>
        :
        <></>
      }
      {
        DetailTaskRenderer()
      }
    </div>
  )
}

export default withAuthenticator(App);
