import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;


public class Split {
	static String s;
	static List<Integer> list = new ArrayList<>();
	public static void main(String args[]){
		s= System.console().readLine();
		String c[] = s.split(",");
		for(int i=0;i<c.length;i++){
			String d[]= c[i].split("-");
			for(int j=0;j<d.length;j++){
				list.add(Integer.parseInt(d[j]));
			}
		}
		int max =Collections.max(list);
		
		for(int i = Collections.min(list); i<=max;i++ ){
			System.out.println(i);
		}
		
	}
		
}
