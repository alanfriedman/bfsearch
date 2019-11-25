function bfsearch(tree, callback) {
  const queue = [tree];

  while (queue.length) {
    const node = queue.shift();
    
    const resp = callback(node);
    
    // if there is a truthy response, assume we found what we are looking for
    if (resp) {
      return resp;
    }

    if (!node.children) continue;

    node.children.forEach(child => {
      queue.push(child);
    });
  }
}

module.exports = bfsearch;
