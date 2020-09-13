import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePostDto, EditPostDto } from './dtos';
import { PostService } from './post.service';
@ApiTags('Posts')
@Controller('post')
export class PostController {
    constructor(private readonly postService:PostService) {}
    @Get()
    async getMay() {
        const data = await this.postService.getMay()
        return {
            message: 'Petición correcta',
            data
        }
    }
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.postService.getOne(id)
    }

    @Post()
    async createOne(
        @Body() dto: CreatePostDto
    ) {
       const data = await this.postService.createOne(dto)
       return {
           message: 'Post nuevo creado',
           data
       }
    }
    @Put(':id')
    async editOne(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: EditPostDto) {
        const data = await this.postService.editOne(id, dto)
        return {
            message: 'Post ha sido modificado',
            data
        }
    }
    @Delete(':id')
    async deleteOne(@Param('id', ParseIntPipe) id: number,) {
        console.log(id)
        const data = await this.postService.deleteOne(id)
        return {
            message: 'Post eliminado correctamente',
            data
        }
    }
    
}
