/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
const cloneGraph = graph => {
  if (!graph) {
    return graph;
  }

  const root = new UndirectedGraphNode(graph.label);
  const stack = [graph];
  const visited = { [graph.label]: root };
  while (stack.length) {
    let top = stack.pop();

    top.neighbors.forEach(node => {
      if (!visited[node.label]) {
        stack.push(node);
        visited[node.label] = new UndirectedGraphNode(node.label);
      }
      visited[top.label].neighbors.push(visited[node.label]);
    });
  }

  return root;
};
