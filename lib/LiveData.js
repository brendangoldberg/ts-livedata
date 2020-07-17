"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveData = void 0;
var LiveData = /** @class */ (function () {
    function LiveData() {
        this.observers = [];
        this.data = null;
    }
    LiveData.prototype.observe = function (observer) {
        this.observers.push(observer);
        var tData = this.data;
        if (tData != null)
            observer(tData);
    };
    LiveData.prototype.getValue = function () {
        return this.data;
    };
    LiveData.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index != -1) {
            this.observers.splice(index, 1);
        }
    };
    LiveData.prototype.removeAllObservers = function () {
        this.observers.splice(0, this.observers.length);
    };
    LiveData.prototype.getObservers = function () {
        return this.observers;
    };
    return LiveData;
}());
exports.LiveData = LiveData;
