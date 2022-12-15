import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Thongtintau } from "./Thongtintau";
import { ToaGhe } from "./ToaGhe";
import { Vechuyentau } from "./Vechuyentau";

// @Index("PK__THONGTIN__7124216CF7874A4D", ["maSoToa"], { unique: true })
@Entity("THONGTINTOA", { schema: "dbo" })
export class Thongtintoa {
  @Column("nvarchar", { primary: true, name: "MaSoToa", length: 6 })
  maSoToa: string;

  @Column("int", { name: "SoLuongGhe" })
  soLuongGhe: number;

  @Column("nvarchar", { name: "LoaiGhe", length: 50 })
  loaiGhe: string;

  @Column("float", { name: "GiaTienGhe", precision: 53 })
  giaTienGhe: number;

  @ManyToOne(() => Thongtintau, (thongtintau) => thongtintau.thongtintoas)
  @JoinColumn([{ name: "MaSoTau", referencedColumnName: "maSoTau" }])
  maSoTau: Thongtintau;

  @OneToMany(() => ToaGhe, (toaGhe) => toaGhe.maSoToa)
  toaGhes: ToaGhe[];

  @OneToMany(() => Vechuyentau, (vechuyentau) => vechuyentau.maSoToa)
  vechuyentaus: Vechuyentau[];
}
