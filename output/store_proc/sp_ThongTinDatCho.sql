create proc sp_ThongTinDatCho
@maPhieuDatCho nvarchar (10)
as
begin
	if exists(select * from PHIEUDATCHO where @maPhieuDatCho =MaPhieuDatCho)
	begin
	select * from PHIEUDATCHO where @maPhieuDatCho =MaPhieuDatCho
	end
	else
	print 'ma phieu dat cho khong ton tai'
end
