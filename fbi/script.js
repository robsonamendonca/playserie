
var temporada_listLastIndex = new Array();
temporada_listLastIndex[0] = 12;  //temporada 1 tem 13 episodios
temporada_listLastIndex[1] = 34;  //temporada 2 tem 22 episodios
temporada_listLastIndex[2] = 47;  //temporada 3 tem 13 episodios

var temporadasNum = temporada_listLastIndex.length;
var currentTempIndex = 0;
var currentTempNum = 1;
var currentEpisodioNum = 1;

var video_title = document.getElementById("video-title");


var video_player = document.getElementById("video_player");
video = video_player.getElementsByTagName("video")[0];
video_links = video_player.getElementsByTagName("figcaption")[0];
//alimentas o novos links da base de dados
for (var i = 0; i < link_list.length; i++) {
    var link = document.createElement("a");
    var imag = document.createElement("img");
    link.href = link_list[i];
    imag.src = "https://via.placeholder.com/400x150/000000/FFFFFF/?text=Episodio-" + (currentEpisodioNum) + "-T" + currentTempNum;

    imag.alt = "FBI (Duplado) - Episódio " + (currentEpisodioNum) + " - T" + currentTempNum;
    imag.title = "FBI (Duplado)- Episódio " + (currentEpisodioNum) + " - T" + currentTempNum;
    link.appendChild(imag);
    video_links.appendChild(link);
    if (temporada_listLastIndex[currentTempIndex] == i) {
        currentTempNum++;
        currentTempIndex++;
        currentEpisodioNum = 0;
    }
    currentEpisodioNum++;
}



source = video.getElementsByTagName("source");

path = '';
currentVid = 0;
allLnks = video_links.children;



lnkNum = allLnks.length;
//video.removeAttribute("controls");
video.removeAttribute("poster");

function playVid(index) {
    console.log('play id: ' + index);
    video_links.children[index].classList.add("currentvid");
    //video_title
    video_title.innerHTML = video_links.children[index].children[0].title;

    source[0].src = path + link_list[index];// + ".mp4";
    //source[1].src = path + link_list[index];// + ".webm";   
    currentVid = index;
    video.load();
    // Video playback started ;)
    video.play();
    console.log('play id: ok ' + index);
}
for (var i = 0; i < lnkNum; i++) {
    //var filename = allLnks[i].href;
    //link_list[i] = filename.match(/([^\/]+)(?=\.\w+$)/)[0];
    (function (index) {
        allLnks[i].onclick = function (i) {
            i.preventDefault();
            for (var i = 0; i < lnkNum; i++) {
                allLnks[i].classList.remove("currentvid");
            }
            playVid(index);
            window.scrollTo(0, 0);
        }
    })(i);
}

video.addEventListener('ended', function () {
    allLnks[currentVid].classList.remove("currentvid");
    if ((currentVid + 1) >= lnkNum) {
        nextVid = 0;
    } else {
        nextVid = currentVid + 1;
    }
    console.log('ended() :' + currentVid)
    playVid(nextVid);
})

video.addEventListener('mouseenter',
    function () {
        video.setAttribute("controls", "true");
    })
video.addEventListener('mouseleave', function () {
    //video.removeAttribute("controls");
})


//inicia
playVid(0);
