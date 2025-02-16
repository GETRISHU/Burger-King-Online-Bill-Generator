function calculateAmount() {
  let total = 0;
  document.querySelectorAll("input[name='items']:checked").forEach((item) => {
    total += parseInt(item.value);
  });

  let gst = total * 0.08;
  let netAmount = total + gst;

  document.getElementById("totalAmount").value = `₹${total}`;
  document.getElementById("gstAmount").value = `₹${gst.toFixed(2)}`;
  document.getElementById("netAmount").value = `₹${netAmount.toFixed(2)}`;
}
