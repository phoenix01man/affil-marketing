/* Scroll top button*/
const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
  const togglescrollTop = function() {
    if(scrollY > 100){
        scrollTop.classList.add('active')
    }else{
        scrollTop.classList.remove('active')
    }
  }
  window.addEventListener('load', togglescrollTop);
  document.addEventListener('scroll', togglescrollTop);
  scrollTop.addEventListener('click', window.scrollTo({
    top: 0,
    behavior: 'smooth'
  }));
}

// Checkss if the password input is empty or not
function checkpassval() {
  let pass = document.getElementById('pass')
  pass.addEventListener('input', () => {
    let passval = document.getElementById('pass').value
    if(passval === '' || passval === null){
      document.getElementById('showbtn').style.visibility = "hidden";
    }else{
      document.getElementById('showbtn').style.visibility = "visible";
    }
  })
 }
checkpassval();

// show and hide password toggle
function show() {
  var pass = document.getElementById('pass');
  
  if(pass.type == "password"){
    pass.type = "text";
    document.getElementById('showbtn').innerHTML = "<i class='bi bi-eye-slash'></i>";
  }else{
    pass.type = "password";
    document.getElementById('showbtn').innerHTML = "<i class='bi bi-eye'></i>";
  }
}

// input login border color change

  let bord = document.querySelectorAll('.loginp');
    for(i = 0; i < bord.length; i++){
      console.log(bord[i])
      let loginp = bord[i]
      loginp.addEventListener('click', function(){
        if(loginp){
          loginp.classList.add('active');
        }else{
          loginp.classList.remove('active');
        }
      })
    }
  
   
 