var wH = document.documentElement.clientHeight,
    wW = document.documentElement.clientWidth,
    danmuAreaEle = document.getElementById('danmuArea'),
    sendArea = document.getElementById('sendArea')

window.onload = function() {
    danmuItems = document.getElementsByClassName('danmuItem')

    danmuAreaEle.style.height = `${wH * 0.85}px`
    sendArea.style.height = `${wH * 0.15}px`

    // 弹幕效果
    for(let i = 0; i < danmuItems.length; i ++) {
        let element = danmuItems[i]    
        //element position
        // let startLeft = wH - elemment.style.width
        element.style.left = `${wW}px`
        element.style.top = `${(danmuAreaEle.clientHeight - elemment.clientHeight) * Math.random()}px`
        move(element)
    }
}

// 弹幕移动
function move (element) {
    let originalLeft = wW

    let speed = (element.style.speed == undefined || element.style.speed == 0) ? 10 : element.style.speed

    setInterval(() => {                     
        originalLeft -= speed

        // 删除子元素
        if (-originalLeft >= element.style.width) {
            // originalLeft = wW
            if (danmuAreaEle.contains(element)) {
                danmuAreaEle.removeChild(element)
            }          
        }

        element.style.left = `${originalLeft}px`
    }, 300);
}

// 发送弹幕
function sendMessage () {
    let sendMsg = document.getElementById('sendContent').value  

    if (sendMsg.trim() === '') {
        alert('Please input text !!!')
        return
    }

    createElement(sendMsg)
}

// 创建弹幕元素
function createElement (text) {
    let flexDanmuHeight = document.getElementById('danmuArea').clientHeight
    let randomNum = Math.random()
    let element = document.createElement('div')
    // style
    element.innerText = text
    element.className = 'danmuItem'
    element.style.speed = 300 * Math.random()  // 自定义属性
    element.style.color = `#${randomNum.toString(16).slice(-6)}`

    // position
    element.style.top = `${randomNum < 1 ? flexDanmuHeight * randomNum : flexDanmuHeight * 0.5}px`
    element.style.left = `${wW}px`
    danmuAreaEle.appendChild(element)
    move(element)
}