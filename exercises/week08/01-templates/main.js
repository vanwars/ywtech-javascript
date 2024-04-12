const gallery = document.querySelector("#gallery");

function addImageCardToDOM(url, caption, firstName) {
    const template = `
        <section class="card">
            <img src="${url}" alt="${caption}" />
            <p>${caption}</p>
            <p>${firstName}</p>
        </section>`;
    gallery.innerHTML += template;
}

// draw a card for each of the following images:
addImageCardToDOM("https://picsum.photos/id/106/400/300", "Flowers", "Andrea"); // Andrea
addImageCardToDOM("https://picsum.photos/id/107/400/300", "Wild Grasses", "Janice"); // Janice
addImageCardToDOM("https://picsum.photos/id/108/400/300", "Palm Trees", "Adwaina"); // Adwaina
addImageCardToDOM("https://picsum.photos/id/109/400/300", "Meadow at sunset", "Wanda");
addImageCardToDOM("https://picsum.photos/id/110/400/300", "Field", "Andrea");
addImageCardToDOM("https://picsum.photos/id/111/400/300", "Truck", "Andrea");
addImageCardToDOM("https://picsum.photos/id/112/400/300", "Wheat", "Andrea");
addImageCardToDOM("https://picsum.photos/id/114/400/300", "Sky", "Andrea");
addImageCardToDOM("https://picsum.photos/id/118/400/300", "Artichoke Flower in Winter", "Anita");
addImageCardToDOM(null, null, "Andrea");