const express = require("express");
const router = express.Router();

const Board = require("../models/Board"); 

const {
  createBoard,
  getBoards,
  deleteBoard,
} = require("../controllers/boardController");

router.post("/", createBoard);
router.get("/", getBoards);
router.delete("/:id", deleteBoard);

// Update board title (only owner)
router.put("/:id", async (req, res) => {
  try {
    const { userId } = req.query;
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title required" });
    }

    const board = await Board.findOneAndUpdate(
      { _id: req.params.id, userId },
      { title },
      { new: true }
    );

    if (!board) {
      return res
        .status(404)
        .json({ message: "Board not found or not authorized" });
    }

    res.json(board);
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
