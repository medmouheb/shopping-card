var count=0;
var total=document.querySelector(".total");
var item=document.querySelector(".item");
var cart=document.querySelector(".badge");



document.addEventListener("click", function(event) {
    if (event.target.className === "glyphicon glyphicon-remove") {
        event.target.parentElement.parentElement.classList.toggle("toggle-item")
    }
  });

document.addEventListener("click", function(event) {
    var countItem=event.target.parentElement.children[1]
  if (event.target.className ==="btn minus") {
    count=count!=0?count-1:0
    cart.innerHTML=count;
    total.innerHTML="Bag Total : "+count*20+" $"
    countItem.innerHTML=countItem.innerHTML=="0"?0:Number(countItem.innerHTML)-1
  }
});
document.addEventListener("click", function(event) {
    var countItem=event.target.parentElement.children[1]
  if (event.target.className ==="btn plus") {
    count+=1
    cart.innerHTML=count;
    total.innerHTML="Bag Total : "+count*20+" $"
    countItem.innerHTML=1+Number(countItem.innerHTML)
  }
});
document.addEventListener("click", function(event) {
    if (event.target.className.includes("glyphicon glyphicon-heart")) {
      event.target.classList.toggle("show-red");
    }
  });
cart.innerHTML=count;
total.innerHTML="Bag Total : "+count+" $";