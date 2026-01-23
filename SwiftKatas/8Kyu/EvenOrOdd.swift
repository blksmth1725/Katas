//THIS IS AN EXPLORATION OF THE SWIFT PROGRAMMING LANGUAFGE FROM A FUNCTIONAL PROGRAMMING'S PERSPECTIVE.

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

func evenOrOdd(_ number: Int) -> String {
    return (number % 2) == 0 ? "Even" : "Odd"
}
