function bfsearch(tree, callback) {
  const queue = [tree];

  while (queue.length) {
    const node = queue.shift();
    callback(node);

    if (!node.children) continue;
    
    if (!Array.isArray(node.children)) throw new Error('Cannot have non-array children');

    node.children.forEach(child => {
      queue.push(child);
    });
  }
}

module.exports = bfsearch;
