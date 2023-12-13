using System.Runtime.CompilerServices;

namespace DataTypes
{
    //public class Lecture
    //{
    //    static int age;

    //    // Integer data typess
    //    static sbyte x_sbyte = 120; // signed 1 byte: -128 to 127
    //    static byte x_byte = 120; // unsigned 1 byte: 0 to 255
    //    static short x_short = 30000; // signed 2 byte: -32767 - 32767
    //    static int x_int = 2000000000; // signed 4 byte: -2,147,483,648 to 2,147,483,647
    //    static long x_long = 9000000000000; // signed 8 byte: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

    //    // Float data types
    //    static float x_float = 99.99f; // 4 byte; up to 7 decimal digit precision (Requires 'f')
    //    static double x_double = 99.9999999; // 8 byte: up to 15 decimal digit precision
    //    static decimal x_decimal = 99.99999999999999999m; // 16 byte: up to 28 decimal digit precision (Requires 'm')

    //    // Other data types
    //    static bool x_bool; // 1 bit
    //    static char x_char = 'x'; // 2 bytes, (Requires '') 
    //    static string x_string = "xxxxx" // 2 bytes per char, (Requires "")

    //    public static void Main(string[] args)
    //    {
    //        age = 20;
    //        Console.WriteLine(age);
    //    }
    //}

    class Program
    {
        static void Main(string[] args)
        {
            // declaring a variable
            int num1;

            // assigning/initiializing a value to a variable
            num1 = 13;

            // declaring and initializing a variable ine one go
            int num2 = 23;

            // resassigning a variable
            num2 = 100;

            // summing variables
            int sum = num1 + num2;

            // declaring multiple vriables at once
            int num3, num4, num5;

            // using concatenation
            Console.WriteLine("num1 is " + num1); //"cw" + TAB to quickhane Console.WriteLine()
            Console.WriteLine("num1: " + num1 + " + num2: " + num2 + " is " + sum);

            // using double datatype
            double d1 = 3.1415;
            double d2 = 5.1;
            double dDiv = d1 / d2;
            Console.WriteLine("d1/d2 is " + dDiv);

            // using float datatype
            float f1 = 3.1415f;
            float f2 = 5.1f;
            float fDiv = f1 / f2;
            Console.WriteLine("f1/f2 is " + fDiv);

            // using long datatype
            long myLongNum = 18123098710270981;
            //int myLongNum = 18123098710270981; // error

            // operations with different datatypes
            double dIDiv = d1 / num1;
            //int dIDivInt = d1 / num1; // error
            Console.WriteLine("d1/num1 is " + dIDiv);

            // declare and initialize string
            // class is 'String', but coding standard is to use lowercase to declare string type
            string myName = "Daniel";

            // string concatenation
            string message = "My name is " + myName;

            // String class methods
            string capsMessage = message.ToUpper();
            string lowerMessage = message.ToLower();

            // string objects are immutable on heap so resassigning a string variable just changes the pointer to the newly created string object
            message = message.ToUpper();

            Console.WriteLine(lowerMessage);
            Console.WriteLine(message);


            Console.Read();
        }
    }
}
