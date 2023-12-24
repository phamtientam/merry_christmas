// var n = 6000
// setInterval(function(){
//   var confirmation = confirm("Đừng Quên Click Vào Cây Thông Để Mở Hộp Quà Nhé (^_^)")
//   if(confirmation === true){
//     n = n + 6000
//   }
// },n)
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 5000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function test(){
    document.body.innerHTML = "<video width='100%' height='1000px' controls autoplay> <source src='./images/video.mp4'></video>";
  }

  function openvideo(){
    document.getElementById('play').play()
  }

  
