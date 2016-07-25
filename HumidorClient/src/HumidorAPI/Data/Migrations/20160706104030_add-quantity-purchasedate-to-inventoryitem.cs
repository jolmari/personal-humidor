using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace HumidorAPI.Data.Migrations
{
    public partial class Addquantitypurchasedatetoinventoryitem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "PurchaseDate",
                table: "InventoryItem",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "InventoryItem",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PurchaseDate",
                table: "InventoryItem");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "InventoryItem");
        }
    }
}
