import './App.css'
import Todo from './Components/Todo'
import select from './image/icons8-select.png'
import star from './image/icons8-star.png'
import today from './image/icons8-today.png'
import edit from './image/icons8-photo.png'
import project from './image/icons8-projects.png'
import Nav from './Components/Nav'

function App() {


  return (
    <>
      <Nav />
      <div className="container ">
        <h1>TO<span>Do.</span></h1>
        <div className="cont">
          <div className="filter ">
            <div className="box">
              <h3>Filters</h3>
              <img src={edit} alt="Image" />
            </div>
            <div className="list">
              <ul>
                <button><li><img src={select} alt="I" />All</li></button>
                <button><li><img src={star} alt="I" />Starred</li></button>
                <button><li><img src={today} alt="I" />Today</li></button>
                <button><li><img src={star} alt="I" />Week</li></button>

              </ul>
            </div>
            <div className="project">
              <div className="box">
                <h3>Projects</h3>
                <img src={project} alt="+" style={{ width: '30px' }} />
              </div>
              <div className="cube">
                <img src={today} alt="Folder" />
                <h5>Default</h5>
              </div>
              <footer>All Rights Reserved to Shahzaib Faisal </footer>
            </div>
          </div>
          <Todo />
        </div>
      </div>

    </>
  )
}

export default App
