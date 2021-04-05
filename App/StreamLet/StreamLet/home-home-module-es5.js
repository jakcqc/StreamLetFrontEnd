(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n  <div id = \"titleBackground\">\n    <ion-title slot = \"start\">\n    <img id = \"logo\" src = \"assets/nameV3.png\">\n      \n    </ion-title>\n    </div>\n    <span id =\"endToolbar\" slot = \"end\">\n\n     <span class = \"buttons\" (click)= \"routePage('user-login')\">Account</span>\n      </span>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" id = \"bodyMain\" >\n<div id = \"scrollMain\" >\n<div id = \"contentMain\">\n  <div id = \"cardMain\">\n    \n    <div id = \"movieImageCard\">\n      <div id = \"stickyDiv\">\n      <span class = \"buttons\" (click) = \"resetNorm()\">X</span>\n      <!-- <div id = \"watchBarBorder\">The Shining</div> -->\n      </div>\n      <img id = \"imageOnCard\" src = \"\">\n    </div>\n    \n    \n      <div id = \"iconHolder\">\n        <img id = \"netflix\" src = \"assets/icon/netflixIcon.jpeg\" (click) = \"streamingServiceRoute(0)\">\n        <img id = \"hulu\" src = \"assets/icon/huluIcon.png\" (click) = \"streamingServiceRoute(1)\">\n        <img id = \"primeVideo\" src = \"assets/icon/primeVideoIcon.png\" (click) = \"streamingServiceRoute(2)\">\n      </div>\n      <div id = \"watchBar\" >\n        <h2>The Shining</h2>\n      <p>A family heads to an isolated \n        hotel for the winter where a \n        sinister presence influences \n        the father into violence, \n        while his psychic son sees \n        horrific forebodings from both \n        past and future.\n      </p>\n      <h3><span>Director(s): </span> <span class = \"writerStarDirector\">Stanley Kubrick</span></h3>\n      <h3><span>Writers(s): </span> <span class = \"writerStarDirector\">Stephen King, Stanley Kubrick, Diane Johnson</span></h3>\n      <h3><span>Stars: </span> <span class = \"writerStarDirector\">Jack Nicholson, Shelley Duvall, Danny Lloyd</span></h3>\n      \n    </div>\n  </div>\n</div>\n\n<div id = \"contentWrapper\" (click) = \"resetNorm()\"></div>\n  <ion-grid>\n    <ion-row>\n        <div class=\"container\">\n            <span class = \"genreTitle\">Reccomended</span>\n            \n            <ion-slides scrollbar = \"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n\t\t          \n              <ion-slide *ngFor=\"let card of cards\" (click)=\"movieInfo(card)\">\n\t\t\t          <ion-col>\n\t\t\t\t          \n\t\t\t\t          <ion-img class=\"movieImage\" src = \"https://www.godisinthetvzine.co.uk/wp-content/uploads/2020/06/IMG_20200602_120716_501.jpg\"></ion-img>\n\t\t\t          <ion-label>{{ card }}</ion-label>\n                </ion-col>\n\t\t          </ion-slide>\n\t           </ion-slides>\n        </div>\n        <div class = \"bHolder\">\n          <div class =\"buttons\" (click)=\"slides.slidePrev()\" > < </div>\n            <div class =\"buttons\" (click)=\"slides.slideNext()\" > > </div>\n        </div>\n    </ion-row>\n<ion-row>\n        <div class=\"container\">\n            <span class = \"genreTitle\" >Continue Watching</span>\n            <ion-slides scrollbar = \"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides1>\n\t\t          <ion-slide *ngFor=\"let card of cards\" (click)=\"movieInfo(card)\" >\n\t\t\t          <ion-col>\n\t\t\t\t          \n\t\t\t\t          <ion-img class=\"movieImage\" src=\"https://i.pinimg.com/564x/fc/95/ca/fc95ca81ca34fba083e38fa6406c87be.jpg\"></ion-img>\n\t\t\t          <ion-label> {{ card }}</ion-label>\n                </ion-col>\n          \n\t\t          </ion-slide>\n\t           </ion-slides>\n        </div>\n        <div class = \"bHolder\">\n          <div class =\"buttons\" (click)=\"slides1.slidePrev()\" > < </div>\n            <div class =\"buttons\" (click)=\"slides1.slideNext()\" > > </div>\n        </div>\n    </ion-row>\n    <ion-row>\n        <div class=\"container\">\n            <span class = \"genreTitle\">New Releases</span>\n            <ion-slides scrollbar = \"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides2>\n\t\t          <ion-slide *ngFor=\"let card of cards\" (click)=\"movieInfo(card)\">\n\t\t\t          <ion-col>\n\t\t\t\t          \n\t\t\t\t          <ion-img class=\"movieImage\"  src=\"https://www.indiewire.com/wp-content/uploads/2019/12/JokerPoster1200_5ca3c435318d42.29270548.jpg?w=800\"></ion-img>\n\t\t\t          <ion-label> {{ card }}</ion-label>\n                </ion-col>\n\t\t          </ion-slide>\n\t           </ion-slides>\n        </div>\n        <div class = \"bHolder\">\n          <div class =\"buttons\" (click)=\"slides2.slidePrev()\" > < </div>\n            <div class =\"buttons\" (click)=\"slides2.slideNext()\" > > </div>\n        </div>\n    </ion-row>\n    <ion-row>\n        <div class=\"container\">\n            <span class = \"genreTitle\" >Comedies</span>\n            <ion-slides  scrollbar = \"true\" [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\" #slides3>\n\t\t          <ion-slide id = \"comedies\" *ngFor=\"let card of [0,1,2,3,4]\" (click)=\"movieInfo(card)\">\n\t\t\t          <ion-col>\n\t\t\t\t          \n\t\t\t\t          <ion-img class=\"movieImage\"  src=\"https://upload.wikimedia.org/wikipedia/en/1/19/Fat_albert_poster.jpg\"></ion-img>\n\t\t\t          <ion-label> {{ card }}</ion-label>\n                </ion-col>\n\t\t          </ion-slide>\n\t           </ion-slides>\n        </div>\n        <div class = \"bHolder\">\n          <div class =\"buttons\" (click)=\"slides3.slidePrev()\" > < </div>\n            <div class =\"buttons\" (click)=\"slides3.slideNext()\" > > </div>\n        </div>\n    </ion-row>\n    <ion-row>\n      <ion-col size = \"6\">\n        StreamLet 2021\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/rgbaster/dist/rgbaster.umd.js":
    /*!****************************************************!*\
      !*** ./node_modules/rgbaster/dist/rgbaster.umd.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRgbasterDistRgbasterUmdJs(module, exports, __webpack_require__) {
      !function (e, t) {
        true ? module.exports = t() : undefined;
      }(this, function () {
        var e = function e(_e, t) {
          void 0 === t && (t = 1);
          var r = new Image();
          return _e.startsWith("data") || (r.crossOrigin = "Anonymous"), new Promise(function (n, o) {
            r.onload = function () {
              var e = r.width * t,
                  o = r.height * t,
                  i = function (e, t) {
                var r = document.createElement("canvas");
                return r.setAttribute("width", e), r.setAttribute("height", t), r.getContext("2d");
              }(e, o);

              i.drawImage(r, 0, 0, e, o);
              var a = i.getImageData(0, 0, e, o);
              n(a.data);
            };

            var i = function i() {
              return o(new Error("An error occurred attempting to load image"));
            };

            r.onerror = i, r.onabort = i, r.src = _e;
          });
        },
            t = {
          ignore: [],
          scale: 1
        };

        return function (r, n) {
          void 0 === n && (n = t);

          try {
            var o = (n = Object.assign({}, t, n)).ignore,
                i = n.scale;
            return (i > 1 || i <= 0) && console.warn("You set scale to " + i + ", which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)"), Promise.resolve(e(r, i)).then(function (e) {
              return function (e, t) {
                for (var r = {}, n = 0; n < e.length; n += 4) {
                  var o = e[n + 3];

                  if (0 !== o) {
                    var i = Array.from(e.subarray(n, n + 3));

                    if (-1 === i.indexOf(void 0)) {
                      var a = o && 255 !== o ? "rgba(" + i.concat([o]).join(",") + ")" : "rgb(" + i.join(",") + ")";
                      -1 === t.indexOf(a) && (r[a] ? r[a].count++ : r[a] = {
                        color: a,
                        count: 1
                      });
                    }
                  }
                }

                return Object.values(r).sort(function (e, t) {
                  return t.count - e.count;
                });
              }(e, o);
            });
          } catch (e) {
            return Promise.reject(e);
          }
        };
      }); //# sourceMappingURL=rgbaster.umd.js.map

      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  width: 100%;\n  text-align: left;\n}\n\nion-grid {\n  margin-left: 2%;\n  margin-top: 2%;\n}\n\nion-row {\n  margin-bottom: 30px;\n}\n\n.buttons {\n  display: inline-block;\n  border-radius: 1px;\n  height: auto;\n  width: auto;\n  margin-right: 20px;\n  background-color: none;\n  color: #eeeeee;\n  transition: 0.2s;\n  padding: 10px;\n  box-shadow: 1px 1px 2px black;\n  border: 2px solid #f3f3f3;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\ndiv.buttons {\n  border-radius: 6px;\n  font-size: x-large;\n  transition: 0.4s;\n  box-shadow: 3px 3px #f7f7f7;\n}\n\ndiv.buttons:hover {\n  border-radius: 6px;\n  box-shadow: 2px 1px;\n}\n\n.buttons:hover {\n  border-radius: 0px;\n  box-shadow: 3px 3px #f7f7f7;\n  color: white;\n}\n\n#contentWrapper {\n  position: fixed;\n  display: none;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-color: #0f0f0f;\n  opacity: 0.65;\n  z-index: 5;\n}\n\n#contentMain {\n  display: block;\n  position: fixed;\n  top: 10%;\n  height: 0%;\n  width: auto;\n  background-color: black;\n  opacity: 1;\n  z-index: 10;\n  border-radius: 10px;\n  transition: 0.4s;\n  overflow: scroll;\n}\n\n#cardMain {\n  display: none;\n  border: 3px solid black;\n  border-radius: 4px;\n}\n\n.movieImage {\n  border: 1px solid black;\n  transition: 0.2s;\n}\n\n.movieImage:hover {\n  border-color: white;\n}\n\n#movieImageCard {\n  position: relative;\n  width: auto;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n#movieImageCard .buttons {\n  position: absolute;\n  top: 8px;\n  left: 5px;\n  background-color: black;\n  opacity: 0.6;\n  z-index: 4;\n  padding: 5px;\n}\n\n#movieImageCard img {\n  display: block;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n#iconHolder {\n  width: 100%;\n  padding-top: 5px;\n  background-color: #0e0e0e;\n}\n\n#iconHolder img {\n  display: inline-block;\n  height: 80px;\n  width: 33.33%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: 0.5s;\n  border: 3px solid #111111;\n}\n\n#iconHolder img:hover {\n  border-color: #ececec;\n}\n\nion-slide {\n  height: auto;\n  width: auto;\n  transition: height 0.5s;\n  text-align: center;\n  margin-top: 10px;\n  padding: 1px;\n}\n\nion-label {\n  display: inline-block;\n  width: 100px;\n}\n\n.container span {\n  font-size: 30px;\n  font-weight: bold;\n  text-decoration: underline;\n  text-decoration-thickness: 5px;\n  line-height: 26pt;\n}\n\n#logo {\n  height: 60px;\n}\n\n#titleBackground {\n  display: inline-block;\n}\n\n#watchBar {\n  display: inline-block;\n  width: 100%;\n  text-align: left;\n  padding: 8px;\n  background-color: #0a0a0a;\n  border-top: 5px solid #f7e547;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n#watchBar h2 {\n  display: inline-block;\n  width: 100%;\n  height: auto;\n  background-color: black;\n  text-align: center;\n  font-size: 40px;\n  font-weight: 700;\n  text-shadow: 1px 1px 1px #f3f3f3;\n  border-top: 5px solid black;\n  font-family: \"Open Sans\";\n}\n\n#watchBar p {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n}\n\n#watchBar h3 {\n  font-family: \"Open Sans\";\n  font-weight: 800;\n}\n\n.writerStarDirector {\n  font-size: 15px;\n  font-weight: 400;\n}\n\n#stickyDiv {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\nion-slides {\n  margin-bottom: 10px;\n  --bullet-background: red\t;\n  --bullet-background-active: green;\n  --progress-bar-background: yellow;\n  --progress-bar-background-active: blue;\n  --scroll-bar-background: rgb(53, 53, 53);\n  --scroll-bar-background-active: rgb(238, 238, 238);\n}\n\n.genreTitle {\n  margin-right: 20px;\n}\n\n.bHolder {\n  display: inline-block;\n  margin: auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBS0Y7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFEQTtFQUNFLGFBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxtQkFBQTtBQUtGOztBQUhBO0VBR0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUlGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFFRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUtFLHFCQUFBO0FBRkY7O0FBS0E7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7QUFMRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUpGOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQyw4QkFBQTtFQUVELGlCQUFBO0FBVkY7O0FBYUE7RUFDRSxZQUFBO0FBVkY7O0FBWUE7RUFDRSxxQkFBQTtBQVRGOztBQVlBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSw2QkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQVZGOztBQVlBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUFURjs7QUFXQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFVQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVFBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBTEY7O0FBUUE7RUFFRSxtQkFBQTtFQUNGLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esd0NBQUE7RUFDQSxrREFBQTtBQU5BOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5pb24tZ3JpZHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cbmlvbi1yb3d7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uYnV0dG9uc3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgdHJhbnNpdGlvbjogLjJzO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0MywgMjQzLCAyNDMpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbmRpdi5idXR0b25ze1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggIHJnYigyNDcsIDI0NywgMjQ3KTtcblxufVxuZGl2LmJ1dHRvbnM6aG92ZXJ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMnB4IDFweDtcbn1cbi5idXR0b25zOmhvdmVye1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggIHJnYigyNDcsIDI0NywgMjQ3KTtcbiAgY29sb3I6IHdoaXRlO1xuICAvL2JhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcbiAgXG59XG4jY29udGVudFdyYXBwZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG4gIG9wYWNpdHk6IC42NTtcbiAgei1pbmRleDogNTtcbn1cbiNjb250ZW50TWFpbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOmZpeGVkO1xuICB0b3A6IDEwJTtcbiAgLy9sZWZ0OiAzMCU7XG4gIGhlaWdodDogMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IC40cztcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgXG59XG5cbiNjYXJkTWFpbntcbiAgZGlzcGxheTogbm9uZTtcbiAgXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubW92aWVJbWFnZXtcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbiAgdHJhbnNpdGlvbjogLjJzO1xufVxuLm1vdmllSW1hZ2U6aG92ZXJ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG4jbW92aWVJbWFnZUNhcmR7XG4gIC8vYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIC8vcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBcbiAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4jbW92aWVJbWFnZUNhcmQgLmJ1dHRvbnN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IC42O1xuICB6LWluZGV4OiA0O1xuICBwYWRkaW5nOiA1cHg7XG5cblxufVxuI21vdmllSW1hZ2VDYXJkIGltZ3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIFxufVxuXG4jaWNvbkhvbGRlcntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTQsIDE0KTtcbiAgXG59XG4jaWNvbkhvbGRlciBpbWd7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMzMuMzMlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogLjVzO1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTcsIDE3LCAxNyk7XG59XG4jaWNvbkhvbGRlciBpbWc6aG92ZXJ7XG4gIC8vbWFyZ2luLWxlZnQ6IDVweDtcbiAgLy9tYXJnaW4tcmlnaHQ6IDVweDtcbiAgLy9vYmplY3QtZml0OiBjb250YWluO1xuICAvL3dpZHRoOiAzMyU7XG4gIGJvcmRlci1jb2xvcjogIHJnYigyMzYsIDIzNiwgMjM2KTtcbn1cblxuaW9uLXNsaWRle1xuICBcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgXG4gIHRyYW5zaXRpb246IGhlaWdodCAuNXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgXG4gIHBhZGRpbmc6IDFweDtcbn1cbmlvbi1sYWJlbHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi8vICNjb21lZGllc3tcbi8vICAgaGVpZ2h0OiA1NTBweDtcbi8vICAgd2lkdGg6IDMyMHB4O1xuLy8gfVxuXG4uY29udGFpbmVyIHNwYW4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDVweDtcbiAgXG4gIGxpbmUtaGVpZ2h0OiAyNnB0O1xuICAvL2xpbmUtaGVpZ2h0OiAyNnB4O1xufVxuI2xvZ297XG4gIGhlaWdodDogNjBweDtcbn1cbiN0aXRsZUJhY2tncm91bmR7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNDMsIDI1Myk7XG59XG4jd2F0Y2hCYXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxMCwgMTApO1xuICAvL29wYWNpdHk6IC43O1xuICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiKDI0NywgMjI5LCA3MSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuI3dhdGNoQmFyIGgye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2IoMjQzLCAyNDMsIDI0Myk7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG4jd2F0Y2hCYXIgcHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4jd2F0Y2hCYXIgaDN7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXdlaWdodDogODAwO1xufVxuLndyaXRlclN0YXJEaXJlY3RvcntcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuI3N0aWNreURpdntcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG5pb24tc2xpZGVze1xuICBcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbi0tYnVsbGV0LWJhY2tncm91bmQ6IHJlZFx0O1xuLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IGdyZWVuO1x0XG4tLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kOiB5ZWxsb3c7XG4tLXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogYmx1ZTtcbi0tc2Nyb2xsLWJhci1iYWNrZ3JvdW5kOiByZ2IoNTMsIDUzLCA1Myk7XG4tLXNjcm9sbC1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHJnYigyMzgsIDIzOCwgMjM4KTtcbn1cbi5nZW5yZVRpdGxle1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYkhvbGRlcntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_movie_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/movie-service.service */
      "./src/app/services/movie-service.service.ts");
      /* harmony import */


      var rgbaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rgbaster */
      "./node_modules/rgbaster/dist/rgbaster.umd.js");
      /* harmony import */


      var rgbaster__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rgbaster__WEBPACK_IMPORTED_MODULE_5__);

      var HomePage = /*#__PURE__*/function () {
        function HomePage(navCtrl, router, platform, movies) {
          var _this = this;

          _classCallCheck(this, HomePage);

          this.router = router;
          this.movies = movies;
          this.cards = ["Example", "After", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //total movie types to presented on the main page
          //first load fills these with the movie images
          //this does not include the search function movies 

          this.totalMovieGenres = {
            reccomended: [],
            watching: [],
            releases: [],
            comedies: [],
            horror: [],
            drama: [],
            animated: [],
            thriller: []
          }; //color array for underline categories 

          this.colors = ["darkred", "green", "lightblue", "mediumslateblue", "darkyellow", "purple", "red", "mediumblue", "white", "yellow", "red", "blue", "darkgreen", "cyan", "darkcyan"];
          platform.ready().then(function () {
            _this.width = platform.width();
            _this.height = platform.height();
            var slides = document.querySelectorAll('.movieImage');

            if (_this.width < 800) {
              var buttonHolder = document.querySelectorAll('.bHolder');
              buttonHolder.forEach(function (element) {
                element.style.display = "none";
              });
              slides.forEach(function (element) {
                element.style.width = "100px";
                element.style.height = "auto";
              });
            } else {
              slides.forEach(function (element) {
                element.style.width = "160px";
                element.style.height = "auto";
              });
            }
          });
        }

        _createClass(HomePage, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var posters = document.getElementsByClassName("movieImage");
            var x = 0;
            this.setGenreColor();
            this.totalMovieGenres = this.movies.getMovieImage(this.totalMovieGenres); //set movie images of selected cards

            while (x < 15) {
              posters[x].attributes[1].value = this.totalMovieGenres.reccomended[x];
              x++;
            }
          }
        }, {
          key: "routePage",
          value: function routePage(name) {
            this.router.navigate([name]);
          }
        }, {
          key: "movieInfo",
          value: function movieInfo(_movieInfo) {
            document.getElementById("contentWrapper").style.display = "block";
            var movieImage = document.getElementById("movieImageCard");
            var cMain = document.getElementById("contentMain");
            var currentWidth;

            if (this.width < 800) {
              cMain.style.width = "100%";
              currentWidth = 1;
              cMain.style.left = "0%";
              movieImage.style.backgroundPosition = "none";
            } else {
              cMain.style.width = "40%";
              currentWidth = .40;
              cMain.style.left = "30%";
              movieImage.style.backgroundPosition = "center";
            }

            cMain.style.right = "none";
            var tempHeight = this.height / 1.1;
            cMain.style.height = tempHeight.toString() + "px";
            this.populateCard(movieImage, currentWidth);
          }
        }, {
          key: "populateCard",
          value: function populateCard(movieImage, currentWidth) {
            var displayer = document.getElementById("cardMain");
            displayer.style.display = "block"; //movieImage.style.backgroundImage = "url('/assets/theShining.jpg')";

            var cImage = document.getElementById("imageOnCard");
            cImage.setAttribute('src', 'assets/theShining.jpg');
            var widther = this.height * .85;
            movieImage.style.height = widther.toString() + "px";

            var result = function getImageColor() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return rgbaster__WEBPACK_IMPORTED_MODULE_5___default()('assets/theShining.jpg');

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
            };

            console.log(result[0]); //console.log(result[0].color);

            document.getElementById("cardMain").style.backgroundColor = "black";
          }
        }, {
          key: "resetNorm",
          value: function resetNorm() {
            var animation = Math.floor(Math.random() * Math.floor(3));

            if (animation == 0) {
              document.getElementById("contentMain").style.left = "-60%";
            }

            if (animation == 1) {
              document.getElementById("contentMain").style.height = "0%";
            }

            if (animation == 2) {
              document.getElementById("contentMain").style.width = "0%";
            } else {
              document.getElementById("contentMain").style.right = "100%";
            }

            document.getElementById("contentWrapper").style.display = "none";
            document.getElementById("contentMain").style.width = "0%";
            var displayer = document.getElementById("cardMain");
            displayer.style.display = "none";
          }
        }, {
          key: "getMovieTitles",
          value: function getMovieTitles() {}
        }, {
          key: "getMovieGenre",
          value: function getMovieGenre() {}
        }, {
          key: "streamingServiceRoute",
          value: function streamingServiceRoute(route) {
            //reroute the user to the proper video route 
            //call the api to get the right data for the reroute 
            route = this.movies.getMovieroute(route);
            console.log(route);
          }
        }, {
          key: "setGenreColor",
          value: function setGenreColor() {
            var _this2 = this;

            var test = document.querySelectorAll('.genreTitle');
            var i = 0;
            var curColor;
            test.forEach(function (element) {
              element.style.textDecorationColor = _this2.colors[i];
              i++;
            });
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _services_movie_service_service__WEBPACK_IMPORTED_MODULE_4__["MovieServiceService"]
        }];
      };

      HomePage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]]
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    },

    /***/
    "./src/app/services/movie-service.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/movie-service.service.ts ***!
      \***************************************************/

    /*! exports provided: MovieServiceService */

    /***/
    function srcAppServicesMovieServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MovieServiceService", function () {
        return MovieServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MovieServiceService = /*#__PURE__*/function () {
        function MovieServiceService() {
          _classCallCheck(this, MovieServiceService);

          this.cardImage = [];
          this.streamer = ["netflix", "hulu", "amazon"];
        }

        _createClass(MovieServiceService, [{
          key: "getMovieImage",
          value: function getMovieImage(totalMovies) {
            //this is where api backend call happens to get movie images when first populating the page
            //right now using psuedo data for testing 
            this.cardImage = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wT5ayfO9mk-9pghpeBf3_PevRid76Nk-Cg&usqp=CAU", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362", "https://i.pinimg.com/736x/6d/a3/07/6da307ddd2d2f5c2aaf1f09b112b3257.jpg", "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/black_widow_ver9_xlg_240x360_crop_center.progressive.jpg?v=1598017338", "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/star-wars-last-jedi-poster.jpg", "https://i.redd.it/mkt3rwpuisz21.jpg", "https://maxcdn.icons8.com/app/uploads/2019/05/film-poster-graphic-design.jpg", "", "", "", "", "", "", "", "https://www.godisinthetvzine.co.uk/wp-content/uploads/2020/06/IMG_20200602_120716_501.jpg"]; //psuedo data is set in the movie object

            totalMovies.reccomended = this.cardImage; //returns total movie object 

            return totalMovies;
          }
        }, {
          key: "getMovieroute",
          value: function getMovieroute(route) {
            //get the route url to reoute to the right movie
            //should call api to get url then return something like https://www.netflix.com/search?q=... for something like netflix etc.
            return this.streamer[route];
          }
        }]);

        return MovieServiceService;
      }();

      MovieServiceService.ctorParameters = function () {
        return [];
      };

      MovieServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MovieServiceService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map