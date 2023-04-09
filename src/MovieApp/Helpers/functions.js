// is null or undefined

export const isNullOrUndefined = (value) => {
  return value === null || value === undefined;
};

//is Object

export const isObject = (value) => {
  return typeof value === "object";
};

export const isPathActive = (currentPath, pathname) => {
  return currentPath.includes(pathname);
};
