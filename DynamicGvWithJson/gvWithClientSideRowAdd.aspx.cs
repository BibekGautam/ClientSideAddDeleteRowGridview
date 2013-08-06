using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JqGrid
{
    public partial class gvWithClientSideRowAdd : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                BindOneRowToGrid();
            }
        }

        private void BindOneRowToGrid()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("Id", typeof(int));
            dt.Columns.Add("Name", typeof(string));
            dt.Columns.Add("Address", typeof(string));
            DataRow dr = dt.NewRow();
            dr["Id"] = 1;
            dr["Name"] = "";
            dr["Address"] = "";
            dt.Rows.Add(dr);
            gvDynamicRowAdd.DataSource = dt;
            gvDynamicRowAdd.DataBind();
        }

        protected void gvDynamicRowAdd_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                DropDownList address = (DropDownList)e.Row.FindControl("ddlAddress");
                address.Items.Add(new ListItem("-Select-", "0"));
                address.Items.Add(new ListItem("-Kathmandu-", "1"));
                address.Items.Add(new ListItem("-Lalitpur-", "2"));
                address.Items.Add(new ListItem("-Bhaktapur-", "3"));

                LinkButton lnkDelete = (LinkButton)e.Row.FindControl("lnkDelete");
                lnkDelete.Attributes.Add("onclick", "return false;");
            }
        }

        protected void btn_CheckGrid_Click(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("Id", typeof(int));
            dt.Columns.Add("Name", typeof(string));
            dt.Columns.Add("Address", typeof(string));

            foreach (GridViewRow Row in gvDynamicRowAdd.Rows)
            {
                Label lblId =(Label) Row.FindControl("lblId");
                TextBox txtName = (TextBox)Row.FindControl("txtName");
                DropDownList ddlAddress = (DropDownList)Row.FindControl("ddlAddress");
                DataRow dr= dt.NewRow();
                dr["Id"] = lblId.Text;
                dr["Name"] = txtName.Text;
                dr["Address"] = ddlAddress.SelectedValue;
                dt.Rows.Add(dr);
            }
        }
    }
}