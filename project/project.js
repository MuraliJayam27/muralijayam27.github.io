
var defHTML = document.getElementsByClassName('view') ;
var def = defHTML[0].innerHTML ;

var tab1c =
"<h1>Pybush 🌲</h1><img src='images/project1.png'><p>binarytree is a great module to implement trees in python. Since python doesn't support pointers; implementing binary tree functions was a bit tricky, but no more 😁. pybush brings this functionality using the binarytree module. Now you can do everything from creating a tree, printing the tree, implement avl, do rotations and other functions.</p>" ;

var tab2c =
"<h1>OpenCV: Face Detection, Image diff, Guesture gaming</h1><img src='images/project2.png' style='width:50vh'><p>OpenCV is a really powerful module and using it I created these classes of project. </p><p>All of these projects are small and fun to implement, and you can learn a lot about image processing and come up with different solutions and fun projects.</p>";

var tab3c =
"<h1>Snake Game</h1><img src='images/project3.png' style='width:40vh'><p>Pygame, a very beginner-friendly module, was used to make this project. This game is a colorful version of the classic snake game. I worked a great idea on the color of the snake to make it more of my type.</p> " ;

var tab4c =
"<h1>PIL-Tesseract-OpenCV</h1> <p>It is a great project which does the following : takes a newspaper clipping and finds faces on that image if a particular keyword is found in the text of the newspaper. It uses module PIL, Pytesseract, and OpenCV. This was done as a part of Online courses on Coursera</p><img src='images/project4.png' style='width:70vh'>" ;


var view = document.getElementsByClassName('view') ;
var tab1 = document.getElementById('tab1') ;
var tab2 = document.getElementById('tab2') ;
var tab3 = document.getElementById('tab3') ;
var tab4 = document.getElementById('tab4') ;
var isSelected = false ;

tab1.onmouseover = function(){
  if(isSelected === false )
    view[0].innerHTML = tab1c ;
} ;
tab1.onmouseout = function(){
  if(isSelected === false )
    view[0].innerHTML = def;
} ;

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
