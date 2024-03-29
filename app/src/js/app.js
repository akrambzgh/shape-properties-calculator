// towD and threeD animations
let towDInputList = document.querySelector(".towD-list");
const towDHeader = document.querySelector(".towD h1");
let threeDInputList = document.querySelector(".threeD-list");
const threeDHeader = document.querySelector(".threeD h1");

towDHeader.addEventListener("click", () => {
  towDInputList.classList.toggle("show");
  threeDInputList.classList.remove("show");
  const closeTowDButton = document.querySelector(".close-towD-button");
  closeTowDButton.addEventListener("click", () => {
    towDInputList.classList.remove("show");
  });
});

threeDHeader.addEventListener("click", () => {
  threeDInputList.classList.toggle("show");
  towDInputList.classList.remove("show");
  const closethreeDButton = document.querySelector(".close-threeD-button");
  closethreeDButton.addEventListener("click", () => {
    threeDInputList.classList.remove("show");
  });
});

// towD and threeD input box system
let overlayer = document.querySelector(".overlayer");
const closeInputBoxButton = document.querySelectorAll(".close-input-button");
let chosedShape = null;
let emptyInputsAlertBox = document.querySelector(".alert");
let emptyInputsAlertBoxErrorText = document.querySelector(".error-text");
let closeAlertButton = document.querySelector(".close-alert");
let calculationResult = document.querySelector(".calculation-result");
let circumferenceText = document.querySelector(".circumference");
let areaText = document.querySelector(".area");
let volumeText = document.querySelector(".volume");
let densityText = document.querySelector(".density");
let closeCalculationResultButton = document.querySelector(".close-result");
let allInputs = document.querySelectorAll(".input");
const towDCalcButton = document.querySelector(".towD-input-box .submit");
const threeDCalcButton = document.querySelector(".threeD-input-box .submit");
// towD Elements
var { towDShapes, towDInputBox, towDShapeImage } = towDElements();

function towDElements() {
  let towDInputBox = document.querySelector(".towD-input-box");
  let towDShapeImage = document.querySelector(".towD-shape-image");
  let towDShapes = document.querySelectorAll(".towD-shape");
  return {
    towDShapes,
    towDInputBox,
    towDShapeImage,
  };
}

// threeD Elements
var { threeDInputBox, threeDShapeImage, threeDShapes } = threeDElements();

function threeDElements() {
  let threeDInputBox = document.querySelector(".threeD-input-box");
  let threeDShapeImage = document.querySelector(".threeD-shape-image");
  let threeDShapes = document.querySelectorAll(".threeD-shape");
  return {
    threeDInputBox,
    threeDShapeImage,
    threeDShapes,
  };
}
// All Input Elements
var {
  squaresidesLenghtInput,
  circleDiameterInput,
  triangleBaseLenghtInput,
  triangleHeightLenghtInput,
  rectangleWidthInput,
  rectangleHeightInput,
  cubeSidesLenghtInput,
  cubeMassInput,
  sphereDiameterLenghtInput,
  sphereMassInput,
  pyramidHeightInput,
  pyramidBaseLenghtInput,
  pyramidMassInput,
  cuboidBaseLenghtInput,
  cuboidBaseWidhtInput,
  cuboidheightInput,
  cuboidMassInput,
} = inputElements();

