public class Main {
  public static void main(String args[]) {
    greet();
    greet("Usagi");
  }

  /*
  メソッドのオーバーロード
  => 同じメソッド名であるが、引数の型や個数による与え方で異なるメソッドが実行される。
  */
  static void greet() {
    System.out.println("Hello!");
  }

  static void greet(String name) {
    System.out.println("Hi, " + name + "!");
  }
}
