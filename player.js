/**
 * Created by silasmartinez on 5/18/15.
 */

var control1 = document.getElementById('control1');
var control2 = document.getElementById('control2');
var control3 = document.getElementById('control3');
var control4 = document.getElementById('control4');
var detail1 = document.getElementById('detail1');
var detail2 = document.getElementById('detail2');
var detail3 = document.getElementById('detail3');
var detail4 = document.getElementById('detail4');
var player = document.getElementById('player');
var header = document.getElementById('header');

var nowPlaying = "";
var myTrack = "";

var tracks = {
    artist: ["Tokyo Police Club", "Kind of Like Spitting", "Against Me!", "Digable Planets"],
    title: ["Favorite Food", "Thrill of the Hunt", "Transgender Dysphoria Blues", "Where I'm From"],
    file: ["favourite-food.mp3", "thrill-of-the-hunt.mp3", "transgender-dysphoria-blues.mp3", "where-im-from.mp3"]
};

var playTrack = function(id){
    player.src = "tracks/"+tracks.file[id];
    header.innerHTML = "Now Playing: " + tracks.title[id];
    nowPlaying = id;

};

var showPlayButtons = function() {

    control1.classList.contains("fa-stop")
        ? ( control1.classList.remove("fa-stop") ,
        control1.classList.add("fa-play") )
        : true;
    control2.classList.contains("fa-stop")
        ? ( control2.classList.remove("fa-stop") ,
        control2.classList.add("fa-play") )
        : true;
    control3.classList.contains("fa-stop")
        ? ( control3.classList.remove("fa-stop") ,
        control3.classList.add("fa-play") )
        : true;
    control4.classList.contains("fa-stop")
        ? ( control4.classList.remove("fa-stop") ,
        control4.classList.add("fa-play") )
        : true;    
};

detail1.innerHTML = tracks.title[0] + " by " + tracks.artist[0];
detail2.innerHTML = tracks.title[1] + " by " + tracks.artist[1];
detail3.innerHTML = tracks.title[2] + " by " + tracks.artist[2];
detail4.innerHTML = tracks.title[3] + " by " + tracks.artist[3];
header.innerHTML = "Select a Song!";
showPlayButtons();


control1.addEventListener('click', function(){
    myTrack = 0;
    if (nowPlaying !== myTrack) {
        playTrack(myTrack);
        player.play();
        showPlayButtons();
        this.classList.remove("fa-play");
        this.classList.add("fa-stop");
    } else {
        player.src = "";
        showPlayButtons();
        header.innerHTML = "Select a Song";
    }
});

control2.addEventListener('click', function(){
    myTrack = 1;
    if (nowPlaying !== myTrack) {
        playTrack(myTrack);
        player.play();
        showPlayButtons();
        this.classList.remove("fa-play");
        this.classList.add("fa-stop");
    } else {
        player.src = "";
        showPlayButtons();
        header.innerHTML = "Select a Song";
    }
});

control3.addEventListener('click', function(){
    myTrack = 2;
    if (nowPlaying !== myTrack) {
        playTrack(myTrack);
        player.play();
        showPlayButtons();
        this.classList.remove("fa-play");
        this.classList.add("fa-stop");
    } else {
        player.src = "";
        showPlayButtons();
        header.innerHTML = "Select a Song";
    }
});

control4.addEventListener('click', function(){
    myTrack = 3;
    if (nowPlaying !== myTrack) {
        playTrack(myTrack);
        player.play();
        showPlayButtons();
        this.classList.remove("fa-play");
        this.classList.add("fa-stop");
    } else {
        player.src = "";
        showPlayButtons();
        header.innerHTML = "Select a Song";
    }
});

player.addEventListener('ended', function(){
    header.innerHTML = "Select a Song";
    nowPlaying = "";
});