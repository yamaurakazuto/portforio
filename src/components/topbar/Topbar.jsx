import './topbar.scss'
import github from '../../imges/github.png'
import qiita from '../../imges/qiita.png'
import x from '../../imges/x.png'


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
    <div className="wrapper">
      <div className="left">
        
      <a href="#" className='git'><img src={github} alt="github" /></a>

      <a href="https://qiita.com/k_program510"   rel="noopener noreferer" className='Qiita'>
            <img src={qiita} alt="" /></a> 

      <a href="https://twitter.com/k_program510"   rel="noopener noreferer" className='X'>
      <img src={x} alt="" /></a> 
      </div>
      <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>

    </div>
      
      </div>
      
    
  )
}
