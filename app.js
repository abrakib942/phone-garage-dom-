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
    for(const phone of phones) {
        console.log(phone);
    }
}