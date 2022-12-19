create proc sp_ThongTinVeTau_CCCD
@maCCCD char(12)
as
begin
	if(LEN(@maCCCD) = 12)
	begin
		if exists(select * from VECHUYENTAU where @maCCCD = CCCD)
		begin
		select * from VECHUYENTAU where @maCCCD = CCCD
		end
		else
		print 'CCCD khong ton tai'
	end
	else
	print 'CCCD khong hop le, vui long nhap lai'
end
