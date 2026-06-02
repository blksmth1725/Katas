import java.util.HashSet;

public class VisitorCheck {
  public static void main(String[] args) {
    HashSet<String> visitors = new HashSet<String>();

    String specialGuest = "visitor3@example.com";
    String[] visitorsList = { "visitor1@example.com", "visitor2@example.com", "visitor1@example.com" };

    for (int i = 0; i < visitorsList.length; i++) {
      visitors.add(visitorsList[i]);
    }

    if (visitors.contains(specialGuest)) {
      System.out.printf("We found VIP:\n%s", specialGuest);
    } else {
      System.out.printf("Unfortunately %s seems to have not made it to the gathering.", specialGuest);
    }
  }
}
