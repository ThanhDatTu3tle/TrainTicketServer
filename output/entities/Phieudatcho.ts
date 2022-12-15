import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { ToaGhe } from "./ToaGhe";
import { Lichtrinh } from "./Lichtrinh";
import { Chuyentau } from "./Chuyentau";
import { Vechuyentau } from "./Vechuyentau";

@Index("PK__PHIEUDAT__D0FB19DF78896947", ["maPhieuDatCho"], { unique: true })
@Entity("PHIEUDATCHO", { schema: "dbo" })
export class Phieudatcho {
  @Column("nvarchar", { primary: true, name: "MaPhieuDatCho", length: 10 })
  maPhieuDatCho: string;

  @Column("nvarchar", { name: "HoTenHanhKhach", length: 50 })
  hoTenHanhKhach: string;

  @Column("float", { name: "GiaTien", precision: 53 })
  giaTien: number;

  @ManyToOne(() => ToaGhe, (toaGhe) => toaGhe.phieudatchos)
  @JoinColumn([
    { name: "MaSoToa", referencedColumnName: "maSoToa" },
    { name: "MaSoGhe", referencedColumnName: "maSoGhe" },
  ])
  toaGhe: ToaGhe;

  @ManyToOne(() => Lichtrinh, (lichtrinh) => lichtrinh.phieudatchos)
  @JoinColumn([{ name: "MaLichTrinh", referencedColumnName: "maLichTrinh" }])
  maLichTrinh: Lichtrinh;

  @ManyToOne(() => Chuyentau, (chuyentau) => chuyentau.phieudatchos)
  @JoinColumn([{ name: "MaChuyenTau", referencedColumnName: "maChuyenTau" }])
  maChuyenTau: Chuyentau;

  @ManyToOne(() => Vechuyentau, (vechuyentau) => vechuyentau.phieudatchos)
  @JoinColumn([
    { name: "MaVeChuyenTau", referencedColumnName: "maVeChuyenTau" },
  ])
  maVeChuyenTau: Vechuyentau;
}
