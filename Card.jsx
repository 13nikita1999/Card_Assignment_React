import user from '../user.png'
const Card = (props) => {
  return (
    <>
        <div className="main-box">
            <div className="box">
            <h1 className="heading">
                {props.heading}
            </h1>
            <p className="para2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <img src={user} alt="" className="imgs" />
        </div></div>
    </>
  )
}
export default Card