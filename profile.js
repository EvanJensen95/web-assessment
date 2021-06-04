let myFavColor = document.querySelector('#color');
let myFavPlace = document.querySelector('#place');
let myFavRitual = document.querySelector('#ritual');

myFavColor.addEventListener('click', function(){
    alert('My favorite color is red')
});
myFavPlace.addEventListener('click', function(){
    alert('My favorite place is Hawaii')
});
myFavRitual.addEventListener('click', function(){
    alert('My favorite ritual is unknown')
})