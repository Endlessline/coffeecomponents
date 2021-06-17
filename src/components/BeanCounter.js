"use strict";
exports.__esModule = true;
exports.BeanCounter = void 0;
var BeanCounter = /** @class */ (function () {
    function BeanCounter(numBeans, roasted) {
        this._hasRoasted = roasted ? this._iterateBeans(numBeans) : false;
    }
    BeanCounter.prototype._iterateBeans = function (numBeans) {
        for (var i = 0; i <= numBeans; i++) {
            console.log("...filling bean");
        }
        return true;
    };
    return BeanCounter;
}());
exports.BeanCounter = BeanCounter;
