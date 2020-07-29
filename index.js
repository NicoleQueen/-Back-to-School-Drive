fetch("http://localhost:3000/schools")
  .then((res) => res.json())
  .then((json) =>
    json.forEach((school) => {
      showSchools(school);
    })
  );

const showSchools = (school) => {
  // console.log(school)
  let navBar = document.getElementById("School-Menu");
  let ul = navBar.querySelector("ul");
  let li = document.createElement("li");
  li.textContent = school.name;
  ul.appendChild(li);
  li.addEventListener("click", (e) => schoolPage(e, school));
};

const schoolPage = (e, school) => {
  console.log("hi");
  console.log(school);
  console.log(e);
  let div = document.querySelector(".main-div");
  div.innerHTML = "";
  div.innerHTML = `
    <h2> ${school.name}</h2>
    <h5> ${school.district} </h5>

    `;
};
