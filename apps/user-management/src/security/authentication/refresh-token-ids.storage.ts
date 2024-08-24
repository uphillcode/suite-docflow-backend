// import {
//   Injectable,
//   OnApplicationBootstrap,
//   OnApplicationShutdown,
// } from "@nestjs/common";
// import { Redis } from "ioredis";
// import { InvalidateRefreshTokenError } from "./errors/invalidate-refresh-token.error";

// @Injectable()
// export class RefreshTokenIdsStorage
//   implements OnApplicationBootstrap, OnApplicationShutdown
// {
//   private redisClient: Redis;

//   onApplicationBootstrap() {
//     this.redisClient = new Redis({
//       host: "localhost",
//       port: 6379,
//     });
//   }

//   onApplicationShutdown() {
//     this.redisClient.quit();
//   }

//   async insert(userId: number, tokenId: string): Promise<void> {
//     await this.redisClient.set(this.getKey(userId), tokenId);
//   }

//   async validate(userId: number, tokenId: string): Promise<boolean> {
//     const storedId = await this.redisClient.get(this.getKey(userId));
//     if (storedId !== tokenId) {
//       throw new InvalidateRefreshTokenError();
//     }
//     return storedId === tokenId;
//   }

//   async invalidate(userId: number): Promise<void> {
//     await this.redisClient.del(this.getKey(userId));
//   }

//   private getKey(userId: number): string {
//     return `user-${userId}`;
//   }
// }
// import { Injectable } from '@nestjs/common';
// import { RefreshTokenRepository } from './refresh-token.repository';
// import { InvalidateRefreshTokenError } from './errors/invalidate-refresh-token.error';

// @Injectable()
// export class RefreshTokenIdsStorage {
//   constructor(private readonly refreshTokenRepository: RefreshTokenRepository) {}

//   async insert(userId: number, tokenId: string): Promise<void> {
//     await this.refreshTokenRepository.insert(userId, tokenId);
//   }

//   async validate(userId: number, tokenId: string): Promise<boolean> {
//     const isValid = await this.refreshTokenRepository.validate(userId, tokenId);
//     if (!isValid) {
//       throw new InvalidateRefreshTokenError();
//     }
//     return isValid;
//   }

//   async invalidate(userId: number): Promise<void> {
//     await this.refreshTokenRepository.invalidate(userId);
//   }
// }
import { Injectable } from '@nestjs/common';
import { RefreshTokenRepository } from './refresh-token.repository';
import { InvalidateRefreshTokenError } from './errors/invalidate-refresh-token.error';

@Injectable()
export class RefreshTokenIdsStorage {
  constructor(private readonly refreshTokenRepository: RefreshTokenRepository) {}

  async insert(userId: number, tokenId: string): Promise<void> {
    await this.refreshTokenRepository.insert(userId, tokenId);
  }

  async validate(userId: number, tokenId: string): Promise<boolean> {
    const isValid = await this.refreshTokenRepository.validate(userId, tokenId);
    if (!isValid) {
      throw new InvalidateRefreshTokenError();
    }
    return isValid;
  }

  async invalidate(userId: number): Promise<void> {
    await this.refreshTokenRepository.invalidate(userId);
  }
}
