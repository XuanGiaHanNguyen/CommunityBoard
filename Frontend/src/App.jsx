// Component is a section of reusuable JSX code 

import Card from './assets/Card'

import one from "./image/1.jpg"
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
    <div className='px-26 bg-sky-200 flex flex-col justify-center align-center items-center'>
      <div className='flex flex-col max-w-7xl min-w-lg bg-white h-full py-10 px-6 text-center'>
        <h1 className='text-4xl font-bold text-sky-700'>Pathway to Software Engineer</h1>
        <p className='text-gray-700'>Essential Resources for Job Hunting, Software Engineering Skills, and Beyond!</p>
        <br />
        <div className='grid grid-cols-4'>
            <Card name="Introduction to Programming" image={one} tag="Course" link="https://ocw.mit.edu/collections/introductory-programming/"/>
            <Card name="Technical Interview Prep" image={two} tag="Course" link="https://www.codepath.org/courses/tech-interview-prep/"/>
            <Card name="Web development 101" image={three} tag="Course" link="https://www.codepath.org/courses/web-development"/>
            <Card name="Software Engineering Roadmap" image={four} tag="RoadMap" link="https://roadmap.sh/"/>
            <Card name="Introduction to AI" image={five} tag="Course" link="https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python"/>
            <Card name="Cloud Management" image={six} tag="Document" link="https://cloud.google.com/learn/what-is-cloud-management"/>
            <Card name="Data Structure and Algorithm" image={seven} tag="Document" link="https://www.w3schools.com/dsa/dsa_intro.php"/>
            <Card name="System Design 101" image={eight} tag="Video" link="https://www.youtube.com/watch?v=uw-gcK9bjkk"/>
            <Card name="Basics of UI/UX Designs" image={nine} tag="Course" link="https://www.youtube.com/watch?v=c9Wg6Cb_YlU&t=4269s"/>
            <Card name="Pathway to Fintech" image={ten} tag="Documents" link="https://ondemand.euromoney.com/discover/pathways/fintech-essentials"/>
             <Card name="Introduction to Programming" image={one} tag="Course" link="https://ocw.mit.edu/collections/introductory-programming/"/>
            <Card name="Technical Interview Prep" image={two} tag="Course" link="https://www.codepath.org/courses/tech-interview-prep/"/>
            <Card name="Web development 101" image={three} tag="Course" link="https://www.codepath.org/courses/web-development"/>
            <Card name="Software Engineering Roadmap" image={four} tag="RoadMap" link="https://roadmap.sh/"/>
            <Card name="Introduction to AI" image={five} tag="Course" link="https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python"/>
            <Card name="Cloud Management" image={six} tag="Document" link="https://cloud.google.com/learn/what-is-cloud-management"/>
            <Card name="Data Structure and Algorithm" image={seven} tag="Document" link="https://www.w3schools.com/dsa/dsa_intro.php"/>
            <Card name="System Design 101" image={eight} tag="Video" link="https://www.youtube.com/watch?v=uw-gcK9bjkk"/>
            <Card name="Basics of UI/UX Designs" image={nine} tag="Course" link="https://www.youtube.com/watch?v=c9Wg6Cb_YlU&t=4269s"/>
            <Card name="Pathway to Fintech" image={ten} tag="Documents" link="https://ondemand.euromoney.com/discover/pathways/fintech-essentials"/>
            <Card name="Data Structure and Algorithm" image={seven} tag="Document" link="https://www.w3schools.com/dsa/dsa_intro.php"/>
            <Card name="System Design 101" image={eight} tag="Video" link="https://www.youtube.com/watch?v=uw-gcK9bjkk"/>
            <Card name="Basics of UI/UX Designs" image={nine} tag="Course" link="https://www.youtube.com/watch?v=c9Wg6Cb_YlU&t=4269s"/>
            <Card name="Pathway to Fintech" image={ten} tag="Documents" link="https://ondemand.euromoney.com/discover/pathways/fintech-essentials"/>
        </div>
      </div>
    </div>
  )
}

export default App
