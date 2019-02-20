// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var a, b, c, d, e, f, g, x;
    var error = "You are rich, my friend! We don't have so much coins for exchange";
    var money = {};
    //a = 10001;
    a = currency;
    //a =253;
    //b = a / 50;
    
    if (a < 0) {
    //console.log (money);
    } else if (a > 10000) {
        money.error = error;
        // console.log(money);
    } else {     
        H = parseInt(a / 50);
        //console.log(H);
        c = a - (H * 50);      
        //d = c / 25;
        Q = parseInt(c / 25);
        //console.log(Q);
        e = c - (Q * 25);      
        //f = e / 10;
        D = parseInt(e / 10);
        //console.log(D);
        g = e - (D * 10);      
        //k = g / 5;
        N = parseInt(g / 5);
        //console.log(N);
        x = g - (N * 5);
        P = x / 1;
        //console.log(P);
    
        if (H > 0) {
            money.H = H;
        } if (Q > 0) {
            money.Q = Q;
        } if (D > 0) {
            money.D = D;
        } if (N > 0) {
            money.N = N;
        } if (P > 0) {
            money.P = P;
        };
        //console.log (money);
    };
    //console.log (money);
    return money;
     
    /*money.H = H;
    money.Q = Q;
    money.D = D;
    money.N = N;
    money.P = P;*/
};
