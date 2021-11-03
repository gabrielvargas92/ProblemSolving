

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */



function sockMerchant(n, ar) {
    // Write your code here
    if (!n)
        return

    const ht = new Map();
    for (var i = 0; i < n; i++) { 
        var current = ar[i];
        if(!ht.get(current)){
            ht.set(current, 1)
        }else{
            var x = ht.get(current);
            x++;
            ht.get(current);
            ht.set(current, x);
        }

    }

    var counter = 0;

    ht.forEach(element => {
        counter = counter + Math.trunc(element/2)
    });

    return counter;

}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
