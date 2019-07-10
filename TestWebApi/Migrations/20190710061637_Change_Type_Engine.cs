using Microsoft.EntityFrameworkCore.Migrations;

namespace TestWebApi.Migrations
{
    public partial class Change_Type_Engine : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Engine_Capacities");

            migrationBuilder.AddColumn<int>(
                name: "capacity",
                table: "Engine_Capacities",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "capacity",
                table: "Engine_Capacities");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Engine_Capacities",
                nullable: true);
        }
    }
}
