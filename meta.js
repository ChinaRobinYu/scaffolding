module.exports = {

  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "proType": {
      "type": "list",
      "message": "Project Type",
      "choices": [
        {
          "name": "A mobile project based on Vue.",
          "value": "mobile",
          "short": "mobile"
        },
        {
          "name": "A admin project based on Vue & Element-UI.",
          "value": "admin",
          "short": "admin"
        }
      ]
    },
    "WXShare":{
        "when": "proType === 'mobile'",
        "type": "confirm",
        "message": "Import Weixin JS-SDK for your project?"
    },
    "Moblink":{
        "when": "proType === 'mobile'",
        "type": "confirm",
        "message": "Import Moblink.js for your project?"
    }
  },
  "filters": {
    "src/permission.js": "proType === 'admin'",
    "src/views/dashboard/*": "proType === 'admin'",
    "src/views/form/*": "proType === 'admin'",
    "src/views/layout/**/*": "proType === 'admin'",
    "src/views/login/*": "proType === 'admin'",
    "src/router/login.js": "proType === 'admin'",
    "src/components/**/*": "proType === 'admin'",
    "src/views/Index.vue": "proType === 'mobile'",
    "src/router/hello.js": "proType === 'mobile'"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/ztjy-fe/scaffolding"
};
