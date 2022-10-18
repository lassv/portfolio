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
