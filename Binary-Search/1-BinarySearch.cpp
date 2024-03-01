#include<iostream>
using namespace std;

int Binary(int arr[] , int size , int key ){
    int start = 0 ;
    int end = size - 1;
    int mid = start + ((end - start) / 2);

    while (start <= end)
    {
        if (arr[mid] == key)
        {
            return mid ;
        }
        if (arr[mid] > key)
        {
            end = mid - 1;
        }
        if (arr[mid] < key)
        {
            start = mid + 1 ;
        }

        mid = mid = start + ((end - start) / 2);
        
    }
    return -1;
    

}

int main(){

    int even[6] = {2,4,6,8,10,12};
    int odd [6] = {1,3,5,7,9,11}; 

    

    int index = Binary(even , 6 , 4);
    if (index == -1)
    {
        cout<< "Element Not Found"<<endl;
    }
    else{
    cout << "Index of 8 is = " << index <<endl ;
    }



    

    return 0 ;
}