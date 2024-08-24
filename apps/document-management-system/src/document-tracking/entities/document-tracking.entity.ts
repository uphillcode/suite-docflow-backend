import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('document_tracking')
export class DocumentTracking {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    document_id: number;
    @Column()
    current_status: string;
    @Column()
    current_location: string
    @Column()
    last_updated: string;

}
