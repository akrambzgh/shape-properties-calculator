// towD and threeD animations
let towDInputList = document.querySelector(".towD-list")
const towDHeader = document.querySelector(".towD h1")
let threeDInputList = document.querySelector(".threeD-list")
const threeDHeader = document.querySelector(".threeD h1")

towDHeader.addEventListener("click", () => {
  towDInputList.classList.toggle("show")
  threeDInputList.classList.remove("show")
  const closeTowDButton = document.querySelector(".close-towD-button")
  closeTowDButton.addEventListener("click", () => {
    towDInputList.classList.remove("show")
  })
})

threeDHeader.addEventListener("click", () => {
  threeDInputList.classList.toggle("show")
  towDInputList.classList.remove("show")
  const closethreeDButton = document.querySelector(".close-threeD-button")
  closethreeDButton.addEventListener("click", () => {
    threeDInputList.classList.remove("show")
  })
})

// towD and threeD input box system
// towD input box system
// towD Elements
var {
  towDShapes,
  chosedTowDShape,
  towDInputBox,
  overlayer,
  towDShapeImage,
  closeTowDInputBoxButton,
  closeAlertButton,
  emptyInputsAlertBox,
  calcButton,
  emptyInputsAlertBoxErrorText,
  calculationResult,
  circumferenceText,
  areaText,
  closeCalculationResultButton,
} = towDElements()
function towDElements() {
  let towDInputBox = document.querySelector(".towD-input-box")
  let overlayer = document.querySelector(".overlayer")
  const closeTowDInputBoxButton = document.querySelector(".close-input-button")
  let chosedTowDShape = null
  let emptyInputsAlertBox = document.querySelector(".alert")
  let emptyInputsAlertBoxErrorText = document.querySelector(".error-text")
  let closeAlertButton = document.querySelector(".close-alert")
  const calcButton = document.querySelector(".submit")

  let towDShapeImage = document.querySelector(".towD-shape-image")
  let towDShapes = document.querySelectorAll(".towD-shape")
  let calculationResult = document.querySelector(".calculation-result")
  let circumferenceText = document.querySelector(".circumference")
  let areaText = document.querySelector(".area")
  let closeCalculationResultButton = document.querySelector(".close-result")
  return {
    towDInputBox,
    overlayer,
    closeTowDInputBoxButton,
    chosedTowDShape,
    emptyInputsAlertBox,
    emptyInputsAlertBoxErrorText,
    closeAlertButton,
    calcButton,
    towDShapeImage,
    towDShapes,
    calculationResult,
    circumferenceText,
    areaText,
    closeCalculationResultButton,
  }
}

var {
  sidesLenghtInput,
  diameterInput,
  triangleBaseLenghtInput,
  triangleHeightLenghtInput,
  widthInput,
  heightInput,
} = inputElements()
function inputElements() {
  let sidesLenghtInput = document.getElementById("sides-lenght")
  let diameterInput = document.getElementById("diameter")
  let triangleBaseLenghtInput = document.getElementById("base-lenght")
  let triangleHeightLenghtInput = document.getElementById("traingle-height")
  let widthInput = document.getElementById("width")
  let heightInput = document.getElementById("height")
  return {
    sidesLenghtInput,
    diameterInput,
    triangleBaseLenghtInput,
    triangleHeightLenghtInput,
    widthInput,
    heightInput,
  }
}

