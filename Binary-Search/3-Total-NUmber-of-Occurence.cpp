// THIS CODE FINDS THE FIRST AND THE LAST OCCURENCE OF THE KEY IN THE ARRAY 
// IN THIS SOLUTION IT IS DONE BY THE ARRAY 
// YOU CAN SOLVE THIS QUESTION ON CODE STUDIO USING VECTORS


#include <iostream>
using namespace std;

int FirstOccurence(int arr[], int size, int key)
{
    

    int start = 0;
    int end = size - 1;
    int mid = (start + end) / 2;
    int first_element = -1  ;
   

    while (start <= end )
    {
        if (arr[mid] == key )
        {
            first_element = mid ;
            end = mid -1 ;
           
        }
        if (arr[mid] > key)
        {
            end = mid - 1 ;
        }
        if (arr[mid] < key)
        {
            start = mid + 1 ;
        }

        mid = (start + end ) / 2;
        
        
        
    }

    return first_element;

    
    

}
int LastOccurence(int arr[], int size, int key)
{
    int start = 0;
    int end = size - 1;
    int mid = (start + end) / 2;
    int last_element = -1  ;
   

    while (start < end )
    {
        if (arr[mid] == key )
        {
            last_element = mid ;
            start = mid +1 ;
           
        }
        if (arr[mid] > key)
        {
            end = mid - 1 ;
        }
        if (arr[mid] < key)
        {
            start = mid + 1 ;
        }

        mid = (start + end ) / 2;
        
        
        
    }

    return last_element;
}

int main()
{

    int data[8] = {1, 2, 3, 3, 3, 3, 4, 5};

    int first = FirstOccurence(data, 8, 3);
   int last =  LastOccurence(data, 8, 3);

   if (first == -1)
   {
    cout << endl << "Element Not Found" ;
   }
   else
   cout << endl << "First Element = " << first << endl << "LAst Element = " << last ;
   cout << endl << "Total Occurence = " << (last - first) + 1 << endl ;

    return 0;
}