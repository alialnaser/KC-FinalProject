console.log("minecraft");

document.getElementById('5star')

document.getElementById('4star')

document.getElementById('3star')

document.getElementById('2star')

document.getElementById('1star')

function star5() {
    document.getElementById('5star').style.backgroundColor = 'yellow';
    console.log("This User Rates Minecraft a 5 Star");
}

function star4() {
    document.getElementById('4star').style.backgroundColor = 'yellow';
    console.log("This User Rates Minecraft a 4 Star");
}

function star3() {
    document.getElementById('3star').style.backgroundColor = 'yellow';
    console.log("This User Rates Minecraft a 3 Star");
}

function star2() {
    document.getElementById('2star').style.backgroundColor = 'yellow';
    console.log("This User Rates Minecraft a 2 Star");
}

function star1() {
    document.getElementById('1star').style.backgroundColor = 'yellow';
    console.log("This User Rates Minecraft a 1 Star");
}


document.getElementById('like')

document.getElementById('dislike')

function like() {
    document.getElementById('like').style.backgroundColor = 'green';
    console.log("This User Likes Minecraft");
}

function dislike() {
    document.getElementById('dislike').style.backgroundColor = 'red';
    console.log("This User Dislikes Minecraft");
}

function keypress() {
    
    document.getElementById('5star').style.backgroundColor = 'white';
    document.getElementById('4star').style.backgroundColor = 'white';
    document.getElementById('3star').style.backgroundColor = 'white';
    document.getElementById('2star').style.backgroundColor = 'white';
    document.getElementById('1star').style.backgroundColor = 'white';
}

function keypresslike() {
    document.getElementById('like').style.backgroundColor = 'white';
    document.getElementById('dislike').style.backgroundColor = 'white';
}




const user = document.getElementById('btn');
const inputEle = document.getElementById("submit");
const userList = document.getElementById('itemList');

user.addEventListener('click', (e) => {
  userList.innerHTML += `<li>${inputEle.value}</li>`;
});