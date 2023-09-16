function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function randomDecimal() {
  return randomNumber(16);
}

function randomHex() {
  return `${randomDecimal().toString(16)}${randomDecimal().toString(16)}${randomDecimal().toString(16)}${randomDecimal().toString(16)}${randomDecimal().toString(16)}${randomDecimal().toString(16)}`;
}

function randomHexColor() {
  return `#${randomHex()}`;
}

function generateBubble() {
  const radialGradiant = document.createElement('div');
  radialGradiant.style.borderRadius = "5000px";
  radialGradiant.style.boxShadow = ` 0 0 ${randomDecimal() + 1 * 100 }px ${randomDecimal() + 1 * 100}px rgb(${randomNumber(256)},${randomNumber(256)},${randomNumber(256)})`;
  radialGradiant.style.position = "fixed";
  radialGradiant.style.width = '0px';
  radialGradiant.style.height = '0px';
  radialGradiant.style.animationName = 'appear-from-left';
  radialGradiant.style.animationDuration = `${randomNumber(5) + 1}s`;
  radialGradiant.style.zIndex = -10;
  radialGradiant.style.left = `${randomNumber(101)}%`;
  radialGradiant.style.top = `${randomNumber(101)}%`;
  return radialGradiant;
}

function generateBubbles(quantity) {
  console.log("generating bubbles");
  for (var i=0; i < quantity; i++) {
    const bubble = generateBubble();
    document.body.appendChild(bubble);
  }
}

generateBubbles(5);