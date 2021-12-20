/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Master",
	"./pages/Detail",
	"./pages/App"
], function (opaTest) {
	"use strict";

	QUnit.module("Desktop navigation");

	opaTest("Should navigate on press", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Actions
		When.onTheMasterPage.iRememberTheIdOfListItemAtPosition(1).
			and.iPressOnTheObjectAtPosition(1);

		// Assertions
		Then.onTheDetailPage.iShouldSeeTheRememberedObject().
			and.iShouldSeeHeaderActionButtons();
	});


	opaTest("Detail Page Shows Object Details", function (Given, When, Then) {

		// Assertions
		Then.onTheDetailPage.iShouldSeeTheObjectLineItemsList();

		//Cleanup
		Then.iTeardownMyApp();
	});

});