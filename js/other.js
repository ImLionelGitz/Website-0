var herobg = document.getElementById('heroback');
var icon = document.getElementById('iconimg');
var img = herobg.getElementsByTagName('img')[0];
var id = 'PLlGseM_ZHFB82JsrkGb_95MT2K1eOFu1X';
var channelid = 'UCPijoO9BXpKQdoPCRHYw5RA';
var key = 'AIzaSyC-2DJv_3ph4TavXXJQV3dwSvOyvtznGdM';
var democors = 'https://cors-anywhere.herokuapp.com/';
var carouselList = document.getElementById('carouselList');
var carousel = document.getElementById('carouselItem');

Promise.all([
    fetch(`https://catalog.roblox.com/v1/search/items/details?CreatorType=2&Category=3&CreatorTargetId=4708773`)
]).then(response => {
    return Promise.all(response.map(response => {
        return response.json();
    }));
}).then(data => {
    var DaData1 = data[0].data;
    // var DaData2 = data[1].data.concat(DaData1);
    var keys = Object.keys(DaData1);
    var select = [];
    
    while (select.length < keys.length){
        var rand = keys[Math.floor(Math.random() * keys.length | 0)];
        if(select.indexOf(rand) == -1){
            select.push(rand);
        }
    }
        
    for (let p = 1; p < select.length; p++) {
        var clone = carousel.cloneNode(true);
        clone.className = 'carousel-item';
        carouselList.appendChild(clone);
    }
    
    var daCarsousels = document.querySelectorAll('div[id^=carouselItem]');
    for (let i = 0; i < daCarsousels.length; i++) {
        var h4 = daCarsousels[i].getElementsByTagName('h4')[0];
        var carsimg = daCarsousels[i].getElementsByTagName("img")[0];
        var url = daCarsousels[i].getElementsByTagName('a')[0];
        h4.innerHTML = DaData1[select[i]].name; 
        carsimg.src = `https://www.roblox.com/asset-thumbnail/image?assetId=${DaData1[select[i]].id}&width=420&height=420&format=png`;
        url.href = `https://www.roblox.com/catalog/${DaData1[select[i]].id}`;
        url.innerText = 'R$' + DaData1[select[i]].price
    }
});

// swarch box code
function Search(){
    var input, filter, ul, li, boxes, indes, txtValue;
    input = document.getElementById('searchbar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('div');
    for (let i = 0; i < li.length; i++) {
        boxes = li[i].getElementsByClassName("detail-box");
        for (let box = 0; box < boxes.length; box++) {
            indes = boxes[box].getElementsByTagName('h4')[0];
            txtValue = indes.textContent || indes.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}