function inputElements() {
  let squaresidesLenghtInput = document.getElementById("sides-lenght");
  let circleDiameterInput = document.getElementById("diameter");
  let triangleBaseLenghtInput = document.getElementById("base-lenght");
  let triangleHeightLenghtInput = document.getElementById("traingle-height");
  let rectangleWidthInput = document.getElementById("width");
  let rectangleHeightInput = document.getElementById("height");
  let cubeSidesLenghtInput = document.getElementById("cube-sides-lenght");
  let cubeMassInput = document.getElementById("cube-mass");
  let sphereDiameterLenghtInput = document.getElementById("shpere-diameter");
  let sphereMassInput = document.getElementById("sphere-mass");
  let pyramidHeightInput = document.getElementById("pyramid-height");
  let pyramidBaseLenghtInput = document.getElementById("pyramid-base-lenght");
  let pyramidMassInput = document.getElementById("pyramid-mass");

  let cuboidBaseLenghtInput = document.getElementById("cuboid-base-lenght");
  let cuboidBaseWidhtInput = document.getElementById("cuboid-base-width");
  let cuboidheightInput = document.getElementById("cuboid-height");
  let cuboidMassInput = document.getElementById("cuboid-mass");
  return {
    squaresidesLenghtInput,
    circleDiameterInput,
    triangleBaseLenghtInput,
    triangleHeightLenghtInput,
    rectangleWidthInput,
    rectangleHeightInput,
    cubeSidesLenghtInput,
    cubeMassInput,
    sphereDiameterLenghtInput,
    sphereMassInput,
    pyramidHeightInput,
    pyramidBaseLenghtInput,
    pyramidMassInput,
    cuboidBaseLenghtInput,
    cuboidBaseWidhtInput,
    cuboidheightInput,
    cuboidMassInput,
  };
}

// Shapes List Items Events
let allShapes = document.querySelectorAll(".shape-item");
allShapes.forEach((shape) => {
  shape.addEventListener("click", (e) => {
    chosedShape = e.currentTarget.getAttribute("data-shape");
    overlayer.classList.add("show");
    if (shape.classList.contains("threeD-shape")) {
      threeDInputBox.classList.add("show");
      threeDShapeImage.src = `../../images/3D-shapes/${e.currentTarget.getAttribute(
        "data-shape"
      )}.svg`;
    } else if (shape.classList.contains("towD-shape")) {
      towDInputBox.classList.add("show");
      towDShapeImage.src = `../../images/2D-shapes/${e.currentTarget.getAttribute(
        "data-shape"
      )}.svg`;
    }
    if (chosedShape == "square") {
      squareFun();
    }
    if (chosedShape === "circle") {
      circleFun();
    }
    if (chosedShape === "triangle") {
      triangleFun();
    }
    if (chosedShape === "rectangle") {
      rectangleFun();
    }
    if (chosedShape === "cube") {
      cubeFun();
    }
    if (chosedShape === "sphere") {
      sphereFun();
    }
    if (chosedShape === "pyramid") {
      pyramidFun();
    }
    if (chosedShape === "cuboid") {
      cuboidFun();
    }
  });
});

// 2D Shapes Functions
function squareFun() {
  squaresidesLenghtInput.value = "";
  towDInputBox.append(squaresidesLenghtInput.parentElement);

  towDCalcButton.addEventListener("click", () => {
    if (
      squaresidesLenghtInput.value === "" ||
      isNaN(parseFloat(squaresidesLenghtInput.value)) === true ||
      parseFloat(squaresidesLenghtInput.value) == 0
    ) {
      emptyInputsAlertBox.classList.add("show");
      calculationResult.classList.remove("show");
      emptyInputsAlertBoxErrorText.textContent =
        "Sides Lenght Input Value Is Wrong";
      overlayer.style.zIndex = "5";
      squaresidesLenghtInput.value = "";
    } else {
      circumferenceText.textContent = `Square Circumference: ${(
        parseFloat(squaresidesLenghtInput.value) * 4
      ).toFixed(3)}m`;
      areaText.textContent = `Square Area: ${(
        parseFloat(squaresidesLenghtInput.value) *
        parseFloat(squaresidesLenghtInput.value)
      ).toFixed(3)}m²`;
      calculationResult.classList.add("show");
      emptyInputsAlertBox.classList.remove("show");
    }
  });
}

