function bfsearch(tree, callback) {
  const queue = [tree];

  while (queue.length) {
    const node = queue.shift();
    callback(node);

    if (!node.children) continue;

    node.children.forEach(child => {
      queue.push(child);
    });
  }
}

module.exports = bfsearch;