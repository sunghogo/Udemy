using System.Runtime.InteropServices;

namespace NamingConventionsCodingStandards
{
    // Class names in PascalCase like ClientActivity (nouns)
    class Program
    {
        // Method names in PascalCase like CalculateValue (verbs)
        // Method arguments in camelCase like firstNumber
        static void Main(string[] args)
        {
            // local variables in camelcase like itemCount
            int itemCount = 0;

            // avoid abbreviations like use userControl instead of usrCtr

            // don't use numbers at the start of variable names
            // avoid snake case and underscores, underscore at beginning is ok

            // Correct
            string myName;
            int lastNum;
            bool isSaved;

            // Avoid spelling out class names for primitives
            //String myName;
            //Int32 lastNum
            //Boolean isSaved;

        }
    }
}
