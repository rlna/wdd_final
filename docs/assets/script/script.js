let enter = document.getElementById('enter');
let inside = document.getElementById('inside');
let walking = document.getElementById('walking');
let tv = document.getElementById('tv');
let skelly = document.getElementsByClassName('middle')[0]

let leave = document.getElementById('leave');
let walk = document.getElementById('walk');
let stop = document.getElementById('stop');
let duck_mode = document.getElementById('duck');

//img urls
let sk_walk_side = 'assets/images/greens.gif'
let sk_walk_front = 'assets/images/front.gif'
let sk_still = 'assets/images/skelly.png'
let duck = 'assets/images/duck2.gif'
let star_mover = 'assets/images/tr.gif'

let song = new Audio('assets/images/thethe.mp3');
let start = true;
let mute = false;
let w = false;
let l = false;
let e = false;
let playing = false;


enter.onclick = function() {
  e = true;
  l = false;
  w = false;
  skelly.src = sk_walk_front;
  if (!mute) {
    new Audio('assets/images/tv.m4a').play();
    if (start && !mute) {
      song.play();
      playing = true;
      setTimeout( function() {if (!w && !l && playing) {song.pause(); playing = false;}}, 17000);
      start = false;
    }
  }
  setTimeout( function () { change_br(tv, "url('assets/script/b1.png')");}, 2000);
  setTimeout( function () {if (!w && !l) {skelly.src = sk_still; e = false;}}, 5000);
  enter.style.display = "none";
  setTimeout( function () {inside.style.display = "flex";}, 4000);
}

leave.onclick = function() {
  l = true;
  w = false;
  e = false;
  skelly.src = sk_walk_front;
  if (!mute) {
    new Audio('assets/images/tv.m4a').play();
    setTimeout( function() {
      if (playing) {
      song.pause();
      playing = false;
      }
    }, 5000);
  }
  setTimeout( function () {change_br(tv, "none");}, 2000);
  setTimeout( function () {if (!w && !e) {skelly.src = sk_still; l = false;}}, 5000);
  inside.style.display = "none";
  setTimeout( function () {enter.style.display = "block";}, 5000);
}

walk.onclick = function () {
  w = true;
  e = false;
  l = false;
  skelly.src = sk_walk_side;
  change_br(tv, "url("+star_mover+")");
  inside.style.display = "none";
  walking.style.display = "flex";
  if (!mute && !playing) {
    song.play();
    playing = true;
  }
}

duck_mode.onclick = function () {
  if (duck_mode.innerHTML === "DUCK MODE") {
    duck_mode.innerHTML = "DUCK MODE: ON";
    skelly.src = duck;
  } else {
    duck_mode.innerHTML = "DUCK MODE";
    skelly.src = sk_walk_side;
  }
}

stop.onclick = function () {
  w = false;
  e = false;
  l = false;
  skelly.src = sk_still;
  change_br(tv, "url('assets/script/b1.png')");
  inside.style.display = "flex";
  walking.style.display = "none";
  if (playing) {
    song.pause();
    playing = false;
  }
}

function change_br(id, url) {
  id.style.backgroundImage = url;
}

let credits = document.getElementById('credits');
let muteSound = document.getElementById('mute');
let contents = document.getElementById('contents');
let altcontents = document.getElementById('altcontents');

muteSound.onclick = function () {
  if (muteSound.innerHTML == "SOUND UNMUTED") {
    muteSound.innerHTML = "SOUND MUTED";
    mute = true;
    if (e || l || w || playing) {
      song.pause();
      playing = false;
    }
  } else {
    muteSound.innerHTML = "SOUND UNMUTED";
    mute = false;
    if ((e || l || w) && !playing) {
      song.play();
      playing = true;
    }
  }
}

credits.onclick = function () {
  if (credits.innerHTML === "CREDITS") {
    credits.innerHTML = "CLOSE CREDITS";
    contents.style.display = "none";
    altcontents.style.display = "block";

  } else {
    credits.innerHTML = "CREDITS";
    contents.style.display = "block";
    altcontents.style.display = "none";
  }
}
