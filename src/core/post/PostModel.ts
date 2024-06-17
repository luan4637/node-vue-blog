import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { CategoryModel } from "../category/CategoryModel";
import { UserModel } from "../user/UserModel";

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

    @Column({ default: true })
    published: boolean = true;

    @Column({ length: 16, default: '' })
    position: string;

    @Column()
    picture: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => UserModel, (user) => user.posts)
    user: UserModel;

    @ManyToMany(() => CategoryModel)
    @JoinTable()
    categories: CategoryModel[];
}
