const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

function showSlide(index){

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    current = index;
}

next.addEventListener("click", () => {

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

});

prev.addEventListener("click", () => {

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        showSlide(index);

    });

});

setInterval(()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

},5000);
// =============================
// FAQ Accordion
// =============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
function searchWebsite() {

let input = document.getElementById("searchInput").value.toLowerCase();

if(input.includes("home"))
window.location="index.html";

else if(input.includes("about"))
window.location="about.html";

else if(input.includes("academics"))
window.location="academics.html";

else if(input.includes("admission"))
window.location="admissions.html";

else if(input.includes("gallery"))
window.location="gallery.html";


else if(input.includes("contact"))
window.location="contact.html";

else

alert("No page found.");

}