towDShapes.forEach((towDShape) => {
  towDShape.addEventListener("click", (e) => {
    chosedTowDShape = e.currentTarget.getAttribute("data-towD")
    towDInputBox.classList.add("show")
    overlayer.classList.add("show")
    towDShapeImage.src = `../../images/2D-shapes/${e.currentTarget.getAttribute(
      "data-towD"
    )}.svg`
    if (chosedTowDShape == "square") {
      squareFun()
    }
    if (chosedTowDShape === "circle") {
      circleFun()
    }
    if (chosedTowDShape === "triangle") {
      triangleFun()
    }
    if (chosedTowDShape === "rectangle") {
      rectangleFun()
    }
  })
})
closeTowDInputBoxButton.addEventListener("click", () => {
  let allInputs = document.querySelectorAll("input")
  towDInputBox.classList.remove("show")
  overlayer.classList.remove("show")
  chosedTowDShape = null
  circumferenceText.textContent = ""
  areaText.textContent = ""
  allInputs.forEach((input) => {
    let inputLabelsParent = document.querySelector(".towD-input-and-labels")
    inputLabelsParent.appendChild(input)
    document.querySelectorAll("label").forEach((label) => {
      inputLabelsParent.appendChild(label)
    })
  })
})

closeAlertButton.addEventListener("click", () => {
  emptyInputsAlertBox.classList.remove("show")
  overlayer.style.zIndex = "3"
})

closeCalculationResultButton.addEventListener("click", () => {
  calculationResult.classList.remove("show")
  circumferenceText.textContent = ""
  areaText.textContent = ""
  emptyInputsAlertBox.classList.remove("show")
  overlayer.style.zIndex = "3"
})

calcButton.addEventListener("click", () => {
  overlayer.style.zIndex = "5"
})

function squareFun() {
  let sidesLenghtLabel = document.querySelector(".sides-lenght")
  sidesLenghtInput.value = ""
  towDInputBox.append(sidesLenghtLabel)
  towDInputBox.append(sidesLenghtInput)

  calcButton.addEventListener("click", () => {
    if (
      sidesLenghtInput.value === "" ||
      isNaN(parseFloat(sidesLenghtInput.value)) === true ||
      parseFloat(sidesLenghtInput.value) == 0
    ) {
      emptyInputsAlertBox.classList.add("show")
      emptyInputsAlertBoxErrorText.textContent =
        "Sides Lenght Input Value Is Wrong"
      overlayer.style.zIndex = "5"
      sidesLenghtInput.value = ""
    } else {
      circumferenceText.textContent = `Square CircumferenceText: ${(
        parseFloat(sidesLenghtInput.value) * 4
      ).toFixed(2)}`
      areaText.textContent = `Square Area: ${(
        parseFloat(sidesLenghtInput.value) * parseFloat(sidesLenghtInput.value)
      ).toFixed(2)}`
      sidesLenghtInput.value = ""
      calculationResult.classList.add("show")
      emptyInputsAlertBox.classList.remove("show")
      closeCalculationResultButton.addEventListener("click", () => {
        sidesLenghtInput.value = ""
      })
    }
  })
}

function circleFun() {
  let diameterLabel = document.querySelector(".diameter")
  diameterInput.value = ""
  towDInputBox.append(diameterLabel)
  towDInputBox.append(diameterInput)
  calcButton.addEventListener("click", () => {
    if (
      diameterInput.value === "" ||
      isNaN(parseFloat(diameterInput.value)) == true ||
      parseFloat(diameterInput.value) === 0
    ) {
      emptyInputsAlertBox.classList.add("show")
      emptyInputsAlertBoxErrorText.textContent =
        "Diameter Input Value Is Wrong"
      overlayer.style.zIndex = "5"
      diameterInput.value = ""
    } else {
      circumferenceText.textContent = `Circle Circumference: ${(
        parseFloat(diameterInput.value) * 3.14159265
      ).toFixed(2)}`
      areaText.textContent = `Circle Area: ${(
        (parseFloat(diameterInput.value) / 2) *
        (parseFloat(diameterInput.value) / 2) *
        3.14159265
      ).toFixed(2)}`
      calculationResult.classList.add("show")
      emptyInputsAlertBox.classList.remove("show")
      closeCalculationResultButton.addEventListener("click", () => {
        diameterInput.value = ""
      })
    }
  })
}

