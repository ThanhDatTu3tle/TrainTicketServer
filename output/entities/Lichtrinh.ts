import { Column, Entity, Index, OneToMany } from "typeorm";
import { Chuyentau } from "./Chuyentau";
import { Phieudatcho } from "./Phieudatcho";
import { Vechuyentau } from "./Vechuyentau";

// @Index("PK__LICHTRIN__32E7201D982D810D", ["maLichTrinh"], { unique: true })
@Entity("LICHTRINH", { schema: "dbo" })
export class Lichtrinh {
  @Column("nvarchar", { primary: true, name: "MaLichTrinh", length: 10 })
  maLichTrinh: string;

  @Column("nvarchar", { name: "MaGaDi", length: 4 })
  maGaDi: string;

  @Column("nvarchar", { name: "MaGaDen", length: 4 })
  maGaDen: string;

  @Column("nvarchar", { name: "TenGaDi", length: 50 })
  tenGaDi: string;

  @Column("nvarchar", { name: "TenGaDen", length: 50 })
  tenGaDen: string;

  @Column("smalldatetime", { name: "GioKhoiHanh" })
  gioKhoiHanh: Date;

  @Column("smalldatetime", { name: "GioKetThuc" })
  gioKetThuc: Date;

  @OneToMany(() => Chuyentau, (chuyentau) => chuyentau.maLichTrinh)
  chuyentaus: Chuyentau[];

  @OneToMany(() => Phieudatcho, (phieudatcho) => phieudatcho.maLichTrinh)
  phieudatchos: Phieudatcho[];

  @OneToMany(() => Vechuyentau, (vechuyentau) => vechuyentau.maLichTrinh)
  vechuyentaus: Vechuyentau[];
}
