create proc sp_ThemVeTau
@maVeChuyenTau nvarchar(10),
@MaChuyenTau nvarchar(10),
@MaLichTrinh nvarchar(10),
@CCCD char(12),
@MaSoToa int,
@TongTien float,
@LoaiGhe nvarchar(50),
@SoLuongGhe int,
@NgayDat smalldatetime
as
begin
	SET XACT_ABORT ON
	begin tran
		set transaction isolation level serializable
		select * from VECHUYENTAU with (updlock)
		select * from VECHUYENTAU with (readcommitted)
	
	begin try
	waitfor delay '00:00:05'
		if(@maVeChuyenTau is null or @MaChuyenTau is null or @MaLichTrinh is null or @CCCD is null or @MaSoToa is null or @TongTien is null or @LoaiGhe is null or @SoLuongGhe is null or @NgayDat is null)
		begin
			print'Thong tin nhap rong, vui long bo sung'
			return
		end
		if exists (select * from VECHUYENTAU where  @maVeChuyenTau = @maVeChuyenTau )
		begin
			print 'Thong tin bi trung'
			return
		end
		Insert into VECHUYENTAU values(@maVeChuyenTau , @MaChuyenTau , @MaLichTrinh , @CCCD , @MaSoToa , @TongTien , @LoaiGhe ,@SoLuongGhe,@NgayDat)
		commit
	end try
	begin catch
		print 'Them khong thanh cong'
	end catch

	
end
