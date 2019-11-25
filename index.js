function bfsearch(tree, callback) {
  const queue = [tree];

  while (queue.length) {
    const node = queue.shift();
    callback(node);

    if (!node.children) continue;

    queue.concat(node.children);
  }
}

module.exports = bfsearch;
