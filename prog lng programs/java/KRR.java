import java.util.*;

class RR
{
            Scanner sc=new Scanner(System.in);
            int[] bur,rem,wai,ta,arr;
            int size,q,b=0,t=0,flag=0,total=0,count=0;
            RR(int size)
            {
                        this.size=size;
                        bur=new int[size];
                        wai=new int[size];
                        ta=new int[size];
                        rem=new int[size];
						arr= new int[size];
            }
            void get()
            {			// this method is used to get the process times and arrival times from the user.
						
                        for(int i=0;i<size;i++)
                        {
                                    System.out.print("Enter burst time of P"+(i+1)+":");
                                    bur[i]=rem[i]=sc.nextInt();
									total+=bur[i];
									
                        }
						for(int i=0;i<size;i++)
                        {
                                    System.out.print("Enter arrival time of P"+(i+1)+":");
                                    arr[i]=sc.nextInt();
                        }
						
						
                        System.out.print("Enter quantum time:");
                        q=sc.nextInt();
            }
            void round()
            {					// this method is used to calculate the start and end time of the process
                        
						System.out.println("\n\n\n********* ROUND ROBIN SCHEDULING ************");
						System.out.println("   Process\tStart\tEnd");
						while(total>0){
						
						for(int i=0;i<size;i++)
						if((bur[i]>q)||(bur[i]==0))
						{
							total-=q;													// this loop is for scheduling round robin technique. 
																						// execute the process and reduce the burst time of d process.					
							
							System.out.print("   p["+(i+1)+"]   \t"+count);
							count+=q;
							System.out.println("\t"+count);
							bur[i]-=q;
						}
						else if((bur[i]<q)&&(bur[i]>0))
						{
							total-=bur[i];
							System.out.print("   p["+(i+1)+"]   \t"+count);
							count+=bur[i];
							System.out.println("\t"+count);
							bur[i]-=bur[i];
						}
						
						else if(total==0)
						{
						
						break;
						}
						
						
						}
						
					
            }
			 void fcfs()
			{			
					int start=0,end=0;
					System.out.println("\n\n\n********* FIRST COME FIRST SERVE ************"); 	// in this algorithm only there burst times are and displayed on the screen  
					System.out.println("  PROCESS\tStart\tEnd     ");                           
					for(int i=0;  i<size; i++) {
					start=end;
					end+=rem[i];
					System.out.println("   p["+ (i+1) + "]  \t"+start+" \t"+end);         
					} 
			}
			
			void sjf()
			{
				for(int i=0;i<size-1;i++)
				{	
					for(int j=0;j<size-1;j++)
					{
						if(rem[j]>rem[j+1])												// this is to arrange the process is ascending order  according to burst times
						{
							int t=rem[j];
							rem[j]=rem[j+1];
							rem[j+1]=t;
						}
					}
				}
				
					int start=0,end=0;
					System.out.println("\n\n\n********* SHORTEST JOB FIRST ************"); 	// in this algorithm start and times are displayed to the screen  
					System.out.println("  PROCESS\tStart\tEnd     ");                           
					for(int i=0;  i<size; i++) {
					start=end;
					end+=rem[i];
					System.out.println("   p["+ (i+1) + "]  \t"+start+" \t"+end);         
					} 
			
			}

}
			 
			 
class KRR
{
            public static void main(String arg[])
            {
                        Scanner s=new Scanner(System.in);					// this is the main function that uses the technique;
                        System.out.print("Enter the no of process:");
                        int n=s.nextInt();
                        RR obj = new RR(n);
                        obj.get();
                        obj.round();
						obj.fcfs();
						obj.sjf();
                       
            }
}