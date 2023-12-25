const express = require("express");


 // controller fonction 

  const {signupUser, loginUser} = require ('../controllers/accountcontroller')
const router = express.Router();

//route pour la connection
   router.post("/login", loginUser);

   router.post("/signup", signupUser);
   



// route pour l'authentification

 module.exports = router


