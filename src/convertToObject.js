'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const items = sourceString.split(';');
  const result = {};

  items.map((item) => {
    const keyValue = item.split(':');

    if (keyValue.length === 2) {
      const key = keyValue[0].trim();
      const value = keyValue[1].trim();

      result[key] = value;
    }
  });

  return result;//all done
}

module.exports = convertToObject;
