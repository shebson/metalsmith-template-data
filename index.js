var _ = require('underscore'),
    path = require('path');

module.exports = function () {
    "use strict";
    return function (files) {
        var file,
            templateData;
        for (file in files) {
            if (files.hasOwnProperty(file) && files[file].dataFile) {
                try {
                    templateData = require(path.join(process.cwd(), files[file].dataFile));
                } catch (e) {
                    switch (e.code) {
                    case "MODULE_NOT_FOUND":
                        throw ('Could not find data file ' + files[file].dataFile + '. Check file path ' + file);
                    default:
                        throw e;
                    }
                }
                _.extend(files[file], templateData);
            }
        }
    };
};
