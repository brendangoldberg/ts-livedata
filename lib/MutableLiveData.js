"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LiveData_1 = require("./LiveData");
var MutableLiveData = /** @class */ (function (_super) {
    __extends(MutableLiveData, _super);
    function MutableLiveData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MutableLiveData.prototype.postValue = function (value) {
        this.data = value;
        this.observers.forEach(function (observer) {
            observer(value);
        });
    };
    return MutableLiveData;
}(LiveData_1.LiveData));
exports.default = MutableLiveData;
