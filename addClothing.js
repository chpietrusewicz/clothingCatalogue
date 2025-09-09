function openPopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'block';
}

function closePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'none';
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('output').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function addClothingItem() {
    const fileInput = document.getElementById('avatar');
    const checkboxes = document.querySelectorAll('.tag:checked');
    const clothingItem = {};

    const file = fileInput.files[0];
    const tags = Array.from(checkboxes).map(cb => cb.value);
    clothingItem.tags = tags;

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            clothingItem.image = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    console.log(clothingItem);
    clearInputs();
    closePopup();
}

function clearInputs() {
    document.getElementById('avatar').value = '';
    document.getElementById('output').src = '';
    const checkboxes = document.querySelectorAll('.tag:checked');
    checkboxes.forEach(cb => cb.checked = false);
}

document.getElementById('avatar').addEventListener('change', previewImage);