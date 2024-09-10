import { Link } from "react-router-dom"

const SocialHandleCard = ({href, img, title, text }) => {
  return (
    <div className="social-card-container">
        <Link target="_blank" to={href} className="social-card">
            <img src={img} height={80} width={80} alt={`${img} image`} />
            <div>
                <h5>{title}</h5>
                <h6>{text}</h6>
            </div>
        </Link>
    </div>
  )
}

export default SocialHandleCard