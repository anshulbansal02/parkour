import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
class Session {
  @PrimaryColumn()
  sessionId: number;

  @Column("date")
  userId: Date;

  @Column("int")
  accessTokens: number;

  @Column("int")
  createdAt: number;

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
