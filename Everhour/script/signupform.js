
function signupForm(){
  return `<div id="signup1">
  <form>
    <label for="">Full Name</label><br />
    <input id="name" type="text" placeholder="Enter your full name" required>
    <label for="">Email</label><br />
    <input id="email" type="text" placeholder="Enter email" required>
    
    <label for="">Password</label><br />
    <input id="password" type="text" placeholder="Enter password" required>
    <input type="submit" value="Sign Up" />
    
  </form>

</div>`
}
export default signupForm()