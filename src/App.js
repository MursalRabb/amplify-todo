import React from 'react'
import Todo from './components/Todo'

import { withAuthenticator } from '@aws-amplify/ui-react'
import './components/static/style.css'
import Amplify from 'aws-amplify'

import { API, graphqlOperation } from 'aws-amplify'
import {listTodos} from './graphql/queries'

import Dialog from './components/Dialog'
import DetailTask from './components/DetailTask'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);



const App = () => {



  const [create, setCreate] = React.useState(false)
  const [viewTask, setViewTask] = React.useState({task: null, view: false})
  
  const [tasks, setTasks] = React.useState([])

  React.useEffect(
        ()=>{
            async function fetchTodos() {
                try {
                  const todoData = await API.graphql(graphqlOperation(listTodos))
                  const todos = todoData.data.listTodos.items
                  setTasks(todos)
                  console.log(todos)
                } catch (err) { console.log(err) }
              }
            fetchTodos()
        },
        []
    )

  const DetailTaskRenderer = ({ viewTask }) => {

    console.log(viewTask)

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
      <Todo 
      tasks={tasks}
      handleTasks={(tasks)=>setTasks(tasks)}
      handleDialog={()=>setCreate(true)} 
      handleViewTask={handleViewTask}/>
      {
        create === true?
        <Dialog 
        handleTaskAdd={
          (task)=>{
            setTasks([...tasks, task])
            setCreate(false)
          }
        }
        handleDialog={()=>setCreate(false)}/>
        :
        <></>
      }
      
      <DetailTaskRenderer viewTask={viewTask} />
      
    </div>
  )
}

export default withAuthenticator(App);
// export default App

