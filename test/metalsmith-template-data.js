/*global describe*/
/*global it*/
var getTemplateData = require('..')(),
    should = require('should'),
    clone = require('clone');
describe('Template data Metalsmith plugin', function () {
    "use strict";
    it('should extend the file object with properties from the dataFile', function () {
        var files = {
            testFile: {
                dataFile: 'test/data/test-data.js'
            }
        };
        getTemplateData(files);
        files.testFile.testProperty.should.equal('fromDataFile');
    });
    it('should throw an error if a specified dataFile does not exist', function () {
        var files = {
            testFile: {
                dataFile: 'test/data/not-a-real-file.js'
            }
        };
        try {
            getTemplateData(files);
        } catch (e) {
            e.should.startWith('Could not find data file');
            return;
        }
        should.fail('No error thrown', 'Error thrown', 'Plugin did not throw an error');
    });
    it('should not modify the file object if no dataFile is specified', function () {
        var files = {
            testFile: {
                foo: 'bar'
            }
        }, snapshot = clone(files);
        getTemplateData(files);
        files.should.eql(snapshot);
    });
    it('should override values specified in YAML front matter with values from data file when they conflict', function () {
        var files = {
            testFile: {
                testProperty: "fromYAML",
                dataFile: 'test/data/test-data.js'
            }
        };
        getTemplateData(files);
        files.testFile.testProperty.should.equal('fromDataFile');
    });
});