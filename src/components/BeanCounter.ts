class BeanCounter {

     _hasRoasted: Boolean;

    constructor(numBeans: Number, roasted?: Boolean) {
        this._hasRoasted = roasted ? this._iterateBeans(numBeans) : false;
    }
    
    _iterateBeans(numBeans: Number) {
        for (let i = 0; i <= numBeans; i++) {
            this._fillBean(i);
        }

        return true;
    }

    _fillBean(beanId: Number) {
        console.log(`Bean ${beanId} has been filled`);
    }


}

export { BeanCounter }; 