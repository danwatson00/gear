/** let inventory = [
    {
        id: "000-000000-001",
        name: "Canon EF 50mm f/1.2 USM Lens",
        category: "Photo/Video",
        subcategory: "Lens",
        specs: "Focal Length: 50mm(80mm Equivalent for Crop Sensors), Apterture Range: f / 1.2 - f / 16, Canon EF Mount, Format Coverage: Full Frame, 1.5 ft. Minimum Focusing Distance, 46º Angle of View, 0.15x Magnification, AF / MF, Filter Size: 72mm, Length: 2.6 in., Weight: 1.2 lbs",
        manualURL: "http://cdn.static-bl.com/images/manual/50mm-f1-2-L.pdf",
        description: "The Canon EF 50mm f/1.2L USM Lens boasts very high quality with a very fast maximum aperture that is perfect for low depth-of-field portraiture and still life work. It features a Super Spectra coating to suppress flare and ghosting and is also weather-sealed for safe outdoor shooting. It can be paired with both full frame sensor cameras, such as the Canon 5D Mark III, and with crop frame sensor cameras, such as the Canon 7D Mark II. The focal length equivalent on crop frame sensors is 80mm. This lens is considered among many Canon shooters as a definitive portrait lens, along with the Canon EF 85mm f/1.2L USM Lens.",
        priceDay: 50,
        priceWeek: 250,
        condition: 9,
        included: "Front Cap, Rear Cap, 72mm filter, Lens Hood",
        notes: "This lens is compatible with Canon EF mount cameras in both full frame and crop frame sensors. The focal length equivalent on crop frame sensors is 80mm. This lens is not compatible with 2X and 1.4X Canon extenders.",
        productReview: "",
        userReviews: ""

    },
    {
        id: "000-000000-002",
        name: "Canon 5D Mark III DSLR Camera Body",
        category: "Photo/Video",
        subcategory: "DSLR Camera Body"
        description: "The Canon EF 50mm f/1.2L USM Lens boasts very high quality with a very fast maximum aperture that is perfect for low depth-of-field portraiture and still life work. It features a Super Spectra coating to suppress flare and ghosting and is also weather-sealed for safe outdoor shooting. It can be paired with both full frame sensor cameras, such as the Canon 5D Mark III, and with crop frame sensor cameras, such as the Canon 7D Mark II. The focal length equivalent on crop frame sensors is 80mm. This lens is considered among many Canon shooters as a definitive portrait lens, along with the Canon EF 85mm f/1.2L USM Lens.",
        specs: "Focal Length: 50mm(80mm Equivalent for Crop Sensors), Apterture Range: f / 1.2 - f / 16, Canon EF Mount, Format Coverage: Full Frame, 1.5 ft. Minimum Focusing Distance, 46º Angle of View, 0.15x Magnification, AF / MF, Filter Size: 72mm, Length: 2.6 in., Weight: 1.2 lbs",
        manualURL: "http://cdn.static-bl.com/images/manual/50mm-f1-2-L.pdf",
        productReview: "",
        priceDay: 50,
        priceWeek: 250,
        condition: 9,
        included: "camera strap, body cap, battery, charger",
        notes: "This lens is compatible with Canon EF mount cameras in both full frame and crop frame sensors. The focal length equivalent on crop frame sensors is 80mm. This lens is not compatible with 2X and 1.4X Canon extenders.",
        productReview: "",
        userReviews: ""
    }
];
**/
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

var myGear = [];
myGearDiv = document.getElementById("myGearDiv");

var formSubmitBtn = document.getElementById("formSubmitBtn");
console.log(formSubmitBtn);
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
            let gearItemElement = `<div class="gearCard"><img class="itemImage" src"${gearItem.itemImageURL}"<br>
            <h3>${gearItem.itemName}</h3><p>${gearItem.itemCategory}</p><br><small>${gearItem.itemSubcategory}</small><br>
            <ul class="cardList"><li>$${gearItem.itemPriceDay}/day</li><li>$${gearItem.itemPriceWeek}/week</li>
            <li>${gearItem.itemCondition}</li><li>${gearItem.itemId}</li></ul><p>More info</p></div>`;
            myGearDiv.innerHTML += gearItemElement;
}
    }
    
);




/**
const newItem = document.getElementById('formSubmitBtn');
formSubmitBtn.addEventListener('click', () => {
    form
})

const = document.getElementById('category'); **/
