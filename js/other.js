var logo = document.getElementById('logoLoading');
var mainLoader = document.getElementById('loadermain');

window.onmessage = function(event){
    if(event.data == 'change'){
        window.location.href = '/';
    }
}
window.onload = function(){
    logo.style.animation = 'none';
    setTimeout(() => {
        $('#loadermain').fadeOut();
    }, 1000);
}
