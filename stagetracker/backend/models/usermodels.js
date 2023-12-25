const mongoose = require ('mongoose')
const bcrypt =  require ('bcrypt')
const validator  = require('validator');
const e = require('express');


const Schema = mongoose.Schema;
const userSchema = new Schema ({

    email: {
        type: String,
        required : true,
        unique : true
    },

    password: {
        type: String,
        required : true,
    }
})
// methode statique de login 


// ici je creer ma propre methode singnup ou je verifie que l email n as pas ete pris  si c est bon je crerr l utilisateur avec un mot de passe encrypté

userSchema.statics.signup = async function  (email,password) {


// validation 

 if (!email || !password) {
    throw Error ('tous les champs doivent etre remplis ')
 } 
 
 //verifica(tion de l email avec validator
 
 if (!validator.isEmail(email))
 {
    throw Error (("l'email entrer n'est pas correct "))
 }

//verifica(tion du password avec validator
 
if (!validator.isStrongPassword(password))
{
   throw Error (("le mot de passe entrer n'est pas assez fort doit contenir au moins une majuscule  8 caracteres un chiffre et un symbole"))
}

// si l email est deja utilisé

 const exists = await this.findOne({email})
if (exists) {
    throw Error ("l'email a deja été utilisé")

}

 const salt  = await bcrypt.genSalt(10)
 const hash = await bcrypt.hash(password,salt )
  const user = await this.create({ email , password: hash})

  return user
  
}









// schema utilisateur  comme pour sign up 
userSchema.statics.login = async function (email, password)
{

   
 if (!email || !password) {
    throw Error ('tous les champs doivent etre remplis ')
 } 
 
 //verifica(tion de l email avec validator
 
 if (!validator.isEmail(email))
 {
    throw Error (("l'email entrer n'est pas correct "))
 }  
 
 const user = await this.findOne({email})
if (!user) {
    throw Error ("cet utilisateur n'existe pas ")

}

// matching des passwords
 const match =  await bcrypt.compare(password,user.password) 


  if (!match)
  {
    throw Error ('Mot de passe incorrect')
  }
 return user
}



module.exports = mongoose.model('User',userSchema)