// See https://aka.ms/new-console-template for more information
namespace ilk_uygulama
{
    class Program
    {
        static void Main(string[] args)
        {
            // 10.Functions Used in Console Environment to Write and Read
            //Console.WriteLine("Hello ");
            //Console.WriteLine("What is your name");
            //Console.ReadKey();

            // 11. Read & Readline
            Console.WriteLine("What is your name?");
            string name = Console.ReadLine();
            Console.WriteLine(name + " welcome to our lesson");
            Console.ReadKey();

            Console.WriteLine("What is your name again?");
            int asciiCode = Console.Read();
            Console.WriteLine(asciiCode);neeo
            Console.ReadKey();
        }
    }
}
