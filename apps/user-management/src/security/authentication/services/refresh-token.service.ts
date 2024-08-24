
// // src/security/authentication/services/refresh-token.service.ts
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { RefreshToken } from '../entities/refresh-token.entity';
// import { InvalidateRefreshTokenError } from '../errors/invalidate-refresh-token.error';

// @Injectable()
// export class RefreshTokenService {
//   constructor(
//     @InjectRepository(RefreshToken)
//     private refreshTokenRepository: Repository<RefreshToken>,
//   ) {}

//   async insert(userId: number, tokenId: string): Promise<void> {
//     const refreshToken = this.refreshTokenRepository.create({
//       userId,
//       tokenId,
//       expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 días de expiración
//     });
//     await this.refreshTokenRepository.save(refreshToken);
//   }

//   async validate(userId: number, tokenId: string): Promise<boolean> {
//     const token = await this.refreshTokenRepository.findOne({
//       where: { userId, tokenId },
//     });
//     if (!token || token.expiresAt < new Date()) {
//       throw new InvalidateRefreshTokenError();
//     }
//     return true;
//   }

//   async invalidate(userId: number): Promise<void> {
//     await this.refreshTokenRepository.delete({ userId });
//   }
// }