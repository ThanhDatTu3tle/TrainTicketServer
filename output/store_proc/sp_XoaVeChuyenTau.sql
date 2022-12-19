create proc sp_XoaVeChuyenTau
@maVe nvarchar(10)
as
begin
	if exists (select * from HOADON  WHERE MaVeChuyenTau = @maVe)
	begin
		raiserror ('Ve nay da co hoa don khong the xoa ',16,1)
	end
	else
	begin
		delete from PHIEUDATCHO where @maVe = MaVeChuyenTau
		delete from VECHUYENTAU where @maVe = MaVeChuyenTau
	end
end
