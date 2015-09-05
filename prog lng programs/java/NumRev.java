class NumRev{

	public static void main(String args[]){
	int i=102480;
	String s="";
	while(i>0){
	
	s+=""+i%10;
	i/=10;
	}
	
	i=Integer.valueOf(s);
	System.out.println(""+i);
	}
	
}