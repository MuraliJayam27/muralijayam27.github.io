
var defHTML = document.getElementsByClassName('view') ;
var def = defHTML[0].innerHTML ;

var tab1c =
"<h1> Hello there, I am Murali Jayam </h1><p>I am a student at IIIT Bangalore, pursuing computer science Engineering and exploring different domains of it. Currently, I am interested in various applications of computer science and design. I'm also an art, aviation, and automobile enthusiast.</p><p> People Best describes me as<br><br> A learning enthusiast who is forever excited to learn about anything tech, mainly about design. You can see him designing for almost all the events in college. He never steps down if there is something to design.</p>";

var tab2c =
"<h1>Designing, Tools, Coding</h1> <p>I love designing, and recently I have started learning UI/UX Design. I like problem-solving and creative solutions, and I try to slove them by applying design.</p><p>I have worked with the following tools: Figma, Adobe Illustrator, Affinity Designer, Canva.</p><p>From college, I have learned various computers science courses.</p><p>To list out, I have worked with the following languages: C, Python, Java, C++, HTML, LaTex.</p>";

var tab3c =
"<h1>IIIT, Bangalore</h1> <p>I am in Third Year at IIITB. It's a great college with an excellent course structure and various Computer Science domain to explore. People work hard here, and we are always at our toes with lots of assignments and work, but at the same time, we have fun through various events throughout the year. Our college also focuses on research and overall development as an engineer.</p>" ;

var tab4c =
"<h1>Designing, and techs</h1> <p>As I said, I like designing, and therefore I keep exploring various design systems. I take a huge interest in designing, it maybe a poster, banner, UI/UX design for a project. Most of the time, I try to come up with new design ideas exploring the internet(currently working on a food ordering app's UI/UX design).</p><p>Apart from all this, I keep myself updated with the latest aviation and automobile news.</p>";


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
