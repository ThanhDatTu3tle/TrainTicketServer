create proc sp_ThongTinVeTau
@maVeChuyenTau nvarchar(10)
as
begin
	if exists(select * from VECHUYENTAU where @maVeChuyenTau = MaVeChuyenTau)
	begin
	select * from VECHUYENTAU where @maVeChuyenTau = MaVeChuyenTau
	end
	else
	print 'ma ve chuyen tau khong ton tai'
end