function circleFun() {
  circleDiameterInput.value = "";
  towDInputBox.append(circleDiameterInput.parentElement);
  towDCalcButton.addEventListener("click", () => {
    if (
      circleDiameterInput.value === "" ||
      isNaN(parseFloat(circleDiameterInput.value)) == true ||
      parseFloat(circleDiameterInput.value) === 0
    ) {
      emptyInputsAlertBox.classList.add("show");
      calculationResult.classList.remove("show");

      emptyInputsAlertBoxErrorText.textContent =
        "Diameter Input Value Is Wrong";
      overlayer.style.zIndex = "5";
      circleDiameterInput.value = "";
    } else {
      circumferenceText.textContent = `Circle Circumference: ${(
        parseFloat(circleDiameterInput.value) * 3.14159265
      ).toFixed(3)}m`;
      areaText.textContent = `Circle Area: ${(
        (parseFloat(circleDiameterInput.value) / 2) *
        (parseFloat(circleDiameterInput.value) / 2) *
        3.14159265
      ).toFixed(3)}m²`;
      calculationResult.classList.add("show");
      emptyInputsAlertBox.classList.remove("show");
    }
  });
}
function triangleFun() {
  triangleBaseLenghtInput.value = "";
  triangleHeightLenghtInput.value = "";
  towDInputBox.append(triangleBaseLenghtInput.parentElement);
  triangleBaseLenghtInput.parentElement.innerHTML += idk;
  towDInputBox.append(triangleHeightLenghtInput.parentElement);
  triangleHeightLenghtInput.parentElement.innerHTML += idk;

  towDCalcButton.addEventListener("click", () => {
    if (
      triangleHeightLenghtInput.value === "" &&
      triangleBaseLenghtInput.value !== "" &&
      isNaN(parseFloat(triangleBaseLenghtInput.value)) === false &&
      parseFloat(triangleBaseLenghtInput.value) !== 0
    ) {
      circumferenceText.textContent = `Triangle Circumference: ${
        parseFloat(triangleBaseLenghtInput.value) * 3
      }m`;
      areaText.textContent = "";
      calculationResult.classList.add("show");
      emptyInputsAlertBox.classList.remove("show");
    } else if (
      triangleHeightLenghtInput.value !== "" &&
      triangleBaseLenghtInput.value !== "" &&
      isNaN(parseFloat(triangleBaseLenghtInput.value)) === false &&
      isNaN(parseFloat(triangleHeightLenghtInput.value)) === false &&
      parseFloat(triangleBaseLenghtInput.value) !== 0 &&
      parseFloat(triangleHeightLenghtInput.value) !== 0
    ) {
      circumferenceText.textContent = `Triangle Circumference: ${(
        parseFloat(triangleBaseLenghtInput.value) * 3
      ).toFixed(3)}m`;
      areaText.textContent = `Triangle Area: ${(
        (parseFloat(triangleBaseLenghtInput.value) *
          parseFloat(triangleHeightLenghtInput.value)) /
        2
      ).toFixed(3)}m²`;
      calculationResult.classList.add("show");
      emptyInputsAlertBox.classList.remove("show");
    } else {
      emptyInputsAlertBox.classList.add("show");
      calculationResult.classList.remove("show");

      emptyInputsAlertBoxErrorText.textContent =
        "Triangle Inputs Values are Wrong";
      overlayer.style.zIndex = "5";
      triangleBaseLenghtInput.value = "";
      triangleHeightLenghtInput.value = "";
    }
  });
}

function rectangleFun() {
  rectangleWidthInput.value = "";
  rectangleHeightInput.value = "";
  towDInputBox.append(rectangleWidthInput.parentElement);
  towDInputBox.append(rectangleHeightInput.parentElement);
  towDCalcButton.addEventListener("click", () => {
    if (
      rectangleWidthInput.value === "" ||
      rectangleHeightInput.value === "" ||
      isNaN(parseFloat(rectangleWidthInput.value)) == true ||
      isNaN(parseFloat(rectangleHeightInput.value)) == true ||
      parseFloat(rectangleWidthInput.value) ===
        parseFloat(rectangleHeightInput.value) ||
      parseFloat(rectangleWidthInput.value) === 0 ||
      parseFloat(rectangleHeightInput.value) === 0
    ) {
      emptyInputsAlertBox.classList.add("show");
      calculationResult.classList.remove("show");

      emptyInputsAlertBoxErrorText.textContent =
        "Rectangle Inputs Values are Wrong";
      overlayer.style.zIndex = "5";
    } else {
      circumferenceText.textContent = `Rectangle Circumference: ${(
        (parseFloat(rectangleWidthInput.value) +
          parseFloat(rectangleHeightInput.value)) *
        2
      ).toFixed(3)}m`;
      areaText.textContent = `Rectangle Area: ${(
        parseFloat(rectangleWidthInput.value) *
        parseFloat(rectangleHeightInput.value)
      ).toFixed(3)}m²`;
      calculationResult.classList.add("show");
      emptyInputsAlertBox.classList.remove("show");
      overlayer.style.zIndex = "5";
    }
  });
}

