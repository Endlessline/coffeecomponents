declare class BeanCounter {
    _hasRoasted: Boolean;
    constructor(numBeans: Number, roasted?: Boolean);
    _iterateBeans(numBeans: Number): boolean;
    _fillBean(beanId: Number): void;
}
export { BeanCounter };
