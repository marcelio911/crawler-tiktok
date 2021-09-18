
/**
 * 
 * @param {*} keySearch 
 * @returns {createdAt, keySearch}
 */
const HotkeyAdapter = (keySearch) => {
    return ({
        createdAt: Date.now(),
        keySearch,
    });
}

module.exports = { HotkeyAdapter };