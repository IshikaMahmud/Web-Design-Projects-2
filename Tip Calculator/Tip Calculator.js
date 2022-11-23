document.querySelector("#tip-form").onchange = function () {
  // finding
  var billTotal = Number(document.querySelector("#billTotal").value);
  var tipInp = document.querySelector("#tipInp").value;
  var tipOut = document.querySelector("#tipOut");
  var tipPortion = document.querySelector("#tipPortion");
  var totalBillTip = document.querySelector("#totalBillTip");
  var res = document.querySelector("#res");

  //   calculation
  var tipValue = billTotal * (tipInp / 100);
  var annualBill = billTotal + tipValue;

  tipPortion.value = tipValue.toFixed(3);
  totalBillTip.value = annualBill.toFixed(3);

  //   results
  tipOut.innerHTML = `${tipInp}%`;
  res.style.display = "block";
};
