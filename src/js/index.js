fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    //Company
    document.getElementById("company").innerText = data.company;
    // Location
    (document.getElementById("location").innerText = data.location),
      // Age
      (document.getElementById("age").innerText = data.age);
    // About
    document.getElementById("aboutText").innerHTML = data.about;
    // Name
    document.getElementById("name").innerText = data.name;
  })
  .catch((e) => {
    console.error(e.message);
  });

// Projects
fetch("/projects.json")
  .then((res) => res.json())
  .then((data) => {
    const CardList = document.getElementById("cardList");

    CardList.innerHTML = data.map((p) => {
      return `<div class="card">
      <img
        src="${p.image}"
        class="card-img-top"
        alt="${p.id}"
      />
      <div class="card-body">
        <h5 class="card-title">${p.name}</h5>
        <p class="card-text">
         ${p.description}
        </p>
        <a href="${p.link}" target="_blank" class="card-text">
          Besøg siden
        </a>
      </div>
    </div>`;
    });
  })
  .catch((e) => {
    console.error(e.message);
  });
