#include<stdio.h>
#include<conio.h>

void main(){

 	int a=1,b=1,i,temp;
	for(i=1;i<=10;i++){
   	printf("%d ",a);
 		temp=a+b;
   	a=b;
   	b=temp;
 	}
 	getch();

}

