import './about.scss'
import foto from './../../imges/foto.png'

export default function About() {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="img-container">
      <img src={foto} alt="" />
      </div>
      <div className="about-text">
        <h2>山浦麗斗</h2>
        <p>生年月日:1999年5月10</p>
        <p>趣味:テニス、筋トレ、スポーツ観戦</p>
        <p>スキル次第で場所に囚われない面と自由度の高さとかっこよさから
          この業界で働きたいと思い2023年後半から学習を始めました。勉強
          していく中でプログラミングの奥深さ、楽しさを知り完全にハマりました</p>
      </div>
      
      
    </div>
  )
}
