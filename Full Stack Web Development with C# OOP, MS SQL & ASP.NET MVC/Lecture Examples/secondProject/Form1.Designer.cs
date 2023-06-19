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
            this.firstButton.Size = new System.Drawing.Size(185, 80);
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
            this.firstLabel.Location = new System.Drawing.Point(63, 249);
            this.firstLabel.Name = "firstLabel";
            this.firstLabel.Size = new System.Drawing.Size(76, 25);
            this.firstLabel.TabIndex = 1;
            this.firstLabel.Text = "label1";
            // 
            // labelControl
            // 
            this.labelControl.BackColor = System.Drawing.SystemColors.Control;
            this.labelControl.Cursor = System.Windows.Forms.Cursors.Default;
            this.labelControl.Location = new System.Drawing.Point(177, 249);
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
            this.linkLabel1.Location = new System.Drawing.Point(63, 293);
            this.linkLabel1.Name = "linkLabel1";
            this.linkLabel1.Size = new System.Drawing.Size(120, 25);
            this.linkLabel1.TabIndex = 3;
            this.linkLabel1.TabStop = true;
            this.linkLabel1.Text = "linkLabel1";
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(387, 73);
            this.textBox1.Multiline = true;
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(290, 184);
            this.textBox1.TabIndex = 4;
            this.textBox1.Text = "first text";
            this.textBox1.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.textBox1_KeyPress);
            // 
            // textLabel
            // 
            this.textLabel.AutoSize = true;
            this.textLabel.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.textLabel.Location = new System.Drawing.Point(387, 292);
            this.textLabel.Name = "textLabel";
            this.textLabel.Size = new System.Drawing.Size(106, 37);
            this.textLabel.TabIndex = 5;
            this.textLabel.Text = "label1";
            // 
            // textButton
            // 
            this.textButton.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.textButton.Location = new System.Drawing.Point(544, 292);
            this.textButton.Name = "textButton";
            this.textButton.Size = new System.Drawing.Size(122, 45);
            this.textButton.TabIndex = 6;
            this.textButton.Text = "button1";
            this.textButton.UseVisualStyleBackColor = true;
            this.textButton.Click += new System.EventHandler(this.textButton_Click);
            // 
            // mainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(13F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Lavender;
            this.ClientSize = new System.Drawing.Size(939, 489);
            this.Controls.Add(this.textButton);
            this.Controls.Add(this.textLabel);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.linkLabel1);
            this.Controls.Add(this.labelControl);
            this.Controls.Add(this.firstLabel);
            this.Controls.Add(this.firstButton);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 7.875F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.Fixed3D;
            this.Name = "mainForm";
            this.Text = "Button";
            this.Load += new System.EventHandler(this.Form1_Load);
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
    }
}

