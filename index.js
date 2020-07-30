fetch('http://localhost:3000/schools')
.then(res => res.json())
.then(json => json.forEach(school => {showSchools(school)}))

const donationFetch = () => {
    fetch('http://localhost:3000/donations')
    .then(res => res.json())
    .then(json => json.forEach(donation => {schoolDonations(donation)}))
}

const fetchSupplies = () => {
fetch('http://localhost:3000/supplies')
.then(res => res.json())
.then(json => json.forEach(supply => {schoolSupplies(supply)}))
}

const showSchools = (school) => {
    // console.log(school)
    let navBar = document.getElementById('School-Menu')
    let ul = navBar.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = school.name
    ul.appendChild(li)
    li.addEventListener('click', (e) => schoolPage(e, school))
}


const schoolPage = (e, school) => {
    let div = document.querySelector('.main-div')
    div.id = school.name
    div.innerHTML = ''
    div.innerHTML = `
    <h2> ${school.name}</h2>
    <h3> ${school.district} </h3>
    <p> Supplies needed for upcoming school year </p>
    <div>
        <ul id='supplies'>
        </ul>
    </div>
    <form id='supplies-needed'>
        <label>Supply</label>
        <input type='text' name='supply'>
        <label>Amount</label>
        <input type='number' name='amount'>
        <br>
        <input type="submit" value="Submit">
    </form>
    <h3>Thank you to all that have donated! Your generosity has imh5roved the educational experience for our students.</h3>
    `  
    donationFetch()
    fetchSupplies()
}

const schoolSupplies = (supply) => {
    let supplyUL = document.getElementById('supplies')
    let li = document.createElement('li')
    let div = document.querySelector('.main-div')

     if (div.id === supply.school_name){
        li.textContent = `${supply.amount} ${supply.supply}`
        supplyUL.appendChild(li)
     }

}



const schoolDonations = (donation) => {
    // console.log(donations.amount)
    let form = document.querySelector('form')
    // console.log(form)
    let div = document.createElement('div')
    div.id = 'donated'
    div.innerHTML = `
    ${donation.user_name} donated ${donation.amount} ${donation.supply_name}
    `
    form.after(div)
    let menu = document.querySelector('.main-div')
    // console.log(menu)
}


