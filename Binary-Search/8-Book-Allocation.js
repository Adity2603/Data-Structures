// HERE YOU WILL BE GIEN AN ARRAY BOOKS OF THE NUMBER OF PAGES IT CONTAINS 
// YOU HAVE TO ALLOCATE THE BOOKS AMONG THE STUDNETS 
// IT HAS 3 CONDITION 

// ALLOCATE BOOKS IN SUCH A WAY THAT:

// 1. EACH STUDENT GETS AT LEAST ONE BOOK.
// 2. EACH BOOK SHOULD BE ALLOCATED TO ONLY ONE STUDENT.
// 3. BOOK ALLOCATION SHOULD BE IN A CONTIGUOUS MANNER.

// YOU HAVE TO ALLOCATE THE BOOK TO ‘M’ STUDENTS SUCH THAT THE MAXIMUM NUMBER OF PAGES ASSIGNED TO A STUDENT IS MINIMUM.

// IF THE ALLOCATION OF BOOKS IS NOT POSSIBLE, RETURN -1.

// EXAMPLE:
// INPUT: ‘N’ = 4 ‘M’ = 2 
// ‘ARR’ = [12, 34, 67, 90]

// OUTPUT: 113

// EXPLANATION: ALL POSSIBLE WAYS TO ALLOCATE THE ‘4’ BOOKS TO '2' STUDENTS ARE:

// 12 | 34, 67, 90 - THE SUM OF ALL THE PAGES OF BOOKS ALLOCATED TO STUDENT 1 IS ‘12’, AND STUDENT TWO IS ‘34+ 67+ 90 = 191’, SO THE MAXIMUM IS ‘MAX(12, 191)= 191’.

// 12, 34 | 67, 90 - THE SUM OF ALL THE PAGES OF BOOKS ALLOCATED TO STUDENT 1 IS ‘12+ 34 = 46’, AND STUDENT TWO IS ‘67+ 90 = 157’, SO THE MAXIMUM IS ‘MAX(46, 157)= 157’.

// 12, 34, 67 | 90 - THE SUM OF ALL THE PAGES OF BOOKS ALLOCATED TO STUDENT 1 IS ‘12+ 34 +67 = 113’, AND STUDENT TWO IS ‘90’, SO THE MAXIMUM IS ‘MAX(113, 90)= 113’.

// WE ARE GETTING THE MINIMUM IN THE LAST CASE.

// HENCE ANSWER IS ‘113’.


// ************************************ CODE STARTS HERE ***********************************************

const isPossible = (arr , n , m , mid )=>{

    studentCount = 1;
    PageSum = 0;

    for(i=0 ; i < n ; i++){
        if (PageSum + arr[i] <= mid) {

            PageSum += arr[i]
        }
        else
        {
            studentCount++
            if (studentCount > m || arr[i] > mid) {

                return false
                
            }

            PageSum = arr[i]
        }
       
    }
    return true

}

const MinimumPages = (arr , n , m )=>{

    start = 0 ;
    sum = 0
    ans = -1 

    for (let index = 0; index < n; index++) {
        sum = sum + arr[index];
        
    }
    end = sum 
    // console.log(end);

    mid = Math.floor((start+end)/2)
    // console.log("The first mid is : " , mid);


    while (start <= end) {

        if (isPossible(arr , n ,m ,mid)) {
            ans = mid ;
            // console.log("My Answers : " , ans);
            end = mid -1
        }
        else
        start = mid +1 

        mid = Math.floor((start+end)/2)
        // console.log("Next Mid is : ",mid);
        
    }

    return ans 

}

arr = [10,20,30,40]
Value = MinimumPages(arr,arr.length,2)

// HERE THE EXPECTED OUTPUT IS 60 

console.log(Value=== -1 ? "Allocation is Not Possible ": Value); 