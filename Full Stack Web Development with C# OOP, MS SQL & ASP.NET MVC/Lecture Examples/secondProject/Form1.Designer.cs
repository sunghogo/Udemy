namespace secondProject
{
    partial class mainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.firstButton = new System.Windows.Forms.Button();
            this.firstLabel = new System.Windows.Forms.Label();
            this.labelControl = new System.Windows.Forms.Button();
            this.linkLabel1 = new System.Windows.Forms.LinkLabel();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.textLabel = new System.Windows.Forms.Label();
            this.textButton = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.radioButton1 = new System.Windows.Forms.RadioButton();
            this.checkBox1 = new System.Windows.Forms.CheckBox();
            this.comboBox1 = new System.Windows.Forms.ComboBox();
            this.comboBoxButton = new System.Windows.Forms.Button();
            this.controlBoxLabel1 = new System.Windows.Forms.Label();
            this.controlBoxLabel2 = new System.Windows.Forms.Label();
            this.dateTimePicker1 = new System.Windows.Forms.DateTimePicker();
            this.dateTimePickerButton = new System.Windows.Forms.Button();
            this.dateTimePickerLabel1 = new System.Windows.Forms.Label();
            this.dateTimePickerLabel2 = new System.Windows.Forms.Label();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // firstButton
            // 
            this.firstButton.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.firstButton.BackColor = System.Drawing.SystemColors.Control;
            this.firstButton.BackgroundImageLayout = System.Windows.Forms.ImageLayout.None;
            this.firstButton.Font = new System.Drawing.Font("Microsoft Sans Serif", 7.875F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.firstButton.Image = global::secondProject.Properties.Resources._5610944;
            this.firstButton.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.firstButton.Location = new System.Drawing.Point(56, 48);
            this.firstButton.Name = "firstButton";
            this.firstButton.Size = new System.Drawing.Size(284, 80);
            this.firstButton.TabIndex = 0;
            this.firstButton.Text = "first button";
            this.firstButton.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            this.firstButton.UseVisualStyleBackColor = false;
            this.firstButton.Click += new System.EventHandler(this.firstButton_Click);
            this.firstButton.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.firstButton_KeyPress);
            // 
            // firstLabel
            // 
            this.firstLabel.AutoSize = true;
            this.firstLabel.Location = new System.Drawing.Point(57, 190);
            this.firstLabel.Name = "firstLabel";
            this.firstLabel.Size = new System.Drawing.Size(76, 25);
            this.firstLabel.TabIndex = 1;
            this.firstLabel.Text = "label1";
            // 
            // labelControl
            // 
            this.labelControl.BackColor = System.Drawing.SystemColors.Control;
            this.labelControl.Cursor = System.Windows.Forms.Cursors.Default;
            this.labelControl.Location = new System.Drawing.Point(171, 190);
            this.labelControl.Name = "labelControl";
            this.labelControl.Size = new System.Drawing.Size(121, 41);
            this.labelControl.TabIndex = 2;
            this.labelControl.Text = "label control";
            this.labelControl.UseVisualStyleBackColor = false;
            this.labelControl.Click += new System.EventHandler(this.labelControl_Click);
            // 
            // linkLabel1
            // 
            this.linkLabel1.AutoSize = true;
            this.linkLabel1.Location = new System.Drawing.Point(57, 234);
            this.linkLabel1.Name = "linkLabel1";
            this.linkLabel1.Size = new System.Drawing.Size(120, 25);
            this.linkLabel1.TabIndex = 3;
            this.linkLabel1.TabStop = true;
            this.linkLabel1.Text = "linkLabel1";
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(29, 57);
            this.textBox1.Multiline = true;
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(263, 109);
            this.textBox1.TabIndex = 4;
            this.textBox1.Text = "first text";
            this.textBox1.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.textBox1_KeyPress);
            // 
            // textLabel
            // 
            this.textLabel.AutoSize = true;
            this.textLabel.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.textLabel.Location = new System.Drawing.Point(22, 205);
            this.textLabel.Name = "textLabel";
            this.textLabel.Size = new System.Drawing.Size(106, 37);
            this.textLabel.TabIndex = 5;
            this.textLabel.Text = "label1";
            // 
            // textButton
            // 
            this.textButton.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.textButton.Location = new System.Drawing.Point(170, 205);
            this.textButton.Name = "textButton";
            this.textButton.Size = new System.Drawing.Size(122, 45);
            this.textButton.TabIndex = 6;
            this.textButton.Text = "button1";
            this.textButton.UseVisualStyleBackColor = true;
            this.textButton.Click += new System.EventHandler(this.textButton_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.textBox1);
            this.groupBox1.Controls.Add(this.textButton);
            this.groupBox1.Controls.Add(this.textLabel);
            this.groupBox1.Location = new System.Drawing.Point(56, 300);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(361, 275);
            this.groupBox1.TabIndex = 7;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "groupBox1";
            // 
            // radioButton1
            // 
            this.radioButton1.AutoSize = true;
            this.radioButton1.Location = new System.Drawing.Point(488, 74);
            this.radioButton1.Name = "radioButton1";
            this.radioButton1.Size = new System.Drawing.Size(177, 29);
            this.radioButton1.TabIndex = 8;
            this.radioButton1.TabStop = true;
            this.radioButton1.Text = "radioButton1";
            this.radioButton1.UseVisualStyleBackColor = true;
            this.radioButton1.CheckedChanged += new System.EventHandler(this.radioButton1_CheckedChanged);
            // 
            // checkBox1
            // 
            this.checkBox1.AutoSize = true;
            this.checkBox1.Location = new System.Drawing.Point(488, 172);
            this.checkBox1.Name = "checkBox1";
            this.checkBox1.Size = new System.Drawing.Size(159, 29);
            this.checkBox1.TabIndex = 9;
            this.checkBox1.Text = "checkBox1";
            this.checkBox1.UseVisualStyleBackColor = true;
            this.checkBox1.CheckedChanged += new System.EventHandler(this.checkBox1_CheckedChanged);
            this.checkBox1.CheckStateChanged += new System.EventHandler(this.checkBox1_CheckStateChanged);
            // 
            // comboBox1
            // 
            this.comboBox1.FormattingEnabled = true;
            this.comboBox1.Items.AddRange(new object[] {
            "Monday",
            "Sunday",
            "Tuesday"});
            this.comboBox1.Location = new System.Drawing.Point(488, 275);
            this.comboBox1.Name = "comboBox1";
            this.comboBox1.Size = new System.Drawing.Size(159, 33);
            this.comboBox1.TabIndex = 10;
            this.comboBox1.Text = "Choose";
            this.comboBox1.SelectedIndexChanged += new System.EventHandler(this.comboBox1_SelectedIndexChanged);
            this.comboBox1.SelectedValueChanged += new System.EventHandler(this.comboBox1_SelectedValueChanged);
            // 
            // comboBoxButton
            // 
            this.comboBoxButton.Location = new System.Drawing.Point(709, 274);
            this.comboBoxButton.Name = "comboBoxButton";
            this.comboBoxButton.Size = new System.Drawing.Size(110, 33);
            this.comboBoxButton.TabIndex = 11;
            this.comboBoxButton.Text = "button1";
            this.comboBoxButton.UseVisualStyleBackColor = true;
            this.comboBoxButton.Click += new System.EventHandler(this.comboBoxButton_Click);
            // 
            // controlBoxLabel1
            // 
            this.controlBoxLabel1.AutoSize = true;
            this.controlBoxLabel1.Location = new System.Drawing.Point(488, 335);
            this.controlBoxLabel1.Name = "controlBoxLabel1";
            this.controlBoxLabel1.Size = new System.Drawing.Size(76, 25);
            this.controlBoxLabel1.TabIndex = 12;
            this.controlBoxLabel1.Text = "label1";
            // 
            // controlBoxLabel2
            // 
            this.controlBoxLabel2.AutoSize = true;
            this.controlBoxLabel2.Location = new System.Drawing.Point(488, 381);
            this.controlBoxLabel2.Name = "controlBoxLabel2";
            this.controlBoxLabel2.Size = new System.Drawing.Size(76, 25);
            this.controlBoxLabel2.TabIndex = 13;
            this.controlBoxLabel2.Text = "label2";
            // 
            // dateTimePicker1
            // 
            this.dateTimePicker1.CustomFormat = "dd/MM/yyyy hh.mm";
            this.dateTimePicker1.Format = System.Windows.Forms.DateTimePickerFormat.Custom;
            this.dateTimePicker1.Location = new System.Drawing.Point(488, 471);
            this.dateTimePicker1.MaxDate = new System.DateTime(9000, 1, 1, 0, 0, 0, 0);
            this.dateTimePicker1.MinDate = new System.DateTime(2000, 1, 1, 0, 0, 0, 0);
            this.dateTimePicker1.Name = "dateTimePicker1";
            this.dateTimePicker1.Size = new System.Drawing.Size(273, 31);
            this.dateTimePicker1.TabIndex = 14;
            this.dateTimePicker1.Value = new System.DateTime(2000, 1, 1, 0, 0, 0, 0);
            this.dateTimePicker1.ValueChanged += new System.EventHandler(this.dateTimePicker1_ValueChanged);
            // 
            // dateTimePickerButton
            // 
            this.dateTimePickerButton.Location = new System.Drawing.Point(784, 471);
            this.dateTimePickerButton.Name = "dateTimePickerButton";
            this.dateTimePickerButton.Size = new System.Drawing.Size(118, 30);
            this.dateTimePickerButton.TabIndex = 15;
            this.dateTimePickerButton.Text = "button1";
            this.dateTimePickerButton.UseVisualStyleBackColor = true;
            this.dateTimePickerButton.Click += new System.EventHandler(this.dateTimePickerButton_Click);
            // 
            // dateTimePickerLabel1
            // 
            this.dateTimePickerLabel1.AutoSize = true;
            this.dateTimePickerLabel1.Location = new System.Drawing.Point(493, 531);
            this.dateTimePickerLabel1.Name = "dateTimePickerLabel1";
            this.dateTimePickerLabel1.Size = new System.Drawing.Size(76, 25);
            this.dateTimePickerLabel1.TabIndex = 16;
            this.dateTimePickerLabel1.Text = "label1";
            // 
            // dateTimePickerLabel2
            // 
            this.dateTimePickerLabel2.AutoSize = true;
            this.dateTimePickerLabel2.Location = new System.Drawing.Point(498, 584);
            this.dateTimePickerLabel2.Name = "dateTimePickerLabel2";
            this.dateTimePickerLabel2.Size = new System.Drawing.Size(76, 25);
            this.dateTimePickerLabel2.TabIndex = 17;
            this.dateTimePickerLabel2.Text = "label2";
            // 
            // mainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(13F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Lavender;
            this.ClientSize = new System.Drawing.Size(1038, 646);
            this.Controls.Add(this.dateTimePickerLabel2);
            this.Controls.Add(this.dateTimePickerLabel1);
            this.Controls.Add(this.dateTimePickerButton);
            this.Controls.Add(this.dateTimePicker1);
            this.Controls.Add(this.controlBoxLabel2);
            this.Controls.Add(this.controlBoxLabel1);
            this.Controls.Add(this.comboBoxButton);
            this.Controls.Add(this.comboBox1);
            this.Controls.Add(this.checkBox1);
            this.Controls.Add(this.radioButton1);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.linkLabel1);
            this.Controls.Add(this.labelControl);
            this.Controls.Add(this.firstLabel);
            this.Controls.Add(this.firstButton);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 7.875F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.Fixed3D;
            this.Name = "mainForm";
            this.Text = "Button";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button firstButton;
        private System.Windows.Forms.Label firstLabel;
        private System.Windows.Forms.Button labelControl;
        private System.Windows.Forms.LinkLabel linkLabel1;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.Label textLabel;
        private System.Windows.Forms.Button textButton;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.RadioButton radioButton1;
        private System.Windows.Forms.CheckBox checkBox1;
        private System.Windows.Forms.ComboBox comboBox1;
        private System.Windows.Forms.Button comboBoxButton;
        private System.Windows.Forms.Label controlBoxLabel1;
        private System.Windows.Forms.Label controlBoxLabel2;
        private System.Windows.Forms.DateTimePicker dateTimePicker1;
        private System.Windows.Forms.Button dateTimePickerButton;
        private System.Windows.Forms.Label dateTimePickerLabel1;
        private System.Windows.Forms.Label dateTimePickerLabel2;
    }
}

