
// heart count system

let heartCount = 0;

const heartClick = document.getElementsByClassName('heart-click');

for (const heart of heartClick) {
  heart.addEventListener('click', function () {
    heartCount += 1;
    document.getElementById('heart-count').innerHTML = heartCount;
  });
}



