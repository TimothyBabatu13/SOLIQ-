
const NAV = () => {
    const links = [
        {
            href: '',
            text: 'Trading Bot'
        },
        {
            href: '',
            text: 'Wallets Monitoring Bot'
        },
        {
            href: '',
            text: 'Call Channel'
        },
        {
            href: '',
            text: 'Community'
        },
        {
            href: '',
            text: 'Tutorials'
        }
    ]
  return (
    <nav>
        {links.map((link, id) => <a key={id} className={id != 0 ? 'link' : ''} href={link.href}>{link.text}</a>)} 
    </nav>
  )
}

export default NAV