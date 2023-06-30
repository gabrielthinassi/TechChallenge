using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TechChallenge.Models;

public partial class DbtechChallengeContext : DbContext
{
    public DbtechChallengeContext()
    {
    }

    public DbtechChallengeContext(DbContextOptions<DbtechChallengeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=tcp:techchallenge-server.database.windows.net,1433;Initial Catalog=DBTechChallenge;Persist Security Info=False;User ID=adm;Password=Qjzhtc13#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity
                .ToTable("USERS")
                .HasKey(e => e.Id);

            entity.Property(e => e.AvatarUrl)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Id).ValueGeneratedOnAdd();
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
