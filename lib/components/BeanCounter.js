var BeanCounter = /** @class */ (function () {
    function BeanCounter(numBeans, roasted) {
        this._hasRoasted = roasted ? this._iterateBeans(numBeans) : false;
    }
    BeanCounter.prototype._iterateBeans = function (numBeans) {
        for (var i = 0; i <= numBeans; i++) {
            this._fillBean(i);
        }
        return true;
    };
    BeanCounter.prototype._fillBean = function (beanId) {
        console.log("Bean " + beanId + " has been filled");
    };
    return BeanCounter;
}());
export { BeanCounter };
