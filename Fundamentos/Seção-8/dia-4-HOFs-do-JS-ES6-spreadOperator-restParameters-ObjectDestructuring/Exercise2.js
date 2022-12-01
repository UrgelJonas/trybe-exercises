const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
    }
    console.log(sum(4, 5, 6));