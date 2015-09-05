public class Lucky {
	static String s;
	static int d[];

	public static void main(String args[]) {
		s = System.console().readLine();
		d= new int[3];

		String c[] = s.split("-");
		for (int i = 0; i < c.length; i++) {
		//	System.out.print(c[i] + " ");
			d[i] = Integer.parseInt(c[i]);

		}
		 int sum=0;
		 for(int i=0;i<d.length;i++){
		 int temp=d[i];
		 while(temp>0){
		
		 sum+=temp%10;
		 temp/=10;
		
		 }
		 }
		 System.out.print(sum( sum));

	}

	static int sum(int num) {
		int temp = num;
		int sum = 0;
		if (num < 10) {
			return num;
		} else {
			sum=0;
			while (temp > 0) {

				sum += temp % 10;
				temp /= 10;

			}
			

		}
		return sum;
	}

}
