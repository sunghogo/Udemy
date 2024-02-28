namespace StringParsing
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // This only concatenates two strings
            string myString = "15";
            string mySecondString = "13";
            string result = myString + mySecondString;
            Console.WriteLine($"result: {result}");

            // Parse strings first
            int num1 = Int32.Parse(myString);
            int num2 = Int32.Parse(mySecondString);
            int resultInt = num1 + num2;
            Console.WriteLine($"resultInt: {resultInt}");

            // Parse vs TryParse
            myString = "15a";
            int num1TryParse;
            Int32.TryParse(myString, out num1TryParse);
            Console.WriteLine($"num1TryParse: {num1TryParse}");


            Console.ReadKey();
        }
    }
}
