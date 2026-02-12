// =========================
// Base Class
// =========================
class WritingInstrument {
  constructor(type, material, bodyColor, label) {
    this.type = type;
    this.material = material;
    this.bodyColor = bodyColor;
    this.label = label;
  }

  write() {
    console.log(`${this.label} writes in a generic way.`);
  }
}

// =========================
// Pen
// =========================
class Pen extends WritingInstrument {
  constructor(inkColor, inkLevel, material, bodyColor, label) {
    super("pen", material, bodyColor, label);
    this.inkColor = inkColor;
    this.inkLevel = inkLevel;
  }

  write() {
    console.log(`Writing with a ${this.inkColor} pen.`);
  }

  refill() {
    this.inkLevel = 100;
    console.log(`Refilled ${this.label}. Ink level now at 100%.`);
  }
}

// =========================
// CalligraphyPen (extends Pen)
// =========================
class CalligraphyPen extends Pen {
  erase() {
    console.log("Using white-out to erase calligraphy ink.");
  }
}

// =========================
// Pencil
// =========================
class Pencil extends WritingInstrument {
  constructor(graphiteThickness, material, bodyColor, label) {
    super("pencil", material, bodyColor, label);
    this.graphiteThickness = graphiteThickness;
  }

  write() {
    console.log("Writing with a pencil.");
  }

  erase() {
    console.log("Erasing pencil marks with an eraser.");
  }

  sharpen() {
    console.log("Sharpening pencil...");
  }
}

// =========================
// Eraser
// =========================
class Eraser extends WritingInstrument {
  constructor(size, material, bodyColor, label) {
    super("eraser", material, bodyColor, label);
    this.size = size;
  }

  erase() {
    console.log("Erasing marks using the eraser.");
  }
}

// =========================
// Polymorphism Demo
// =========================
function demoErase(tool) {
  tool.erase();
}

// Create objects
const pencil = new Pencil("2B", "wood", "yellow", "HB Pencil");
const eraser = new Eraser("small", "rubber", "pink", "Standard Eraser");
const fancyPen = new CalligraphyPen(
  "black",
  80,
  "plastic",
  "blue",
  "Calligraphy Pen"
);

// Run demo
console.log("--- Polymorphism Demo ---");
demoErase(pencil); // pencil erase behavior
demoErase(eraser); // eraser erase behavior
demoErase(fancyPen); // calligraphy pen erase behavior

console.log("\n--- Writing Demo ---");
pencil.write();
fancyPen.write();
