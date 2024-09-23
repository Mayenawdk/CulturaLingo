const mongoose = require('./connection');
const { Schema, model } = require('mongoose');

const foodSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        location: {
            type: String,
            required: true
        }
    }
);

const Food = model('Food', foodSchema);

module.exports = Food;

// referenced 21-MERN ACIVITY 9 MODELS SCHOOL.JS