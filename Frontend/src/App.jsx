// Component is a section of reusuable JSX code 

import Card from './assets/Card'

function App() {

  return (
    <div className='p-10 border-2'>
      <div className='border-2 flex flex-col'>
        <h1>Pathway to Software Engineer</h1>
        <p>Essential Resources for Job Hunting, Software Engineering Skills, and Beyond!</p>
        <div className='grid grid-cols-4'>
            <Card name="Hello"/>
            <Card name="Hello"/>
            <Card name="Hello"/>
            <Card name="Hello"/>
        </div>
      </div>
    </div>
  )
}

export default App
