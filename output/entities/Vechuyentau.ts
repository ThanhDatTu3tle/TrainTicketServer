import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Hoadon } from "./Hoadon";
import { Phieudatcho } from "./Phieudatcho";
import { Chuyentau } from "./Chuyentau";
import { Thongtintoa } from "./Thongtintoa";
import { Lichtrinh } from "./Lichtrinh";
import { Hanhkhach } from "./Hanhkhach";

@Index("PK__VECHUYEN__09C12F48BAC24BAB", ["maVeChuyenTau"], { unique: true })
@Entity("VECHUYENTAU", { schema: "dbo" })
export class Vechuyentau {
  @Column("nvarchar", { primary: true, name: "MaVeChuyenTau", length: 10 })
  maVeChuyenTau: string;

  @Column("float", { name: "TongTien", precision: 53 })
  tongTien: number;

  @Column("nvarchar", { name: "LoaiGhe", length: 50 })
  loaiGhe: string;

  @Column("int", { name: "SoLuongGhe" })
  soLuongGhe: number;

  @Column("smalldatetime", { name: "NgayDat" })
  ngayDat: Date;

  @OneToMany(() => Hoadon, (hoadon) => hoadon.maVeChuyenTau)
  hoadons: Hoadon[];

  @OneToMany(() => Phieudatcho, (phieudatcho) => phieudatcho.maVeChuyenTau)
  phieudatchos: Phieudatcho[];

  @ManyToOne(() => Chuyentau, (chuyentau) => chuyentau.vechuyentaus)
  @JoinColumn([{ name: "MaChuyenTau", referencedColumnName: "maChuyenTau" }])
  maChuyenTau: Chuyentau;

  @ManyToOne(() => Thongtintoa, (thongtintoa) => thongtintoa.vechuyentaus)
  @JoinColumn([{ name: "MaSoToa", referencedColumnName: "maSoToa" }])
  maSoToa: Thongtintoa;

  @ManyToOne(() => Lichtrinh, (lichtrinh) => lichtrinh.vechuyentaus)
  @JoinColumn([{ name: "MaLichTrinh", referencedColumnName: "maLichTrinh" }])
  maLichTrinh: Lichtrinh;

  @ManyToOne(() => Hanhkhach, (hanhkhach) => hanhkhach.vechuyentaus)
  @JoinColumn([{ name: "CCCD", referencedColumnName: "cccd" }])
  cccd: Hanhkhach;
}
