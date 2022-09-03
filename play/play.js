
var defHTML = document.getElementsByClassName('view') ;
var def = defHTML[0].innerHTML ;

var tab1c =
"<h1>DOTA 2</h1><img src='images/play1.png' style='width:40vh'><p>DOTA 2 is an MPRPG, where 2 teams of 5 heroes each, battle against each other to destroy their sacred ancient, and whoever destroys it first wins the battle, This game is crazy huge and there is a steep learning curve. I have nearly played around 100 hours and still, I am just a beginner. There is a lot of things and my favorite character is Juggernaut (Jug for short)</p>" ;

var tab2c =
"<h1>ANIME</h1><img src='images/play2.png' style='width:25vh'><p>The First Long Anime series I watched was Bleach and I got stuck for life. I love animes, and its a source of inspiration, motivation, and the best entertainment packed in 20 mins.</p><p>Currently, I am watching Naruto, and its the best. I like the character Naruto and his way of approaching friends and problems.</p> " ;

var tab3c =
"<img src='images/play3.png' style='width:40vh'><p>My Homies and I are working on a podcast series about people and their life and interest, in Season 1 we decide to bring seniors of our college to come and share their experience and knowledge, and we try to bring different values from their life to our audiences.</p>" ;

var tab4c =
"<h1>DESIGNING</h1><img src='images/play4.png' style='width:30vh'><p>I started designing when I entered college as people needed designs for their events and fest, and I had just a fair amount of knowledge about designing to start with. But I found it interesting. I use Affinity Designer for my work, and it is a great application.</p><p>Here are some of my designs</p><img src='images/play4a.png' style='width:33vh; float:left;'><img src='images/play4b.png' style='width:33vh; float:right;'><img src='images/play4c.png' style='width:33vh; float:left;'><img src='images/play4d.png' style='width:33vh; float:right;'>" ;

var tab5c =
"<h1>DOGGO : meet Neo</h1><img src='images/play5.png' style='width:30vh;' ><p>Neo is my pet Dog, and yes! it brings Balance to my life ( Matrix reference ). He is currently four months old but he is the cutest and the naughtiest boy of the house.</p>";


var view = document.getElementsByClassName('view') ;
var tab1 = document.getElementById('tab1') ;
var tab2 = document.getElementById('tab2') ;
var tab3 = document.getElementById('tab3') ;
var tab4 = document.getElementById('tab4') ;
var tabb1 = document.getElementById('tabb1') ;
var tabb2 = document.getElementById('tabb2') ;
var tabb3 = document.getElementById('tabb3') ;
var tabb4 = document.getElementById('tabb4') ;
var tabb5 = document.getElementById('tabb5') ;
var isSelected = false ;

tab1.onmouseover = function(){
  if(isSelected === false )
    view[0].innerHTML = tab1c ;
} ;
tab1.onmouseout = function(){
  if(isSelected === false )
    view[0].innerHTML = def;
} ;

tab1.addEventListener('click' ,function(){
  if(isSelected === false){
  tab1.classList.add('selectedTab');
  tabb1.style.display = 'block' ;
  isSelected = true ;}
}, true ) ;

tabb1.addEventListener('click' , function(){
  tab1.classList.remove('selectedTab') ;
  tabb1.style.display = 'none' ;
  isSelected = false ;
} , true ) ;


tab2.onmouseover = function(){
  if(isSelected === false )
    view[0].innerHTML = tab2c ;
} ;
tab2.onmouseout = function(){
  if(isSelected === false )
  view[0].innerHTML = def;
} ;

tab2.addEventListener('click' ,function(){
  if(isSelected === false){
  tab2.classList.add('selectedTab');
  tabb2.style.display = 'block' ;
  isSelected = true ;}
}, true ) ;

tabb2.addEventListener('click' , function() {
  tab2.classList.remove('selectedTab') ;
  tabb2.style.display = 'none' ;
  isSelected = false ;
} , true ) ;

tab3.onmouseover = function(){
    if(isSelected === false )
  view[0].innerHTML = tab3c ;
} ;
tab3.onmouseout = function(){
    if(isSelected === false )
  view[0].innerHTML = def;
} ;

tab3.addEventListener('click' ,function(){
  if(isSelected === false){
  tab3.classList.add('selectedTab');
  tabb3.style.display = 'block' ;
  isSelected = true ;}
}, true ) ;

tabb3.addEventListener('click' , function() {
  tab3.classList.remove('selectedTab') ;
  tabb3.style.display = 'none' ;
  isSelected = false ;
} , true ) ;

tab4.onmouseover = function(){
    if(isSelected === false )
  view[0].innerHTML = tab4c ;
} ;
tab4.onmouseout = function(){
    if(isSelected === false )
  view[0].innerHTML = def;
} ;

tab4.addEventListener('click' ,function(){
  if(isSelected === false){
  tab4.classList.add('selectedTab');
  tabb4.style.display = 'block' ;
  isSelected = true ;}
}, true ) ;

tabb4.addEventListener('click' , function() {
  tab4.classList.remove('selectedTab') ;
  tabb4.style.display = 'none' ;
  isSelected = false ;
} , true ) ;

tab5.onmouseover = function(){
    if(isSelected === false )
  view[0].innerHTML = tab5c ;
} ;
tab5.onmouseout = function(){
    if(isSelected === false )
  view[0].innerHTML = def;
} ;

tab5.addEventListener('click' ,function(){
  if(isSelected === false){
  tab5.classList.add('selectedTab');
  tabb5.style.display = 'block' ;
  isSelected = true ;}
}, true ) ;

tabb5.addEventListener('click' , function() {
  tab5.classList.remove('selectedTab') ;
  tabb5.style.display = 'none' ;
  isSelected = false ;
} , true ) ;
