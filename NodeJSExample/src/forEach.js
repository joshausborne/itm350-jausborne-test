module.exports = function forEach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i],i,items);
  }
};
