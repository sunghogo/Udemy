namespace ImplicitExplicitConversion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double myDouble = 13.37;
            int myInt;

            // Implicit Conversion (from smaller to bigger similar types)
            int num = 12390532;
            long bigNum = num;

            float myFloat = 13.37f;
            double myNewDouble = myFloat;

            Console.WriteLine($"int: {num}, bigNum: {bigNum}");
            Console.WriteLine($"float: {myFloat}, myNewDouble: {myNewDouble}");

            // Explicit Conversion
            // cast double to int
            myInt = (int)myDouble;
            Console.WriteLine($"myInt: myInt");

            // Type Conversion
            string myDoubleString = myDouble.ToString(); // "13.37"
            string myFloatString = myFloat.ToString();

            bool sunIsShining = false;
            string myBoolString = sunIsShining.ToString();

            Console.WriteLine($"myDoubleString: {myDoubleString}");
            Console.WriteLine($"myFloatString: {myFloatString}");
            Console.WriteLine($"myBoolString: {myBoolString}");

            Console.ReadKey();
        }
    }
}
