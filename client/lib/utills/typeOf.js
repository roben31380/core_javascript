function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object'
  );
}

function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}
