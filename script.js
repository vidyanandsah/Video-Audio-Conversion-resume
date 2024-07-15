function validateForm() {
    const fileInput = document.querySelector('input[name="videoFile"]');
    const errorMessage = document.getElementById('error-message');

    if (fileInput.files.length === 0 || !fileInput.files[0].type.startsWith('video/')) {
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.style.display = 'none';
        return true;
    }
}

// JavaScript to handle displaying the download link
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const audioFilePath = urlParams.get('audio');
    if (audioFilePath) {
        const downloadLink = document.getElementById('download-link');
        const audioLink = document.getElementById('audio-link');
        audioLink.href = audioFilePath;
        downloadLink.style.display = 'block';
    }
}
document.getElementById('convert-more-button').addEventListener('click', function () {
    fetch('/redirect-home', { method: 'POST' })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url;
            }
        });
});


    