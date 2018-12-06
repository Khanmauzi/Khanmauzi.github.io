(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"mainbody\">\n    <table style=\"padding-left: 10%;padding-top: 3%; padding-bottom: 3%;\">\n      <tr>\n        <td colspan=\"5\" style=\"color: rgb(10, 65, 167);font-size: 20px;vertical-align: top;font-weight: bolder;\">PERSONAL INFORMATION\n        <br>\n        <br>\n        <br>\n        <img src=\"../../assets/prof1_opt.png\" height=\"250\" width=\"202\">\n        </td>\n        <td style=\"padding-left:10%\">\n            <table>\n                <tr>\n                <th colspan=\"2\" style=\"text-align:left;font-size: 25px;\">Mojammil Khan</th>\n                </tr>\n                <br>\n                <tr>\n                  <td style=\"color: rgb(54, 116, 230);font-size: 20px\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"> </i> </td>\n                  <td style=\"font-size:20px;padding-left: 10%;font-weight: bold;\">Purab Mohal, Near nai masjid, Sonebhadra (UP), 231216, (India)</td>\n                </tr>\n                <br>\n                <tr>\n                  <td style=\"color: rgb(54, 116, 230);font-size: 20px\"><i class=\"fas fa-mobile-alt\"> </i> </td>\n                  <td style=\"font-size:20px;padding-left: 10%;font-weight: bold\">+91-9515536837</td>\n                </tr>\n                <br>\n                <tr>\n                  <td style=\"color: rgb(54, 116, 230);font-size: 20px\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"> </i> </td>\n                  <td style=\"text-align: left;padding-left: 10%;font-size: 20px;font-weight: bold;\">kmojammil@student.nitw.ac.in</td>\n                </tr>\n                <br>\n                <tr>\n                  <td style=\"color: rgb(54, 116, 230);font-size: 20px\"><i class=\"fa fa-male\" aria-hidden=\"true\"></i> </td>\n                  <td style=\"font-size:20px;padding-left: 10%;font-weight: bold\">Male</td>\n                </tr>\n                <br>\n                <!--><tr>\n                  <td style=\"color: rgb(54, 116, 230);font-size: 20px\"><i class=\"fa fa-birthday-cake\" aria-hidden=\"true\"></i> </td>\n                  <td style=\"font-size:20px;padding-left: 10%;font-weight: bold\">07/01/1995</td>\n                </tr><-->\n                <br>\n                <tr>\n                  <td style=\"color: rgb(54, 116, 230);font-size: 20px\"><i class=\"fa fa-flag\" aria-hidden=\"true\"></i> </td>\n                  <td style=\"font-size:20px;padding-left: 10%;font-weight: bold\">Indian</td>\n                </tr> \n              </table>\n        </td>\n      </tr>\n      <br>\n      <br>\n      <br>\n      <tr>\n          <td colspan=\"5\" style=\"color: rgb(10, 65, 167);font-size: 20px;vertical-align: top;font-weight: bolder;width: 50%;\">CAREER OBJECTIVE</td>\n          <td style=\"padding-left:10%;\">\n          <table>\n            <tr>\n              <td style=\"font-size:20px;padding-right: 10%;\">\n              <p>Seeking a position to utilize my skills and abilities in the Software Companies that offers professional growth while being resourceful, innovative and flexible so that I can achieve own and organizational objective.</p>\n              </td>\n            </tr>\n          </table>\n          </td>\n      </tr>\n    </table>\n  </div>\n  "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _technical_technical_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./technical/technical.component */ "./src/app/technical/technical.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/awards/awards.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'education', component: _education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"] },
    { path: '', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'Work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"] },
    { path: 'Projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'Technical', component: _technical_technical_component__WEBPACK_IMPORTED_MODULE_7__["TechnicalComponent"] },
    { path: 'Skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"] },
    { path: 'Awards', component: _awards_awards_component__WEBPACK_IMPORTED_MODULE_9__["AwardsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background-color: rgb(59, 89, 152);\r\n    padding: .013px 5px;\r\n};\r\n.iconclass {\r\n    size: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h1 style=\"text-align: center; color: white\">{{title}}</h1>\n</div>\n<div class=\"container\">\n    <table style=\"padding-left: 10%;width:90%\">\n        <tr style=\"color:white\">\n          <td><a class=\"menu\" routerLink=\"\" routerLinkActive=\"active\">About</a></td>\n          <td><a class=\"menu\" routerLink=\"/education\"  routerLinkActive=\"active\">Education</a></td>\n          <td><a class=\"menu\" routerLink=\"/Work\" routerLinkActive=\"active\">Work Experience</a></td>\n          <td><a class=\"menu\" routerLink=\"/Projects\" routerLinkActive=\"active\">Projects</a></td>\n          <td><a class=\"menu\" routerLink=\"/Technical\" routerLinkActive=\"active\">Technical-Skills</a></td>\n          <td><a class=\"menu\" routerLink=\"/Skills\" routerLinkActive=\"active\">Personal Skills</a></td>\n          <td><a class=\"menu\" routerLink=\"/Awards\" routerLinkActive=\"active\">Awards and Honours</a></td>\n        </tr>\n      </table>\n</div>\n<table style=\"padding-left:75%;\">\n    <tr>\n      <th colspan=\"2\"><h1 style=\"text-align:left;color:black;font-family:'Times New Roman', Times, serif\">Mojammil</h1></th>\n    </tr>\n    <tr>\n      <td style=\"color: rgb(54, 116, 230);font-size: 30px\"><i class=\"fas fa-mobile-alt\"> </i> </td>\n      <td style=\"text-align: left;padding-left: 10%;font-family:'Times New Roman', Times, serif;font-style: oblique;font-size: 20px;font-weight: bold;\">+91-9515536837</td>\n    </tr>\n    <tr>\n      <td style=\"color: rgb(54, 116, 230);font-size: 30px\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"> </i> </td>\n      <td style=\"text-align: left;padding-left: 10%;font-family: Verdana, Geneva, Tahoma, sans-serif;font-style: oblique;font-size: 15px;font-weight: bold;\"><a href=\"mailto:kmojammil@student.nitw.ac.in\" target=\"_top\">kmojammil@student.nitw.ac.in</a></td>\n    </tr>\n  </table>\n  <br>\n  <br>\n<router-outlet></router-outlet>\n<br>\n<br>\n<br>\n<div class=\"Bottom\">\n  <table style=\"padding-left: 75%; width:100%\">\n  <tr>\n    <td>\n    <!--a class=\"links\" onclick=\"window.open(this.href); return false;\" href=\"https://www.facebook.com/mojammil.khan.33\"><img src=\"../assets/fb.png\" width=\"35px\" height=\"40px\"></a-->\n    <a class=\"links\" onclick=\"window.open(this.href); return false;\" href=\"https://github.com/Khanmauzi\"><img src=\"../assets/github.svg\" width=\"50px\" height=\"40px\"></a>\n    <a class=\"links\" onclick=\"window.open(this.href); return false;\" href=\"https://www.linkedin.com/in/mojammil-khan-7a7a71127/\"><img src=\"../assets/lnkd.jpg\" width=\"50px\" height=\"40px\"></a>\n    <a class=\"links\" onclick=\"window.open(this.href); return false;\" href=\"https://www.instagram.com/mauzi.khan/?hl=en\"><img src=\"../assets/insta.jpg\" width=\"40px\" height=\"40px\"></a></td>\n  </tr>\n  </table>\n</div>\n\n\n "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Resume';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _technical_technical_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./technical/technical.component */ "./src/app/technical/technical.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/awards/awards.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                _technical_technical_component__WEBPACK_IMPORTED_MODULE_8__["TechnicalComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
                _awards_awards_component__WEBPACK_IMPORTED_MODULE_10__["AwardsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/awards/awards.component.css":
/*!*********************************************!*\
  !*** ./src/app/awards/awards.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/awards/awards.component.html":
/*!**********************************************!*\
  !*** ./src/app/awards/awards.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbody\">\n    <p style=\"padding-left: 10%;color: rgb(10, 65, 167);font-size: 20px;font-weight: bolder\">HONOURS AND AWARDS</p>  \n    <table style=\"padding-left: 10%;padding-bottom: 3%;width: 100%;\">\n        <tr>\n          <td colspan=\"5\" style=\"color: rgb(10, 65, 167);font-size: 20px;vertical-align: top;font-weight: bolder;width: 30%;\"></td>\n          <td style=\"padding-right: 10%\">\n          </td>\n          <td>\n            <table>\n              <tr>\n                <td style=\"text-align:left;font-size: 20px;color: black;\">\n                    <ul class=\"TickList\">\n                      <li>Participated in NPL conducted by NITW during Technozion-2015,\n                          got certificates and goodies by organizer.</li><br>\n                      <li>Participated in 24-hour Hackathon (2016), worked on one of\n                          the project in Django environment.</li><br>\n                      <li>Participated Code.Fun.Do conducted by Microsoft in 2016.</li><br>\n                      <li>Appreciated by Shree Akhilesh Yadav (Ex CM, Uttar Pradesh) for\n                          being the district topper in IIT JEE and Intermediate.</li><br>\n                      <li>Appreciated by (IAS Officer of Sonebhadra in 2015) for excellent\n                          performance in JEE 2015.</li><br>\n                      <li>Secured 94.0 % in 12th grade and Secured AIR 919 in IIT JEE MAINS\n                          in 2015, awarded merit certificate and trophy by CM of Uttar\n                          Pradesh.</li><br>\n                      <li>Secured AIR 5897 in JEE Advance 2015, and AIR 195 in UP\n                          Engineering exam 2015.</li><br>\n                      <li>Designed Logo for Network Processing team of VISA Inc. during\n                          internship and got selected in top 8 design globally.</li><br>    \n                    </ul>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <br>\n        \n      </table>\n    </div>"

/***/ }),

/***/ "./src/app/awards/awards.component.ts":
/*!********************************************!*\
  !*** ./src/app/awards/awards.component.ts ***!
  \********************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AwardsComponent = /** @class */ (function () {
    function AwardsComponent() {
    }
    AwardsComponent.prototype.ngOnInit = function () {
    };
    AwardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-awards',
            template: __webpack_require__(/*! ./awards.component.html */ "./src/app/awards/awards.component.html"),
            styles: [__webpack_require__(/*! ./awards.component.css */ "./src/app/awards/awards.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AwardsComponent);
    return AwardsComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbody\">\n    <p style=\"padding-left: 10%;color: #0a41a7;font-size: 20px;font-weight: bolder\">EDUCATIONAL QUALIFICATION</p> \n    <table style=\"padding-left: 10%; padding-bottom: 3%;width: 100%;\">\n      <tr>\n        <td colspan=\"5\" style=\"color: rgb(10, 65, 167);font-size: 20px;vertical-align: top;font-weight: bolder;\">2015-PRESENT</td>\n        <td>\n            <table>\n                <tr>\n                  <td style=\"text-align:left;font-size: 20px;color: rgb(89, 142, 241)\">Bachelor Of Technology In Computer Science</td>\n                </tr>\n                \n                <tr>\n                  <td style=\"text-align:left;font-size: 20px;color: black;font-weight: bold;\">National Institute of Technology Warangal</td>\n                </tr>\n                <tr>\n                  <td style=\"text-align:left;font-size: 20px;color: black;font-weight: bold;\">-C.G.P.A: 7.3</td>\n                </tr>\n              </table>\n        </td>\n      </tr>\n      <br>\n      <br>\n      <br>\n      <tr>\n        <td colspan=\"5\" style=\"color: rgb(77, 87, 107);font-size: 20px;vertical-align: top;font-weight: bolder;\">2015</td>\n        <td>\n          <table>\n            <tr>\n              <td style=\"text-align:left;font-size: 20px;color: rgb(89, 142, 241)\">Intermediate</td>\n            </tr>\n            <tr>\n              <td style=\"text-align:left;font-size: 20px;color: black;font-weight: bold;\">Secured 94%</td>\n            </tr>\n          </table>\n          </td>\n      </tr>\n      <br>\n      <br>\n      <br>\n      <tr>\n        <td colspan=\"5\" style=\"color: rgb(10, 65, 167);font-size: 20px;vertical-align: top;font-weight: bolder;\">2011-2012</td>\n        <td>\n            <table>\n                <tr>\n                  <td style=\"text-align:left;font-size: 20px;color: rgb(89, 142, 241)\">All India Secondary School Examination (10th Grade)</td>\n                </tr>\n                \n                <tr>\n                  <td style=\"text-align:left;font-size: 20px;color: black;font-weight: bold;\">St. Joseph Convent High School ROBERTSGANJ</td>\n                </tr>\n                <tr>\n                  <td style=\"text-align:left;font-size: 20px;color: black;font-weight: bold;\">-C.G.P.A: 9.8</td>\n                </tr>\n              </table>\n        </td>\n      </tr>\n   </table>\n  </div>"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbody\">\n    <p style=\"padding-left: 10%;color: rgb(10, 65, 167);font-size: 20px;font-weight: bolder\">PROJECTS</p>  \n    <table style=\"padding-left: 10%;padding-bottom: 3%;width: 100%;\">\n        <tr>\n          <td colspan=\"5\" style=\"color: rgb(10, 65, 167);font-size: 20px;vertical-align: top;font-weight: bolder;width: 20%;\"></td>\n          <td style=\"padding-right: 10%\">\n          </td>\n          <td>\n            <table>\n              <tr>\n                <td style=\"text-align:left;font-size: 20px;color: black;\">\n                  <ul class=\"TickList\">\n                    <li>Currently started working on block-chain technology as my Finale\n                        Year Project.\n                    </li>\n                  </ul>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <br>\n        <br>\n        <br>\n      </table>\n    </div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbody\">\n    <p style=\"padding-left: 10%;color: rgb(10, 65, 167);font-size: 20px;font-weight: bolder\">PERSONAL SKILLS</p>  \n    <table style=\"padding-left: 10%;padding-bottom: 3%;width: 100%;\">\n        <tr>\n          <td colspan=\"5\" style=\"color: rgb(10, 65, 167);font-size: 20px;vertical-align: top;font-weight: bolder;width: 30%;\"></td>\n          <td style=\"padding-right: 10%\">\n          </td>\n          <td>\n            <table>\n              <tr>\n                <td style=\"text-align:left;font-size: 20px;color: black;\">\n                  <div id=\"list\">\n                    <ul class=\"TickList\">\n                      <li>Hard working, efficient, proficient.</li><br>\n                      <li>Reliable and responsible work ethic.</li><br>\n                      <li>Comprehensive problem-solving abilities.</li><br>\n                      <li>Willingness to learn new things.</li><br>\n                      <li>Analyse and adapts to new technology and change for the better\n                          growth of organisation.</li><br>\n                    </ul>\n                    </div>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <br>\n        \n      </table>\n    </div>"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/technical/technical.component.css":
/*!***************************************************!*\
  !*** ./src/app/technical/technical.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/technical/technical.component.html":
/*!****************************************************!*\
  !*** ./src/app/technical/technical.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbody\">\n    <p style=\"padding-left: 10%;color: rgb(10, 65, 167);font-size: 20px;font-weight: bolder\">Technical skills & Languages</p>  \n    <table style=\"padding-left: 10%;padding-bottom: 3%;width: 100%;\">\n        <tr>\n          <td colspan=\"5\" style=\"color: rgb(10, 65, 167);font-size: 20px;vertical-align: top;font-weight: bolder;width: 30%;\"></td>\n          <td style=\"padding-right: 10%\">\n          </td>\n          <td>\n            <table>\n              <tr>\n                <td style=\"text-align:left;font-size: 20px;color: black;\">\n                  <div id=\"list\">\n                    <ul class=\"TickList\">\n                      <li>C, C++, Java, SQL, JavaScript, Basic System Programming, Operating System,\n                          Computer Networking, Angular, Nodejs.</li><br>\n                      \n                    </ul>\n                    </div>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <br>\n        \n      </table>\n    </div>"

/***/ }),

/***/ "./src/app/technical/technical.component.ts":
/*!**************************************************!*\
  !*** ./src/app/technical/technical.component.ts ***!
  \**************************************************/
/*! exports provided: TechnicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalComponent", function() { return TechnicalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnicalComponent = /** @class */ (function () {
    function TechnicalComponent() {
    }
    TechnicalComponent.prototype.ngOnInit = function () {
    };
    TechnicalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-technical',
            template: __webpack_require__(/*! ./technical.component.html */ "./src/app/technical/technical.component.html"),
            styles: [__webpack_require__(/*! ./technical.component.css */ "./src/app/technical/technical.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TechnicalComponent);
    return TechnicalComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work/work.component.html":
/*!******************************************!*\
  !*** ./src/app/work/work.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainbody\">\n  <p style=\"padding-left: 10%;color: rgb(10, 65, 167);font-size: 25px;font-weight: bolder\">Work Experience</p>  \n  <table style=\"padding-left: 10%;padding-bottom: 3%;width: 100%;\">\n      <tr>\n        <td colspan=\"5\" style=\"color: rgb(10, 65, 167);font-size: 20px;vertical-align: top;font-weight: bolder;width: 40%;\">May 2018- July 2018</td>\n        <td style=\"padding-right: 10%\">\n            <table>\n                <tr>\n                  <td style=\"text-align:left;font-size: 20px;color: rgb(89, 142, 241)\">2 Months Summer intern at VISA INC. Bangalore.</td>\n                </tr>\n                \n                <tr>\n                  <td style=\"text-align:left;font-size: 20px;color: black;\">Developed an application named Test Analytics and Reporting tool.\n                      Which involved technical learnings of different tools like Angular,\n                      Nodejs, Jenkins, bitbucket, API call etc. The application also used ng\n                      tools of angular to represent data in graphical and more meaningful\n                      form.</td>\n                </tr>\n              </table>\n        </td>\n      </tr>\n      <br>\n      <br>\n      <br>\n    </table>\n    <div style=\"padding-left: 25%\"><embed src=\"../../assets/Visa.pdf\" width=\"670px\" height=\"970px\" /></div>\n  </div>"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\aufenbach\resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map