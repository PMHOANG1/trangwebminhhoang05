 // Thay đổi nội dung búc thư ở đây
 var letterContent =" Chúc mừng sinh nhật Phạm Huyền Trang. Chúc Huyền Trang tuổi mới có thật nhiều sức khoẻ gặt hái được nhiều thành công trong học tập và cuộc sống nhá , biết yêu bản thân mình nhiều hơn , chúc cái Trang những điều tốt đẹp nhất. Tuổi 19 thật là rực rỡ nhaaaaaaaa 💕 anh không biết trang trí như thế nào nên là thấy nó cũng hơi sơ sài , conbe thông cảm cho anh nhá hề hề , thoi thì cũng không biết nói gì hơn tuổi mới hạnh phúc nhá........  HAPPY BIRTHDAY PHẠM HUYỀN TRANG "

 // Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
 durationWrite = 50 
 
 // Hiệu ứng gõ chữ
 
 function effectWrite () {
     var boxLetter = document.querySelector(".letterContent")
     letterContentSplited = letterContent.split("")
 
     letterContentSplited.forEach((val, index) => {
         setTimeout(() => {
             boxLetter.innerHTML += val    
         }, durationWrite* index)
     })
 }
 
 window.addEventListener("load", () => {
     setTimeout(() => {
         document.querySelector(".container").classList.add("active")
     }, 500)
 })
 
 var openBtn = document.querySelector(".openBtn")
 openBtn.addEventListener("click", () => {
     document.querySelector(".cardValentine").classList.add("active")
     document.querySelector(".container").classList.add("close")
 })
 
 var cardValentine = document.querySelector(".cardValentine")
 
 cardValentine.addEventListener("click", () => {
     cardValentine.classList.toggle("open")
 
     if(cardValentine.className.indexOf("open") != -1) {
         setTimeout(effectWrite, 500)
     } else {
         setTimeout(() => {
             document.querySelector(".letterContent").innerHTML = ""
         }, 1000)
     }
 })