fetch("http://localhost:3000/schools")
  .then((res) => res.json())
  .then((json) =>
    json.forEach((school) => {
      showSchools(school);
    })
  );

const showSchools = (school) => {
  console.log(school);
  let navBar = document.getElementById("School-Menu");
  let ul = navBar.querySelector("ul");
  let li = document.createElement("li");
  li.textContent = school.name;
  ul.appendChild(li);
  //add event listener 'click' for ea school
  //styling so that schools show on the left
  //maybe a hiding bar?
};
