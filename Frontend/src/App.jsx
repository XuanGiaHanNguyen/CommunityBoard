// Component is a section of reusuable JSX code 

import Card from './assets/Card'

import one from "./image/1.png"
import two from "./image/2.jpg"
import three from "./image/3.jpg"
import four from "./image/4.jpg"
import five from "./image/5.jpg"
import six from "./image/6.jpg"
import seven from "./image/7.jpg"
import eight from "./image/8.jpg"
import nine from "./image/9.jpg"
import ten from "./image/10.jpg"



function App() {

  return (
    <div className='p-20 px-26 bg-lime-200'>
      <div className='flex flex-col'>
        <h1>Pathway to Software Engineer</h1>
        <p>Essential Resources for Job Hunting, Software Engineering Skills, and Beyond!</p>
        <div className='grid grid-cols-4'>
            <Card name="Introduction to Programming" image={one} tag="Beginner" link="https://www.facebook.com/"/>
            <Card name="Technical Interview - the Tips and Tricks" image={two} tag="Beginner" link="https://www.facebook.com/"/>
            <Card name="Introduction to Programming" image={one} tag="Beginner" link="https://www.facebook.com/"/>
            <Card name="Technical Interview - the Tips and Tricks" image={two} tag="Beginner" link="https://www.facebook.com/"/>
            <Card name="Introduction to Programming" image={one} tag="Beginner" link="https://www.facebook.com/"/>
            <Card name="Technical Interview - the Tips and Tricks" image={two} tag="Beginner" link="https://www.facebook.com/"/>
            <Card name="Introduction to Programming" image={one} tag="Beginner" link="https://www.facebook.com/"/>
            <Card name="Technical Interview - the Tips and Tricks" image={two} tag="Beginner" link="https://www.facebook.com/"/>
            <Card name="Introduction to Programming" image={one} tag="Beginner" link="https://www.facebook.com/"/>
            <Card name="Technical Interview - the Tips and Tricks" image={two} tag="Beginner" link="https://www.facebook.com/"/>
            
        </div>
      </div>
    </div>
  )
}

export default App
