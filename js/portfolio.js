// Loading spinner
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 750);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'flex' : 'none';
}

onReady(function () {
    show('block-section', true);
    show('spinner', false);
});


// Modal open/close
let blocks = [...document.getElementsByClassName("open")];

blocks.forEach(function(link){
    link.onclick = function(){
        let modal = link.getAttribute('data-modal');
        document.getElementById(modal).style.display = 'block';
    }
});

let closeLinks = [...document.querySelectorAll(".close")];

closeLinks.forEach(function(link){
    link.onclick = function(){
        let modal = link.closest('.modal');
        modal.style.display = 'none';
    }
});

window.onclick = function(modal){
    if(modal.target.className === 'modal'){
        modal.target.style.display = 'none';
    }
}
