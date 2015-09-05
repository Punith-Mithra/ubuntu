#include<stdio.h>
#include<conio.h>
#include<string.h>


void main(){

	int a[]={90,20,15,2,6,74,3,45,12},n,i,j,temp;

   n=(int)(sizeof(a)/sizeof(a[0]));

   for(i=(n-1);i>=1;i--)
   	for(j=0;j<i;j++)
      	if(a[j]>a[j+1]){
            temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
      	}

   for(i=0;i<n;i++)
   	printf("%d ",a[i]);
   getch();

}