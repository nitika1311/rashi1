var dog,sadDog,happyDog;
var Feed, addFood;
var foodObj;
var database


function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("Happy.png");
}

function setup() {
 // database= firebase.database()
  createCanvas(1000,400);
  
  foodObj = new Food();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  Feed = createButton("Feed the dog");
  Feed.position(700,95);
  Feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);

  foodObj.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
  if(foodObj.getFoodStock()<=0)
  {
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }
  else
  {
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}


//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
