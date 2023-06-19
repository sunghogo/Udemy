// See https://aka.ms/new-console-template for more information

using Microsoft.VisualBasic;
using System.Runtime.CompilerServices;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            //12. What Is Variables in C# ?
            string name;
            float shoe_size;

            string school_name;

            string name1,
                name2;
            int edge1 = 10,
                edge2,
                edge3;

            //13.Type Conversions in Variables
            {
                byte x = 12;
                short y = 13;
                int z = 4;
                long t = 5;
                float k = 6;

                y = x;
                z = y;

                // Error, cannot implicit type convert from larger to smaller types
                //x = y;
                //y = z;
            }

            {
                double x = 24;
                int y;
                y = (int)x;
                y = Convert.ToInt32(x);
            }

            {
                double x = 24;
                int y = 12;
                float z = 6;
                char t = '+';
                string s = x.ToString();
                s = z.ToString();
                s = t.ToString();
                s = y.ToString();

                Console.WriteLine(s);
                Console.ReadKey();
            }
        }
    }
}
