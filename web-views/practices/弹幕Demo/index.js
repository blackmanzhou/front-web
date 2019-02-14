window.onload = function() {
    var wH = document.documentElement.clientHeight,
    danmuAreaEle = document.getElementById('danmuArea'),
    sendArea = document.getElementById('sendArea');
    danmuItems = document.getElementsByClassName('danmuItem');

    danmuAreaEle.style.height = `${wH * 0.85}px`;
    sendArea.style.height = `${wH * 0.15}px`;

    // 弹幕效果
    console.log(danmuItems)
    for(let i = 0; i < danmuItems.length; i ++) {
        let elemment = danmuItems[i]
        console.log(elemment)
    }
}