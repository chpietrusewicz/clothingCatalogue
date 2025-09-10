function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getAverageColor() {

}

function selectTab(tab) {
    document.querySelectorAll('.slider-tab').forEach(btn => btn.classList.remove('active'));
    tab.classList.add('active');
    divId = tab.id + '-div';
    document.querySelectorAll('.clothing-div').forEach(div => {
        if (div.id === divId) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    })

}

function loadAllClothes() {
    const clothes = JSON.parse(localStorage.getItem('clothes')) || [];
    console.log(clothes);
    clothes.forEach(item => {
        console.log(item);
        // Create an image element for each clothing item
        const imgA = document.createElement('img');
        imgA.src = item.image;
        imgA.style.width = '150px'; // Set a fixed width for display
        imgA.style.height = '200px'; // Set a fixed height for display
        // Append the image to the all-tab-div
        document.getElementById('all-tab-div').appendChild(imgA);

        // Append to specific tag divs
        category = item.tags[0];
        document.querySelectorAll('.clothing-div').forEach(div => {
            if (div.innerHTML === category) {
                const imgB = document.createElement('img');
                imgB.src = item.image;
                imgB.style.width = '150px'; // Set a fixed width for display
                imgB.style.height = '200px';
                div.appendChild(imgB);
            }
        })
    });
}

document.addEventListener('DOMContentLoaded', loadAllClothes);

