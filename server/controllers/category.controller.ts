import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import Category from "../models/category.model";
import Items from "../models/item.model";

exports.category_list = asyncHandler(async (req, res, next) => {
  const categories = await Category.find().sort({ title: 1 });

  res.render("", {
    categories: categories,
  });
});

exports.category_delete = asyncHandler(async (req, res, next) => {
  const categoryTodelete = await Category.findById(req.params.id);
  res.render("delete", {
    categoryTodelete: categoryTodelete,
  });
});

exports.category_delete_post = asyncHandler(async (req, res, next) => {

});
