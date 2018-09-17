﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using intro_to_orms;

namespace intro_to_orms.Migrations
{
    [DbContext(typeof(HobbiesContext))]
    partial class HobbiesContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.3-rtm-32065")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("intro_to_orms.Models.BoardGames", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Difficulty");

                    b.Property<string>("Genre");

                    b.Property<int>("MinimalAge");

                    b.Property<string>("Name");

                    b.Property<int>("NumberOfPlayers");

                    b.Property<int>("TimeLength");

                    b.HasKey("Id");

                    b.ToTable("BoardGamesTable");
                });
#pragma warning restore 612, 618
        }
    }
}
