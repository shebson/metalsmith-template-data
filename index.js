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
                    throw ('Could not require data file ' + files[file].dataFile + ' for page ' + file);
                }
                _.extend(files[file], templateData);
            }
        }
    };
};
