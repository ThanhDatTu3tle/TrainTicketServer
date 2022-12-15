import { Column, Entity, Index, OneToMany } from "typeorm";
import { Vechuyentau } from "./Vechuyentau";

@Index("PK__HANHKHAC__A955A0AB3E149B8D", ["cccd"], { unique: true })
@Entity("HANHKHACH", { schema: "dbo" })
export class Hanhkhach {
  @Column("char", { primary: true, name: "CCCD", length: 12 })
  cccd: string;

  @Column("nvarchar", { name: "TenHanhKhach", length: 250 })
  tenHanhKhach: string;

  @Column("char", { name: "SoDienThoai", length: 10 })
  soDienThoai: string;

  @Column("nvarchar", { name: "MatKhau", length: 50 })
  matKhau: string;

  @OneToMany(() => Vechuyentau, (vechuyentau) => vechuyentau.cccd)
  vechuyentaus: Vechuyentau[];
}
