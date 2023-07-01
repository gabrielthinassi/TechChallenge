using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TechChallenge.Models;

public partial class DbtechChallengeContext : DbContext
{
    public DbtechChallengeContext(DbContextOptions<DbtechChallengeContext> options)
        : base(options)
    {
    }

    public virtual DbSet<User> Users { get; set; }

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
