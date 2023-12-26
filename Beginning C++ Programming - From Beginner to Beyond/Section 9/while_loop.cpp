/*
    while (expression) {
        statement;
    }
*/

#include <iostream>
using namespace std;

int main() {
    int num {};
    cout << "Enter a positive integer - start the countdown: ";
    cin >> num;

    while (num > 0) {
        cout << num << endl;
        num--;
    }
    cout << "Blastoff!" << endl;


    cout << "Enter a positive integer to count up to: ";
    cin >> num;

    int i {1};
    while (num >= i) {
        cout << i << endl;
        i++;
    }
    cout << "Blastoff!" << endl;
    

    int number {};
    cout << "Enter a integer less than 100: ";
    cin >> number;

    while (number >= 100) {
        cout << "Enter a integer less than 100: ";
        cin >> number;
    }
    cout << "Thanks" << endl;


    bool done {false};
    int number2 {0};

    while(!done) {
        cout << "Enter an integer between 1 and 5: ";
        cin >> number2;
        if (number2 <= 1 || number2 >= 5)
            cout << "Out of range, try again" << endl;
        else {
            cout << "Thanks!" << endl;
            done = true;
        }
    }

    cout << endl;
    return 0;
}