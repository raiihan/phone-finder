// Search button Function 
const searchPhone = () => {
    const searchText = document.getElementById('search-input');
    const searchPhoneName = searchText.value.toLowerCase();

    //    clear Search field
    searchText.value = '';

    if (!searchPhoneName) {
        console.log('input data')
    }
    else {
        // get data by Api
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhoneName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhone(data.data))
    }

}

// Iteration phones array
const displayPhone = phones => {
    const resultContainer = document.getElementById('result-container');
    resultContainer.textContent = '';
    if (phones.length == 0) {
        console.log('no data found')
    }
    else {
        if (!phones.length <= 20) {
            const phonesLength20 = phones.splice(0, 20);
            // console.log('splice', phonesLength20)
            phonesLength20.forEach(phone => {
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
                    <div class="card w-75">
                        <img src="${phone.image}" class="card-img-top img-thumbnail w-75 mx-auto" alt="Product Image">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${phone.phone_name}</h5>
                            <p class="card-text">Name: ${phone.brand}</p>
                            <button onclick="phoneDetails('${phone.slug}')" class="btn btn-success">Details</button>
                        </div>
                    </div>`;
                resultContainer.appendChild(div);
            })

        }
        else {
            phones.forEach(phone => {
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
                    <div class="card w-75">
                        <img src="${phone.image}" class="card-img-top img-thumbnail w-75 mx-auto" alt="Product Image">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${phone.phone_name}</h5>
                            <p class="card-text">Name: ${phone.brand}</p>
                            <button onclick="phoneDetails('${phone.slug}')" class="btn btn-success">Details</button>
                        </div>
                    </div>`;
                resultContainer.appendChild(div);
            })

        }

        console.log(phones.length)

    }
}


// Create a Method for Phone Details
const phoneDetails = async phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    console.log(url)
    const res = await fetch(url);
    const data = await res.json()
    displayPhoneDetail(data.data)
}

const displayPhoneDetail = info => {
    console.log(info.name)
    console.log(info.releaseDate ? info.releaseDate : 'no date found')
    const { storage, displaySize, chipSet, memory } = info.mainFeatures
    console.log('storage:=', storage, 'display:=', displaySize, 'chip:=', chipSet, "memory:=", memory)
    info.mainFeatures.sensors.forEach(sensor => console.log(sensor))
    console.log('hello')
    for (const key in info.others) {
        console.log(key)
    }
}

