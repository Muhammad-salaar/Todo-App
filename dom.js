

// <h1>Hello</h1>



// //<h1></h1>
// var headingOne = document.createElement("h1");

// //<h1>Heading One</h1>
// headingOne.innerText = "Heading One"


// //headingOne ke element ko append kradya webpage me 
// document.body.append(headingOne)







// //<p>This is Para</p>


// //<p></p>
// var para = document.createElement("p");

// //<p>this is <b>para</b></p>
// para.innerHTML = "this is <b> para  </b>"

// //para ke element ko append kradya webpage me 
// document.body.append(para)







// <img src="image src" alt="alternative text" height=200  width = 200 />

// var userImage = document.createElement("img");

// userImage.src = "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
// userImage.alt = "user profile"
// userImage.height = '200'
// userImage.width = '200'

// document.body.append(userImage)


// var greetBtn = document.createElement("button")
// greetBtn.innerText = "Click TO Greet"
// greetBtn.type = "button"
// greetBtn.classList = "btn btn-dark"

// document.body.append(greetBtn)


// greetBtn.addEventListener('click',greet)






// function greet(){
//     alert("Hello")
// }








// <div class="container">
// <p>Hello</p>
// </div>


// create div
// var division = document.createElement("div");
// division.classList = "container"


// // create P

// var para = document.createElement("p")
// para.innerText = "Hello"



// division.append(para)



// document.body.append(division)




{/* <div class="row">

<div class="col-md-4">

    <img src="" alt="">
    <h3>product Name</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, blanditiis.</p>
    <button>View Detail</button>
</div>

</div> */}


/*
STEP 01
6 ELEMENT CREATE

STEP 02
IMG,BTN,P,H3 APPEND DIV CLASS COL-MD-4

STEP 03

COL-MD-4 DIVI KO APPEND ROW

*/


var PRODUCT_CARD_PARENT_DIVISION = document.createElement("div");
PRODUCT_CARD_PARENT_DIVISION.classList = "row";





var img = document.createElement("img")
img.src="https://outfitters.com.pk/cdn/shop/files/F0163101007_4.jpg?v=1738133080"
img.classList = "card-img-top"



var productName = document.createElement("h3")
productName.innerText  = "Jacket"



var productDesc = document.createElement("p")
productDesc.innerText= "Rock a cool and classic look with our Denim Jacket. This wardrobe staple boasts a durable denim fabric that will keep you stylish and comfortable. Perfect for any occasion, pair it with your favorite jeans for a timeless and versatile outfit. So go ahead, elevate your style game with our Denim Jacket!"


var productButton = document.createElement("button")
productButton.classList = "btn btn-dark btn-sm"



var productDivision = document.createElement("div");
productDivision.classList = "card col-md-4"



productDivision.append(img)
productDivision.append(productName)
productDivision.append(productDesc)
productDivision.append(productButton)





PRODUCT_CARD_PARENT_DIVISION.append(productDivision)

document.body.append(PRODUCT_CARD_PARENT_DIVISION)








var fruits = [ "apple" , "mango" ,"orange"]
var user = [
    {userid:1,username:"abc"},
    {userid:2,username:"cba"},
    {userid:3,username:"dfa"},
]






user.forEach(   
    (element,index)=>{

        // console.log(`${index}  - ${element}`)
        console.log(element.username)

    }
)