// 3D Shapes Functions
function cubeFun() {
  cubeSidesLenghtInput.value = "";
  cubeMassInput.value = "";
  threeDInputBox.append(cubeSidesLenghtInput.parentElement);
  threeDInputBox.append(cubeMassInput.parentElement);

  threeDCalcButton.addEventListener("click", () => {
    if (
      cubeSidesLenghtInput.value === "" ||
      cubeMassInput.value === "" ||
      isNaN(parseFloat(cubeSidesLenghtInput.value)) == true ||
      isNaN(parseFloat(cubeMassInput.value)) == true ||
      parseFloat(cubeSidesLenghtInput.value) === 0 ||
      parseFloat(cubeMassInput.value) === 0
    ) {
      emptyInputsAlertBox.classList.add("show");
      calculationResult.classList.remove("show");
      emptyInputsAlertBoxErrorText.textContent =
        "Sides Lenght Input Value Is Wrong";
      overlayer.style.zIndex = "5";
      cubeSidesLenghtInput.value = "";
      cubeMassInput.value = "";
    } else {
      const cubeArea =
        parseFloat(cubeSidesLenghtInput.value) *
        parseFloat(cubeSidesLenghtInput.value) *
        6;
      areaText.textContent = `Cube Area: ${cubeArea.toFixed(3)}m²`;
      const cubeVolume =
        parseFloat(cubeSidesLenghtInput.value) *
        parseFloat(cubeSidesLenghtInput.value) *
        parseFloat(cubeSidesLenghtInput.value);
      volumeText.textContent = `Cube Volume: ${cubeVolume.toFixed(3)}m³`;
      const cubeDensity = parseFloat(cubeMassInput.value) / cubeVolume;
      densityText.textContent = `Cube Density: ${cubeDensity.toFixed(3)}kg/m³`;
      cubeSidesLenghtInput.value = "";
      cubeMassInput.value = "";
      calculationResult.classList.add("show");
      emptyInputsAlertBox.classList.remove("show");
    }
  });
}

function sphereFun() {
  sphereDiameterLenghtInput.value = "";
  sphereMassInput.value = "";
  threeDInputBox.append(sphereDiameterLenghtInput.parentElement);
  threeDInputBox.append(sphereMassInput.parentElement);
  threeDCalcButton.addEventListener("click", () => {
    if (
      sphereDiameterLenghtInput.value === "" ||
      sphereMassInput.value === "" ||
      isNaN(parseFloat(sphereDiameterLenghtInput.value)) == true ||
      isNaN(parseFloat(sphereMassInput.value)) == true ||
      parseFloat(sphereDiameterLenghtInput.value) === 0 ||
      parseFloat(sphereMassInput.value) === 0
    ) {
      emptyInputsAlertBox.classList.add("show");
      emptyInputsAlertBoxErrorText.textContent =
        "Sphere Input Values Are Wrong";
      overlayer.style.zIndex = "5";
      sphereDiameterLenghtInput.value = "";
      sphereMassInput.value = "";
    } else {
      let diameterLenghtSquare = Math.pow(
        parseFloat(sphereDiameterLenghtInput.value) / 2,
        2
      );
      let sphereArea = 4 * 3.14159265 * diameterLenghtSquare;
      areaText.textContent = `Sphere Area: ${sphereArea.toFixed(3)}m²`;
      let sphereDiameterCubed = Math.pow(
        parseFloat(sphereDiameterLenghtInput.value) / 2,
        3
      );
      let sphereVolume = (4 / 3) * 3.14159265 * sphereDiameterCubed;
      volumeText.textContent = `Sphere Volume: ${sphereVolume.toFixed(3)}m³`;
      let sphereDensity = parseFloat(sphereMassInput.value) / sphereVolume;
      densityText.textContent = `Sphere Density: ${sphereDensity.toFixed(
        3
      )}kg/m³`;
      calculationResult.classList.add("show");
      emptyInputsAlertBox.classList.remove("show");
    }
  });
}

