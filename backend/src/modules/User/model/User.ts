import Identity from "@modules/Auth/model/Identity";
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";

export const UserKinds = ["provider", "consumer"] as const;

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  firstName: string;

  @Column("varchar")
  lastName: string;

  @Column({ type: "enum", enum: UserKinds })
  kind: (typeof UserKinds)[number];

  @OneToMany(() => Identity, (identity) => identity.user)
  identities: Relation<Identity>;
}

export default User;
