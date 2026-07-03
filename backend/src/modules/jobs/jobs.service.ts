import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateJobDto, QueryJobsDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(employerId: string, dto: CreateJobDto) {
    const company = await this.prisma.company.findUnique({ where: { userId: employerId } });
    if (!company) throw new ForbiddenException('Create a company profile before posting jobs');

    const data: any = { ...dto, companyId: company.id, status: dto.status || 'PUBLISHED' };
    if (data.deadline) data.deadline = new Date(data.deadline);
    if (data.expiryDate) data.expiryDate = new Date(data.expiryDate);

    return this.prisma.job.create({
      data,
      include: { company: true, category: true },
    });
  }

  async getCategories() {
    return this.prisma.jobCategory.findMany({
      orderBy: { label: 'asc' },
    });
  }

  async findAll(query: QueryJobsDto) {
  const pageNum = Number(query.page) || 1;
  const limitNum = Number(query.limit) || 20;
  const { q, category, location, type } = query;

  const where: Record<string, any> = {};

  // job type
  if (type) {
    where.type = type;
  }

  // category slug → categoryId FIX
  if (category) {
  console.log("CATEGORY INPUT:", category);

  const cat = await this.prisma.jobCategory.findUnique({
    where: { slug: category },
  });

  console.log("FOUND CATEGORY:", cat);

  if (cat) {
    where.categoryId = cat.id;
  }
}

  // location filter
  if (location) {
    where.location = {
      contains: location,
      mode: 'insensitive',
    };
  }

  // search (title + description)
  if (q) {
    where.OR = [
      {
        title: {
          contains: q,
          mode: 'insensitive',
        },
      },
      {
        description: {
          contains: q,
          mode: 'insensitive',
        },
      },
    ];
  }

  const [items, total] = await Promise.all([
    this.prisma.job.findMany({
      where: where as any,
      include: {
        company: true,
        category: true,
        _count: {
          select: { applications: true },
        },
      },
      orderBy: [
        { featured: 'desc' },
        { createdAt: 'desc' },
      ],
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
    }),

    this.prisma.job.count({
      where: where as any,
    }),
  ]);

  return {
    items,
    total,
    page: pageNum,
    limit: limitNum,
    totalPages: Math.ceil(total / limitNum),
  };
}
  async findOne(id: string) {
    const job = await this.prisma.job.findUnique({
      where: { id },
      include: { company: true, category: true, _count: { select: { applications: true } } },
    });
    if (!job) throw new NotFoundException(`Job ${id} not found`);
    return job;
  }

  async update(id: string, employerId: string, dto: Partial<CreateJobDto>) {
    const job = await this.prisma.job.findFirst({ where: { id, company: { userId: employerId } } });
    if (!job) throw new NotFoundException('Job not found or access denied');
    return this.prisma.job.update({ where: { id }, data: dto as never });
  }

  async remove(id: string, employerId: string) {
    const job = await this.prisma.job.findFirst({ where: { id, company: { userId: employerId } } });
    if (!job) throw new NotFoundException('Job not found or access denied');
    return this.prisma.job.update({ where: { id }, data: { status: 'ARCHIVED' } });
  }

  async findByCompany(employerId: string) {
    return this.prisma.job.findMany({
      where: { company: { userId: employerId } },
      include: { category: true, _count: { select: { applications: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }
}
