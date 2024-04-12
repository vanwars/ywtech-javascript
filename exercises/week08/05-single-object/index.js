//The data:
const person = {
    name: "Wanda",
    pic: "images/spongebob.png",
    score: 30000,
};

// can you get the template to take information from the person object?
const template = `
    <div class="card">
        <img src="${person.pic}">
        <p>${person.name}'s high score is: ${person.score}</p>
    </div>
    `;
document.querySelector("main").insertAdjacentHTML("beforeend", template);
