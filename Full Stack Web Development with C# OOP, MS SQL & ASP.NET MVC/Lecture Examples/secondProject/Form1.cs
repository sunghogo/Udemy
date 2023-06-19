using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Diagnostics;

namespace secondProject
{
    public partial class mainForm : Form
    {
        public mainForm()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // 17. Using MessageBox
            //string messageText = "Simple message text";
            //string messageTitle = "Message title";
            //MessageBox.Show(messageText, messageTitle);

            //{
            //    string message = "Did you see icon?";
            //    string title = "ok";
            //    MessageBox.Show(
            //        message,
            //        title,
            //        MessageBoxButtons.YesNo,
            //        MessageBoxIcon.Information
            //    );
            //}

            //{
            //    string message = "Do you want to close the window";
            //    string messageTitle = "Close Window";
            //    MessageBoxButtons buttons = MessageBoxButtons.YesNo;
            //    DialogResult result = MessageBox.Show(message, messageTitle, buttons);
            //    if (result == DialogResult.Yes)
            //    {
            //        Debug.WriteLine("Hi Debug Message Below");
            //        Debug.WriteLine(this);
            //        this.Close();
            //    }
            //    else if (result == DialogResult.No)
            //    {
            //        // do nothing
            //    }
            //}

            //18. Button
            firstButton.Text = "changed";
        }

        private void firstButton_Click(object sender, EventArgs e)
        {
            MessageBox.Show("hello");
            firstButton.Text = "Clicked";
        }

        private void firstButton_KeyPress(object sender, KeyPressEventArgs e)
        {
            firstButton.Text = "Enter";
        }
    }
}
