#include <iostream>

using namespace std;

/*
    Types of Constants in C++:
        Literal Constants:
            Integer Literal Constant Suffixes:
                'U' for unsigned, 'L' for long
            FP Literal Constant Suffixes:
                'F' for float, 'L' long double
            Character Literal Constants/Escape Codes:
                '\n', '\r', '\t', '\b', '\'', '\"', '\\'
        Declared Constants (const keyword)
        Constant Expressions (constexpr keyword)
        Enumerated Constants (enum keyword)
        Defined Constants (#define preprocessor director):
            Don't use these in modern C++, use const keyword
*/

int main() {
    cout << "Hello, welcome to Frank's Carpet Cleaning Service" << endl;
    cout << "\nHow mamy rooms would you liked cleaned?" << endl;

    int numberOfRooms {0};
    cin >> numberOfRooms;

    const double pricePerRoom {32.5};
    const double salesTax {0.06};
    const int estimateExpiry {30}; //days

    const double totalPreTax = pricePerRoom * numberOfRooms;
    const double totalTax = totalPreTax * salesTax;
    const double totalPostTax = totalPreTax + totalTax;


    cout << "\nEstimate for carpet cleaning service" << endl;
    cout << "Number of rooms: " << numberOfRooms << endl;
    cout << "Price per room: $" << pricePerRoom << endl;
    cout << "Cost: $" << totalPreTax << endl;
    cout << "Tax: $" << totalPreTax * salesTax << endl;
    cout << "==============================================" << endl;
    cout << "Total estimate: $" << totalPostTax << endl;
    cout << "This estimate is valid for " << estimateExpiry << " days" << endl;

    cout << endl;
    return 0;
}