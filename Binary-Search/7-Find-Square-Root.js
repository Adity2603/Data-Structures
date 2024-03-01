// IN THIS QUESTION WE ARE GOING TO FIND THE SQUARE ROOT OF THE NUMBER USING THE BINARY SEARCH
//HERE THE ANSWER IS SOLVED IN JAVASCRIPT FOR EASY UNDERSTANDING....

const sqrt = (num) =>{
     start = 0 
     end = num-1

    //  math.floor() IS USED TO ROUND OF THE VALLUE AND TO AVOID THE DECIMAL 

     mid = Math.floor((start+end)/2)

     while (start<=end) {
       let  sqr = mid * mid 
        if (sqr <= num) {
            ans = mid
            start = mid +1
            
        }
        else
        end = mid -1 

        mid = Math.floor((start+end)/2)
        
     }

     return ans 

}

let number = 25 ;

console.log("Square root is = " , sqrt(number));