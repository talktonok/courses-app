const morx = require('morx');
import userService  from "../services/userService";
import Util from '../utils/Utils';



const util = new Util();
class UserController{

   static async handleSignup(req, res, next)  {
    const regSpec = morx.spec()
.build('email', 'required:true, eg:nok@gmail.com')
.build('firstName', 'required:true, eg:Mansur')
.build('lastName', 'required:true, eg:Ibrahim')
.build('middleName', 'required:false, eg:Nok')
.build('password', 'required:true, eg:kdskldskfeofeo22322')
.end();

 try {
  
  const validated = morx.validate(req.body, regSpec);
            const data = validated.params;
   const { firstName, lastName, middleName, email, password } = data;
   const user = await userService.findUser({email});


   if (user) {
    //throw new Error("Email already exists!");
    util.setSuccess(401, 'Email already exists!');
   }else{
   // Create a token for the user
   const { token } = await userService.create({ firstName, lastName, middleName, email, password });
   const result = {token: token}
   util.setSuccess(200, 'Registration Successful', result);
   }
   // Send a token to the client when a user signs up
   return util.send(res);
 } catch (error) {
    util.setError(400, error.message);
    return util.send(res);
   //next(error);
 }
};



static async handleLogin (req, res, next) {
  const logSpec = morx.spec()
.build('email', 'required:true, eg:nok@gmail.com')
.build('password', 'required:true, eg:kdskldskfeofeo22322')
.end();
   try {
    const validated = morx.validate(req.body, logSpec);
            const data = validated.params;
     const { email, password } = data;
     const user = await userService.findUser({ email });

     if (!user) {
        util.setSuccess(401, 'Unable to login!');
     }else{

     // Create a token for the user, if successfully authenticated
     const { token } = await userService.authenticate({ email, password });
     const result = {token: token, user}
   util.setSuccess(200, 'Login Successful', result);
   }
   return util.send(res);
   } catch (error) {
    util.setError(400, error.message);
    return util.send(res);
   }
};
  
  }


export default UserController