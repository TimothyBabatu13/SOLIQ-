import { BrowserRouter, Route, Routes } from "react-router-dom"
import Page from "./Page"
import Home from "./App/Home"


const AppRouter = () => {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}/>
        <Route path="/home" element={<Home />}/>
        
      </Routes>
          {/* <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/message' element={<Message />} />
            <Route path='/calls' element={<Call />}/>
            <Route path='/contacts' element={<Contact />}/>
            <Route path='/settings' element={<Setting />}/>
            <Route path='/chat/:id' element={<Chat />}/>
            <Route path='/groupchat/:id' element={<GroupChat />} />
            <Route path='*' element={<Error />} />
          </Routes> */}
          </BrowserRouter>
  )
}

export default AppRouter