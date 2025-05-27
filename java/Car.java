class Car {
    String make, model;
    int year;
    void displayDetails() {
        System.out.println(make + " " + model + " " + year);
    }
    public static void main(String[] args) {
        Car c = new Car();
        c.make = "Toyota";
        c.model = "Camry";
        c.year = 2022;
        c.displayDetails();
    }
}