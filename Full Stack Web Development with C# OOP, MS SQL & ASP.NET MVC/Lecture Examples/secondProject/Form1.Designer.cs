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
            // mainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(13F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Lavender;
            this.ClientSize = new System.Drawing.Size(939, 489);
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
    }
}

