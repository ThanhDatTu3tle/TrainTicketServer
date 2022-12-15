import { Column, Entity, Index, OneToMany } from "typeorm";
import { ToaGhe } from "./ToaGhe";

// @Index("PK__GHE__7ABC665FD39088F6", ["maSoGhe"], { unique: true })
@Entity("GHE", { schema: "dbo" })
export class Ghe {
  @Column("int", { primary: true, name: "MaSoGhe" })
  maSoGhe: number;

  @OneToMany(() => ToaGhe, (toaGhe) => toaGhe.maSoGhe)
  toaGhes: ToaGhe[];
}
