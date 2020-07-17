"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Data holder that observers changes in state.
 */
var LiveData = /** @class */ (function () {
    function LiveData() {
        this.observers = [];
        this.data = null;
    }
    /**
     * Observes changes in LiveData value. If value set before observed, immediately invokes observer.
     *
     * @param observer  The observer to watch for changes.
     */
    LiveData.prototype.observe = function (observer) {
        this.observers.push(observer);
        var tData = this.data;
        if (tData != null)
            observer(tData);
    };
    /**
     * @return  The current LiveData value.
     */
    LiveData.prototype.getValue = function () {
        return this.data;
    };
    /**
     * Attempts to remove observer.
     *
     * @param observer  The observer to remove.
     *
     * @return  True if removed otherwise false.
     */
    LiveData.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index != -1) {
            this.observers.splice(index, 1);
            return true;
        }
        return false;
    };
    /**
     * Removes all observers.
     */
    LiveData.prototype.removeAllObservers = function () {
        this.observers.splice(0, this.observers.length);
    };
    /**
     * @return  A read-only version of observers.
     *          Mostly used for testing.
     */
    LiveData.prototype.getObservers = function () {
        return this.observers;
    };
    return LiveData;
}());
exports.default = LiveData;
