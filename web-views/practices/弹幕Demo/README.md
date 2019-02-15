#### 发送弹幕Demo
-------------------
##### Knowledge
1. 创建 DOM 元素
```
    let newElement = document.createElement('div')
    // 添加类名
    newElement.className = 'className'
    // 添加属性
    newElement.style.height = 50 + 'px'
    newElement.style.color = '#fff'
```
2. 删除 DOM 元素
```
    // 查找到其父元素
    let parentNode = document.getElementById('parentId')
    let childNode = document.getElementByClassName('className')

    // 判断父元素是否包含该子元素
    if (parentNode.contains(childNode)) {
        parentNode.removeChild(childNode)
    }
 ```
 3. 获取 DOM 的输入值
 ```
    // input
    let inputText = document.getElementByClassName('inputClass').value
    // dropdown
    let seletValue = dropdown.SelectedValue
 ```
 4. DOM 元素自定义属性
 ```
 element.style.selfDefinitionAttribute = value
 ```