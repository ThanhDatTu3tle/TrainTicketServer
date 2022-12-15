import { Column, Entity, Index, OneToMany } from "typeorm";
import { NhagaTau } from "./NhagaTau";

@Index("PK__NHAGA__2725AEFCD4C520D3", ["maGa"], { unique: true })
@Entity("NHAGA", { schema: "dbo" })
export class Nhaga {
  @Column("nvarchar", { primary: true, name: "MaGa", length: 4 })
  maGa: string;

  @Column("nvarchar", { name: "TenGa", length: 50 })
  tenGa: string;

  @Column("int", { name: "SoLuongTau" })
  soLuongTau: number;

  @OneToMany(() => NhagaTau, (nhagaTau) => nhagaTau.maGa2)
  nhagaTaus: NhagaTau[];
}
