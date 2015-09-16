/// <binding Clean='clean' />

var gulp = require("gulp"),
    project = require("./project.json");


var paths = {
    webroot: "./" + project.webroot + "/"
};

paths.js = paths.webroot + "js/**/*.js";

