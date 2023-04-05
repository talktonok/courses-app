import userService  from "../services/userService";
import Util from '../utils/Utils';

const util = new Util();
class UserController{

   static async handleSignup(req, res, next)  {
 try {
   const { firstName, lastName, middleName, email, password } = req.body;
   const user = await userService.findUser({email});


   if (user) {
    //throw new Error("Email already exists!");
    util.setSuccess(200, 'Email already exists!');
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
   try {
     const { email, password } = req.body;
     const user = await userService.findUser({ email });

     if (!user) {
      //throw new Error("Unable to login");
        util.setSuccess(200, 'Unable to login!');
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