import java.io.*;
import java.util.*;
public class WhatsappReadable {

 
	public static void main(String[] args) throws Exception
	{
		
		System.out.println("\n\n\n");
		System.out.println("******* Whatsapp Chat messages read easy ***********");
		System.out.print("\n\n\nEnter the File name or drag and Drop the file to convert \npress Enter :: ");
		method();
		System.out.println("\nWe are done thank you");
	}
	
	static void method()
	{
		
		Scanner scan = new Scanner(System.in);
		while(scan.hasNext()){
		String fileName = scan.next();
		
		
			fileName.replaceAll("\\s+","");
			fileName.replaceAll("\"","");
			fileName.trim();
		
			String fileNames[] = fileName.split(".");
		
		BufferedWriter brW;
		try (BufferedReader  br = new BufferedReader(new FileReader(fileName))) 
		{

			String line;
			while ((line = br.readLine()) != null) 
			{
					// process the line.
					String strings[] = line.split(" -");
					boolean flag = false;
					for(int i=0;i<strings.length;i++)
					{
						if(flag==false){
							flag=true;
							continue;
						}else
						flag=false;
						
						String split[]=strings[i].split(":");
						for(int j=1;j<split.length;j++)
							split[1]=split[j];
						String s = split[0]+"\t"+split[1]+"\n";
						System.out.println(s);
					}
			}
		//	brW.close();
			System.out.println("\nConversion is Done Successfully TQ");
			
		}catch(FileNotFoundException e ){
		
		System.out.println("\n\n**Enter a correct file name:: ");

		
		}catch(IOException e ){
		
		System.out.println("\n\n**IO Exception "+e);
		
		}
		}
		
	}

}