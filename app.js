const searchPhone = ()  => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearch(data.data))
}

const displaySearch = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    for(const phone of phones) {
        const div = document.createElement('div');
        div.innerHTML = `<div class="col">
            <div class="card m-3 rounded">
            <img src="${phone.image}" class="card-img-top p-4" alt="...">
            <div class="card-body">
                <h4 class="card-title  text-primary">${phone.brand} ${phone.phone_name}</h4>
                <button onclick= "phoneDetails()" class= "btn btn-danger">Details</button>
            </div>
            </div>
        </div>`

        searchResult.appendChild(div)
    }
}

const phoneDetails = () => {
    console.log('clicked'); 
}