let img;
let imgWidth;
let imgHeight;
let canDraw = false;
let drawImg;
let form;
let clickCount = 0;

function preload() {
  img = loadImage('ol.png'); // Замени URL на своё изображение
  drawImg = loadImage('styl.png'); // Замени URL на изображение для рисования
  form = loadImage('form.png');
}

function setup() {
  createCanvas(600, 600);
  background(220);
  image(form,50,10);
  image(img, 90, 430); // Рисуем основное изображение по центру
}

function draw() {
  // Добавляем возможность рисовать другим изображением, если разрешено
  if (canDraw && mouseIsPressed) {
    image(drawImg, mouseY - drawImg.width / 2, mouseX - drawImg.height / 2);
  }
}

function mousePressed() {
  // Проверяем, находится ли клик внутри изображения
  if (mouseX > 90 && mouseX < 90 + img.width && mouseY > 430 && mouseY < 430 + img.height && clickCount == 0) {
    clickCount++;
      noStroke(); // Убираем обводку
      fill(220); // Цвет прямоугольника для закрашивания (тот же, что и фон)
      rect(90, 430, img.width, img.height);
   
  } else if(clickCount =>1){
    
    clickCount++;
  }
if (clickCount >= 2) {
    canDraw = true; // Разрешаем рисовать после второго клика
  }

}
