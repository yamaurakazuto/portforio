import './contact.scss'

export default function Contact() {
  return (
    <div className='contact' id ='contact'>
      <div className="form">
      <h1 className='title'>お問い合わせ</h1>
      <form>
        <div className="item">
          <p className="label">名前</p>
          <input type="text" />
          </div>
          <div className="item">
          <p className="label">メールアドレス</p>
          <input type="text" />
          </div>
          <div className="item">
          <p className="label">内容</p>
          <textarea className="inputs" ></textarea>
          </div>
          <div className="btn">
          <button  type="submit">送信</button>
          </div>
          
          
      </form>
      </div>
      
    </div>
  )
}

    