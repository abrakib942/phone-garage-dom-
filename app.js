const searchPhone = ()  => {
   document.getElementById('view-details').innerHTML = ""

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;


    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearch(data.data.slice(0, 20)))
}

      /* search phone and display phone */
const displaySearch = phones => {
    console.log(phones);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    /* error message */
    const errorMsg = document.getElementById('error-msg');
    if(phones.length == 0) {
        errorMsg.innerText = "No Phone Found"
    }
    else{
        errorMsg.innerText = "";
    }

    phones.forEach(phone => {
        const div = document.createElement('div');
        div.innerHTML = `<div class="col">
            <div class="card rounded w-50 mx-auto">
            <img src="${phone.image}" class="card-img-top p-4" alt="...">
            <div class="card-body">
                <h4 class="card-title  text-primary">${phone.brand} ${phone.phone_name}</h4>
                <a href="#"><button onclick= "phoneDetails('${phone.slug}')" class= "btn btn-danger mt-4">Details</button></a>
            </div>
            </div>
        </div>`

        searchResult.appendChild(div)
    });
}

       /* details btn and show details */
const phoneDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data))
}

const displayDetails = detail => {
    const viewDetails = document.getElementById('view-details');
    viewDetails.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="modal-dialog modal-dialog-scrollable">
         <h4 class= "text-info">${detail.name}</h4>
         <img src="${detail.image}" alt="">
         <p class= "mt-2"><span class= "fw-bold"> Release Date:</span> ${detail.releaseDate ? detail.releaseDate : 'no release date'}</p>

         <h5 class="text-info my-2">Main Features</h5>
        <p><span class= "fw-bold">Storage:</span> ${detail.mainFeatures.storage}</p>
        <p><span class= "fw-bold">Chipset:</span> ${detail.mainFeatures.chipSet}</p>
        <p><span class= "fw-bold"> Memory:</span> ${detail.mainFeatures.memory}</p>
        <p><span class= "fw-bold">Display Size:</span> ${detail.mainFeatures.displaySize}</p>
        
        <h5 class="text-info my-2">Sensors</h5>
        <p>${detail.mainFeatures.sensors}</p>

        <h5 class="text-info my-2">Others</h5>
        <p><span class= "fw-bold">WLAN:</span> ${detail.others?.WLAN}</p>
        <p><span class= "fw-bold">Bluetooth:</span> ${detail.others?.Bluetooth}</p>
        <p><span class= "fw-bold">GPS:</span> ${detail.others?.GPS}</p>
        <p><span class= "fw-bold">NFC:</span> ${detail.others?.NFC}</p>
        <p><span class= "fw-bold">Radio:</span> ${detail.others?.Radio}</p>
        <p><span class= "fw-bold">USB:</span> ${detail.others?.USB}</p>
        

        </div>
    `

    viewDetails.appendChild(div);
}