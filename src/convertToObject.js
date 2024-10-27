'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const items = sourceString.split(';');
  const result = {};

  for (const item of items) {
    const params = item.split(':');

    if (params.length === 2) {
      const key = params[0].trim();
      const value = params[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
