import { Link } from "react-router-dom"

const NAV = ( { setIsOpen } ) => {
    const handleClick = () => {
        setIsOpen(false)
    }
    const links = [
        {
            href: 'https://wa.me/+2348104131139/?text=/start',
            text: 'Trading Bot',
            tab: true
        },
        {
            href: 'https://wa.me/+2348104131139/?text=/start',
            text: 'Wallets Monitoring Bot',
            tab: true
        },
        {
            href: 'https://t.me/Soliqbotportal',
            text: 'Call Channel',
            tab: true
        },
        {
            href: '#community',
            text: 'Community',
            tab: false,
        },
        {
            href: '',
            text: 'Tutorials',
            tab: true
        }
    ]
  return (
    <nav>
        {links.map((link, id) => link.tab ? <Link key={id} target="_blank" onClick={handleClick} className={id != 0 ? 'link' : ''} to={link.href}>{link.text}</Link> : <a key={id} onClick={handleClick} className={id != 0 ? 'link' : ''} href={link.href}>{link.text}</a>)} 
    </nav>
  )
}

export default NAV