import java.util.Scanner;

class Flames
{

	static int k=1,i=0,vlen=0,alen,len=1,c=0;
	static String name1,name2;
	static char n1[],n2[]; 
	
	static char f[]={'F','L','A','M','E','S','\0'};
	
	public static void main(String args[])
	{	
		Scanner in = new Scanner(System.in);
		System.out.println("\n\t\tEnter the first name:: ");
		name1=in.nextLine();
		
		System.out.println("\n\t\tEnter the second name:: ");
		name2=in.nextLine();
		c= solveName();
		//System.out.println("length:: "+c);
		alen=f.length-1;
		
		System.out.println(f);
		//System.out.println("\t array length "+alen);

		while(alen>1)
		{
			if(alen==2)
			{
				vlen=c+len;
				if(vlen%2==0)
				
				swap(0);
				else
				swap(1);
				break;
			}
			
			else
			vlen=c+len-1;
				
			len=vlen%alen;
			if(len==0)
			len=alen;
			//System.out.println("\t array length "+alen+"\t variable len "+vlen+"\t len "+len);
			alen--;
			if(len==1&&alen+1==2)
			swap(len);
			else
			swap(len-1);
		}
		select(f[0]);
	}
	static void select(char result)
	{
		switch(result)
		{
			case 'F': System.out.println("\n\n\t"+name1+" and "+name2+" are good friends"); break;
			case 'L': System.out.println("\n\n\t"+name1+" and "+name2+" are lovers"); break;	
			case 'A': System.out.println("\n\n\t"+name1+" has affection on "+name2+""); break;
			case 'M': System.out.println("\n\n\t"+name1+" and "+name2+" are going to be married"); break;	
			case 'E': System.out.println("\n\n\t"+name1+" and "+name2+" are enemies"); break;	
			case 'S': System.out.println("\n\n\t"+name1+" and "+name2+" is brother and sister relation ship"); break;	
				
		}
	}
	static void swap(int k)
	{
		if(k==-1)
		k=alen;

		for(i=k;i<f.length-1;i++)
		{
			char temp;
			temp='\0';
			f[i]=f[i+1];
			f[i+1]=temp;
			//System.out.print(f);
		}
		System.out.println(f);
	}
	static int solveName()
	{
		n1=name1.toCharArray();
		n2=name2.toCharArray();
		int length= n1.length+n2.length;
		for(int i=0;i<n1.length;i++)
			for(int j=0;j<n2.length;j++)
			{
				if(n1[i]==n2[j])
				{	

					System.out.print("\tname 1: "+n1[i]+" "+(i+1));
					System.out.print("\t\tname 2: "+n2[j]+" "+(j+1));	
					System.out.println();
					
					n1[i]='~';n2[j]='*';
					length-=2;

				}
			}
		return length;
	}
}
