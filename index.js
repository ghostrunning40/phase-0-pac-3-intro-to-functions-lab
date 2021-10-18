function shout(string) {
    return string.toUpperCase();
} 

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    let shoutstring=string.toUpperCase();
    console.log(shoutstring);
}
function logWhisper(string) {
    let whisperstring=string.toLowerCase();
    console.log(whisperstring);
}
function sayHiToGrandma(string) {
    if (string===string.toLowerCase()) {
        return ('I can\'t hear you!');

    }
    if (string===string.toUpperCase()) {
        return ("YES INDEED!");
    }
    if (string==="I love you, Grandma.") {
        return ("I love you, too.");
    }    



}





    

