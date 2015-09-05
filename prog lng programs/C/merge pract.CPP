#include<stdio.h>
#include<conio.h>

int a[10],n=10;

void div(int,int);

void display();

void merge(int,int,int);

void main(){

	a[0]=2;
   a[1]=9;
   a[2]=3;
   a[3]=4;
   a[4]=5;
   a[5]=7;
   a[6]=1;
   a[7]=8;
   a[8]=0;
   a[9]=6;

   div(0,n-1);

   display();

   getch();

}



void merge(int low, int mid, int high){ //low indicates the start of the smaller array

	int t[50],i,j,k;
   i=low;
   j=mid+1;                // mid indicates the separator index of array
   k=low;                  // high is the final length of the array

   while((i<=mid)&&(j<=high)) // this loop helps in sorting array into a big array
   {
   	if(a[i]>=a[j])
      	t[k++]=a[j++];
      else
      	t[k++]=a[i++];

   }

   while(i<=mid)              // if there are any elements left in first array they are
   									// added to the temp array
   	t[k++]=a[i++];

   while(j<=high)             // this is for second array
   	t[k++]=a[j++];

   for(i=low;i<=high;i++){    // this changes the original array
   									// by using the temp array

   	a[i]=t[i];
      printf("%d : %d || ",i,a[i]);
   }

   printf("\n\n");


}

void display(){

	int i=0;
	while(i<n){
   	printf(" %d",a[i]);
      i++;
   }
}

void div(int low,int high){
	int mid;

	if(low!=high){


		mid = (low+high)/2;          // to break the array into smaller pices
      div(low,mid);                // this covers the first half
      div(mid+1,high);             // this covers the second half
      printf(" %d :: %d :: %d \n",low,mid,high);  // this is to debug the code
      printf("\n");
      merge(low,mid,high);         // in this method the actual prosses happens

	}

}
