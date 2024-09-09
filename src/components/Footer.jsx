
const Footer = () => {
    const newDate = new Date();
    const year = newDate.getFullYear();
  return (
    <footer>
        © {year} SOLIQ. All rights reserved.
    </footer>
  )
}

export default Footer