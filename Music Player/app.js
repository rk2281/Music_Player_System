const music = new Audio('audio/1.mp3');
//music.play();


const songs = [
    {
        id:'1',
        songName: `Sound Of Silence <br>
        <div class="subtitle">
            Colm Joseph Keegan
        </div>`,
        poster:"img/img1(colm).jpg"
    },
    {
        id:'2',
        songName: ` Another Love <br>
        <div class="subtitle">
            Tom Odell
        </div>`,
        poster:"img/img2(tom odell).jpg"
    },
    {
        id:'3',
        songName: ` Love me like you do <br>
        <div class="subtitle">
            Ellie Goulding
        </div>`,
        poster:"img/img3(Ellie Goulding).jpg"
    },
    {
        id:'4',
        songName: ` Daylight <br>
        <div class="subtitle">
            David Kushner
        </div>`,
        poster:"img/img4(David kushner).jpg"
    },
    {
        id:'5',
        songName: ` Habibi <br>
        <div class="subtitle">
            Ricky-Rich
        </div>`,
        poster:"img/img5(ricky rich).jpg"
    },
    {
        id:'6',
        songName: `You Give Love a Bad name <br>
        <div class="subtitle">
            Bon Jovi
        </div>`,
        poster:"img/img6(bon jovi).jpg"
    },
    {
        id:'7',
        songName: ` Paparazzi<br>
        <div class="subtitle">
            Kim Dracula
        </div>`,
        poster:"img/img7(kim dracula).jpg"
    },
    {
        id:'8',
        songName: ` Money Rain <br>
        <div class="subtitle">
            Phonk
        </div>`,
        poster:"img/img8(phonk).jpg"
    },
    {
        id:'9',
        songName: `Senorita <br>
        <div class="subtitle">
            Shawn Mendes
        </div>`,
        poster:"img/img9(shawn mendes).jpg"
    },
    {
        id:'10',
        songName: ` I ain't worried <br>
        <div class="subtitle">
            Ryan Tedder
        </div>`,
        poster:"img/img10(ryan tedder).jpg"
    },
    {
        id:'11',
        songName: ` 52 Bars<br>
        <div class="subtitle">
            Karan Aujla
        </div>`,
        poster:"img/img11(karan aujla).jpg"
    },
    {
        id:'12',
        songName: ` Gal Dil Di<br>
        <div class="subtitle">
            Diljit Dosanjh
        </div>`,
        poster:"img/img12(diljit dosanjh).jpg"
    },
    {
        id:'13',
        songName: ` She Move It Like <br>
        <div class="subtitle">
            Badshah
        </div>`,
        poster:"img/img13(badshah).jpg"
    },
    {
        id:'14',
        songName: ` Udaariyan <br>
        <div class="subtitle">
            Colm Joseph Keegan
        </div>`,
        poster:"img/img14(satinder satraj).jpg"
    },
    {
        id:'15',
        songName: ` True Stories <br>
        <div class="subtitle">
            AP Dhillon
        </div>`,
        poster:"img/img15(ap dhillon).jpg"
    },
    {
        id:'16',
        songName: ` Teri Yaadon Mein <br>
        <div class="subtitle">
            KK
        </div>`,
        poster:"img/img16(kk).jpg"
    },
    {
        id:'17',
        songName: `Tere Liye <br>
        <div class="subtitle">
            Atif Aslam
        </div>`,
        poster:"img/img17(atif aslam).jpg"
    },
    {
        id:'18',
        songName: ` Kabhie Joh Baadal Barse <br>
        <div class="subtitle">
            Arijit Singh
        </div>`,
        poster:"img/img18(arijit singh).jpg"
    },
    {
        id:'19',
        songName: `Saadi Gali Aaja <br>
        <div class="subtitle">
            Ayushmann Khurrana
        </div>`,
        poster:"img/img19(ayushmann khurrana).jpg"
    },
    {
        id:'20',
        songName: `Pehle Bhi Main <br>
        <div class="subtitle">
            Vishal Mishra
        </div>`,
        poster:"img/img20(vishal mishra).jpg"
    },
]
//Changing Posters
Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

//Master Play/Pause
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

//Playing and Downloading the Music
let index = 0;
let poster_master_play = document.getElementById('poster_master_play'); 
let download_music = document.getElementById('download_music'); 
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
    index=el.target.id;
    //console.log(index);
    music.src=`audio/${index}.mp3`;
    //poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

});
})

//Music audio bar 
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    //console.log(music_dur);

    let min1= Math.floor(music_dur/60);
    let sec1= Math.floor(music_dur%60);

    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left =  `${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    } else if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    } else {
        vol_icon.classList.remove('bi-volume-down-fill', 'bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});


//Play previous/next
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`audio/${index}.mp3`;
    //poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
        download_music.setAttribute('download', songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

})

next.addEventListener('click',()=>{
    index ++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src=`audio/${index}.mp3`;
    //poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    
})


//search data start
let search_results= document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    //console.log(poster);
    let card = document.createElement('a');
    card.href="#"+id;
    card.classList.add('card');

    card.innerHTML = `
    <img src="${poster}" alt="" >
                    <div class="content">
                        ${songName}
                        </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for(let index =0; index<items.length;index++){
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if(text_value.toUpperCase().indexOf(input_value)>-1){
            items[index].style.display = "flex";
        }else{
            items[index].style.display = "none";
        }

        if(input.value == 0){
            search_results.style.display = "none";
        }else{
            search_results.style.display = "";
        }
    }
})


//search data end
 
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;
})

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft +=330;
})

pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -=330;
})

let shuffle = document.getElementsByClassName('shuffle')[0];

//Shuffling the music
shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi bi-arrow-repeat');
                shuffle.classList.remove('bi shuffle bi-music-note-beamed');
                shuffle.classList.add('bi bi-shuffle');
                shuffle.innerHTML = 'repeat';
                break;
            case "repeat":
            shuffle.classList.remove('bi bi-arrow-repeat');
                shuffle.classList.remove('bi shuffle bi-music-note-beamed');
                shuffle.classList.add('bi bi-shuffle');
                shuffle.innerHTML = 'random';
            case "random":
            shuffle.classList.remove('bi bi-arrow-repeat');
                shuffle.classList.add('bi shuffle bi-music-note-beamed');
                shuffle.classList.remove('bi bi-shuffle');
                shuffle.innerHTML = 'next';
                break;
    }
})