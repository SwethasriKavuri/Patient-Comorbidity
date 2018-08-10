using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.IO;
using System.Data.OleDb;

namespace ExcelToGridview
{
    public partial class ExcelToGrid : System.Web.UI.Page
    {
        DataTable dt = null;

        public System.Data.DataTable xlsInsert(string pth)
        {
            string strcon = string.Empty;
            if (Path.GetExtension(pth).ToLower().Equals(".xls") ||
                Path.GetExtension(pth).ToLower().Equals(".xlsx"))
            {
                strcon = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source="
                                + pth +
                                ";Extended Properties=\"Excel 8.0;HDR=YES;\"";
            }
            else
            {
                strcon = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source="
                              + pth +
                              ";Extended Properties=\"Excel 12.0;HDR=YES;\"";
            }
            string strselect = "Select * from [Sheet1$]";
            DataTable exDT = new DataTable();
            using (OleDbConnection excelCon = new OleDbConnection(strcon))
            {
                try
                {
                    excelCon.Open();
                    using (OleDbDataAdapter exDA = 
            new OleDbDataAdapter(strselect, excelCon))
                    {
                        exDA.Fill(exDT);
                    }
                }
                catch (OleDbException oledb)
                {
                    throw new Exception(oledb.Message.ToString());
                }
                finally
                {
                    excelCon.Close();
                }
                for (int i = 0; i < exDT.Rows.Count; i++)
                {
                    // Check if first column is empty
                    // If empty then delete such record
                    if (exDT.Rows[i]["CardNo"].ToString() == string.Empty)
                    {
                        exDT.Rows[i].Delete();
                    }
                }
                exDT.AcceptChanges();  // refresh rows changes
                if (exDT.Rows.Count == 0)
                {
                    throw new Exception("File uploaded has no record found.");
                }
                return exDT;
            }
        }

        protected void btnUpload_Click(object sender, EventArgs e)
        {
            if (xlsUpload.HasFile)
            {
                bool uplod = true;
                string fleUpload = Path.GetExtension(xlsUpload.FileName.ToString());
                if (fleUpload.Trim().ToLower() == ".xls" | 
            fleUpload.Trim().ToLower() == ".xlsx")
                {
                    // Save excel file into Server sub dir
                    // to catch excel file downloading permission
                    xlsUpload.SaveAs(Server.MapPath("~/XlsUploadFile/" +
                        xlsUpload.FileName.ToString()));
                    string uploadedFile = (Server.MapPath("~/XlsUploadFile/" +
                        xlsUpload.FileName.ToString()));
                    try
                    {
                        dt = xlsInsert(uploadedFile);
                        GridView1.DataSource = dt;
                        GridView1.DataBind();
                    }
                    catch (Exception)
                    {
                        uplod = false;
                        this.lblMessage.Text = "System uploading Error";
                    }
                    File.Delete(uploadedFile); // Delete upload Excel
                            //file in sub dir 'lsUploadFile' no need to keep...
                }
                if (uplod)
                {
                    string mess1 = "File has successfully uploaded";
                    this.lblMessage.Text = mess1;
                }
            }
            else
            {
                this.lblMessage.Text = "Please select file to upload.";
            }

        }
        protected void Page_Load(object sender, EventArgs e)
        {

        }
    }
