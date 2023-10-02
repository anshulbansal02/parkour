import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
class Session {
  @PrimaryColumn()
  session_id: number;

  @Column("date")
  user_id: Date;

  @Column("int")
  access_tokens: number;

  @Column("int")
  created_at: number;

  @Column()
  location: string;
}

/*

user_id : string
session_id : string
access_tokens : string array
created_at: date time
location: {
  ip, agent (Browser, version), platform (Os, version), geolocation (lat, long | short string)
}

*/

export default Session;
