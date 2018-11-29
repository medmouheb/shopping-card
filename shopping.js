var count=0;
var total=document.querySelector(".total");
var items=document.querySelector(".items");
var cart=document.querySelector(".badge");
function addMoreItems()
{
  var classItem=document.createElement("div")
  items.appendChild(classItem)
  classItem.setAttribute("class", "item")//div class="item"
  var classLoveHateLogo=document.createElement("div")
  classItem.appendChild(classLoveHateLogo)
  classLoveHateLogo.setAttribute("class", "love-hate-logo")//div class="love-hate-logo"
  var classGlyphiconHeart=document.createElement("span")
  classLoveHateLogo.appendChild(classGlyphiconHeart)
  classGlyphiconHeart.setAttribute("class","glyphicon glyphicon-heart")//span class="glyphicon glyphicon-heart"
  var classGlyphiconRemove=document.createElement("span")
  classLoveHateLogo.appendChild(classGlyphiconRemove)
  classGlyphiconRemove.setAttribute("class","glyphicon glyphicon-remove")//span class="glyphicon glyphicon-remove"
  var classItemPicture=document.createElement("div")
  classItem.appendChild(classItemPicture)
  classItemPicture.setAttribute("class", "item-picture")//div class="item-picture"
  var comicImage=document.createElement("img")
  classItemPicture.appendChild(comicImage)
  var inputSrc=document.getElementById("src-item")
  comicImage.setAttribute("src",inputSrc.value)
  var inputTitle=document.getElementById("title-item")
  comicImage.setAttribute("alt",inputTitle.value)// img src="" alt=""
  var itemDescription=document.createElement("div")
  classItem.appendChild(itemDescription)
  itemDescription.setAttribute("class", "item-description")//div class="item-description"
  var itemName=document.createElement("div")
  itemDescription.appendChild(itemName)
  itemName.setAttribute("class","item-name")
  var itemNameH4=document.createElement("h4")
  itemName.appendChild(itemNameH4)
  itemNameH4.innerHTML=document.getElementById("title-item").value//class="item-name" h4
  var itemAbout=document.createElement("div")
  itemDescription.appendChild(itemAbout)
  itemAbout.setAttribute("class","item-about")
  var itemAboutH5=document.createElement("h5")
  itemAbout.appendChild(itemAboutH5)
  var inputDescription=document.getElementById("description-item")
  itemAboutH5.innerHTML=inputDescription.value// div class="item-about" h5
  var countItem=document.createElement("div")
  classItem.appendChild(countItem)
  countItem.setAttribute("class","count-item")
  var plusButton=document.createElement("button")
  countItem.appendChild(plusButton)
  plusButton.setAttribute("type","button")
  plusButton.setAttribute("class","btn plus")
  plusButton.innerHTML="+"
  var countItemNumber=document.createElement("span")
  countItem.appendChild(countItemNumber)
  countItemNumber.setAttribute("class","count")
  countItemNumber.innerHTML=0
  var minusButton=document.createElement("button")
  countItem.appendChild(minusButton)
  minusButton.setAttribute("type","button")
  minusButton.setAttribute("class","btn minus")
  minusButton.innerHTML="-"// div class="count-item"
  var itemPrise=document.createElement("div")
  classItem.appendChild(itemPrise)
  itemPrise.setAttribute("class","item-prise")
  var priceInput=document.getElementById("price-item")
  var itemPriseH3=document.createElement("h3")
  itemPrise.appendChild(itemPriseH3)
  itemPriseH3.innerHTML=priceInput.value+"$"//div class="item-prise"
  //reset
  inputSrc.value=""
  inputTitle.value=""
  inputDescription.value=""
  priceInput.value=""
}

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
document.addEventListener("click", function(event) {
    if (event.target.className.includes("glyphicon glyphicon-cloud-upload")) {
      document.querySelector(".add-item").classList.toggle("toggle-item");
    }
  });
cart.innerHTML=count;
total.innerHTML="Bag Total : "+count+" $";
