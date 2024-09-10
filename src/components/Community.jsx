import SocialHandleCard from "./SocialHandleCard"

const Community = () => {
  return (
    <div className="community">
        <h5>Join Our Community</h5>
        <SocialHandleCard 
          href={''} 
          img={'/telegram.png'}
          title={'Telegram'} 
          text={"Join the Telegram Community of SOLIQ and Let's Connect!"}
        />
        <div style={{marginBottom: '12px'}}/>
        <SocialHandleCard 
          href={''} 
          img={'/twitter.png'}
          title={'X'} 
          text={"Follow SOLIQ on Twitter and Grow Together!"}
        />
    </div>
  )
}

export default Community