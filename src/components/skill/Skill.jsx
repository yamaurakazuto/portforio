import './skill.scss'
import  HTML5 from '../../imges/HTML5.png'
import CSS from '../../imges/CSS.png'
import  Javascript from '../../imges/JavaScript.png'
import React from '../../imges/React.png'

export default function Skill() {
  return (
    <div className='skill' id='skill'>
      <div className="contents">
        <h1>Skill</h1>
      </div>
      <div className="contents-item">
        <img src={HTML5} alt=''/>
        <p>HTML</p>
      </div>

      <div className="contents-item">
        <img src={CSS} alt=''/>
        <p>CSS</p>
      </div>

      <div className="contents-item">
        <img src={Javascript} alt=''/>
        <p>JS</p>
      </div>

      <div className="contents-item">
        <img src={React} alt=''/>
        <p>React</p>
      </div>
      
    </div>
  )
}
