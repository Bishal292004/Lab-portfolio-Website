const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");
const historyEl = document.getElementById("history");
const modeToggle = document.getElementById("modeToggle");
const modeLabel = document.getElementById("modeLabel");
const scientificPanel = document.getElementById("scientificPanel");

let expression = "";
let lastResult = null;
let justCalculated = false;
let scientificMode = false;

const displaySymbols = {
  "*": "×",
  "/": "÷",
  "-": "−"
};

function displayExpression(value) {
  return value.replaceAll("*", "×").replaceAll("/", "÷").replaceAll("-", "−");
}

function updateDisplay() {
  expressionEl.textContent = expression ? displayExpression(expression) : "0";
  resultEl.textContent = lastResult !== null ? formatNumber(lastResult) : "0";
}

function formatNumber(value) {
  if (!Number.isFinite(value)) return "Error";
  const rounded = Number.parseFloat(Number(value).toPrecision(12));
  return String(rounded);
}

function clearAll() {
  expression = "";
  lastResult = null;
  justCalculated = false;
  historyEl.textContent = "";
  updateDisplay();
}

function appendNumber(value) {
  if (justCalculated) {
    expression = "";
    lastResult = null;
    historyEl.textContent = "";
    justCalculated = false;
  }

  expression += value;
  updateDisplay();
}

function appendDecimal() {
  if (justCalculated) {
    expression = "";
    lastResult = null;
    historyEl.textContent = "";
    justCalculated = false;
  }

  const current = expression.split(/[+\-*/^()]/).pop();

  if (current.includes(".")) return;

  if (!current || /[+\-*/^(]$/.test(expression)) {
    expression += "0.";
  } else {
    expression += ".";
  }

  updateDisplay();
}

function appendOperator(operator) {
  if (!expression && lastResult !== null) {
    expression = String(lastResult);
  }

  if (!expression) {
    if (operator === "-") expression = "-";
    updateDisplay();
    return;
  }

  justCalculated = false;
  lastResult = null;

  if (/[+\-*/^]$/.test(expression)) {
    expression = expression.slice(0, -1) + operator;
  } else {
    expression += operator;
  }

  updateDisplay();
}

function backspace() {
  if (justCalculated) {
    expression = "";
    lastResult = null;
    justCalculated = false;
    historyEl.textContent = "";
  } else {
    expression = expression.slice(0, -1);
  }

  updateDisplay();
}

function insertConstant(value) {
  if (justCalculated) {
    expression = "";
    lastResult = null;
    historyEl.textContent = "";
    justCalculated = false;
  }

  const needsMultiply = expression && /[\d.)]$/.test(expression);
  expression += (needsMultiply ? "*" : "") + value;
  updateDisplay();
}

function insertFunction(name) {
  if (justCalculated && lastResult !== null) {
    expression = String(lastResult);
    lastResult = null;
    justCalculated = false;
  }

  const functions = {
    sin: "sin(",
    cos: "cos(",
    tan: "tan(",
    log: "log(",
    ln: "ln(",
    sqrt: "sqrt("
  };

  const value = functions[name];
  if (!value) return;

  const needsMultiply = expression && /[\d.)]$/.test(expression);
  expression += (needsMultiply ? "*" : "") + value;
  updateDisplay();
}

function square() {
  if (!expression && lastResult !== null) expression = String(lastResult);
  if (!expression) return;

  lastResult = null;
  justCalculated = false;
  expression += "^2";
  updateDisplay();
}

function power() {
  if (!expression && lastResult !== null) expression = String(lastResult);
  if (!expression) return;

  appendOperator("^");
}

function toggleSign() {
  if (!expression && lastResult !== null) {
    expression = String(-lastResult);
    lastResult = null;
  } else if (expression) {
    expression = expression.startsWith("-(") && expression.endsWith(")")
      ? expression.slice(2, -1)
      : `-(${expression})`;
  } else {
    expression = "-";
  }

  justCalculated = false;
  updateDisplay();
}

function percent() {
  if (!expression && lastResult !== null) {
    expression = String(lastResult / 100);
    lastResult = null;
  } else if (expression) {
    expression = `(${expression})/100`;
    lastResult = null;
  }

  justCalculated = false;
  updateDisplay();
}

