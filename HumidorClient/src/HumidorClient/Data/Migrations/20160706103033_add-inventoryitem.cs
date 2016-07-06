using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HumidorClient.Data.Migrations
{
    public partial class addinventoryitem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "UserNameIndex",
                table: "AspNetUsers");

            migrationBuilder.CreateTable(
                name: "InventoryItem",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CigarId = table.Column<int>(nullable: true)
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

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Cigar",
                maxLength: 60,
                nullable: false);

            migrationBuilder.AlterColumn<string>(
                name: "Country",
                table: "Cigar",
                nullable: false);

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_InventoryItem_CigarId",
                table: "InventoryItem",
                column: "CigarId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "UserNameIndex",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "InventoryItem");

            migrationBuilder.AlterColumn<string>(
                name: "Rating",
                table: "Cigar",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Cigar",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Country",
                table: "Cigar",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName");
        }
    }
}
