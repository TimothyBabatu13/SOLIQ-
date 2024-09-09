
const SOLIQCard = ({ title, text }) => {
  return (
    <div className="card">
        <div>
            <div className="space"/>
            <div className="text">
                <h2>{title}</h2>
                <h4>{text}</h4>
            </div>
            <div className="image">
                <div />
                <img src="/body-img.png" height={199} alt="soliq" />
            </div>
        </div>
    </div>
  )
}

export default SOLIQCard