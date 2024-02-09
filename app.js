const musicContainer = document.querySelector('.music-container')
const playbtn = document.querySelector('#play')
const prevbtn = document.querySelector('#prev')
const nextbtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progresscontainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')


//song titles

const songs = ['Kadhal Oru Aagayam' , 'Vilambara Idaiveli', 'kathalasai']

//keep track
let songIndex = 2


loadSong(songs[songIndex])



function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    // cover.src = `images/${song}.jpg`
}
function playSong(){
    musicContainer.classList.add('play')
    playbtn.querySelector('i.bx').classList.remove('bx-play-circle')
    playbtn.querySelector('i.bx').classList.add('bx-pause-circle')
    audio.play()


}
function pauseSong(){
    musicContainer.classList.remove('play')
    playbtn.querySelector('i.bx').classList.add('bx-play-circle')
    playbtn.querySelector('i.bx').classList.remove('bx-pause-circle')
    audio.pause()
}


function prevSong(){
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length -1
    }
    loadSong(songs[songIndex])

    playSong()

}
function nextSong(){
    songIndex++
    if(songIndex > songs.length-1){
        songIndex = 0
    }
    loadSong(songs[songIndex])

    playSong()

}
function updateProgress(e){
    // console.log(e.srcElement.currentTime)
    // console.log(e.srcElement.duration)
    const{duration, currentTime} =e.srcElement
    const progressPercent = (currentTime/duration)*100
    progress.style.width =`${progressPercent}%`

}
function setProgress(e){
    const width = this.clientWidth
    // console.log(width)
    const clickX = e.offsetX
    // console.log(clickX)
    const duration = audio.duration
    audio.currentTime=(clickX / width) * duration


}

// event listner

playbtn.addEventListener('click', ()=>{
    const isplaying = musicContainer.classList.contains('play')

    if(isplaying){
        pauseSong()

    }else {
        playSong()
    }

})

prevbtn.addEventListener('click', prevSong)
nextbtn.addEventListener('click', nextSong)
audio.addEventListener('timeupdate', updateProgress)
progresscontainer.addEventListener('click', setProgress)
audio.addEventListener('ended',nextSong)