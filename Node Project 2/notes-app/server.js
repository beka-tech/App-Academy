const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

// Absolute path to notes.json using __dirname
const notesFilePath = path.join(__dirname, "data", "notes.json");

// 📌 Helper function to read notes
function readNotes() {
  const data = fs.readFileSync(notesFilePath, "utf8");
  return JSON.parse(data);
}

// 📌 Helper function to write notes
function writeNotes(notes) {
  fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
}

// 🟢 Get all notes
app.get("/notes", (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

// 🔵 Add a new note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  const notes = readNotes();
  const newNote = {
    id: Date.now(),
    title,
    content,
  };

  notes.push(newNote);
  writeNotes(notes);

  res.status(201).json(newNote);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
