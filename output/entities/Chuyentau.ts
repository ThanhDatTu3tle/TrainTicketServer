import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Thongtintau } from "./Thongtintau";
import { Lichtrinh } from "./Lichtrinh";
import { Phieudatcho } from "./Phieudatcho";
import { Vechuyentau } from "./Vechuyentau";

@Index("PK__CHUYENTA__8EB73BB0AB19C04A", ["maChuyenTau"], { unique: true })
@Entity("CHUYENTAU", { schema: "dbo" })
export class Chuyentau {
  @Column("nvarchar", { primary: true, name: "MaChuyenTau", length: 10 })
  maChuyenTau: string;

  @Column("nvarchar", { name: "TenTau", length: 4 })
  tenTau: string;

  @ManyToOne(() => Thongtintau, (thongtintau) => thongtintau.chuyentaus)
  @JoinColumn([{ name: "MaSoTau", referencedColumnName: "maSoTau" }])
  maSoTau: Thongtintau;

  @ManyToOne(() => Lichtrinh, (lichtrinh) => lichtrinh.chuyentaus)
  @JoinColumn([{ name: "MaLichTrinh", referencedColumnName: "maLichTrinh" }])
  maLichTrinh: Lichtrinh;

  @OneToMany(() => Phieudatcho, (phieudatcho) => phieudatcho.maChuyenTau)
  phieudatchos: Phieudatcho[];

  @OneToMany(() => Vechuyentau, (vechuyentau) => vechuyentau.maChuyenTau)
  vechuyentaus: Vechuyentau[];
}
