function abMsg (){
    const msgText = document.querySelector("#msg1-2")
    msgText.textContent = "かわったかな？成功だね！"
}


const abBtn = document.querySelector("#btn1-2");
abBtn.addEventListener("click", abMsg)