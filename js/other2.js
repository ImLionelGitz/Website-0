var list = document.getElementById('list');
var item = document.getElementById('item');

// store code
// fetch(`${democors}https://catalog.roblox.com/v1/search/items/details?CreatorType=2&Category=3&CreatorTargetId=4708773`).then(response => {
//     return response.json();
// }).then(data => {
//     var DaData = data.data;
//     var DaKeys = Object.keys(DaData);
//     var randomSelecteds = [];

//     while (randomSelecteds.length < DaKeys.length){
//         var rand = DaKeys[Math.floor(Math.random() * DaKeys.length | 0)];
//         if(randomSelecteds.indexOf(rand) == -1){
//             randomSelecteds.push(rand);
//         }
//     }
    
//     for (let i = 1; i < randomSelecteds.length; i++) {
//         var clone = item.cloneNode(true);
//         list.appendChild(clone);
//     }

//     var daItems = document.querySelectorAll('div[id^=item]');
//     for (let item = 0; item < daItems.length; item++) {
//         var img3 = daItems[item].getElementsByTagName('img')[0];
//         var h42 = daItems[item].getElementsByTagName('h4')[0];
//         var h62 = daItems[item].getElementsByTagName('h6')[0];
//         var a2 = daItems[item].getElementsByTagName('a')[0];
//         img3.src = `https://www.roblox.com/asset-thumbnail/image?assetId=${DaData[randomSelecteds[item]].id}&width=420&height=420&format=png`;
//         a2.href = `https://www.roblox.com/catalog/${DaData[randomSelecteds[item]].id}`;
//         h42.innerHTML = DaData[randomSelecteds[item]].name;
//         h62.innerHTML = 'R$' + DaData[randomSelecteds[item]].price;
//     }
// });