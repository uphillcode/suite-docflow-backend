import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, Repository } from 'typeorm';
import { RefreshToken } from './entities/refresh-token.entity';

@Injectable()
@Entity()
export class RefreshTokenRepository {
  constructor(
    @InjectRepository(RefreshToken)
    private refreshTokenRepository: Repository<RefreshToken>,
  ) {}

  async insert(userId: number, tokenId: string): Promise<void> {
    const token = new RefreshToken();
    token.userId = userId;
    token.tokenId = tokenId;
    await this.refreshTokenRepository.save(token);
  }

  async validate(userId: number, tokenId: string): Promise<boolean> {
    const token = await this.refreshTokenRepository.findOne({ where: { userId } });
    if (!token || token.tokenId !== tokenId) {
      return false;
    }
    return true;
  }

  async invalidate(userId: number): Promise<void> {
    await this.refreshTokenRepository.delete({ userId });
  }
}
