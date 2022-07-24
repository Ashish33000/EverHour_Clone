
function signinForm(){
  return `<div id="signina">
  <form>    
  <label for="">Email</label><br />
  <input id="email" type="text" placeholder="Enter email" required >    
  <label for="">Password</label><br />
  <input id="password" type="text" placeholder="Enter password" required ><br />   
  <input type="submit" value="Sign in" />    
</form>
  </div>`
}
export default signinForm()