using System.Runtime.CompilerServices;

namespace DataTypes
{
    public class Lecture
    {
        static int age;

        // Integer data typess
        static sbyte x_sbyte = 120; // signed 1 byte: -128 to 127
        static byte x_byte = 120; // unsigned 1 byte: 0 to 255
        static short x_short = 30000; // signed 2 byte: -32767 - 32767
        static int x_int = 2000000000; // signed 4 byte: -2,147,483,648 to 2,147,483,647
        static long x_long = 9000000000000; // signed 8 byte: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

        // Float data types
        static float x_float = 99.99f; // 4 byte; up to 7 decimal digit precision (Requires 'f')
        static double x_double = 99.9999999; // 8 byte: up to 15 decimal digit precision
        static decimal x_decimal = 99.99999999999999999m; // 16 byte: up to 28 decimal digit precision (Requires 'm')

        // Other data types
        static bool x_bool; // 1 bit
        static char x_char = 'x'; // 2 bytes, (Requires '') 
        static string x_string = "xxxxx" // 2 bytes per char, (Requires "")

        public static void Main(string[] args)
        {
            age = 20;
            Console.WriteLine(age);
        }
    }
}
