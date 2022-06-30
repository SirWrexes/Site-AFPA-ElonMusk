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
  name: new RegExp(/^(?![\- ])(\w+[\- ]?)+[^\- ]/, 'i'),

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
