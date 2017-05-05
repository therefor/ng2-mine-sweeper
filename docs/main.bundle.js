webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".inline{\r\n  height: 32px;\r\n}\r\n\r\n.center{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.flex{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  width: 370px;\r\n  margin: 10px auto auto auto;\r\n}\r\n\r\n*{\r\n  -webkit-user-select: none; /* Chrome, Opera, Safari */\r\n  -moz-user-select: none; /* Firefox 2+ */\r\n  -ms-user-select: none; /* IE 10+ */\r\n  user-select: none; /* Standard syntax */\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".grid {\r\n  background: #fff;\r\n  border: 1px solid #999;\r\n  float: left;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  line-height: 34px;\r\n  height: 34px;\r\n  margin-right: -1px;\r\n  margin-top: -1px;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 34px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*{\r\n  -webkit-user-select: none; /* Chrome, Opera, Safari */\r\n  -moz-user-select: none; /* Firefox 2+ */\r\n  -ms-user-select: none; /* IE 10+ */\r\n  user-select: none; /* Standard syntax */\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<div class=\"inline center\" *ngFor=\"let x of numArr(xLength)\">\r\n  <mine-grid *ngFor=\"let y of numArr(yLength)\"\r\n             (leftClick) = 'leftClick($event)'\r\n             (rightClick) = 'rightClick($event)'\r\n            [hasMine] = 'hasMine[coord(x,y)]'\r\n            [count]=\"count[coord(x,y)]\"\r\n            [coord]='coord(x,y)'\r\n             [isFlag]=\"isFlag[coord(x,y)]\"\r\n             [restart]=\"restart\"\r\n             [isOpen]=\"isOpen[coord(x,y)]\">\r\n  </mine-grid>\r\n</div>\r\n<div class=\"center flex\">\r\n  <span>Mine: {{ totalMine - flagTag }}</span>\r\n  <span>time: {{time.toFixed(1)}}</span>\r\n  <button (click)=\"initGame()\">restart</button>\r\n</div>\r\n"

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "<button class=\"grid\"\r\n      (contextmenu)=\"onRightClick()\"\r\n      (click)=\"onLeftClick()\"\r\n      [ngStyle]=\"currentStyles\" >\r\n  {{currentText}}\r\n</button>\r\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(80);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.xLength = 10;
        this.yLength = 10;
        this.rate = 0.1; //雷的数量概率
        this.hasMine = {};
        this.count = {};
        this.isOpen = {};
        this.isFlag = {}; //是否标记为地雷
        this.totalMine = 0;
        this.flagTag = 0; //标记旗子的个数
        this.firstClick = true;
        this.time = 0;
        this.restart = true;
        this.gameInPlay = false;
    }
    AppComponent.prototype.numArr = function (x) {
        var numArr = [];
        for (var i = 0; i < x; i++) {
            numArr.push(i);
        }
        return numArr;
    };
    AppComponent.prototype.coord = function (x, y) {
        //返回坐标
        x = x < 10 ? "0" + x : x.toString();
        y = y < 10 ? "0" + y : y.toString();
        return x + y;
    };
    AppComponent.prototype.leftClick = function (index) {
        if (this.firstClick) {
            //todo: do something to avoid boom at first click
            this.firstClick = false;
            this.startTimeCounting();
            this.gameInPlay = true;
        }
        if (!this.gameInPlay) {
            return;
        }
        if (this.hasMine[index]) {
            //lose game
            clearInterval(this.nIntervalId);
            alert("game over!");
            this.openAll();
            this.gameInPlay = false;
            this.restart = false;
            return;
        }
        if (this.isFlag[index]) {
            return;
        }
        this.restart = false;
        this.isOpen[index] = true;
        if (this.ifWin()) {
            clearInterval(this.nIntervalId);
            alert("you win! total time is: " + this.time.toFixed(1));
            this.gameInPlay = false;
        }
        if (this.count[index] === 0) {
            //打开0地雷的周边所有格子
            this.open(index);
        }
    };
    AppComponent.prototype.rightClick = function (index) {
        this.restart = false;
        this.isFlag[index] = !this.isFlag[index]; //toggle between true and false
        if (this.isFlag[index]) {
            this.flagTag++;
        }
        else {
            this.flagTag--;
        }
    };
    AppComponent.prototype.open = function (index) {
        //递归打开0地雷及其周围的空格
        if (this.count[index] === 0) {
            var arr = this.decodeCoord(index);
            var x = arr[0];
            var y = arr[1];
            for (var i = x - 1; i < x + 2; i++) {
                for (var j = y - 1; j < y + 2; j++) {
                    var tempIndex = this.coord(i, j);
                    if (!this.count.hasOwnProperty(tempIndex)) {
                        continue;
                    }
                    if (this.isFlag[tempIndex]) {
                        continue;
                    }
                    if (this.count[tempIndex] === 0 && this.isOpen[tempIndex] === false) {
                        this.isOpen[tempIndex] = true;
                        this.open(tempIndex);
                    }
                    this.isOpen[tempIndex] = true;
                }
            }
        }
    };
    AppComponent.prototype.openAll = function () {
        for (var i = 0; i < this.xLength; i++) {
            for (var j = 0; j < this.yLength; j++) {
                var tempCoord = this.coord(i, j);
                this.isOpen[tempCoord] = true;
            }
        }
    };
    AppComponent.prototype.decodeCoord = function (index) {
        return [parseInt(index.substring(0, 2)), parseInt(index.substring(2, 4))];
    };
    AppComponent.prototype.initGame = function () {
        this.firstClick = true;
        this.time = 0;
        this.totalMine = 0;
        this.flagTag = 0;
        this.restart = true;
        this.gameInPlay = false;
        this.stopTime();
        for (var i = 0; i < this.xLength; i++) {
            for (var j = 0; j < this.yLength; j++) {
                var tempCoord = this.coord(i, j);
                this.isFlag[tempCoord] = false;
                this.hasMine[tempCoord] = Math.random() > 1 - this.rate ? true : false; //set mine percentage here
                this.isOpen[tempCoord] = false;
                if (this.hasMine[tempCoord]) {
                    this.totalMine++;
                }
                this.count[tempCoord] = 0;
            }
        }
        //统计每个格子周围地雷数量
        for (var i = 0; i < this.xLength; i++) {
            for (var j = 0; j < this.yLength; j++) {
                var countCoord = this.coord(i, j);
                for (var x = i - 1; x < i + 2; x++) {
                    for (var y = j - 1; y < j + 2; y++) {
                        var tempCoord = this.coord(x, y);
                        if (this.hasMine.hasOwnProperty(tempCoord)) {
                            if (this.hasMine[tempCoord]) {
                                this.count[countCoord]++;
                            }
                        }
                    }
                }
            }
        }
    };
    AppComponent.prototype.ifWin = function () {
        var isAllNumberOpened = true;
        for (var i = 0; i < this.xLength; i++) {
            for (var j = 0; j < this.yLength; j++) {
                var index = this.coord(i, j);
                if (!this.hasMine[index] && !this.isOpen[index]) {
                    isAllNumberOpened = false;
                    return;
                }
            }
        }
        return isAllNumberOpened;
    };
    AppComponent.prototype.startTimeCounting = function () {
        var _this = this;
        this.nIntervalId = setInterval(function () {
            _this.time = _this.time + 0.1;
        }, 100);
    };
    AppComponent.prototype.stopTime = function () {
        clearInterval(this.nIntervalId);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.initGame();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(137),
        styles: [__webpack_require__(134)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_component__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__grid_component__["a" /* MineGrid */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineGrid; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MineGrid = (function () {
    function MineGrid() {
        this.leftClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.rightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.rightClickIcon = ["!", "?", ""];
        this.rightClickCount = 0;
    }
    MineGrid.prototype.onRightClick = function () {
        if (!this.isOpen) {
            this.currentText = this.rightClickIcon[this.rightClickCount % 3];
            if (this.currentText === "!" || this.currentText === "?") {
                this.rightClick.emit(this.coord);
            }
            this.rightClickCount++;
            console.log("right click");
            return false;
        }
        return false;
    };
    MineGrid.prototype.onLeftClick = function () {
        if (this.isFlag) {
            return;
        }
        this.leftClick.emit(this.coord);
        console.log("left click!");
        return false;
    };
    MineGrid.prototype.setCurrentStyles = function () {
        var fontColor = "green"; //default color
        if (this.hasMine && this.isOpen) {
            fontColor = "red";
        }
        else if (this.isOpen) {
            switch (this.count) {
                case 1:
                    fontColor = "#004d99";
                    break;
                case 2:
                    fontColor = "green";
                    break;
                case 3:
                    fontColor = "#800000";
                    break;
                case 4:
                    fontColor = "#00284d";
                    break;
                case 5:
                    fontColor = "#b35900";
                    break;
                case 6:
                    fontColor = "red";
                    break;
                default:
                    fontColor = "green";
            }
        }
        if (!this.isOpen && this.currentText) {
            fontColor = this.currentText === "!" ? "red" : "white";
        }
        this.currentStyles = {
            'color': fontColor,
            'background': this.isOpen ? 'white' : 'grey'
        };
    };
    MineGrid.prototype.ngOnInit = function () {
        if (this.hasMine) {
            this.count = "";
        }
        this.setCurrentStyles();
        this.rightClickCount = 0;
        this.currentText = "";
    };
    MineGrid.prototype.ngOnChanges = function () {
        if (this.isOpen) {
            this.currentText = this.hasMine ? "X" : (this.count === 0 ? "" : this.count);
        }
        this.setCurrentStyles();
        if (this.restart) {
            this.currentText = "";
        }
    };
    return MineGrid;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], MineGrid.prototype, "leftClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], MineGrid.prototype, "rightClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], MineGrid.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], MineGrid.prototype, "hasMine", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], MineGrid.prototype, "coord", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], MineGrid.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], MineGrid.prototype, "isFlag", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], MineGrid.prototype, "restart", void 0);
MineGrid = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'mine-grid',
        template: __webpack_require__(138),
        styles: [__webpack_require__(135)]
    })
], MineGrid);

//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[163]);
//# sourceMappingURL=main.bundle.js.map