function pyramidFun() {
  pyramidBaseLenghtInput.value = "";
  pyramidHeightInput.value = "";
  pyramidMassInput.value = "";
  threeDInputBox.append(pyramidBaseLenghtInput.parentElement);
  threeDInputBox.append(pyramidHeightInput.parentElement);
  threeDInputBox.append(pyramidMassInput.parentElement);
  threeDCalcButton.addEventListener("click", () => {
    if (
      pyramidBaseLenghtInput.value === "" ||
      pyramidHeightInput.value === "" ||
      pyramidMassInput.value === "" ||
      isNaN(parseFloat(pyramidBaseLenghtInput.value)) !== false ||
      isNaN(parseFloat(pyramidHeightInput.value)) !== false ||
      isNaN(parseFloat(pyramidMassInput.value)) !== false ||
      parseFloat(pyramidBaseLenghtInput.value) <= 0 ||
      parseFloat(pyramidHeightInput.value) <= 0 ||
      parseFloat(pyramidMassInput.value) <= 0
    ) {
      emptyInputsAlertBoxErrorText.textContent =
        "Pyramid Inputs Values are Wrong";
      overlayer.style.zIndex = "5";
      pyramidBaseLenghtInput.value = "";
      pyramidHeightInput.value = "";
      pyramidMassInput.value = "";
      emptyInputsAlertBox.classList.add("show");
      calculationResult.classList.remove("show");
    } else {
      let pyramidLenghtSquare = Math.pow(
        parseFloat(pyramidBaseLenghtInput.value) / 2,
        2
      );
      let pyramidLheightSquare = Math.pow(
        parseFloat(pyramidHeightInput.value),
        2
      );
      let pyramidBaseArea = Math.pow(
        parseFloat(pyramidBaseLenghtInput.value),
        2
      );
      let sideLenght = Math.sqrt(pyramidLenghtSquare + pyramidLheightSquare);
      let traingleArea =
        (parseFloat(pyramidBaseLenghtInput.value) * sideLenght) / 2;
      let pyramidArea = pyramidBaseArea + traingleArea * 4;
      calculationResult.classList.add("show");
      emptyInputsAlertBox.classList.remove("show");
      areaText.textContent = `Pyramid Area: ${pyramidArea.toFixed(3)}m²`;
      let pyramidVolume =
        (1 / 3) *
        Math.pow(parseFloat(pyramidBaseLenghtInput.value), 2) *
        parseFloat(pyramidHeightInput.value);
      volumeText.textContent = `Pyramid Volume: ${pyramidVolume.toFixed(3)}m³`;
      let pyramidDensity = parseFloat(pyramidMassInput.value) / pyramidVolume;
      densityText.textContent = `Pyramid Density: ${pyramidDensity.toFixed(
        3
      )}m²`;
    }
  });
}

