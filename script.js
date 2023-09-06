// JavaScript
function setImage(id) {
    const mainImage = document.getElementById('mainImage');
    let newSrc = '';

    // Determine the new image source based on the clicked thumbnail
    switch (id) {
        case 1:
            newSrc = "./images/image-product-1.jpg";
            break;
        case 2:
            newSrc = "./images/image-product-2.jpg";
            break;
        case 3:
            newSrc = "./images/image-product-3.jpg";
            break;
        case 4:
            newSrc = "./images/image-product-4.jpg";
            break;
        default:
            newSrc = "./images/image-product-1.jpg"; // Default to the first image
            break;
    }

    // Update the src attribute of the mainImage
    mainImage.src = newSrc;
}
