import java.util.HashSet;

public class SolutionHashSetOne {
  public static void main(String[] args) {
    HashSet<Integer> set = new HashSet<Integer>();

    for (int i = 0; i < 100; i++) {
      set.add(i);
    }

    for (int i = 0; i < 100; i++) {
      set.contains(i);
    }

    for (int i = 0; i < 100; i++) {
      if (i % 2 != 0) {
        set.remove(i);
      }
    }

    System.out.println(set);
  }
}
