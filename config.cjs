const StyleDictionary = require('style-dictionary');
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

// {
// 	"source": ["src/lib/tokens/**/*.json"],
// 	"platforms": {
// 		"css": {
// 			"transforms": ["attribute/cti", "name/cti/kebab", "time/seconds", "content/icon", "size/rem"],
// 			"buildPath": "src/",
// 			"files": [
// 				{
// 					"destination": "_variables.css",
// 					"format": "css/variables"
// 				}
// 			]
// 		}
// 	}
// }

module.exports = {
  format: {
    // Adding a custom format to show how to get an alias's name.
    customFormat: function ({ dictionary, file, options }) {
      const { outputReferences } = options;

      // new option added to decide whether or not to output references
      return fileHeader({ file }) +
        `:theme { \n` +
        formattedVariables({ format: 'css', dictionary, outputReferences }) +
        '\n} ';
    }
  },

  source: ['src/lib/tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/',
      files: [{
        destination: '_variables.css',
        format: 'customFormat',
        options: {
          outputReferences: true, // new setting, if true will use variable references
        }
      }]
    }
  }
};