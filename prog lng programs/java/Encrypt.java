

class Encrypt
{

	static int count=0,n=3;
	
	public static void main(String args[])
	{	
		
		String s="hello world this is punith";
		int i,len=s.length();
		int b;
		char str[]=s.toCharArray();
		for(i=0;i<len;i++){
			b=(int)str[i];
			str[i]=(char)(b+5);
			System.out.print(""+str[i]);
		}
		System.out.println();
		
		for(i=0;i<len;i++){
			b=(int)str[i];
			str[i]=(char)(b-5);
			System.out.print(""+str[i]);
		}
		
		
		
	}
}
