﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace secondProject
{
    public partial class frmGetData : Form
    {
        public frmGetData()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            // 26.Switch and Data Transfer Between Forms in C#
            //frmShowData frmShow = new frmShowData();
            //frmShow.ShowDialog();

            string name = txtName.Text;
            string surname = txtSurname.Text;
            string nameSurname = name + surname;

            frmShowData frmShow = new frmShowData();
            frmShow.lblNameSurname.Text = nameSurname;
            frmShow.Show();
        }
    }
}
