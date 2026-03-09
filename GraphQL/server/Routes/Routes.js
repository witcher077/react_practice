import express from "express";
import {
  getContact,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactControllers.js";

const router = express.Router();

router
  .route("/")
  .get(getContact)
  .post(createContact);

router
  .route("/:id")
  .put(updateContact)
  .delete(deleteContact);

export default router;