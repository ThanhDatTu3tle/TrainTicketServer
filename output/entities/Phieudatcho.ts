import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Lichtrinh } from "./Lichtrinh";
import { Vechuyentau } from "./Vechuyentau";
import { Chuyentau } from "./Chuyentau";
import { ToaGhe } from "./ToaGhe";

// @Index("PK__PHIEUDAT__D0FB19DF3147F8F9", ["maPhieuDatCho"], { unique: true })
@Entity("PHIEUDATCHO", { schema: "dbo" })
export class Phieudatcho {
  @Column("nvarchar", { primary: true, name: "MaPhieuDatCho", length: 10 })
  maPhieuDatCho: string;

  @Column("nvarchar", { name: "HoTenHanhKhach", length: 50 })
  hoTenHanhKhach: string;

  @Column("float", { name: "GiaTien", precision: 53 })
  giaTien: number;

  @ManyToOne(() => Lichtrinh, (lichtrinh) => lichtrinh.phieudatchos)
  @JoinColumn([{ name: "MaLichTrinh", referencedColumnName: "maLichTrinh" }])
  maLichTrinh: Lichtrinh;

  @ManyToOne(() => Vechuyentau, (vechuyentau) => vechuyentau.phieudatchos)
  @JoinColumn([
    { name: "MaVeChuyenTau", referencedColumnName: "maVeChuyenTau" },
  ])
  maVeChuyenTau: Vechuyentau;

  @ManyToOne(() => Chuyentau, (chuyentau) => chuyentau.phieudatchos)
  @JoinColumn([{ name: "MaChuyenTau", referencedColumnName: "maChuyenTau" }])
  maChuyenTau: Chuyentau;

  @ManyToOne(() => ToaGhe, (toaGhe) => toaGhe.phieudatchos)
  @JoinColumn([{ name: "MaToaGhe", referencedColumnName: "maToaGhe" }])
  maToaGhe: ToaGhe;
}
