const bulletinsDiv = document.querySelector(".bulletins");
const testimonialsDiv = document.querySelector(".testimonials");

//setting root font size
document.documentElement.style.fontSize = "10px";

//populating the bulletins into tribute info section
Object.keys(bulletins).forEach((key) => {
  const bulletinHtml = `<article class="tribute-info__bulletin">
                        <h3 class="bulletin__title">${key} - ${bulletins[key][0]}</h3>
                        <p class="bulletin__desc">${bulletins[key][1]}</p>
                    </article>`;
  bulletinsDiv.innerHTML += bulletinHtml;
});

//populating the testimonials into tribute info section
Object.values(testimonials).forEach((val) => {
  testimonialHtml = `<blockquote class="testimonial">
                        <p class="testimonial__msg">${val.msg}</p>
                        <cite class="testimonial__cite">${val.cite}</cite>
                    </blockquote>`;
  testimonialsDiv.innerHTML += testimonialHtml;
});

