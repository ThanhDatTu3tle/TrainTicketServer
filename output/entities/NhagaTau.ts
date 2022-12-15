import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Thongtintau } from "./Thongtintau";
import { Nhaga } from "./Nhaga";

@Index("PK__NHAGA_TA__6037F60F10755B96", ["maGa", "maSoTau"], { unique: true })
@Entity("NHAGA_TAU", { schema: "dbo" })
export class NhagaTau {
  @Column("nvarchar", { primary: true, name: "MaGa", length: 4 })
  maGa: string;

  @Column("nvarchar", { primary: true, name: "MaSoTau", length: 4 })
  maSoTau: string;

  @Column("bit", { name: "TrangThai" })
  trangThai: boolean;

  @ManyToOne(() => Thongtintau, (thongtintau) => thongtintau.nhagaTaus)
  @JoinColumn([{ name: "MaSoTau", referencedColumnName: "maSoTau" }])
  maSoTau2: Thongtintau;

  @ManyToOne(() => Nhaga, (nhaga) => nhaga.nhagaTaus)
  @JoinColumn([{ name: "MaGa", referencedColumnName: "maGa" }])
  maGa2: Nhaga;
}
