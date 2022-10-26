import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save Time Save Money!</h1>
        <spam className="mailDesc">Sign Up and we'll send you</spam>
        <div className="mailInputContainer">
            <input type="text"  placeholder="Your Email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList