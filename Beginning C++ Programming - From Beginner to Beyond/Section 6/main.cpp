#include <iostream>

using namespace std;

// This program will calculate the area of a room in square feet

int main() {
    // Uninitialized variables will have unknown values stored in them

    // Best practice to declare variables closest to where they are first used

    cout << "Enter the width of the room: ";
    int roomWidth {0};
    cin >> roomWidth;
    
    cout << "Enter the width of the room: ";
    int roomLength {0};
    cin >> roomLength;

    cout << "The area of the room is: " << roomWidth * roomLength << " square feet" << endl;

    return 0;
}