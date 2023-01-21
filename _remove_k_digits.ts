function removeKdigits(num: string, k: number): string {

    let removed = 0;
    let stack =[]

    for(let i of num){
        while(stack.length && removed <k && i<stack[stack.length-1]){
            stack.pop()
            removed ++;
        }
        stack.push(i)
    }

    while(removed<k){
        stack.pop()
        removed++
    }

    while(stack.length && stack[0]=='0'){
        stack.shift()
    }

    return stack.length ? stack.join('') : '0'


};

//note, we need to remove the "peak" element
