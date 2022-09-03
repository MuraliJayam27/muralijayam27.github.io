
var defHTML = document.getElementsByClassName('view') ;
var def = defHTML[0].innerHTML ;

var tab1c =
"<h1> Hello there, I am Nikhil </h1><p>I am a sophomore at IIIT Bangalore, pursuing computer science Engineering and exploring different domains of it. Currently, I am interested in various applications of computer science and web-dev</p><p> People Best describes me as<br><br> A learning enthusiast who is forever excited to learn about anything tech. You can see him jamming to the craziest music at the weirdest of times. Not a particular fan of sports but gives it a try to keep his friends company. When he doesn't have a smile on his face, he is busy coming up with some new abstract art.</p>";

var tab2c =
"<h1>Coding, Projects, Courses</h1> <p>I love working in Python, and recently I have started learning Java and OOPS to enter the world of classes and objects. I like problem-solving and creative solutions, and my projects are base on those ideas (You can check them on the PROJECT tab).</p><p>From college, I have learned various computers science courses, such as Computer architecture, Digital Design, Data Structures and Algorithms, Linear Algebra, Calculus, and more.</p><p>To list out, I have worked with the following languages: C, Python, Java, HTML, CSS, Javascript, LaTex.</p>" ;

var tab3c =
"<h1>IIIT, Bangalore</h1> <p>I am in Second Year at IIITB. It's a great college with an excellent course structure and various Computer Science domain to explore. People work hard here, and we are always at our toes with lots of assignments and work, but at the same time, we have fun through various events throughout the year. Our college also focuses on research and overall development as an engineer.</p>" ;

var tab4c =
"<h1>Python modules, and techs</h1> <p>As I said, I like working with python, and therefore I keep exploring various modules and small useful projects. I take a huge interest in anything technical and require problem-solving. Most of the time, I try to come up with new and crazy ideas with my friends (most recent is the FunTex).</p><p>Apart from all this, I have various other interests, which you can be seen on the PLAY tab.</p>";


var view = document.getElementsByClassName('view') ;
var tab1 = document.getElementById('tab1') ;
var tabb1 = document.getElementById('tabb1') ;

var tab2 = document.getElementById('tab2') ;

var tab3 = document.getElementById('tab3') ;
var tab4 = document.getElementById('tab4') ;
var tabb1 = document.getElementById('tabb1') ;
var isSelected = false ;

function setView(target,content){
  target[0].innerHTML = content ;
}

function makeSelected(tab){
  var tabb = tab.getElementsByClassName('tabb')[0] ;
  tab.classList.add('selectedTab');
  tabb.style.display = 'block' ;
  // tab.setAttribute("style", "background: var(--light); border-left: 4px solid var(--head-blue); color:white;");
}

function makeUnSelected(tab){
  tab.getElementsByClassName('tabb')[0].classList.remove("selectedTab");  ;
  tab.getElementsByClassName('tabb')[0].style.cssText = '' ;
}


tab1.onmouseover = function(){
  if(isSelected === false )
    view[0].innerHTML = tab1c ;
    // view[0].style.backgroundColor = $('#tab1').css("background-color");
} ;
tab1.onmouseout = function(){
  if(isSelected === false )
    view[0].innerHTML = def;
    // view[0].style.backgroundColor = $('.side').css("background-color");
} ;


// tab1.addEventListener('click' ,function(){
//   tab1.classList.add('selectedTab');
//   tabb1.style.display = 'block' ;
//   isSelected = true ;
// }, true ) ;
//
// tabb1.addEventListener('click' , function() {
//   tab1.classList.remove('selectedTab') ;
//   tabb1.style.display = 'none' ;
//   isSelected = false ;
// } , true ) ;
//




tab2.onmouseover = function(){
  if(isSelected === false )
    view[0].innerHTML = tab2c ;
} ;
tab2.onmouseout = function(){
  if(isSelected === false )
  view[0].innerHTML = def;
} ;

tab3.onmouseover = function(){
    if(isSelected === false )
  view[0].innerHTML = tab3c ;
} ;
tab3.onmouseout = function(){
    if(isSelected === false )
  view[0].innerHTML = def;
} ;

tab4.onmouseover = function(){
    if(isSelected === false )
  view[0].innerHTML = tab4c ;
} ;
tab4.onmouseout = function(){
    if(isSelected === false )
  view[0].innerHTML = def;
} ;
