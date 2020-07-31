fetch("http://localhost:3000/schools")
  .then(res => res.json())
  .then(json => json.forEach(school => {showSchools(school)})
  );

const donationFetch = (school) => {
 fetch(`http://localhost:3000/donations?school_id=${school.id}`)
    // everything after the ? is included in the params (now have access to school_id)
    .then(res => res.json())
    .then(json => json.forEach(donation => {schoolDonations(donation)}))
}

const fetchSupplies = () => {
  fetch("http://localhost:3000/supplies")
    .then(res => res.json())
    .then(json => json.forEach(supply => {schoolSupplies(supply)}));
};

const showSchools = (school) => {
  let navBar = document.getElementById("School-Menu");
  let ul = navBar.querySelector("ul");
  let li = document.createElement("li");
  li.className = 'list-group-item"';
  li.textContent = school.name;
  ul.appendChild(li);
  li.addEventListener("click", (e) => schoolPage(e, school));
};

const schoolPage = (e, school) => {
  e.target.className = "list-group-item active";
  let div = document.querySelector(".main-div");
  div.id = school.name;
  div.innerHTML = "";
  div.innerHTML = `

    <h2> ${school.name}</h2>
    <h3> ${school.district} </h3>
    <p> Supplies needed for upcoming school year </p>
    <div>
        <ul id='supplies'>
        </ul>
    </div>
    <form id='supplies-needed'>
        <label>Name</label>
        <input type='text' name='name'>
        <label>Supply</label>
        <input type='text' name='supply'>
        <label>Amount</label>
        <input type='number' name='amount'>
        <br>
        <input type="submit" value="Submit">
    </form>
    <form id='monetary-donations'>
        <label>Name</label>
        <input type='text' name='name'>
        <label>Dollar Amount</label>
        <input type='number' name='amount'>
        <br>
        <input type="submit" value="Submit">
    </form>
    <h3 id = "thanks">Thank you to all that have donated! Your generosity has improved the educational experience for our students.</h3>
    <div>
       <ul id='donated'>
        </ul>
    </div>
    `;

    let form = document.querySelector("#supplies-needed");
    form.addEventListener("submit", (e) => donateSupplies(e, school));

    let monetary = document.querySelector('#monetary-donations')
    monetary.addEventListener('submit', (e) => financialDonation(e, school))

    donationFetch(school)
    fetchSupplies()
}

const schoolSupplies = (supply) => {
    let supplyUL = document.getElementById("supplies");
    let li = document.createElement("li");
    li.id = supply.school_name
    let div = document.querySelector(".main-div");
    if (div.id === supply.school_name) {
        li.textContent = `${supply.amount} ${supply.supply}`;
        supplyUL.appendChild(li);
    }
};

const schoolDonations = (donation) => {
    let ul = document.querySelector('#donated')
    let li = document.createElement('li')
    li.addEventListener("click", (e) => deleteDonateSupplies(e, li))
    // console.log(e)
    li.textContent = `${donation.user_name} donated ${donation.amount} ${donation.supply_name}`
    ul.appendChild(li)
}
//added code to our fetch (look at it above^)

const donateSupplies = (e, school) => {
    e.preventDefault()
    let ulDonate = document.querySelector('#donated')
    let li = document.createElement('li')
    li.innerHTML = `${e.target.name.value} donated ${e.target.amount.value} ${e.target.supply.value}`
    ulDonate.appendChild(li)
    
    li.addEventListener("click", (e) => deleteDonateSupplies(e, li))
    console.log(e)

   let data = {supply: {supply:e.target.supply.value, amount: e.target.amount.value, school_id: school.id, name: e.target.name.value}}
    
   fetch('http://localhost:3000/supplies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

const financialDonation = (e, school) => {
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.amount.value)

    let data = {donation: {supply: 'dollar_amount', amount: e.target.amount.value, school_id: school.id, name: e.target.name.value}}

    fetch('http://localhost:3000/donations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        let ul = document.getElementById('donated')
        let li = document.createElement('li')
        li.textContent = `Thank you ${json.user_name} for your financial contribution`
        ul.appendChild(li)})
        // .then(json => console.log(json))
    }
let headerFirst = document.querySelector("header");
let home = headerFirst.querySelector("h1");
//click title "Back To School Drive", will back to home page
home.addEventListener("click", (e) => showHomePage());

const deleteDonateSupplies = (e, li) => {
     // fetch('http://localhost:3000/supplies'),{
     // method: 'DELETE'
//      let currentDonatedSupplies = document.querySelector('li')
//      let ulDonate = document.querySelector('#donated')
//      console.log(currentDonatedSupplies)
//      console.log(ulDonate) 
}
