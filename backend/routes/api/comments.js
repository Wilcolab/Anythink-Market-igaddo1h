/**
 * Express router for comment management endpoints
 * @type {Express.Router}
 */

/**
 * Retrieves all comments from the database
 * @route GET /
 * @returns {Promise<void>} JSON array of comment objects
 * @throws {Error} 500 - Failed to fetch comments
 */

/**
 * Deletes a comment by its ID
 * @route DELETE /:id
 * @param {string} req.params.id - The comment ID to delete
 * @returns {Promise<void>} JSON object with success message
 * @throws {Error} 404 - Comment not found
 * @throws {Error} 500 - Failed to delete comment
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

//add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  try {
    const commentId = req.params.id;
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

