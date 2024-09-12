import { useState ,useEffect} from 'react'
import './Firstpage.css'
import CanvasComponent from './CanvasComponent.jsx'
import { useNavigate } from 'react-router-dom'


function FirstPage() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  useEffect(()=>{
      const log = JSON.parse(sessionStorage.getItem("user"))
      if(log && log.role =="Admin")
        return navigate("/admin")
      if(log && log.role =="Patient")
        return navigate("/patient")
      if(log && log.role =="Doctor")
        return navigate("/doctor")

  },[])
  return (
    <>
    <CanvasComponent/>
    <div className="container">
      <div className="choisir">
          <div className="brand">
            <h1>+Symptoscan</h1>
          </div>

          <h2>GET STARTED</h2>
          <p>what is your account type?</p>
          <div className="cards">
            <div class="card">
                <div class="first-content Doc">
                  <span>Doctor</span>
                </div>
                <div class="second-content Doc2">
                  <span>Doctor</span>
                </div>
            </div>

            <div class="card">
                <div class="first-content p1">
                  <span>Patient</span>
                </div>
                <div class="second-content p2">
                  <span>Patient</span>
                </div>
            </div>


          </div>
          <div> <code>@alright reserved</code> </div>
         
        
      </div>
      <div className="carou">
      </div>
    </div>
    </>
  )
}

export default FirstPage
