import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpeditedssl, faGoogle} from '@fortawesome/free-brands-svg-icons'
import { useState } from "react";
import {useLogin} from '../hooks/useLogin';

  





    const Login = () => {
      
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      const {login, isloading,error}=useLogin()

      
    const handleSubmit =  async (e) => {
    

     
       e.preventDefault()
      }
        
      
   

     

  
    return (
      
      <div>
      
       


        <div className="align-items-center  px-0 py-5">
          <div className="row  mx-0">
            <div className="col-md-6  mx-auto">
              <div className="card text-center  py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  
                </div>
                <h4>Bienvenue!  Commençons</h4>
                <h6 className="font-weight-light">Connecter vous pour continuer.</h6>
                <Form className="pt-3" onSubmit={handleSubmit}>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value) } placeholder="Nom d'utilisateur  " size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password"  onChange={(e)=> setPassword(e.target.value )} value={password}  placeholder=" Mot de passe  " size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn col-10  font-weight-medium  m-2 auth-form-btn" disabled = {isloading} >  
                      <FontAwesomeIcon icon={faExpeditedssl} /> Se connecter</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                       se rappeler
                      </label>
                    
                    </div>
                    <Link to="/forget" className=" auth-link text-muted">mot de passe oublier ?</Link>
                   
                  </div>
                  <br />
                                
                <button type="button" className="btn btn-primary  text-decoration-none btn-sm">
                <FontAwesomeIcon icon={faGoogle} /> 
                  <Link to="/" className="text-white m-3">Se connecter en utilisant Google</Link>
                </button>
  

                 
                  <div className="text-center mt-4 font-weight-light " hidden>
                    Don't have an account? <Link to="/" className="text-primary ">Create</Link>
                  </div>
                </Form>
              </div>

              {error && <div className="error">{error} </div> }
            </div>
          </div>
        </div>  
      </div>
    )
  }


export default Login