function calculate() {
  if (!expression) return;

  let finalExpression = expression;

  // Remove an unfinished trailing operator.
  while (/[+\-*/^]$/.test(finalExpression)) {
    finalExpression = finalExpression.slice(0, -1);
  }

  if (!finalExpression) return;

  // Scientific functions insert "(" automatically. If the user has not
  // typed a closing ")", close all unmatched parentheses before evaluating.
  finalExpression = autoCloseParentheses(finalExpression);

  try {
    const value = evaluateExpression(finalExpression);

    if (!Number.isFinite(value)) throw new Error("Invalid result");

    historyEl.textContent = `${displayExpression(finalExpression)} =`;
    lastResult = value;
    expression = String(value);
    justCalculated = true;
    resultEl.textContent = formatNumber(value);
    expressionEl.textContent = displayExpression(finalExpression);
  } catch {
    historyEl.textContent = "Invalid expression";
    lastResult = null;
    resultEl.textContent = "Error";
  }
}

function autoCloseParentheses(value) {
  let balance = 0;

  for (const char of value) {
    if (char === "(") balance++;
    if (char === ")") balance--;
  }

  if (balance < 0) throw new Error("Unbalanced parentheses");

  return value + ")".repeat(balance);
}

/*
  The calculator creates a restricted mathematical expression first.
  Only numbers, operators, parentheses, constants and known functions
  are allowed to reach Function().
*/
function evaluateExpression(input) {
  if (!/^[0-9+\-*/^().,\sA-Za-z]+$/.test(input)) {
    throw new Error("Invalid characters");
  }

  const allowedIdentifiers = ["sin", "cos", "tan", "log", "ln", "sqrt", "PI", "E"];
  const identifiers = input.match(/[A-Za-z]+/g) || [];

  if (identifiers.some(id => !allowedIdentifiers.includes(id))) {
    throw new Error("Unknown function");
  }

  const sanitized = input.replace(/\^/g, "**");

  const fn = Function(
    "sin", "cos", "tan", "log", "ln", "sqrt", "PI", "E",
    `"use strict"; return (${sanitized});`
  );

  const toRadians = degrees => degrees * Math.PI / 180;

  return fn(
    value => Math.sin(toRadians(value)),
    value => Math.cos(toRadians(value)),
    value => Math.tan(toRadians(value)),
    value => Math.log10(value),
    value => Math.log(value),
    value => Math.sqrt(value),
    Math.PI,
    Math.E
  );
}

function handleAction(button) {
  const action = button.dataset.action;
  const value = button.dataset.value;

  switch (action) {
    case "number":
      appendNumber(value);
      break;
    case "decimal":
      appendDecimal();
      break;
    case "operator":
      appendOperator(value);
      break;
    case "clear":
      clearAll();
      break;
    case "backspace":
      backspace();
      break;
    case "percent":
      percent();
      break;
    case "sign":
      toggleSign();
      break;
    case "equals":
      calculate();
      break;
    case "constant":
      insertConstant(value);
      break;
    case "function":
      insertFunction(value);
      break;
    case "square":
      square();
      break;
    case "power":
      power();
      break;
  }
}

document.querySelectorAll(".key").forEach(button => {
  button.addEventListener("click", () => handleAction(button));
});

modeToggle.addEventListener("click", () => {
  scientificMode = !scientificMode;
  scientificPanel.hidden = !scientificMode;
  modeToggle.setAttribute("aria-pressed", String(scientificMode));
  modeLabel.textContent = scientificMode ? "Scientific mode" : "Standard mode";
  modeToggle.querySelector("span:last-child").textContent =
    scientificMode ? "Standard" : "Scientific";
});

document.addEventListener("keydown", event => {
  const key = event.key;

  if (/^\d$/.test(key)) appendNumber(key);
  else if (key === ".") appendDecimal();
  else if (["+", "-", "*", "/", "^"].includes(key)) appendOperator(key);
  else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") backspace();
  else if (key === "Escape" || key.toLowerCase() === "c") clearAll();
  else if (key === "%") percent();
});

updateDisplay();
