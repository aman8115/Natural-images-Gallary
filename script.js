let button = document.getElementsByClassName("button ")
let banner = document.getElementById("banner")
button[0].onclick = function(){
    banner.src = "https://images.pexels.com/photos/333826/pexels-photo-333826.jpeg?auto=compress&cs=tinysrgb&w=600"
 animation()

}

button[1].onclick = function(){
    banner.src = "https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
    animation()
} 

button[2].onclick = function(){
    banner.src = "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=600"
    animation()
}
button[3].onclick = function(){
    banner.src = "https://images.pexels.com/photos/748992/pexels-photo-748992.jpeg?auto=compress&cs=tinysrgb&w=600"
    animation()
}
button[4].onclick = function(){
    banner.src = "https://images.pexels.com/photos/722629/pexels-photo-722629.jpeg?auto=compress&cs=tinysrgb&w=600"
    animation()
}

function animation(){
    banner.classList.add("zoom")
   setTimeout(function(){

    banner.classList.remove("zoom")
   } , 500)
}