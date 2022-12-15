import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Phieudatcho } from "./Phieudatcho";
import { Thongtintoa } from "./Thongtintoa";
import { Ghe } from "./Ghe";

@Index("PK__TOA_GHE__968FE709AB1B358B", ["maSoToa", "maSoGhe"], {
  unique: true,
})
@Entity("TOA_GHE", { schema: "dbo" })
export class ToaGhe {
  @Column("nvarchar", { primary: true, name: "MaSoToa", length: 6 })
  maSoToa: string;

  @Column("int", { primary: true, name: "MaSoGhe" })
  maSoGhe: number;

  @Column("bit", { name: "TrangThai" })
  trangThai: boolean;

  @OneToMany(() => Phieudatcho, (phieudatcho) => phieudatcho.toaGhe)
  phieudatchos: Phieudatcho[];

  @ManyToOne(() => Thongtintoa, (thongtintoa) => thongtintoa.toaGhes)
  @JoinColumn([{ name: "MaSoToa", referencedColumnName: "maSoToa" }])
  maSoToa2: Thongtintoa;

  @ManyToOne(() => Ghe, (ghe) => ghe.toaGhes)
  @JoinColumn([{ name: "MaSoGhe", referencedColumnName: "maSoGhe" }])
  maSoGhe2: Ghe;
}
