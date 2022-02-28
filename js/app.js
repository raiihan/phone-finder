// Search button Function 
const searchPhone = () => {
    const searchText = document.getElementById('search-input');
    const searchPhoneName = searchText.value;
    //    clear Search field
    searchText.value = '';

    // get data by Api
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhoneName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

// Iteration phones array
const displayPhone = phones => {
    if (phones.length == 0) {
        console.log('no data found')
    }
    else {
        phones.forEach(phone => {
            console.log(phone)

        })
    }
}