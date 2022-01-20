console.log("Welcome");
let songIndex = 0;
let audioElement = new Audio('song1.mp3');
let masterPlay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('pbar');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {
        songName: "Every Breathe You Take",
        filepath: "song1.mp3",
        coverpath: "cover1.jfif"
},
    {
        songName: "Roxxane",
        filepath: "song2.mp3",
        coverpath: "cover1.jfif"
},
    {
        songName: "King of Pain",
        filepath: "song3.mp3",
        coverpath: "cover1.jfif"
}
]
songItem.forEach((element, i) => {
    element.getElementsByClassName("name")[0].innerText = songs[i].songName;
})

myprogressbar.value = 0;
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        songPlaying.style.opacity = 1;
    } else {
        audioElement.pause();
        songPlaying.style.opacity = 1;
    }

})
audioElement.addEventListener('timeupdate', () => {
    console.log('timeUpdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;

})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
/*
Array.from(document.getElementsByClassName('songplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
         songIndex = parseInt(e.target.id);
       
        audioElement.src= `song${songIndex}.mp3` ;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})*/
let currentplay=Array.from(document.getElementsByClassName('songplay'));
currentplay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id);
         audioElement.src = `song${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
    })
}
/*
document.getElementById('next').addEventListener('click',()=>
                                                {
    if(songIndex>3)
        songIndex=1;
    else
        songIndex+=1;
        
let src1= "song"+songIndex+".mp3";
        audioElement.src=src1;
        audioElement.currentTime = 0;
        audioElement.play();
    
})
document.getElementById('previous').addEventListener('click',()=>
                                                {
    if(songIndex<1)
        songIndex=1;
    else
        songIndex-=1;
        
let src1= "song"+songIndex+".mp3";
        audioElement.src=src1;
        audioElement.currentTime = 0;
        audioElement.play();
    
})
*/
