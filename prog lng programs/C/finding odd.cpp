
#include<stdio.h>
#include<conio.h>
#include<string.h>


void main(){
	int i,j[100];
   char *a,b[200]="hello world  jhfjskd ghsjkh kjshfsjkdh fkjsd hj , dsfa , , fdsaf, as,as,. . .asf .asf.df. .a .af..sdfa .as.\0";

   //strcpy(b,strrev(a));


  // printf("%s",a);

//   printf("\nsizr of *a = %d ",(int) strlen(a));

   //printf("\nsizr of a = %d ",(int) sizeof(j)/sizeof(j[0]));

    printf("\n\nsizr of a = %d ",(int) sizeof(b)/sizeof(b[0]));

  	a= strtok(b,"a ");

   while(a!=NULL)
   {
   	printf("\n %s",a);
   	a=strtok(NULL,"a");
   }

   getch();

}
