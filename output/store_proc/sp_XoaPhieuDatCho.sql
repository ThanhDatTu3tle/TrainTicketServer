create proc sp_XoaPhieuDatCho
@maPhieu nvarchar(10)
as
begin
	begin
		delete from PHIEUDATCHO where @maPhieu = MaPhieuDatCho
	end
end
