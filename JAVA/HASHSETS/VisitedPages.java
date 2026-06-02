import java.util.HashSet;

public class VisitedPages {
  public static void main(String[] args) {
    HashSet<String> visitedWebSites = new HashSet<String>();

    String[] webStrings = { "www.Google.com", "www.CodeSignal.com", "LeetCode.com", "cinego.tv", "https://csheen.app" };

    for (int i = 0; i < webStrings.length; i++) {
      visitedWebSites.add(webStrings[i]);
    }

    if (visitedWebSites.contains("https://csheen.app")) {
      System.out.println("Found Chris' portfolio app!");
    }
  }
}
