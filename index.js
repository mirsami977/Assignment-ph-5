//copy  
document.getElementById("m-card-sec").addEventListener("click", function (event) {
    if (event.target.className.includes("c-btn")) {
        let copyCounter = Number(document.getElementById("c-count").innerText),
            copyBtn = event.target,
            copyNumber = copyBtn.parentNode.parentNode.parentNode.children[1].children[2].innerText,
            newCopy = copyCounter + 1;
        document.getElementById("c-count").innerText = newCopy;
        alert(`আপনি ${copyNumber} নাম্বারটি কপি করেছেন`);
        navigator.clipboard.writeText(copyNumber);
    }
})
// heart 
document.getElementById("m-card-sec").addEventListener("click", function (event) {
    if (event.target.className.includes("h-i")) {
        let heartsCounter = Number(document.getElementById("heart-count").innerText);
        let newHearts = heartsCounter + 1;
        document.getElementById("heart-count").innerText = newHearts;
    }
})
//clear button 
let clearBtn = document.getElementById("clear-button").addEventListener("click", function(){
    document.getElementById("history-section").innerText = "";
})

//call button 
document.getElementById("m-card-sec").addEventListener("click", function (event) {
    if (event.target.className.includes("call")) {
        let callBtn = event.target,
            cardName = callBtn.parentNode.parentNode.parentNode.children[1].children[0].innerText,
            cardNumber = callBtn.parentNode.parentNode.parentNode.children[1].children[2].innerText,
            coinCounter = Number(document.getElementById("coin").innerText),
            time = new Date().toLocaleTimeString(),
            newCoinCounter = coinCounter - 20;
        if (coinCounter < 20) {
            alert("এই সার্ভিসটি ব্যবহার করার জন্য আপনার কাছে পর্যাপ্ত কয়েন নেই");
            return;
        }
        document.getElementById("coin").innerText = newCoinCounter;
        alert(`${cardName} সার্ভিসটির জন্য ${cardNumber} নাম্বারে কল করা হচ্ছে.........`);

        let historySection = document.getElementById("history-section");
        let div = document.createElement("div");
        div.innerHTML = `
                    <div class="flex justify-between items-center py-[8px] px-[10px] rounded-[8px] bg-[#FAFAFA] gap-[4px] mt-[28px] mb-[24px]">
						<div class="name-number">
							<p class="hind-madurai-regular text-[18px] font-[400] text-[#111]">${cardName}</p>
							<p class="hind-madurai-regular text-[18px] font-[400] text-[#5C5C5C]">${cardNumber}</p>
						</div>
						<div class="time">
							<p class="hind-madurai-regular text-[18px] font-[400] text-[#111]">${time}</p>
						</div>
					</div>
        `
        historySection.appendChild(div);
    }
})