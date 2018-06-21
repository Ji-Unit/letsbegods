var cloneGraph = function(graph, visited) {
    if (!visited) visited = {};
    if (!graph) return null;
    const node = !visited[graph.label]
        ? new UndirectedGraphNode(graph.label)
        : visited[graph.label];
    if (!visited[graph.label]) {
        visited[graph.label] = node;
    } else return node;

    for (let i = 0; i < graph.neighbors.length; i++) {
        if (graph.label === graph.neighbors[i].label) node.neighbors.push(node);
        else node.neighbors.push(cloneGraph(graph.neighbors[i], visited));
    }
    return node;
};
