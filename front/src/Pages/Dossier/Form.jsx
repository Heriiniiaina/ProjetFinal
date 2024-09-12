import React, { useEffect, useState } from "react";
import "./Form.css"
import { Header } from "./HeaderForm.jsx"
import NavBar from "../../components/NavBar/Nav.jsx";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function FormDossier(){
    const location = useLocation()
    const {patientData} = location.state
    console.log(patientData)
    const [patient,setPatient] = useState(null)

    useEffect(()=>{

        axios.post("http://localhost:2000/api/patient/me",{email:patientData})
        .then(res=>setPatient(res.data.user))
        .catch(err=>console.log(err))
    },[patient])
    console.log(patient)
    const upt = async (req,res,next)=>{
        try {
            
        } catch (error) {
            
        }
    }
    return (
        <>
            <div className="dossier">
            <NavBar/>
            <div class="form">

                <form action="" id="form1">
                    <div className="col1">
                        
                        <div className="twoinlab">

                            <div className="inlab">
                                <label htmlfor="">Poids</label>
                                <input type="number" placeholder="0kg"/>
                            </div>
                            <div className="inlab">
                                <label htmlfor="">Fréquence cardiaque </label>
                                <input type="number" placeholder="0bpm"/>
                            </div>
                        </div>
                        
                        <div className="inlab">
                            <label htmlForfor="">Temperature</label>
                            <input type="number" placeholder="0°c"/>
                        </div>
                        <div className="inlab">
                            <label htmlfor="">Tension Arterielle</label>
                            <input type="text" placeholder="120/80"/>
                        </div>
                       

                      

                    </div>
                    
                    <div className="col2">
                        <div className="inlab">
                            <label htmlfor="">Motif de la Consultation</label>
                            <textarea type="text" style={{height:"300px", width:"100%",padding: "16px",border: "none",borderRadius: "8px",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} placeholder="Motif de la Consultation" />
                        </div>
                    
                        <div className="inlab">
                            <label htmlfor="">Prescription :</label>
                            <textarea type="text" style={{height:"300px", width:"100%",padding: "16px",border: "none",borderRadius: "8px",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} placeholder="Motif de la Consultation"/>
                        </div>
                        
                        <div className="inlab">
                            <label htmlfor=""style={{opacity: 0}}>vide</label>
                            <input type="submit" id="submit" value="Envoyer"/>
                        </div>
                        
                    </div>
                </form> 
            </div>
            </div>
           
        </>
    )        
}