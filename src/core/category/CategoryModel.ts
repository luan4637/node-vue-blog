import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";


@Entity()
export class CategoryModel extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column('text')
    description: string;

    @Column({ nullable: true })
    image: string;

    @Column({ default: true })
    showInNav: boolean = true;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
