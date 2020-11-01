function like (evt) {
    if (evt.target.classList.contains('cards__cats-like_active')) {
        alert("Вы удалили данного котика из избранного");
        evt.target.classList.remove('cards__cats-like_active');
    }
    else {
    evt.target.classList.toggle('cards__cats-like_active');
    evt.stopPropagation();
    alert("Вы добавили данного котика в избранное");
    }
};
  


const likeButton = document.querySelectorAll('.cards__cats-like');

likeButton.forEach((button) => {
    button.addEventListener('click', like)
});

