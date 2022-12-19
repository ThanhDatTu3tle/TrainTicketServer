create proc sp_ThemPhieuDatCho
@MaPhieuDatCho nvarchar(10),
@MaLichTrinh nvarchar(10),
@MaVeChuyenTau nvarchar(10),
@MaChuyenTau nvarchar(10),
@HoTenHanhKhach nvarchar(50),
@GiaTien float,
@MaToaGhe nvarchar(6)
as
begin
	begin try
		if(@MaPhieuDatCho is null or @MaLichTrinh is null or @MaVeChuyenTau is null or @MaChuyenTau is null or @HoTenHanhKhach is null or @GiaTien  is null or @MaToaGhe is null)
		begin
			print'Thong tin nhap rong, vui long bo sung'
			return
		end
		if exists (select * from PHIEUDATCHO where  @MaPhieuDatCho = @MaPhieuDatCho )
		begin
			print 'Thong tin bi trung'
			return
		end
	end try
	begin catch
		print 'Them khong thanh cong'
	end catch

	Insert into PHIEUDATCHO values(@MaPhieuDatCho , @MaLichTrinh , @MaVeChuyenTau, @MaChuyenTau , @MaToaGhe , @HoTenHanhKhach , @GiaTien  )
end
