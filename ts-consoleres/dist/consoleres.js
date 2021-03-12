/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./consoleres.ts":
/*!***********************!*\
  !*** ./consoleres.ts ***!
  \***********************/
/***/ (() => {

eval("\r\n//change myName to uppercase\r\n// Change myName to uppercase\r\nvar myName = \"Joseph Oliver\";\r\nconsole.log(\"Name: \" + myName.toUpperCase());\r\nconsole.log(\"Career: Full Stack Web Developer\");\r\nconsole.log(\"Description: I like Soccer \");\r\nconsole.log(\"\");\r\nconsole.log(\"My Interests:\");\r\nconsole.log(\"* Coding\");\r\nconsole.log(\"* Soccer\");\r\nconsole.log(\"* Festivals\");\r\nconsole.log(\"* Outdoor activities\");\r\nconsole.log(\"\");\r\n// Function to display previous work experience\r\nfunction displayPosition(job_title, company_name, description) {\r\n    console.log(\"* \" + job_title + \" at \" + company_name + \" - \" + description);\r\n}\r\ndisplayPosition(\"Parts Advisor\", \" Voyles CDJR of Birmingham\", \"Responsible for delivering various auto parts to Wholesale and Retail customers in a timely manner\");\r\ndisplayPosition(\"Shipping and Receiving Assistant\", \"The University of Alabama\", \"Maintained and sorted logs of all incoming material such as: textbooks, clothing and general merchandise\");\r\ndisplayPosition(\"Car Detail Specialist\", \"Benchmark CDJR\", \"Verified  new vehicle shipments upon delivery\");\r\nconsole.log(\"\");\r\n// Display skills and if it's \"cool\" put \"BAM\" in front\r\nfunction displaySkill(skill_name, isCool) {\r\n    if (isCool) {\r\n        console.log(\"BAM: \" + skill_name);\r\n    }\r\n    else {\r\n        console.log(skill_name);\r\n    }\r\n}\r\nconsole.log(\"My Skills:\");\r\ndisplaySkill(\"Boostrap\", true);\r\ndisplaySkill(\"MySQl\", true);\r\ndisplaySkill(\"Analyst\", true);\r\ndisplaySkill(\"React\", false);\r\ndisplaySkill(\"C#\", false);\r\ndisplaySkill(\"Java\", false);\r\n\n\n//# sourceURL=webpack://ts-consoleres/./consoleres.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./consoleres.ts"]();
/******/ 	
/******/ })()
;