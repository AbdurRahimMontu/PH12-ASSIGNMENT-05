// heart 
document
  .getElementById("cart-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("heart-icon")) {
      const heartBtn = e.target;
      heartBtn.style.color = "red";
      const heartRed = document.getElementById("heart-red");
      let heartValue = 1;
      let heartRedValue = Number(heartRed.innerText);
      const totalValue = heartRedValue + heartValue;
      document.getElementById("heart-red").innerText = totalValue;
    }
  });
// copy 
document
  .getElementById("cart-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("copy-btn")) {
      const copyBtn = e.target;
      const copyNumber = (copyBtn.parentNode.parentNode.children[3].innerText);
      // copyBtn.style.color = "red";
      const copyGreen = document.getElementById("copy-green");
      let copyValue = 1;
      let copyGreenValue = Number(copyGreen.innerText);
      const totalValue = copyGreenValue + copyValue;

      document.getElementById("copy-green").innerText = totalValue;

    

  navigator.clipboard.writeText(copyNumber)
        .then(() => {
          alert("নম্বর কপি হয়েছে : " + copyNumber);
        })
      


    }
  });

// call btn
document
  .getElementById("cart-container")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("call-btn")) {
      const callBtn = e.target;
        
      // callBtn.style.color = "red";
      const coinBox = document.getElementById("coin-box");

      let coinBoxValue = Number(coinBox.innerText);
       
      if (coinBoxValue >= 20) {
        const totalValue = coinBoxValue - 20;
        document.getElementById("coin-box").innerText = totalValue;
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
        return;
      }

 const serviceName = (callBtn.parentNode.parentNode.children[2].innerText);
        const serviceNumber = (callBtn.parentNode.parentNode.children[3].innerText);
        alert(`📞 Calling ${serviceName} ${serviceNumber}...`);



     const historyText = (callBtn.parentNode.parentNode.children[1].innerText);
     const historyNumber = (callBtn.parentNode.parentNode.children[3].innerText);

      const historyDetails = document.getElementById("history-details");
      const newDiv = document.createElement("div");
      if (coinBoxValue >= 20) {

      }
      newDiv.innerHTML = `
            <div class="bg-gray-200 p-4 mt-1 flex justify-between items-center">
                <div class="">
                <h3 class="">${historyText}  </h3>
               <h4>${historyNumber}</h4>
                </div>
                 <h3>${new Date().toLocaleTimeString()}</h3>
               </div>
      `;
      historyDetails.appendChild(newDiv)
    }
  });

// clear btn 
document.getElementById("clear-btn").addEventListener("click", function(){
        const historyDetails = document.getElementById("history-details");
        historyDetails.innerText = "";
      const coinBox = document.getElementById("coin-box");
    coinBox.innerText = "100";
       const heartRed = document.getElementById("heart-red");
      heartRed.innerText = "0"; 
      const copyGreen = document.getElementById("copy-green");
      copyGreen.innerText = "0"
})