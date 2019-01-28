var Fhir = require('fhir').Fhir;
var fs = require('fs');


var fhir = new Fhir();
var encounter = JSON.parse(fs.readFileSync('encounter.json').toString());
var results = fhir.validate(encounter, { errorOnUnexpected: true });
console.log(JSON.stringify(results,null,2));
