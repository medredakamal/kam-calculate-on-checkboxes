let totalPrice = 0;
let totalPriceOld = 0;

// DOM Elements
let getPriceElem = document.getElementById("total_price");
let getTablesElem = document.querySelectorAll(".checktables");

// Total Price ( on keyup )
getPriceElem.addEventListener("keyup", function () {
  totalPrice = getPriceElem.value;
  // Reset Tables
  document
    .querySelectorAll("input.checktables[type=checkbox]")
    .forEach((checkedItem) => {
      checkedItem.checked = false;
    });
});

// Served Tables
getTablesElem.forEach((tableItem) => {
  tableItem.addEventListener("change", function () {
    let getCheckedTablesElem = document.querySelectorAll(
      "input.checktables[type=checkbox]:checked"
    );
    // Save the old price
    totalPriceOld = totalPrice;

    if (getCheckedTablesElem.length >= 1) {
      if (isNaN(totalPriceOld) || totalPriceOld == "") {
        getPriceElem.value = 0;
      } else {
        getPriceElem.value =
          parseFloat(getCheckedTablesElem.length) * parseFloat(totalPriceOld);
      }
    }
  });
});
