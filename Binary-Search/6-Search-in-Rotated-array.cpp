#include <bits/stdc++.h> 
using namespace std;
int pivot(vector<int>& arr , int n )
 {
     int s = 0 ;
     int e = n - 1 ; 
     int mid = s + (e-s)/2;

     while (s < e)
     {    
          if (arr[mid] >= arr[0])
          {
               s = mid + 1 ;
          }
          else
          {
               e = mid ;
          }

         mid = s + (e-s)/2;
     }

     return s  ;
}   
 int binary(vector<int>& arr, int s , int e , int k  )
 { 
       int start = s ;
       int end = e ;
       int mid = start + (end-start) / 2 ;
       
       while(start <= end)
       {
           if( k == arr[mid])
           {
               return mid ;
           }
           if( k > arr[mid] )
           {
               start = mid + 1;
           }
           else
           {
               end = mid - 1 ;
           }
           mid = start + (end -start) / 2 ;
       }
   
     return -1 ;

}
int findPosition(vector<int>& arr, int n, int k)
{
    int p = pivot( arr , n );
    if( k >= arr[p] && k <= arr[n-1])
    {
        return binary(arr , p , n-1 , k ) ;
    }
    else
    {
        return binary(arr , 0 , p-1 , k ) ;
    }
    
}

int main(){

    vector<int> arr = {5,6,7,8,1,2,3,4};
    int value = findPosition(arr , 8 , 2);
    cout<<endl<<"Value is Found at position =  "<< value << endl<< endl;
    return 0 ;
}
