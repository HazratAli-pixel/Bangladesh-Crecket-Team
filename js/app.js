var count = document.getElementsByTagName('li');
let playerExpense = document.getElementById('playerExpense');
function addplayer(event){
    var id = event.target.id;
    var btn = document.getElementById(id);
    if(count.length<5){
        var name = document.getElementById('name_'+id).innerText;
        var parenNode = document.getElementById('player-list');
        let newlist = document.createElement('li');
        newlist.innerHTML = name;
        newlist.setAttribute('class','p-1 fs-4');
        parenNode.appendChild(newlist);
        btn.setAttribute('disabled', true);
    }
    else{
    alert("You already add 5 player");
    }
}

document.getElementById('expense').addEventListener('click',()=>{
    let perPleyer = document.getElementById('perplayer').value;
    if(perPleyer <=0){
        if (count.length == 0){
            alert("Please Select At leat One Player")
        }
        else{
            alert("Please Add minimum Amount!")
        }
    }
    else if (count.length == 0){
        alert("Please Select At leat One Player")
    }
    else if(isNaN(perPleyer)){
        alert("Please Input Number")
    }
    else{
        playerExpense.innerHTML = Number(perPleyer)*count.length;
    }
});

function totalCalucation() {
    let playerExpense2 = playerExpense.innerHTML;
    let managerFee = document.getElementById('managerFee').value;
    let coachFee = document.getElementById('coachFee').value;
    let perPleyer = document.getElementById('perplayer').value;
    if(count.length == 0){
        alert("Please Select At leat One Player")
    }
    else if (perPleyer<=0){
        alert("Please add Player fees")
    }
    else if(coachFee <=0 || managerFee <=0){
        alert("Please Add CoachFee or Manager Fee")
    }
    else if (playerExpense2 <= 0){
        alert("Please Press the Calculate Button")
    }
    else if(isNaN(coachFee) || isNaN(managerFee)){
        alert("Please Input Number")
    }
    else {
        total.innerHTML = Number(managerFee)+Number(coachFee)+Number(playerExpense2);
    }
}