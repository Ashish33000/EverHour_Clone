
import navbarcall from "./navbar.js"
// console.log(navbarcall)
document.getElementById("navtop").innerHTML=navbarcall



//footer call🕶👓👓
import footerCall from "./footer.js"
// console.log(footerCall)
document.getElementById("foot").innerHTML=footerCall

//para1 call🐱‍👤🤳🎂🎂
import paraHead from "./para1.js"
// console.log(paraHead)
document.getElementById("para").innerHTML=paraHead

//para2 callvideoPara()🐱‍💻😉😉😉🤞
import videoPara from "./para2.js"
// console.log(videoPara)
document.getElementById("parax").innerHTML=videoPara

//para 3 😉😉🤞🤞🤞🤞

import displayPara3 from "./para3.js"
// console.log(displayPara3)
document.getElementById("paray").innerHTML=displayPara3

//crauserbtnexport default crauserBtn()🐱‍🚀🐱‍👓🐱‍👓🐱‍🐉🐱‍🐉🐱‍🐉🐱‍💻🐱‍💻
import crauserBtn from "./caruser.js"
//console.log(crauserBtn)
document.getElementById("cra").innerHTML=crauserBtn
//crauser script
let imagesLink=[
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/jira-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/github-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp"
]
 let leftbtn=document.getElementById("leftbtn");
 let rightbtn=document.getElementById("rightbtn");
 let crauser=document.getElementById("crauser");
 let imagestat=0
 rightbtn.addEventListener("click",function(){
  imagestat++
  if(imagestat===imagesLink.length){
    imagestat=0
  }
  crauser.src=imagesLink[imagestat]
     
 })
 leftbtn.addEventListener("click",function(){
  imagestat--
  if(imagestat<0){
    imagestat=imagesLink.length-1
  }
  crauser.src=imagesLink[imagestat]
 })
 ///end crasuer script


 //para4 export default paraFour()
 import paraFour from "./para4.js"
 console.log(paraFour)
 document.getElementById("paraz").innerHTML=paraFour

 //para5
 import paraFive from "./para5.js"
 
 document.getElementById("paraV").innerHTML=paraFive

//para6export default paraSix()
import paraSix from "./para6.js"
 
 document.getElementById("paraVI").innerHTML=paraSix
 //para7export default paraSeven()
 import paraSeven from "./para7.js"
 
 document.getElementById("paraVII").innerHTML=paraSeven

 //para8
 import paraEight from "./para8.js"
 
 document.getElementById("paraVIII").innerHTML=paraEight
//  para9
import paraNine from "./para9.js"
 
 document.getElementById("paraIX").innerHTML=paraNine
//  para10
import paraTen from "./para10.js"
 
 document.getElementById("paraX").innerHTML=paraTen

 //para11
 import paraEleven from "./para11.js"
 
 document.getElementById("paraXI").innerHTML=paraEleven
