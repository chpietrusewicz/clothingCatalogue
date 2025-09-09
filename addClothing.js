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
        reader.onload = function(e) {
            document.getElementById('output').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

document.getElementById('avatar').addEventListener('change', previewImage);