#include<stdio.h>
#include<conio.h>

void tens(int);
void units(int);
void teens(int);
void spell(long);

void main(){

   clrscr();
   long num=1;	
	while(num!=0){
		scanf("%ld",&num);
		spell(num);
	}

   getch();
}


void spell(long num){
   int count,i;
   long temp;
   temp=num;
   count=0;
   num=0;
   while(temp>0){
	num= num*10 + temp%10;
	temp/=10;
	count++;
   }

   temp=num;
   for(i=count;i>0;i--){

	if(i==7){

	     if(temp%10==0){
		temp/=10;
		continue;
	     }
	     if(temp%10==1){
		teens(temp%100);
		i--;
		printf("lack ");
		temp/=100;
	     }
	     else{
	     tens(temp%10);
	     temp/=10;
	     }

	     continue;
	}
	if(i==6){
	     units(temp%10);
	     printf("lack ");
	     temp/=10;
	     continue;
	}
	if(i==5){

	     if(temp%10==0){
		temp/=10;
		continue;
	     }
	     if(temp%10==1){
		teens(temp%100);
		i--;
		printf("thousand ");
		temp/=100;
	     }else{
		tens(temp%10);
		temp/=10;
	     }

	     continue;
	}
	if(i==4){
	     units(temp%10);
	     printf("thousand ");
	     temp/=10;
	     continue;
	}
	if(i==3){
	     if(temp%10==0){
		temp/=10;
		continue;
	     }

	     units(temp%10);
	     printf("hundred ");
	     temp/=10;
	     if(temp>0);
		printf("and ");
	     continue;
	}
	if(i==2){

	   if(temp%10==1){
		teens(temp%100);
		i--;
		temp/=100;
	     }
	     else{
	      tens(temp%10);
	      temp/=10;
	     }
	     continue;
	}
	if(i==1){
	     units(temp%10);
	     temp/=10;
	     continue;
	}


   }


}


void tens(int num){

   switch(num){
	case 2: printf("twenty "); break;
	case 3: printf("thirty "); break;
	case 4: printf("forty "); break;
	case 5: printf("fifty "); break;
	case 6: printf("sisty "); break;
	case 7: printf("seventy "); break;
	case 8: printf("eignty "); break;
	case 9: printf("ninty "); break;
	case 0: printf(""); break;

   }

}

void units(int num){

	  switch(num){
	case 1: printf("one "); break;
	case 2: printf("two "); break;
	case 3: printf("three "); break;
	case 4: printf("four "); break;
	case 5: printf("five "); break;
	case 6: printf("six "); break;
	case 7: printf("seven "); break;
	case 8: printf("eight "); break;
	case 9: printf("nine "); break;
	case 0: printf(""); break;

   }

}

void teens(int num){

	int temp;
	if(num>10){
		temp=num%10;
		num/=10;
		temp=temp*10 + num;
		num=temp;
	}

    switch(num){
	case 11: printf("eleven "); break;
	case 12: printf("twelve "); break;
	case 13: printf("thirteen "); break;
	case 14: printf("fourteen "); break;
	case 15: printf("fifteen "); break;
	case 16: printf("sixteen "); break;
	case 17: printf("seventeen "); break;
	case 18: printf("eighteen "); break;
	case 19: printf("nineteen "); break;
	case 1: printf("ten "); break;

   }

}


