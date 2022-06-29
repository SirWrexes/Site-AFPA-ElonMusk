/*
 * validate.js
 * Copyright (C) 2022 Ludovic Fernandez <http://github.com/SirWrexes>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

const RE = {
  /**
   * - Doesn't start with a hypen
   * - Only alphabetic characters, spaces, hypens and underscores
   * - At least 2 characters
   * - At most 20 characters
   * - Case insensitive
   */
  name: new RegExp(/^(?!-)(\w|[ _\-])/, 'i'),

  /**
   * - Doesn't start with an @
   * - Has only one '@' symbol (not RCF compliant)
   * - At least one character on each side of the single '@'
   * - Case insensitive (not RCF compliant but nobody cares about this one)
   * - Any further validation should be done by simply sending a mail to the given address
   */
  mail: new RegExp(/^[^@]+@[^@]+\./, 'i'),

  /**
   * Min 8 characters
   * Max 70 characters
   * At least one occurence of each of these character types:
   *   - Alphabetic
   *   - Numeric
   *   - Special
   */
  pass: /^(?=.*\w)(?=.*\d)(?=.*\W).{8,70}$/,
};

/** @typedef {keyof RE} ExpressionType */

module.exports =
  /**
   * A validator that returns true if the string passed as its argument matches a given RegEx
   *
   * @template {ExpressionType} E
   * @param {string} str - Data to validate
   * @param {E} type - Case insensitive
   * @returns {str is E} A boolean value that is true if given data matches rules for given type
   */
  function validate(str, type) {
    if (!type in this) throw new TypeError(`Bad ExpressionType: ${type}`);
    return this[type.toUpperCase()].test(str);
  }.bind(Object.freeze(RE));
