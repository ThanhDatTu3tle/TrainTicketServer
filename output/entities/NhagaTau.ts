import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Nhaga } from "./Nhaga";
import { Thongtintau } from "./Thongtintau";

// @Index("PK__NHAGA_TA__553532F8DDC0BCBD", ["maGaTau"], { unique: true })
@Entity("NHAGA_TAU", { schema: "dbo" })
export class NhagaTau {
  @Column("nvarchar", { primary: true, name: "MaGaTau", length: 5 })
  maGaTau: string;

  @Column("bit", { name: "TrangThai" })
  trangThai: boolean;

  @ManyToOne(() => Nhaga, (nhaga) => nhaga.nhagaTaus)
  @JoinColumn([{ name: "MaGa", referencedColumnName: "maGa" }])
  maGa: Nhaga;

  @ManyToOne(() => Thongtintau, (thongtintau) => thongtintau.nhagaTaus)
  @JoinColumn([{ name: "MaSoTau", referencedColumnName: "maSoTau" }])
  maSoTau: Thongtintau;
}
