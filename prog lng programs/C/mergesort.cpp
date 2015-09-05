#include<stdio.h>
#include<conio.h>


void disp( );
void mergesort(int,int,int);
void msortdiv(int,int);
int a[50],n;
void main( )
{
 int i;
 clrscr();
 printf("\nEnter the n value:");
 //scanf("%d",&n);
 //printf("\nEnter elements for an array:");
 //for(i=0;i<n;i++)
 // scanf("%d",&a[i]);
 a[0]=10;a[1]=3;a[2]=8;a[3]=6;a[4]=0;
 n=5;
  printf("\nBefore Sorting the elements are:");
  disp( );
  msortdiv(0,n-1);
  printf("\nAfter Sorting the elements are:");
  disp( );
 getch( );
 }
 void disp( )
 {
  int i;
  for(i=0;i<n;i++)
   printf("%d ",a[i]);
 }
 void mergesort(int low,int mid,int high)
 {
  int t[50],i,j,k;
  i=low;
  j=mid+1;
  k=low;
  while((i<=mid) && (j<=high))
  {
    if(a[i]>=a[j])
     t[k++]=a[j++];
    else
     t[k++]=a[i++];
  }
  while(i<=mid)
    t[k++]=a[i++];
  while(j<=high)
    t[k++]=a[j++];
  for(i=low;i<=high;i++)
    a[i]=t[i];
 }
  void msortdiv(int low,int high)
   {
   	static int count=0;
     int mid;
     if(low!=high)
     {
      count++;
      printf("count of div %d" , count);
      mid=((low+high)/2);
      printf(" %d is mid \n",mid);
      msortdiv(low,mid);
      msortdiv(mid+1,high);
   	mergesort(low,mid,high);
     }
   }