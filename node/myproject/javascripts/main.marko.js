// Compiled using marko@4.4.22 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_forEachWithStatusVar = require("marko/src/runtime/helper-forEachWithStatusVar"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out) {
  var data = input;

  out.w("<table border=\"1\"><tr><th>ID</th><th>Title</th><th>Description</th><th>completed</th></tr>");

  marko_forEachWithStatusVar(data.todo.response, function(response, loop) {
    out.w("<tr><td>" +
      marko_escapeXml(response.id) +
      "</td><td>" +
      marko_escapeXml(response.title) +
      "</td><td>" +
      marko_escapeXml(response.description) +
      "</td><td>" +
      marko_escapeXml(response.completed) +
      "</td></tr>");
  });

  out.w("</table>");
}

marko_template._ = render;

marko_template.meta = {};
