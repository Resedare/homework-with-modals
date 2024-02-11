let video = document.getElementById('myVideo')
let playButton = document.getElementById("how-i-work__video-button")

playButton.addEventListener('click', function () {
    if (video.paused) {
        video.play();
    } else
        video.pause();
    playButton.style.display = 'none';
})

function openModal(img) {
    // Получить модальное окно
    let modal = document.getElementById('myModal');
    // Получить изображение внутри модального окна
    let modalImg = document.getElementById("img01");
    // Использовать атрибут src кликнутого изображения для заполнения src модального изображения
    modalImg.src = img.src;
    // Показать модальное окно
    modal.style.display = "block";

    // Получить элемент <span> (крестик) который закрывает модальное окно
    let span = document.getElementsByClassName("close")[0];

    // Когда пользователь кликает на <span> (крестик), закрыть модальное окно
    span.onclick = function () {
        modal.style.display = "none";
    }
}