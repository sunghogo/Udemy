namespace ConsoleClassMethods
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Prints and puts cursor in the next line
            Console.WriteLine("HELLO WELCOME");

            // Prints and keeps cursor on the same line
            Console.Write("HELLO");
            Console.Write(" WELCOME\n");

            // Takes a string or integer input, and returns it as the output value
            Console.Write("Enter a string and press enter: ");
            string readLine = Console.ReadLine();
            Console.WriteLine($"You have entered {readLine}");

            // Takes a single input of type string and it returns the ASCII value (0-255) of that input
            Console.Write("Enter a string and press enter: ");
            int read = Console.Read();
            Console.WriteLine($"ASCII value is {read}");

            // Takes a single input of type string and it returns the Key info
            // Usually use this keep console open
            Console.WriteLine("Console.ReadKey()");
            System.ConsoleKeyInfo readKey = Console.ReadKey();
            Console.WriteLine(readKey);
        }
    }
}
