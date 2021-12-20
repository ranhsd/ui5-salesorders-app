/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Master"
], function (opaTest) {
	"use strict";

	QUnit.module("Master List");

	opaTest("Should see the master list with all entries", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheMasterPage.iShouldSeeTheList().
			and.theListShouldHaveAllEntries();
	});

	opaTest("Search for the First object should deliver results that contain the firstObject in the name", function (Given, When, Then) {
		//Actions
		When.onTheMasterPage.iSearchForTheFirstObject();

		// Assertions
		Then.onTheMasterPage.theListShowsOnlyObjectsWithTheSearchStringInTheirTitle();
	});


	opaTest("Should display items again if the searchfield is emptied", function (Given, When, Then) {
		//Actions
		When.onTheMasterPage.iClearTheSearch();

		// Assertions
		Then.onTheMasterPage.theListShouldHaveAllEntries();

		// Cleanup
		Then.iTeardownMyApp();
	});

});