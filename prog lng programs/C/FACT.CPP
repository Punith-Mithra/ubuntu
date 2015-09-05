#include<stdio.h>
#include<conio.h>

int add(int,int,int);
double fact(int);
int sub();

void main(){

   clrscr();
   int i=0,j;
   long temp;
   for(i=1;i<=10;i++) {
	printf("\nFactorial of %d = %lf",i,fact(i));

   }


	printf("\nFactorial of %d = %lf",i,fact(i));

	printf("\nFactorial of 12 = %lf",i,fact(12));


       //	printf("\nFactorial of %d = %ld",i,fact(i));

   getch();
}

double fact(int a){

  double temp=1;
  int i;

  for(i=a;i>0;i--){

	temp=temp*i;

  }

  return temp;

}

