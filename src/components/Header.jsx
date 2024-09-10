// import { Link } from "react-router-dom"

import { useState } from "react"
import { LIST, X } from "./SVGs"
import NAV from "./NAV";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <a href="/"><h2>SOL</h2> <span>IQ</span></a>
      <div onClick={() => setIsOpen(prev => !prev)} className="icon">
        {
          isOpen ? <X /> : <LIST />
        }
      </div>
      {
        isOpen &&  <NAV setIsOpen={setIsOpen} />
      }
    </header>
  )
}

export default Header