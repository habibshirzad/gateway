import {Column, PrimaryGeneratedColumn, Entity} from 'typeorm'

@Entity()
export class Product{
    
    @PrimaryGeneratedColumn()
    public id: number;
    
    @Column({ nullable: true })
    public productName: string;

    @Column({ nullable: true })
    public productPrice: number;


}                                               
  
 
 
 
  
 
 
                                                                                                              