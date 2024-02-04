
var player;
var playerReady = false;

function loadYouTubeIframeAPI() {
        // Load the YouTube IFrame API script
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 1,
            loop: 1,
            start: 4,
            startSeconds: 4,
            end: 64,
            controls: 0,
            showinfo: 0,
            autohide: 1,
            modestbranding: 1,
            mute: 1,
            rel: 0,
            suggestedQuality: 'default',
            origin: 'YOUR_DOMAIN_URL'
        },
        videoId: document.getElementById('player').dataset.id,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}



function onPlayerReady(event) {
    playerReady = true;
    event.target.playVideo();
    player.mute();
}

function checkPlayerReady() {
    if (playerReady) {
    } else {
        setTimeout(checkPlayerReady, 100);
    }
}

var done = false;

function onPlayerStateChange(e) {
    var id = document.getElementById('player').dataset.id;

    if (e.data === YT.PlayerState.ENDED) {
        player.loadVideoById(id);
    }
}

function onIntersection(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
        // Load the YouTube IFrame API and player
        loadYouTubeIframeAPI();
        onYouTubeIframeAPIReady();

        // Stop observing
        observer.unobserve(entry.target);
        }
    });
}

var options = {
    rootMargin: '50%',
    threshold: 0
};

var observer = new IntersectionObserver(onIntersection, options);
observer.observe(document.getElementById('player-container'));