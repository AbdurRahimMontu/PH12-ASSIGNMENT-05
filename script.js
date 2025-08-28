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
      console.log(coinBoxValue);
      if (coinBoxValue >= 20) {
        const totalValue = coinBoxValue - 20;
        document.getElementById("coin-box").innerText = totalValue;
      } else {
        console.log("Invalid");
      }

     const historyText = (callBtn.parentNode.parentNode.children[2].innerText);
     const historyNumber = (callBtn.parentNode.parentNode.children[3].innerText);

      const historyDetails = document.getElementById("history-details");
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
            <div class="bg-gray-200 p-4 mb-1">
                <div class="flex justify-between">
                <h3 class="">${historyText}  </h3>
                <h3>${new Date().toLocaleTimeString()}</h3>
                </div>
                <h4>${historyNumber}</h4>
               </div>
      `;
      historyDetails.appendChild(newDiv)
    }
  });


//  <script>
//     function copyText() {
//       // Get the text from the h3 element
//       const text = document.getElementById("myHeading").innerText;

//       // Use the Clipboard API
//       navigator.clipboard.writeText(text)
//         .then(() => {
//           alert("copy number : " + text); // feedback to user
//         })
//         .catch(err => {
//           alert("Failed to copy text!");
//           console.error(err);
//         });
//     }
//   </script>