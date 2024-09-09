import DiscoverCard from "./DiscoverCard"

const Title = ({children}) => {
    return <h2 className="title">{children}</h2>
}
const Text = ({ children }) => {
    return <h4 className="text">{children}</h4>
}
const Links = ({ children }) => {
    return (
        <div className="links">
            {children}        
        </div>
    )
}
const Link = ({ href, children }) => {
    return <a className="link" href={href}> { children} </a>
}
const DiscoverCards = () => {
  return (
    <div className="discover-cards">
        <DiscoverCard>
            <Title>Discover Trending Tokens</Title>
            <Text>Smart wallets with exclusive algorithms—deliver trending signals at first time.</Text>
            <Links>
                <Link href={'/'}>Early Brids Token Alerts</Link>
                <Link href={'/'}>New Pair Alerts</Link>
            </Links>
            <img src="/a.png" width={375} alt="w" />
        </DiscoverCard>

        <DiscoverCard>
            <Title>Smart Wallet Monitoring</Title>
            <Text>Easily track address earnings and analyze associated trades.</Text>
            <Links>
                <Link href={'/'}>Wallet Monitor</Link>
            </Links>
            <img src="/a.png" width={375} alt="w" />
        </DiscoverCard>

        <DiscoverCard>
            <Title>Token Analysis</Title>
            <Text>Quickly access trading data and contract details for informed trading decisions.</Text>
            <Links>
                <Link href={'/'}>Token Analysis</Link>
            </Links>
            <img src="/a.png" width={375} alt="w" />
        </DiscoverCard>

        <DiscoverCard>
            <Title>Trading Community</Title>
            <Text>Discuss new projects together and find the next 10x opportunity.</Text>
            <Links>
                <Link href={'/'}>Join Community</Link>
            </Links>
            <img src="/a.png" width={375} alt="w" />
        </DiscoverCard>
    </div>
  )
}

export default DiscoverCards