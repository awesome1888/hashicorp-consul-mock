const isArrayLike = require('lodash.isarraylike');
const isString = require('lodash.isstring');
const isObject = require('lodash.isobject');
const random = require('lodash.random');
// const isNumber = require('lodash.isnumber');
// const isFunction = require('lodash.isfunction');
// const union = require('lodash.union');
// const intersection = require('lodash.intersection');
const get = require('lodash.get');
const cloneDeep = require('lodash.clonedeep');
// const deepFreeze = require('deep-freeze-node');
// const isEqual = require('lodash.isequal');

module.exports = {
    isArray: isArrayLike,
    isObject,
    random,
    // contains: (where, what) => {
    //   if (!isArrayLike(where)) {
    //     return false;
    //   }
    //
    //   return where.indexOf(what) >= 0;
    // },
    // forEach: (obj, fn) => {
    //   Object.keys(obj).forEach((k) => {
    //     fn(obj[k], k);
    //   });
    // },
    // isEqual,
    // isNumber,
    // isFunction,
    cloneDeep,
    get,
    // deepFreeze,
    // union,
    // intersection,
    iane: arg => {
        return isArrayLike(arg) && arg.length > 0;
    },
    ione: arg => {
        return isObject(arg) && Object.keys(arg).length > 0;
    },
    isne: arg => {
        return isString(arg) && arg.length > 0;
    },
};