function cuboidFun() {
  cuboidBaseLenghtInput.value = "";
  cuboidBaseWidhtInput.value = "";
  cuboidheightInput.value = "";
  cuboidMassInput.value = "";
  threeDInputBox.append(cuboidBaseLenghtInput.parentElement);
  threeDInputBox.append(cuboidBaseWidhtInput.parentElement);
  threeDInputBox.append(cuboidheightInput.parentElement);
  threeDInputBox.append(cuboidMassInput.parentElement);
  threeDCalcButton.addEventListener("click", () => {
    if (
      cuboidBaseLenghtInput.value === "" ||
      cuboidBaseWidhtInput.value === "" ||
      cuboidheightInput.value === "" ||
      cuboidMassInput.value === "" ||
      isNaN(parseFloat(cuboidBaseLenghtInput.value)) == true ||
      isNaN(parseFloat(cuboidBaseWidhtInput.value)) == true ||
      isNaN(parseFloat(cuboidheightInput.value)) == true ||
      isNaN(parseFloat(cuboidMassInput.value)) == true ||
      parseFloat(cuboidBaseLenghtInput.value) ===
        parseFloat(cuboidBaseWidhtInput.value) ||
      parseFloat(cuboidBaseLenghtInput.value) === 0 ||
      parseFloat(cuboidBaseWidhtInput.value) === 0 ||
      parseFloat(cuboidheightInput.value) === 0 ||
      parseFloat(cuboidMassInput.value) === 0
    ) {
      emptyInputsAlertBox.classList.add("show");
      calculationResult.classList.remove("show");
      emptyInputsAlertBoxErrorText.textContent =
        "Cuboid Inputs Values are Wrong";
      overlayer.style.zIndex = "5";
    } else {
      const cuboidBaseArea =
        parseFloat(cuboidBaseLenghtInput.value) *
        parseFloat(cuboidBaseWidhtInput.value);
      const cuboidFrontArea =
        parseFloat(cuboidBaseWidhtInput.value) *
        parseFloat(cuboidheightInput.value);
      const cuboidSidesArea =
        parseFloat(cuboidBaseLenghtInput.value) *
        parseFloat(cuboidheightInput.value);
      const cuboidArea =
        cuboidBaseArea * 2 + cuboidFrontArea * 2 + cuboidSidesArea * 2;

      const cuboidVolume =
        parseFloat(cuboidBaseLenghtInput.value) *
        parseFloat(cuboidBaseWidhtInput.value) *
        parseFloat(cuboidheightInput.value);

      const cuboidDensity = parseFloat(cuboidMassInput.value) / cuboidVolume;
      areaText.textContent = `Cuboid Area: ${cuboidArea.toFixed(3)}m`;
      volumeText.textContent = `Cuboid Volume: ${cuboidVolume.toFixed(3)}m²`;
      densityText.textContent = `Cuboid Density: ${cuboidDensity.toFixed(3)}m²`;
      calculationResult.classList.add("show");
      emptyInputsAlertBox.classList.remove("show");
      overlayer.style.zIndex = "5";
    }
  });
}
// Buttons Events
closeInputBoxButton.forEach((closeInputBoxButtonItem) => {
  closeInputBoxButtonItem.addEventListener("click", () => {
    closeInputBoxButtonItem.parentElement.classList.remove("show");
    overlayer.classList.remove("show");
    chosedShape = null;
    circumferenceText.textContent = "";
    areaText.textContent = "";
    volumeText.textContent = "";
    densityText.textContent = "";
    allInputs.forEach((input) => {
      let inputsParent = document.querySelector(".inputs");
      inputsParent.appendChild(input);
      input.value = "";
    });
  });
});

closeAlertButton.addEventListener("click", () => {
  emptyInputsAlertBox.classList.remove("show");
  overlayer.style.zIndex = "3";
});

closeCalculationResultButton.addEventListener("click", () => {
  calculationResult.classList.remove("show");
  emptyInputsAlertBox.classList.remove("show");
  circumferenceText.textContent = "";
  areaText.textContent = "";
  volumeText.textContent = "";
  densityText.textContent = "";
  overlayer.style.zIndex = "3";
  allInputs.forEach((input) => {
    input.value = "";
  });
});

function calcFun() {
  overlayer.style.zIndex = "5";
  allInputs.forEach((input) => {
    input.value = "";
  });
}
towDCalcButton.addEventListener("click", calcFun);
threeDCalcButton.addEventListener("click", calcFun);
