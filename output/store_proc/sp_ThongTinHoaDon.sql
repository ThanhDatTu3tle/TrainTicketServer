create proc sp_ThongTinHoaDon
@maHoaDon nvarchar (10)
as
begin
	if exists(select * from HOADON where @maHoaDon =MaHoaDon)
	begin
	select * from HOADON where @maHoaDon =MaHoaDon
	end
	else
	print 'ma hoa don khong ton tai'
end
