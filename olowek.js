let img;
let imgWidth;
let imgHeight;
let canDraw = false;
let drawImg;
let form;
let clickCount = 0;
  let tx = 1920/2 - 300;
     let ty = 1080 / 2 - 300;
      let t = 0;
      let font;
      let strzalka;
      let chapter = true;
      
      

function preload() {
  font=loadFont('pixel.ttf');
  img = loadImage('ol.png'); // Замени URL на своё изображение
  drawImg = loadImage('styl.png'); // Замени URL на изображение для рисования
  form = loadImage('form.png');
 strzalka= loadImage('st.png');
}

function setup() {
  textFont(font);
  textSize(40);
  createCanvas(1920, 1080);
  background(212,163,115);
  textAlign(CENTER, CENTER);
    text('Fill the form', 1920 /2 , 200);
   translate(1920/2 - 300, 1080 / 2 - 300);
  image(form,50,10);
  image(img, 90, 430); 
  
}

function draw() {
  
    translate(1920/2 - 300, 1080 / 2 - 300);
  if (canDraw && mouseIsPressed) {
    image(drawImg, mouseY-ty - drawImg.width / 2, mouseX-tx - drawImg.height / 2);
    t++;
   }
   
   if(t>100){
    image(strzalka, 1500 - 1920 / 2 + 300, 800 - 1080 /2 + 300);
  }
 

}


function mousePressed() {
    
  // Проверяем, находится ли клик внутри изображения
  if (mouseX-tx > 90 && mouseX-tx < 90 + img.width && mouseY-ty > 430 && mouseY-ty < 430 + img.height && clickCount == 0) {
    clickCount++;
      noStroke(); // Убираем обводку
      fill(212,163,115); // Цвет прямоугольника для закрашивания (тот же, что и фон)
      rect(90, 430, img.width, img.height);
   
  } else if(clickCount =>1){
    
    clickCount++;
  }
if (clickCount >= 2) {
    canDraw = true; // Разрешаем рисовать после второго клика
  }
if (t>100 && mouseX > 1500 && mouseX < 1500 + strzalka.width && mouseY  > 800 && mouseY < 800 + strzalka.height){
window.open(' https://aszulcc.github.io/swps/','_self');
}

}
