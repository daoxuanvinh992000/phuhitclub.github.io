let thumnails = document.querySelectorAll('.thumbnail-image > img');
const mainImage = document.getElementById('mainImage');

thumnails.forEach(thumb => {
    thumb.addEventListener('click', onThumbnailClicked);
});

function onThumbnailClicked(ev) {
    let imageSrc = ev.target.getAttribute('src');
    mainImage.setAttribute('src', imageSrc);
}
