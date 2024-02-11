import './about.scss'
import foto from './../../imges/foto.png'

export default function About() {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="imgcontainer">
      <img src={foto} alt="" />
      </div>
      <div className="about-text">
        <h2>山浦麗斗</h2>
        <p>t</p>
      </div>
      
      
    </div>
  )
}
