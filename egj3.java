import java.util.Arrays;

public class AnagramChecker {
    public static void main(String[] args) {
        String str1 = "listen";
        String str2 = "silent";
        boolean isAnagram = checkAnagram(str1, str2);
        System.out.println(isAnagram); // Output: true
        
        str1 = "restful";
        str2 = "fluster";
        isAnagram = checkAnagram(str1, str2);
        System.out.println(isAnagram); // Output: true
    }
    
    public static boolean checkAnagram(String str1, String str2) {
        // Remove spaces and punctuation and convert to lowercase
        str1 = str1.replaceAll("[^a-zA-Z]", "").toLowerCase();
        str2 = str2.replaceAll("[^a-zA-Z]", "").toLowerCase();
        
        // Check if the lengths of the strings are equal
        if (str1.length() != str2.length()) {
            return false;
        }
        
        // Convert strings to character arrays and sort them
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);
        
        // Compare sorted character arrays
        return Arrays.equals(charArray1, charArray2);
    }
}