function triangleFun() {
  let triangleBaseLenghtLabel = document.querySelector(".base-lenght")
  let triangleHeightLenghtLabel = document.querySelector(".traingle-height")
  triangleBaseLenghtInput.value = ""
  triangleHeightLenghtInput.value = ""
  towDInputBox.append(triangleBaseLenghtLabel)
  towDInputBox.append(triangleBaseLenghtInput)
  towDInputBox.append(triangleHeightLenghtLabel)
  towDInputBox.append(triangleHeightLenghtInput)
  calcButton.addEventListener("click", () => {
    if (
      triangleHeightLenghtInput.value === "" &&
      triangleBaseLenghtInput.value !== "" &&
      isNaN(parseFloat(triangleBaseLenghtInput.value)) === false &&
      parseFloat(triangleBaseLenghtInput.value) !== 0
    ) {
      circumferenceText.textContent = `Triangle CircumferenceText: ${
        parseFloat(triangleBaseLenghtInput.value) * 3
      }`
      calculationResult.classList.add("show")
      emptyInputsAlertBox.classList.remove("show")
    } else if (
      triangleHeightLenghtInput.value !== "" &&
      triangleBaseLenghtInput.value !== "" &&
      isNaN(parseFloat(triangleBaseLenghtInput.value)) === false &&
      isNaN(parseFloat(triangleHeightLenghtInput.value)) === false &&
      parseFloat(triangleBaseLenghtInput.value) !== 0 &&
      parseFloat(triangleHeightLenghtInput.value) !== 0
    ) {
      circumferenceText.textContent = `Triangle CircumferenceText: ${(
        parseFloat(triangleBaseLenghtInput.value) * 3
      ).toFixed(2)}`
      areaText.textContent = `Triangle Area: ${(
        (parseFloat(triangleBaseLenghtInput.value) *
          parseFloat(triangleHeightLenghtInput.value)) /
        2
      ).toFixed(2)}`
      calculationResult.classList.add("show")
      emptyInputsAlertBox.classList.remove("show")
      closeCalculationResultButton.addEventListener("click", () => {
        triangleBaseLenghtInput.value = ""
        triangleHeightLenghtInput.value = ""
      })
    } else {
      emptyInputsAlertBox.classList.add("show")
      emptyInputsAlertBoxErrorText.textContent =
        "Triangle Inputs Values are Wrong"
      overlayer.style.zIndex = "5"
      triangleBaseLenghtInput.value = ""
      triangleHeightLenghtInput.value = ""
    }
  })
}

function rectangleFun() {
  let widthLabel = document.querySelector(".width")
  let heightLabel = document.querySelector(".height")

  towDInputBox.append(widthLabel)
  towDInputBox.append(widthInput)
  towDInputBox.append(heightLabel)
  towDInputBox.append(heightInput)
  calcButton.addEventListener("click", () => {
    if (
      widthInput.value === "" ||
      heightInput.value === "" ||
      isNaN(parseFloat(widthInput.value)) == true ||
      isNaN(parseFloat(heightInput.value)) == true ||
      parseFloat(widthInput.value) === parseFloat(heightInput.value) ||
      parseFloat(widthInput.value) === 0 ||
      parseFloat(heightInput.value) === 0
    ) {
      emptyInputsAlertBox.classList.add("show")
      emptyInputsAlertBoxErrorText.textContent =
        "Rectangle Inputs Values are Wrong"
      overlayer.style.zIndex = "5"
      widthInput.value = ""
      heightInput.value = ""
    } else {
      circumferenceText.textContent = `Rectangle CircumferenceText: ${(
        (parseFloat(widthInput.value) + parseFloat(heightInput.value)) *
        2
      ).toFixed(2)}`
      areaText.textContent = `Rectangle Area: ${(
        parseFloat(widthInput.value) * parseFloat(heightInput.value)
      ).toFixed(2)}`
      calculationResult.classList.add("show")
      emptyInputsAlertBox.classList.remove("show")
      overlayer.style.zIndex = "5"

      closeCalculationResultButton.addEventListener("click", () => {
        widthInput.value = ""
        heightInput.value = ""
      })
    }
  })
}
