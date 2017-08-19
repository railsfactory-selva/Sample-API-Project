// Compiled using marko@4.4.22 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    main_template = marko_loadTemplate(require.resolve("./main.marko")),
    error_template = marko_loadTemplate(require.resolve("./error.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    await_tag = marko_loadTag(require("marko/src/taglibs/async/await-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><link type=\"text/css\" media=\"screen\" rel=\"stylesheet\" href=\"myproject/css/main.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Hello World - Direct First Paint</h1>");

  await_tag({
      timeout: 2,
      _dataProvider: data.user_data,
      _name: "data.user_data",
      renderError: function renderBody(out) {
        include_tag({
            _target: error_template
          }, out);
      },
      renderBody: function renderBody(out, user_todo) {
        include_tag({
            _target: main_template,
            _arg: data = {
                todo: user_todo
              }
          }, out);
      }
    }, out);

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./main.marko",
      "./error.marko",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/taglibs/core/include-tag",
      "marko/src/taglibs/async/await-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
