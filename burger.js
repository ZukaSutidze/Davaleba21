const brg = document.querySelectorAll(".logo");
const brg2 = document.querySelectorAll(".logo2");
const brg1 = document.querySelectorAll('.Burgermenu'); 


for (let i = 0; i < brg.length; i++){
    brg[i].addEventListener('click', function() {
        brg1[i].classList.add('active'); 
        brg1[i].classList.remove('active2'); 
    });
    
    brg2[i].addEventListener('click', function() {
        brg1[i].classList.add('active2'); 
        brg1[i].classList.remove('active'); 
    });
}