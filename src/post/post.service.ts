import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ok } from 'assert';
import { Repository } from 'typeorm';
import { EditPostDto, CreatePostDto } from './dtos';
import { Post } from './entities';
@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ) {}
    async getMay(): Promise<Post[]> {
        return await this.postRepository.find()
    }
    async getOne(id: number) {
        const post = await this.postRepository.findOne(id)
        if (!post) throw new NotFoundException('Post no existe')
        return post
    }
    async createOne(dto: CreatePostDto) {
        const post = this.postRepository.create(dto as any)
        return await this.postRepository.save(post)
    }
    async editOne(id: number, dto: EditPostDto) {
        const post = await this.postRepository.findOne(id)
        if (!post) throw new NotFoundException('Post no existe')
        const editedPost = Object.assign(post, dto)
        return await this.postRepository.save(editedPost)
        
    }
    async deleteOne(id: number) {
        const post = await this.postRepository.findOne(id)
        if (!post) throw new NotFoundException('Post no existe')
        return await this.postRepository.delete(id)
    }
}
