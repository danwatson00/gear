//This function names the object and the properties of the object
function newItem(itemId, itemName, itemCategory, itemSubcategory, itemDescription, itemSpecs, itemManualURL, itemProductReview, itemPriceDay, itemPriceWeek, itemCondition, itemIncluded, itemNotes, itemUserReviews){
    this.itemId = itemId;
    this.itemName = itemName;
    this.itemCategory = itemCategory;
    this.itemSubcategory = itemSubcategory;
    this.itemDescription = itemDescription;
    this.itemSpecs = itemSpecs;
    this.itemManualURL = itemManualURL;
    this.itemProductReview = itemProductReview;
    this.itemPriceDay = itemPriceDay;
    this.itemPriceWeek = itemPriceWeek;
    this.itemCondition = itemCondition;
    this.itemIncluded = itemIncluded;
    this.itemNotes = itemNotes;
    this.itemProductReview = itemProductReview;
    this.itemUserReviews = itemUserReviews;
    this.itemImage = itemImage;
    return newItem;
} 

console.log(newItem);

//Declares the array myGear
var myGear = [];

//Declares that the element object myGearDiv represents id="myGearDiv"
myGearDiv = document.getElementById("myGearDiv");

//Declares the varialbe formSubmitBtn to be represented by id="formSubmitBtn"
var formSubmitBtn = document.getElementById("formSubmitBtn");

console.log(formSubmitBtn);

//Create an event listener that acts on any click to formSubmitBtn
formSubmitBtn.addEventListener('click', () => {
    let gearItem = {};
        gearItem.itemName = document.getElementById("itemName").value;
        gearItem.itemImageURL = document.getElementById("itemImageURL").value;
        gearItem.itemCategory = document.getElementById("itemCategory").value;
        gearItem.itemSubcategory = document.getElementById("itemSubcategory").value;
        gearItem.itemDescription = document.getElementById("itemDescription").value;
        gearItem.itemCondition = document.getElementById("itemCondition").value;
        gearItem.itemPriceDay = document.getElementById("itemPriceDay").value;
        gearItem.itemPriceWeek = document.getElementById("itemPriceWeek").value;
        gearItem.itemManualURL = document.getElementById("itemManualURL").value;
        gearItem.itemSpecs = document.getElementById("itemSpecs").value;
        gearItem.itemProductReview = document.getElementById("itemProductReview").value;
        gearItem.itemNotes = document.getElementById("itemNotes").value;
        myGear.push(gearItem);
        console.log(myGear);
        
        for (var i = 0; i <= myGear.length; i++) {
            let gearItemElement = `<div class="gearCard"><img class="itemImage" src="${gearItem.itemImageURL}><br><h3>${gearItem.itemName}</h3><p>${gearItem.itemCategory}</p><small>${gearItem.itemSubcategory}</small><br>
            <ul class="cardList"><li>Price Per Day: $${gearItem.itemPriceDay}</li><li>Price Per Week: $${gearItem.itemPriceWeek}</li>
            <li>Item Condition: ${gearItem.itemCondition}</li><li>Item ID:${gearItem.itemId}</li></ul><p>More info</p></div>`;
            myGearDiv.innerHTML += gearItemElement;
}
/**
            var gearItemElement = myGear.
 */
    }
    
);





/**
const newItem = document.getElementById('formSubmitBtn');
formSubmitBtn.addEventListener('click', () => {
    form
})

const = document.getElementById('category'); **/
