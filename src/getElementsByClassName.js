// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className, node) {
  node = node || document.body;
  return Array.from(node.children).reduce(
    (elements, node) => [...elements, ...getElementsByClassName(className, node)],
    Array.from(node.classList).includes(className) ? [node] : []);
};