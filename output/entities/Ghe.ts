import { Column, Entity, Index, OneToMany } from "typeorm";
import { ToaGhe } from "./ToaGhe";

@Index("PK__GHE__7ABC665F9462BBD2", ["maSoGhe"], { unique: true })
@Entity("GHE", { schema: "dbo" })
export class Ghe {
  @Column("int", { primary: true, name: "MaSoGhe" })
  maSoGhe: number;

  @OneToMany(() => ToaGhe, (toaGhe) => toaGhe.maSoGhe2)
  toaGhes: ToaGhe[];
}
