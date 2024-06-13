import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { CategoryModel } from "../category/CategoryModel";


@Entity()
export class PostModel extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    slug: string;

    @Column('text')
    content: string;

    @Column()
    ownerId: number;

    @Column({ default: true })
    published: boolean = true;

    @Column({ length: 16, default: '' })
    position: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => CategoryModel)
    @JoinTable()
    categories: CategoryModel[]
}
