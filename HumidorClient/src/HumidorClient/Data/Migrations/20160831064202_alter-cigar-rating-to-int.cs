using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HumidorAPI.Data.Migrations
{
    public partial class altercigarratingtonullableint : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InventoryItem");

            migrationBuilder.AlterColumn<int>(
                name: "Rating",
                table: "Cigar",
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InventoryItem",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CigarId = table.Column<int>(nullable: true),
                    PurchaseDate = table.Column<DateTime>(nullable: false),
                    Quantity = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventoryItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_InventoryItem_Cigar_CigarId",
                        column: x => x.CigarId,
                        principalTable: "Cigar",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.AlterColumn<string>(
                name: "Rating",
                table: "Cigar",
                maxLength: 5,
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_InventoryItem_CigarId",
                table: "InventoryItem",
                column: "CigarId");
        }
    }
}
