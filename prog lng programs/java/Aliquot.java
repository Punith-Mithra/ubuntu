class Aliquot{
public static void main(String[] arg){
   int x=12;
   int arr[]=new int[100];
   int count=0;
   int temp=1;
   while(temp<=x/2){
      if(x%temp==0){
         arr[count]=temp;
          count++;
      }
     
      temp++;
   }
   int sum=0;
   for(int i=0;i<count;i++){
      System.out.println(" "+arr[i]);
      sum +=arr[i]; 
   }
 System.out.println(" "+sum);
}
}
