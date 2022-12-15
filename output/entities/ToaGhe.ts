import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Phieudatcho } from "./Phieudatcho";
import { Thongtintoa } from "./Thongtintoa";
import { Ghe } from "./Ghe";

// @Index("PK__TOA_GHE__FF521B5C44AD8846", ["maToaGhe"], { unique: true })
@Entity("TOA_GHE", { schema: "dbo" })
export class ToaGhe {
  @Column("nvarchar", { primary: true, name: "MaToaGhe", length: 6 })
  maToaGhe: string;

  @Column("bit", { name: "TrangThai" })
  trangThai: boolean;

  @OneToMany(() => Phieudatcho, (phieudatcho) => phieudatcho.maToaGhe)
  phieudatchos: Phieudatcho[];

  @ManyToOne(() => Thongtintoa, (thongtintoa) => thongtintoa.toaGhes)
  @JoinColumn([{ name: "MaSoToa", referencedColumnName: "maSoToa" }])
  maSoToa: Thongtintoa;

  @ManyToOne(() => Ghe, (ghe) => ghe.toaGhes)
  @JoinColumn([{ name: "MaSoGhe", referencedColumnName: "maSoGhe" }])
  maSoGhe: Ghe;
}
