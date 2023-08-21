depthFirstIterative(start){
    const stack= [start];
    const result = [];
    const visited ={};
    let currentVertex;
    visited[start] = true;
    while(stack.length){
        console.log(stack);
        currentVertex = stack.pop();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor =>{
            if(!visited[neighbor]){
                visited[neighbor] = true;
                stack.push(neighbor)
            }
        })
    }
    return result;
}