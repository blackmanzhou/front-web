<template>
    <div id="photo-wall">
        <ul id="photo-wall-ul">
            <li><img src="../assets/imgs/photowall/01.jpg" /></li>
            <li><img src="../assets/imgs/photowall/02.jpg" /></li>
            <li><img src="../assets/imgs/photowall/03.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/04.jpg" /></li>
            <li><img src="../assets/imgs/photowall/05.jpg" /></li>
            <li><img src="../assets/imgs/photowall/06.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/07.jpg" /></li>
            <li><img src="../assets/imgs/photowall/08.jpg" /></li>
            <li><img src="../assets/imgs/photowall/09.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/10.jpg" /></li>
            <li><img src="../assets/imgs/photowall/11.jpg" /></li>
            <li><img src="../assets/imgs/photowall/12.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/13.jpg" /></li>
            <li><img src="../assets/imgs/photowall/14.jpg" /></li>
            <li><img src="../assets/imgs/photowall/15.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/16.jpg" /></li>
            <li><img src="../assets/imgs/photowall/17.jpg" /></li>
            <li><img src="../assets/imgs/photowall/18.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/19.jpg" /></li>
            <li><img src="../assets/imgs/photowall/20.jpg" /></li>
            <li><img src="../assets/imgs/photowall/21.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/22.jpg" /></li>
            <li><img src="../assets/imgs/photowall/23.jpg" /></li>
            <li><img src="../assets/imgs/photowall/24.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/25.jpg" /></li>
            <li><img src="../assets/imgs/photowall/26.jpg" /></li>
            <li><img src="../assets/imgs/photowall/27.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/28.jpg" /></li>
            <li><img src="../assets/imgs/photowall/29.jpg" /></li>
            <li><img src="../assets/imgs/photowall/30.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/31.jpg" /></li>
            <li><img src="../assets/imgs/photowall/32.jpg" /></li>
            <li><img src="../assets/imgs/photowall/33.jpg" /></li>
            
            <li><img src="../assets/imgs/photowall/34.jpg" /></li>
            <li><img src="../assets/imgs/photowall/35.jpg" /></li>
	    </ul>
    </div>
</template>

<script>
export default {
    name: 'PhotoWallComponent',
    data() {
        return {

        }
    },
    mounted() {
        let ulElement = document.getElementById('photo-wall-ul')
        let liElementList = ulElement.children
        if (liElementList && liElementList.length > 0) {
            for (let i = 0; i < liElementList.length; i++) {
                let li = liElementList[i]
                li.style.width = `${ulElement.offsetWidth / 7}px`
                li.style.height = `${ulElement.offsetWidth / 7}px`
            }
        }
    }
}
</script>

<style scoped>
#photo-wall {
    width: 100%
}

ul {
    width: 100%
}
li {
    float:left
}

img {
    width: 100%
}
</style>


