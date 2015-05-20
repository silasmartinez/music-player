/**
 * Created by silasmartinez on 5/18/15.
 */

var player = document.getElementById('player');
var header = document.getElementById('header');
var control = document.getElementsByClassName("control");
var detail = document.getElementsByClassName("detail");

var tracks = {
    artist: ["Tokyo Police Club", "Kind of Like Spitting", "Against Me!", "Digable Planets"],
    title: ["Favorite Food", "Thrill of the Hunt", "Transgender Dysphoria Blues", "Where I'm From"],
    file: ["favourite-food.mp3", "thrill-of-the-hunt.mp3", "transgender-dysphoria-blues.mp3", "where-im-from.mp3"]
};

var nowPlaying = "";
var id = "";

var playTrack = function(id){
    player.src = "tracks/"+tracks.file[id];
    header.innerHTML = "Now Playing: " + tracks.title[id];
    nowPlaying = id;

};

var showPlayButtons = function() {

    for (var i = 0; i < tracks.file.length; i++) {
        control[i].classList.contains("fa-stop")
            ? ( control[i].classList.remove("fa-stop") ,
            control[i].classList.add("fa-play") )
            : true;
    }

};

header.innerHTML = "Select a Song!";
showPlayButtons();

for (var i = 0; i < tracks.file.length; i++) {
    
    detail[i].innerHTML = tracks.title[i] + " by " + tracks.artist[i];

    // Setting an ID, and then using it to control play events is a kludge, but
    // less ugly than spelling these all out manually.
    // A closure was proposed as an alternate approach, but I haven't yet solved that one.

    control[i].setAttribute("id","control." + i);

    control[i].addEventListener('click', function (e) {

        console.dir(e.target.id);
        id = e.target.id.split(".")[1];

        if (nowPlaying !== id) {
            playTrack(id);
            player.play();
            showPlayButtons();
            this.classList.remove("fa-play");
            this.classList.add("fa-stop");
        } else {
            player.src = "";
            showPlayButtons();
            header.innerHTML = "Select a Song";
            nowPlaying = "";
        }
    })

}

player.addEventListener('ended', function(){
    //header.innerHTML = "Select a Song";

    nowPlaying ++;
    if (nowPlaying === tracks.file.length){
        nowPlaying = 0;
    }
    playTrack(id);
    player.play();
    control[nowPlaying].classList.remove("fa-play");
    control[nowPlaying].classList.add("fa-stop");
});