var carName = document.getElementById("carName");
var carModel = document.getElementById("carModel");

var cars = {
  honda: {
    civic: {
      varient: "Civic Vti Oriel",
      model: "2023",
      price: 4000000,
    },
    city: {
      varient: "City Aspire",
      model: "2022",
      price: 3500000,
    },
  },

  toyota: {
    corolla: {
      varient: "altis Vvti ",
      model: "2023",
      price: 4000000,
    },
    fortuner: {
      varient: "Sigma",
      model: "2022",
      price: 3500000,
    },
  },
};
for (var key in cars) {
  // console.log(key)
  carName.innerHTML += `<option  value="${key}"> ${key}</option>`;
}
function getVarient() {
  // console.log(event.target.value)
  var selectedManufacture = event.target.value;
  // console.log(selectedManufacture)
  carModel.innerHTML = `<option  value=""> Varient</option>`;
  if (selectedManufacture) {
    var models = cars[selectedManufacture];
  }
  for (var modelName in cars[selectedManufacture]) {
    carModel.innerHTML += `<option  value=""> ${modelName}</option>`;
    console.log(modelName);
  }

}
