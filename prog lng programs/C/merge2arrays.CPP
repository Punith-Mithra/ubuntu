#include<stdio.h>
#include<conio.h>


void main(){


int a[5] ={2,5,0,15,3};
int b[5] ={9,1,3,8,4};
int c[10],k=0,i=0,j=0,temp=0;


for(i=0;i<5;i++)
{
	for(j=i+1;j<5;j++)
   {
   	if(a[i]>a[j]){
      temp = a[i];
      a[i]=a[j];
      a[j]=temp;
      }
   }
}

for(i=0;i<5;i++)
{
	for(j=i+1;j<5;j++)
   {
   	if(b[i]>b[j]){
      temp = b[i];
      b[i]=b[j];
      b[j]=temp;
      }
   }
}

for(i=0;i<5;i++)
	printf(" %d",a[i]);

printf("\n\n");

for(i=0;i<5;i++)
	printf(" %d",b[i]);

printf("\n\n");

k=i=j=0;

while(i<5&&j<5){

	if(a[i]>b[j]){
   	c[k++]=b[j++];
   }
   else
   	c[k++]=a[i++];

}
while(i<5)
{
	c[k++]=a[i++];

}
while(j<5)
	c[k++]=a[j++];

for(i=0;i<10;i++){
	printf(" %d",c[i]);
}

getch();
}

