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
function newItem(id, name, category, subcategory, description, specs, manualURL, productReview, priceDay, priceWeek, condition, included, notes, itemReview){
    this.id = id;
    this.name = name;
    this.category = category;
    this.subcategory = subcategory;
    this.description = description;
    this.specs = specs;
    this.manualURL = manualURL;
    this.productReview = productReview;
    this.priceDay = priceDay;
    this.priceWeek = priceWeek;
    this.condition = condition;
    this.included = included;
    this.notes = notes;
    this.productReview = productReview;
    this.userReviews = userReviews;
    return newItem;
} 

var formSubmitBtn = document.getElementById("formSubmitBtn");

formSubmitBtn.addEventListener('submit', () => {
        var category = document.getElementById("category");
        var subcategory = document.getElementById("subcategory");
        var description = document.getElementById("description");
        var condition = document.getElementById("condition");
        var priceDay = document.getElementById("priceDay");
        var priceWeek = document.getElementById("priceWeek");
        var manualURL = document.getElementById("manualURL");
        var specs = document.getElementById("specs");
        var productReview = document.getElementById("productReview");
        var notes = document.getElementById("notes");
    }
);


/**
---- or ----- 
let newItem.priceDay = document.getElementById("priceDay");
let newItem.priceWeek = document.getElementById("priceWeek");
let newItem.manualURL = document.getElementById("manualURL");
let newItem.description = document.getElementById("description");
let newItem.specs = document.getElementById("specs");
let newItem.productReview = document.getElementById("productReview");
let newItem.notes = document.getElementById("notes"); **/

/** var itemX = CreateInventoryItem("000-0000000-000", "Canon 5d Mark IV", ..... );

const newItem = document.getElementById('formSubmitBtn');
formSubmitBtn.addEventListener('click', () => {
    form
})

const = document.getElementById('category'); **/
