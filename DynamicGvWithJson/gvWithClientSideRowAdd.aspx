<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="gvWithClientSideRowAdd.aspx.cs" Inherits="JqGrid.gvWithClientSideRowAdd" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <script src="Scripts/jquery-1.8.2.min.js"></script>
    <script src="Scripts/gvAddRowClientSide.js"></script>
    <style type="text/css">
        .toPopup {
            font-family: "lucida grande",tahoma,verdana,arial,sans-serif;
            background: none repeat scroll 0 0 #FFFFFF;
            border: 10px solid #ccc;
            border-radius: 3px 3px 3px 3px;
            color: #333333;
            font-size: 14px;
            left: 50%;
            margin-left: -340px;
            position: fixed;
            width: 140px;
            z-index: 2;
            display:none;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div id="Popup" class="toPopup">
            First Complete the field
        </div>
        <div style="margin-top:20px">
            <a href="" target="_blank" onclick="AddNewRecord();return false;">Add New Row</a>
        </div>
        <div>
            <asp:GridView ID="gvDynamicRowAdd" ClientIDMode="Static" runat="server" AutoGenerateColumns="False" BackColor="White" BorderColor="White" BorderStyle="Ridge" BorderWidth="2px" CellPadding="3" CellSpacing="1" GridLines="None" OnRowDataBound="gvDynamicRowAdd_RowDataBound">
                <Columns>
                    <asp:TemplateField HeaderText="Id">
                        <ItemTemplate>
                            <asp:Label ID="lblId" ClientIDMode="Static" CssClass="RowId" runat="server" Text="1"></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Name">
                        <ItemTemplate>
                            <asp:TextBox ID="txtName" Text="" runat="server"></asp:TextBox>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Address">
                        <ItemTemplate>
                            <asp:DropDownList ID="ddlAddress" Width="120px" runat="server"></asp:DropDownList>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Delete">
                        <ItemTemplate>
                            <asp:LinkButton ID="lnkDelete" CssClass="removeRow" runat="server">Delete</asp:LinkButton>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
                <FooterStyle BackColor="#C6C3C6" ForeColor="Black" />
                <HeaderStyle BackColor="#4A3C8C" Font-Bold="True" ForeColor="#E7E7FF" />
                <PagerStyle BackColor="#C6C3C6" ForeColor="Black" HorizontalAlign="Right" />
                <RowStyle BackColor="#DEDFDE" ForeColor="Black" />
                <SelectedRowStyle BackColor="#9471DE" Font-Bold="True" ForeColor="White" />
                <SortedAscendingCellStyle BackColor="#F1F1F1" />
                <SortedAscendingHeaderStyle BackColor="#594B9C" />
                <SortedDescendingCellStyle BackColor="#CAC9C9" />
                <SortedDescendingHeaderStyle BackColor="#33276A" />
            </asp:GridView>
        </div>
        <div>
            <asp:Button ID="btn_CheckGrid" runat="server" Text="checkItem" OnClientClick="TableToJson();return false;" />
        </div>
    </form>
</body>
</html>
