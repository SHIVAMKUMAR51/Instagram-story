var arr = [{dp:"https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1649414114758-c05f0cdd5df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"},{
    dp:"https://images.unsplash.com/photo-1632649487435-5d0300bc0aef?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1625376212522-78872a686380?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
},{dp:"https://images.unsplash.com/photo-1584486921852-9235e8f57ba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8TElJbjI3NUk0TVl8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1589673100403-ae2c1cf8d6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MzE1NjA0NzV8fGVufDB8fHx8fA%3D%3D"},{dp:"https://images.unsplash.com/photo-1698785235576-dfb1a5b59197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1687825512118-5ee2ddded118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExN3xTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"}]

var clutter = ""
arr.forEach(function(elem, idc){
    clutter+= `<div class="story">
    <img id="${idc}" src="${elem.dp}" alt="">
</div>`
})

document.querySelector("#story").innerHTML = clutter
document.querySelector("#story").addEventListener("click", function(dets){
   document.querySelector("#full").style.display = "block"
   document.querySelector("#full").style.backgroundImage = `url(${arr[dets.target.id].story})`
   setTimeout(function(){
    document.querySelector("#full").style.display = "none";
   },1000)
})