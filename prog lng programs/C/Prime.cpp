#include<stdio.h>
#include<conio.h>


void main()
{

	int i,j,count,n=1000;

   for(i=2;i<n;i++){

   	count=0;
   	for(j=2;j<i;j++)
      	if(i%j==0){
         	count++;
         }

      if(count==0)
      	printf("\t%d\n",i);

   }

}
