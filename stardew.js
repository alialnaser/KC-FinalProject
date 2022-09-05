console.log("Stardew");

document.getElementById('5star')

document.getElementById('4star')

document.getElementById('3star')

document.getElementById('2star')

document.getElementById('1star')

function star5() {
    document.getElementById('5star').style.backgroundColor = 'yellow';
    console.log("This User Rates Stardew a 5 Star");
    document.getElementById('4star').style.backgroundColor = 'white';
    document.getElementById('3star').style.backgroundColor = 'white';
    document.getElementById('2star').style.backgroundColor = 'white';
    document.getElementById('1star').style.backgroundColor = 'white';
}

function star4() {
    document.getElementById('4star').style.backgroundColor = 'yellow';
    console.log("This User Rates Stardew a 4 Star");
    document.getElementById('5star').style.backgroundColor = 'white';
    document.getElementById('3star').style.backgroundColor = 'white';
    document.getElementById('2star').style.backgroundColor = 'white';
    document.getElementById('1star').style.backgroundColor = 'white';
}

function star3() {
    document.getElementById('3star').style.backgroundColor = 'yellow';
    console.log("This User Rates Stardew a 3 Star");
    document.getElementById('4star').style.backgroundColor = 'white';
    document.getElementById('5star').style.backgroundColor = 'white';
    document.getElementById('2star').style.backgroundColor = 'white';
    document.getElementById('1star').style.backgroundColor = 'white';
}

function star2() {
    document.getElementById('2star').style.backgroundColor = 'yellow';
    console.log("This User Rates Stardew a 2 Star");
    document.getElementById('4star').style.backgroundColor = 'white';
    document.getElementById('3star').style.backgroundColor = 'white';
    document.getElementById('5star').style.backgroundColor = 'white';
    document.getElementById('1star').style.backgroundColor = 'white';
}

function star1() {
    document.getElementById('1star').style.backgroundColor = 'yellow';
    console.log("This User Rates Stardew a 1 Star");
    document.getElementById('4star').style.backgroundColor = 'white';
    document.getElementById('3star').style.backgroundColor = 'white';
    document.getElementById('2star').style.backgroundColor = 'white';
    document.getElementById('5star').style.backgroundColor = 'white';
}


document.getElementById('like')

document.getElementById('dislike')

function like() {
    document.getElementById('like').style.backgroundColor = 'green';
    console.log("This User Likes Stardew");
    document.getElementById('dislike').style.backgroundColor = 'white';
}

function dislike() {
    document.getElementById('dislike').style.backgroundColor = 'red';
    console.log("This User Dislikes Stardew");
    document.getElementById('like').style.backgroundColor = 'white';
}

function keypress() {
    
    document.getElementById('5star').style.backgroundColor = 'white';
    document.getElementById('4star').style.backgroundColor = 'white';
    document.getElementById('3star').style.backgroundColor = 'white';
    document.getElementById('2star').style.backgroundColor = 'white';
    document.getElementById('1star').style.backgroundColor = 'white';
    console.clear();
}

function keypresslike() {
    document.getElementById('like').style.backgroundColor = 'white';
    document.getElementById('dislike').style.backgroundColor = 'white';
    console.clear();
}




const user = document.getElementById('btn');
const inputEle = document.getElementById("submit");
const userList = document.getElementById('itemList');

user.addEventListener('click', (e) => {
  userList.innerHTML += `<li>${inputEle.value}</li>`;
});

