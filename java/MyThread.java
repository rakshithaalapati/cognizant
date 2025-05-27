class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++)
            System.out.println(getName() + ": Message");
    }

    public static void main(String[] args) {
        MyThread t1=new MyThread();
        t1.start();
        t1.setName("R 1");
        MyThread t2=new MyThread();
        t2.start();
        t2.setName("R 2");
    }
}
