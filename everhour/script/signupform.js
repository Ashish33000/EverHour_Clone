
function signupForm(){
  return `<div id="signup1">
  <form>
    <label for="">Full Name</label><br />
    <input id="name" type="text" placeholder="Enter your full name" ><br />
    <label for="">Email</label><br />
    <input id="email" type="text" placeholder="Enter email" ><br />
    <label for="">Phone no</label><br />
    <input id="mob" type="number" placeholder="Enter phone no" ><br />
    <label for="">Password</label><br />
    <input id="password" type="text" placeholder="Enter password" ><br />
    <input type="submit" value="Sign Up" />
    
  </form>

</div>`
}
export default signupForm()