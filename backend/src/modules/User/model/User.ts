import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export const UserKind = ["provider", "consumer"] as const;

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  firstName: string;

  @Column("varchar")
  lastName: string;

  @Column({ type: "enum", enum: UserKind })
  kind: (typeof UserKind)[number];

  @Column("varchar")
  email: string;

  @Column({ type: "varchar", nullable: true })
  phone: string;
}

export default User;
