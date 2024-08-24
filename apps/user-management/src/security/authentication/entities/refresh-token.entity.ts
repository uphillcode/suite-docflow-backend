// // src/security/authentication/entities/refresh-token.entity.ts
// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { User } from 'apps/user-management/src/user/entities/users.entity';

// @Entity()
// export class RefreshToken {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   tokenId: string;

// //   @ManyToOne(() => User, user => user.refreshTokens)
// //   user: User;

//   @Column()
//   userId: number;

//   @Column({ type: 'timestamp' })
//   expiresAt: Date;
// }
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  tokenId: string;
}
