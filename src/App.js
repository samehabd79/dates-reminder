import React, { useState } from 'react'
import {Container} from 'react-bootstrap'
import persons from './components/Data'
import DatesCount from './components/DatesCount'
import DatesLists from './components/DatesLists'
import DatesActions from './components/DatesActions'
const App = () => {

  const [personData, setpersonData] = useState(persons)

  const onDelete = () => {
    setpersonData([])
  }

  const onShow = () => {
    setpersonData(persons)
  }

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount persons={personData}/>
        <DatesLists persons={personData}/>
        <DatesActions deleteData={onDelete} showData={onShow} />
      </Container>
    </div>
  )
}

export default App