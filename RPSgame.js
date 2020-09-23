document.getElementById('btn').style.visibility= "hidden";
function rpsfunction(yourchoice){
    var humanchoice, botchoice;
    humanchoice = yourchoice.id;
    botchoice = botpick(randgen()); //**
    console.log(botchoice);
    result = outcome(humanchoice, botchoice);
    message = finalmessage(result);
    console.log(message);
    rpsfrontend(yourchoice.id, botchoice, message);
    document.getElementById('btn').style.visibility= "visible";

}
function randgen(){
    number = Math.floor(Math.random()*3);
    return number;
}
function botpick(number){
    return ['rock', 'paper', 'scissor'][number];
    
}
function outcome(humanchoice, botchoice){
    var rpsdata = {
        'rock':{'scissor':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissor':0},
        'scissor': {'paper':1, 'scissor':0.5, 'rock':0}

    }
    var yourscore = rpsdata[humanchoice][botchoice];
    var botscore = rpsdata[botchoice][humanchoice];
    return [yourscore, botscore];
}

function finalmessage([yourscore, botscore]){
    if (yourscore === 0){
        return {'message':'you lost'};
    }
    else if (yourscore === 0.5){
        return {'message':'its a draw'};
    }
    else{
        return {'message':'you won'};
    }
}

function rpsfrontend(yourchoiceimg, botchoiceimg, finalmessage){
    var rpsfrontdata = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');
    

    humandiv.innerHTML = "<img src='" + rpsfrontdata[yourchoiceimg] + "'height=150 width=150;'>"
    messagediv.innerHTML = "<h1 style='color: " + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
    botdiv.innerHTML = "<img src='" + rpsfrontdata[botchoiceimg] + "'height=150 width=150;'>"
    
     

    document.getElementById('flex-box-rps').appendChild(humandiv);
    document.getElementById('flex-box-rps').appendChild(messagediv);
    document.getElementById('flex-box-rps').appendChild(botdiv);
    
    

}