function glass(box, mark, boxright, img2) {

    //遮藏层移动函数
    function move1(e) {
        //获取当前光标的移动距离
        var x1 = e.pageX - box.offsetLeft - parseInt(mark.offsetWidth / 2)
        var y1 = e.pageY - box.offsetTop - parseInt(mark.offsetHeight / 2)
            // console.log(e.pageX, e.pageY)

        // console.log(box.offsetLeft, box.offsetTop)
        //设置遮藏层的边界
        var minX = 0,
            minY = 0
        var maxX = box.offsetWidth - mark.offsetWidth
        var maxY = box.offsetHeight - mark.offsetHeight
            //右边图片的移动距离
        var rightX, rightY
            //水平方向的判断，并且移动遮藏层
        if (x1 < minX) {
            mark.style.left = minX + 'px'
            rightX = minX
        } else if (x1 > maxX) {
            mark.style.left = maxX + 'px'
            rightX = maxX
        } else {
            mark.style.left = x1 + 'px'
            rightX = x1
        }

        //垂直方向的判断
        if (y1 < minY) {
            mark.style.top = minY + 'px'
            rightY = minY
        } else if (y1 > maxY) {
            mark.style.top = maxY + "px"
            rightY = maxY
        } else {
            mark.style.top = y1 + 'px'
            rightY = y1
        }

        //让右边的图片进行移动
        img2.style.left = -2 * rightX + 'px'
        img2.style.top = -2 * rightY + 'px'
    }
    //给box对象绑定三个事件
    box.onmouseover = function(e) {
        var e = e || window.event
        mark.style.display = 'block'
        boxright.style.display = 'block'
    }

    box.onmousemove = function(e) {
        var e = e || window.event(e)
        move1(e)
    }
    box.onmouseout = function() {
        mark.style.display = 'none'
        boxright.style.display = 'none'
    }
}