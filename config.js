System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "ts",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  packages: {
    "src": {
      "defaultExtension": "ts"
    }
  },
  map: {
    "phaser": "github:photonstorm/phaser@2.5.0",
    "ts": "github:frankwallis/plugin-typescript@4.0.16",
    "typescript": "npm:typescript@1.8.10",
    "github:frankwallis/plugin-typescript@4.0.16": {
      "typescript": "npm:typescript@1.8.10"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    }
  }
});
