import { User } from "@modules/User/model";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Relation,
} from "typeorm";

const IdentityTypes = ["email", "phone"] as const;

@Entity()
class Identity {
  @PrimaryColumn({ type: "varchar" })
  id: string;

  @Column({ type: "enum", enum: IdentityTypes })
  type: (typeof IdentityTypes)[number];

  @ManyToOne(() => User, (user) => user.identities)
  @JoinColumn()
  user: Relation<User>;

  @Column({ type: "varchar" })
  secret: string;

  @Column("int")
  createdAt: number;

  @Column("int")
  updatedAt: number;
}

export default Identity;
