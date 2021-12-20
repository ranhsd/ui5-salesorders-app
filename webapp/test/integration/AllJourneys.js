// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 CustomerSet in the list
// * All 3 CustomerSet have at least one customerOrders

sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./MasterJourney",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "com.company.salesorderapp.salesorderapp.view.",
		autoWait: true
	});
});
