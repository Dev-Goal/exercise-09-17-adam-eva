class Apple {
  constructor(weightApple) {
    this.weightApple = weightApple;
  }
  getWeightApple() {
    return this.weightApple;
  }
  setWeightApple(weightApple) {
    this.weightApple = weightApple;
  }
  isEmpty() {
    if (this.weightApple <= 0) {
      return true;
    } else {
      return false;
    }
  }
  decreaseApple() {
    if (this.isEmpty()) {
      alert("Táo đã hết");
    } else {
      this.weightApple--;
    }
  }
}
class Human {
  constructor(name, gender, weightHuman) {
    this.name = name;
    this.gender = gender;
    this.weightHuman = weightHuman;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getWeightHuman() {
    return this.weightHuman;
  }
  setWeightHuman(weightHuman) {
    this.weightHuman = weightHuman;
  }
  isMale() {
    if (this.gender == 1) {
      return true;
    } else {
      return false;
    }
  }
  getGender() {
    if (this.isMale()) {
      return "Male";
    } else {
      return "Female";
    }
  }
  say(string) {
    console.log(string);
  }
  checkApple(apple) {
    return apple.isEmpty();
  }
  eat(apple) {
    if (apple.getWeightApple() > 0) {
      apple.decreaseApple();
      this.weightHuman++;
    } else {
      alert("Táo đã hết");
    }
  }
}
let adam = new Human("adam", 1, 67);
let eva = new Human("eva", 2, 55);
let apple_1 = new Apple(10);

adam.say("I am Adam");
eva.say("I am Eva");

while (apple_1.isEmpty() !== true) {
  document.write("Adam ăn táo" + "<br>");
  adam.eat(apple_1);
  document.write(
    "Số táo còn lại là: " + apple_1.getWeightApple() + " quả" + "<br>"
  );
  document.write(
    "Cân nặng của Adam là: " + adam.getWeightHuman() + " kg" + "<br>"
  );

  document.write("Eva ăn táo" + "<br>");
  eva.eat(apple_1);
  document.write(
    "Số táo còn lại là: " + apple_1.getWeightApple() + " quả" + "<br>"
  );
  document.write(
    "Cân nặng của Eva là: " + eva.getWeightHuman() + " kg" + "<br>"
  );

  document.write("<br>");
}
