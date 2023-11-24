/* import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';


@Controller('resource-auth')
export class ResourceAuthController {
  constructor(private readonly resourceAuthService: ResourceAuthService) {}

  @Post()
  create(@Body() createResourceAuthDto: CreateResourceAuthDto) {
    return this.resourceAuthService.create(createResourceAuthDto);
  }

  @Get()
  findAll() {
    return this.resourceAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resourceAuthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResourceAuthDto: UpdateResourceAuthDto) {
    return this.resourceAuthService.update(+id, updateResourceAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourceAuthService.remove(+id);
  }
} */