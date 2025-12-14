"use strict";
let filters = document.querySelectorAll(".filter_button");
for(let i=0; i<filters.length; i++){
    filters[i].addEventListener("click", (event) => {
        filters.forEach(button => {
            button.classList.remove("active")
        })
        event.target.classList.add("active");
    })
}
