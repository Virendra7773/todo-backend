const Board = require("../models/Board");

// CREATE board
exports.createBoard = async (req, res) => {
  try {
    const { title, userId } = req.body;

    if (!title || !userId) {
      return res.status(400).json({ message: "Title and userId required" });
    }

    const board = await Board.create({ title, userId });
    res.status(201).json(board);
  } catch (err) {
    console.error("CREATE BOARD ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// GET boards for user
exports.getBoards = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "userId required" });
    }

    const boards = await Board.find({ userId });
    res.json(boards);
  } catch (err) {
    console.error("GET BOARD ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// DELETE board
exports.deleteBoard = async (req, res) => {
  try {
    const { userId } = req.query;

    const board = await Board.findOne({
      _id: req.params.id,
      userId,
    });

    if (!board) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await board.deleteOne();
    res.json({ message: "Board deleted" });
  } catch (err) {
    console.error("DELETE BOARD ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
