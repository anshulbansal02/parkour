import User from "./User";

import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  type Relation,
} from "typeorm";

@Entity()
class Body {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("date")
  birthDate: Date;

  @Column("int")
  weight: number;

  @Column("int")
  height: number;

  @OneToOne(() => User, "body")
  @JoinColumn()
  user: Relation<User>;
}

export default Body;
