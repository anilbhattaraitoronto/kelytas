let collectionBox = document.getElementById('collections')

if (collectionBox !== null) {
    collections.addEventListener('click', function (e) {
        if (e.target.nodeName == 'IMG') {
            let imgBox = e.target.parentElement.parentElement.nextElementSibling.children[0]
            let imgSrc = e.target.src
            imgBox.src = imgSrc
        }
    })
}