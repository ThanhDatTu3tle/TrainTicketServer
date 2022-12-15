import { Column, Entity, Index, OneToMany } from "typeorm";
import { Chuyentau } from "./Chuyentau";
import { NhagaTau } from "./NhagaTau";
import { Thongtintoa } from "./Thongtintoa";

// @Index("PK__THONGTIN__71258F35EBBADE23", ["maSoTau"], { unique: true })
@Entity("THONGTINTAU", { schema: "dbo" })
export class Thongtintau {
  @Column("nvarchar", { primary: true, name: "MaSoTau", length: 4 })
  maSoTau: string;

  @Column("nvarchar", { name: "TenTau", length: 4 })
  tenTau: string;

  @Column("int", { name: "SoLuongToa" })
  soLuongToa: number;

  @OneToMany(() => Chuyentau, (chuyentau) => chuyentau.maSoTau)
  chuyentaus: Chuyentau[];

  @OneToMany(() => NhagaTau, (nhagaTau) => nhagaTau.maSoTau)
  nhagaTaus: NhagaTau[];

  @OneToMany(() => Thongtintoa, (thongtintoa) => thongtintoa.maSoTau)
  thongtintoas: Thongtintoa[];
}
