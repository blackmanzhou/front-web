var moveArea,
    ul,
    startY = 0, // 刚开始时手指的相对位置Y
    centerY = 0, // 记录滑动后位置
    maxDown = 80, // 最大下拉距离
    maxUp = 0, // 最大上滑距离
    bounceUp = 0, // 向上回弹
    bounceDown = 0; // 向下回弹
moveArea = document.getElementById('touch-event-area');
ul = moveArea.children[0];
maxUp = -(ul.children.length * ul.children[0].offsetHeight - moveArea.offsetHeight + maxDown);
bounceDown = -(ul.children.length * ul.children[0].offsetHeight - moveArea.offsetHeight)

ul.addEventListener('touchstart', function(e) {
    startY = e.changedTouches[0].clientY
})

ul.addEventListener('touchmove', function(e){
    ul.style.transition = 'none';

    const endY = e.changedTouches[0].clientY;
    let dy = endY - startY + centerY;
    // 限制滑动区域
    if (dy > maxDown) {
        dy = maxDown
    } else if (dy < maxUp) {
        dy = maxUp
    }

    ul.style.transform = `translateY(${dy}px)`
})

ul.addEventListener('touchend', function(e){
    centerY += e.changedTouches[0].clientY - startY;

    if (centerY > bounceUp) {
        centerY = bounceUp
    } else if (centerY < bounceDown) {
        centerY = bounceDown
    }

    ul.style.transition = 'transform 0.5s';
    ul.style.transform = `translateY(${centerY}px)`
})

