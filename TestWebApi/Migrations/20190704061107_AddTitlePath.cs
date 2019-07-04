using Microsoft.EntityFrameworkCore.Migrations;

namespace TestWebApi.Migrations
{
    public partial class AddTitlePath : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bikes_Cities_CityId",
                table: "Bikes");

            migrationBuilder.AlterColumn<int>(
                name: "CityId",
                table: "Bikes",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title_Paht",
                table: "Bikes",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Bikes_Cities_CityId",
                table: "Bikes",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bikes_Cities_CityId",
                table: "Bikes");

            migrationBuilder.DropColumn(
                name: "Title_Paht",
                table: "Bikes");

            migrationBuilder.AlterColumn<int>(
                name: "CityId",
                table: "Bikes",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Bikes_Cities_CityId",
                table: "Bikes",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
