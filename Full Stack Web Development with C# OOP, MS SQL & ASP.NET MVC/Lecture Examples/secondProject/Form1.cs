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

            // 18. Button
            firstButton.Text = "changed";

            // 22.Radiobutton
            {
                radioButton1.Checked = false;
                bool control = radioButton1.Checked;
            }

            // 23.Checbox in c sharp
            {
                checkBox1.Checked = false;
                bool control = checkBox1.Checked;
            }

            // 24.Combobox in c sharp programming
            comboBox1.Items.Add("Wednesday");
            comboBox1.Items.Add("Thursday");
            comboBox1.Items.Add("Friday");
            comboBox1.Items.Add("Saturday");
            //comboBox1.SelectedIndex = 1;
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

        //19. Label
        private void labelControl_Click(object sender, EventArgs e)
        {
            firstLabel.Text = "first label";
            firstLabel.BackColor = Color.Red;
            firstLabel.ForeColor = Color.White;
        }

        // 20. Textbox in c#
        private void textBox1_KeyPress(object sender, KeyPressEventArgs e)
        {
            //if (!char.IsControl(e.KeyChar) && !char.IsDigit(e.KeyChar) && (e.KeyChar != ','))
            //{
            //    e.Handled = true;
            //}

            //// Only allow one decimal point
            //if (e.KeyChar == '.' && ((sender as TextBox).Text.IndexOf('.') > -1))
            //{
            //    e.Handled = true;
            //}
        }

        private void textButton_Click(object sender, EventArgs e)
        {
            string labelText = textBox1.Text;
            textLabel.Text = labelText;
        }

        //22.Radiobutton
        private void radioButton1_CheckedChanged(object sender, EventArgs e)
        {
            MessageBox.Show("Check changed");
        }

        //23.Checbox in c sharp
        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
            MessageBox.Show("Check changed");
        }

        private void checkBox1_CheckStateChanged(object sender, EventArgs e)
        {
            MessageBox.Show("Check state changed");
        }

        //24. Combobox in c sharp programming
        private void comboBoxButton_Click(object sender, EventArgs e)
        {
            //string selectedItem = comboBox1.SelectedItem.ToString();
            //MessageBox.Show(selectedItem);
            int valueOrder = comboBox1.SelectedIndex;
            MessageBox.Show(valueOrder.ToString());
        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            controlBoxLabel1.Text = "Combobox selected index changed";
        }

        private void comboBox1_SelectedValueChanged(object sender, EventArgs e)
        {
            controlBoxLabel2.Text = "Combobox selected value changed";
        }

        //25. Datetimepicker in c sharp for beginners
        private void dateTimePickerButton_Click(object sender, EventArgs e)
        {
            DateTime birthday = dateTimePicker1.Value;
            dateTimePickerLabel1.Text = birthday.AddYears(2).ToShortDateString();
            dateTimePickerLabel2.Text = birthday.AddYears(-2).ToShortDateString();
            MessageBox.Show(birthday.ToString());
        }

        private void dateTimePicker1_ValueChanged(object sender, EventArgs e)
        {
            MessageBox.Show(dateTimePicker1.Value.ToShortDateString());
        }
    }
}
