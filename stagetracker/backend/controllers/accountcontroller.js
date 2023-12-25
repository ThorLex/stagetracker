

const User = require ('../models/usermodels')
const jwt =  require('jsonwebtoken')


//creation d un jeton de securite
    const createToken = (_id) => {
       return  jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
        
      };
// login


const loginUser =  async(req,res) => {

    const {email , password} = req.body 
    
try {
    const user = await User.login(email,password)
    // creation d un jeton de securite 
const  token  =  createToken(user._id)

    return  res.status(200).json({email,token})
} catch (error) {

  return   res.status(404).json({erreur: error.message})
}


   
}
 

// sign up  only pour les particulier (entreprise en gerant avec  le rib )

const signupUser =  async(req,res) => {

    
 const {email , password} = req.body 
try {
     const user = await User.signup(email,password)
     // creation d un jeton de securite 
const  token  =  createToken(user._id)

     return  res.status(200).json({email,token,user})
} catch (error) {
 
   return   res.status(404).json({erreur: error.message})
}

 
 }

 module.exports = { signupUser, loginUser}