# bfsearch

Breadth-first search a tree

## Usage

```
const bfsearch = require('bfsearch');

bfsearch(tree, node => {
  // Called with each node
});
```

### Tree

- should look like this
- nodes may have a `children` array of other nodes
- nodes may have any other properties

```
{
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 3
        }
      ]
    }
  ]
}
```