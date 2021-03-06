const { camelCase, upperCase, split, join, upperFirst, kebabCase } = require('lodash');

const toClassName = str => upperFirst(camelCase(str));

const toNgNameConstant = str => join(split(upperCase(str), ' '), '_');

const toComponentSelector = str => kebabCase(str);

module.exports = {
  camelCase,
  upperCase,
  split,
  join,
  upperFirst,
  kebabCase,
  toClassName,
  toNgNameConstant,
  toComponentSelector
};
