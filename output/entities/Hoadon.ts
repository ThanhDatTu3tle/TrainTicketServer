import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Vechuyentau } from "./Vechuyentau";

// @Index("PK__HOADON__835ED13B4EE64AD8", ["maHoaDon"], { unique: true })
@Entity("HOADON", { schema: "dbo" })
export class Hoadon {
  @Column("nvarchar", { primary: true, name: "MaHoaDon", length: 10 })
  maHoaDon: string;

  @Column("nvarchar", { name: "ThanhTien", length: 10 })
  thanhTien: string;

  @Column("smalldatetime", { name: "NgayLapHoaDon" })
  ngayLapHoaDon: Date;

  @ManyToOne(() => Vechuyentau, (vechuyentau) => vechuyentau.hoadons)
  @JoinColumn([
    { name: "MaVeChuyenTau", referencedColumnName: "maVeChuyenTau" },
  ])
  maVeChuyenTau: Vechuyentau;
}
