
class Numbers{

public static void main(String[] args){

   int num=1;	
	while(num!=0){
		num = Integer.parseInt(System.console().readLine());
		spell(num);
	}


} 

static void spell(int num){
   int count,i;
   int temp;
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
		System.out.print("lack ");
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
	     System.out.print("lack ");
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
		System.out.print("thousand ");
		temp/=100;
	     }else{
		tens(temp%10);
		temp/=10;
	     }

	     continue;
	}
	if(i==4){
	     units(temp%10);
	     System.out.print("thousand ");
	     temp/=10;
	     continue;
	}
	if(i==3){
	     if(temp%10==0){
		temp/=10;
		continue;
	     }

	     units(temp%10);
	     System.out.print("hundred ");
	     temp/=10;
	     if(temp>0);
		if(temp%100 > 0)
		System.out.print("and ");
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


static void tens(int num){

   switch(num){
	case 2: System.out.print("twenty "); break;
	case 3: System.out.print("thirty "); break;
	case 4: System.out.print("forty "); break;
	case 5: System.out.print("fifty "); break;
	case 6: System.out.print("sisty "); break;
	case 7: System.out.print("seventy "); break;
	case 8: System.out.print("eignty "); break;
	case 9: System.out.print("ninty "); break;
	case 0: System.out.print(""); break;

   }

}

static void units(int num){

   switch(num){
	case 1: System.out.print("one "); break;
	case 2: System.out.print("two "); break;
	case 3: System.out.print("three "); break;
	case 4: System.out.print("four "); break;
	case 5: System.out.print("five "); break;
	case 6: System.out.print("six "); break;
	case 7: System.out.print("seven "); break;
	case 8: System.out.print("eight "); break;
	case 9: System.out.print("nine "); break;
	case 0: System.out.print(""); break;

   }

}

static void teens(int num){

	int temp;
	if(num>10){
		temp=num%10;
		num/=10;
		temp=temp*10 + num;
		num=temp;
	}

    switch(num){
	case 11: System.out.print("eleven "); break;
	case 12: System.out.print("twelve "); break;
	case 13: System.out.print("thirteen "); break;
	case 14: System.out.print("fourteen "); break;
	case 15: System.out.print("fifteen "); break;
	case 16: System.out.print("sixteen "); break;
	case 17: System.out.print("seventeen "); break;
	case 18: System.out.print("eighteen "); break;
	case 19: System.out.print("nineteen "); break;
	case 1: System.out.print("ten "); break;

   }
}
}
