"use client";

import RichTextEditor from "@/app/_UI/RichTextEditor";
import DescriptionEditor from "@/app/_UI/RichTextEditor";
import { useState } from "react";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null as File | null,
    date: "",
    category: "",
    description: ""
  });
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    date: "",
    category: "",
    dec: ""
  });

  // handle input change
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setFormData((prev) => ({
      ...prev,
      image: file || null,
    }));
  };

  // validation
  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.image) {
      newErrors.image = "Image is required";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form Submitted:", formData);

    // reset form
    setFormData({
      name: "",
      image: null,
      date: "",
      category: "",
      description: ""
    });
  };

  return (
    <div className="w-full flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-1/2">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Image
          </label>

          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
          />

          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="technology">Technology</option>
            <option value="education">Education</option>
            <option value="sports">Sports</option>
            <option value="entertainment">Entertainment</option>
          </select>

          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">

          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Write description..."
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.date && (
            <p className="text-red-500 text-sm">{errors.dec}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default BlogForm;