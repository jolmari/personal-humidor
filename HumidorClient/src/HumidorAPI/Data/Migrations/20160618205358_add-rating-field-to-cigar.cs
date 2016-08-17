using Microsoft.EntityFrameworkCore.Migrations;

namespace HumidorAPI.Data.Migrations
{
    public partial class Addratingfieldtocigar : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Rating",
                table: "Cigar",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Cigar");
        }
    }
}
