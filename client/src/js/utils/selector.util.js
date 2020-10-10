export const select = (className, element = document) => element.querySelector(className);
export const selectAll = className => Array.from(document.querySelectorAll(className));
