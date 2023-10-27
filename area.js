const option = document.querySelector(".option select");
const square = document.querySelector(".square");
const rectangle = document.querySelector(".rectangle");
const triangle = document.querySelector(".triangle");
const circle = document.querySelector(".circle");
const answer = document.querySelector(".answer");
const Button = document.querySelector(".button");
const squareInput = document.getElementById("square");
const areaText = document.getElementById("areaText");

// answer function
const answerFun = function () {
  answer.classList.remove("hidden");
};
// area function
const areaCal = function (area, shape) {
  areaText.textContent = `The area of a ${shape} is ${area} square metres`;
};

option.addEventListener("change", function () {
  const selectedvalue = option.value;

  // Area square
  if (selectedvalue === "square") {
    {
      triangle.classList.add("hidden");
      rectangle.classList.add("hidden");
      circle.classList.add("hidden");
    }
    square.classList.remove("hidden");

    Button.addEventListener("click", function () {
      const length = Number(squareInput.value);
      const area = length * length;

      areaText.textContent = `The area of a square is ${area} square metres`;
      answerFun();
    });
  }
  //Rectangle
  else if (selectedvalue === "rectangle") {
    {
      square.classList.add("hidden");
      circle.classList.add("hidden");
      triangle.classList.add("hidden");
    }

    rectangle.classList.remove("hidden");
    Button.addEventListener("click", function () {
      const lengthInput = document.getElementById("recLength").value;
      const breathInput = document.getElementById("recBreadth").value;
      let shape = "rectangle";
      const area = Number(lengthInput) * Number(breathInput);
      areaCal(area, shape);
      answerFun();
    });
  } else if (selectedvalue === "triangle") {
    {
      square.classList.add("hidden");
      rectangle.classList.add("hidden");
      circle.classList.add("hidden");
    }
    triangle.classList.remove("hidden");
    Button.addEventListener("click", function () {
      const baseInput = document.getElementById("baseInput").value;
      const heightInput = document.getElementById("heightInput").value;
      const shape = "triangle";
      const area = 0.5 * Number(baseInput) * Number(heightInput);
      areaCal(area, shape);
      answerFun();
    });
  } else if (selectedvalue === "circle") {
    {
      square.classList.add("hidden");
      rectangle.classList.add("hidden");
      triangle.classList.add("hidden");
    }
    circle.classList.remove("hidden");
    Button.addEventListener("click", function () {
      const radiusInput = document.getElementById("radiusInput").value;
      const shape = "circle";
      const pi = 3.14;
      const area = pi * Number(radiusInput) ** 2;
      areaCal(area, shape);
      answerFun();
    });
  } else {
    {
      square.classList.add("hidden");
      rectangle.classList.add("hidden");
      triangle.classList.add("hidden");
      circle.classList.add("hidden");
    }
  }
});
