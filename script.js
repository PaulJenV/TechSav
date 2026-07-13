<<<<<<< HEAD
const btn=document.getElementById('menuBtn');const menu=document.getElementById('menu');if(btn){btn.addEventListener('click',()=>menu.classList.toggle('show'));}
const g=document.getElementById('greeting');if(g){const h=new Date().getHours();g.textContent=h<12?'Good Morning!':h<18?'Good Afternoon!':'Good Evening!';}
const form=document.getElementById('contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value.trim();const em=document.getElementById('email').value.trim();const msg=document.getElementById('message');if(!n||!em){msg.textContent='Please complete all fields.';msg.style.color='red';}else{msg.textContent='Form submitted successfully!';msg.style.color='green';}});}
=======
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (btn) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

const g = document.getElementById("greeting");

if (g) {
  const h = new Date().getHours();

  g.textContent =
    h < 12
      ? "Good Morning!"
      : h < 18
      ? "Good Afternoon!"
      : "Good Evening!";
}

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const n = document.getElementById("name").value.trim();
    const em = document.getElementById("email").value.trim();
    const msg = document.getElementById("message");

    if (!n || !em) {
      msg.textContent = "Please complete all fields.";
      msg.style.color = "red";
    } else {
      msg.textContent = "Form submitted successfully!";
      msg.style.color = "green";
    }
  });
}

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});
>>>>>>> dac3081 (Improve TechSav website pages and add service interactions)
