#include <iostream>
#include <string>

using namespace std;

void employee_profile() {
    
    //----WRITE YOUR CODE BELOW THIS LINE----
    int age;
    double hourly_wage {23.50};
    string name;

    // cout << "Please input employee name and age (ex. Dan 25): ";
    cin >> name >> age;
    
    
    //----WRITE YOUR CODE ABOVE THIS LINE----
    //----DO NOT MODIFY THE CODE BELOW THIS LINE----
    
    cout << name << " " << age << " " << hourly_wage;
}

int main () {
    employee_profile();
    return 0;
}