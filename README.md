# Repo: pvz_fusion-src_image

Hanya berisi gambar-gambar (secara Open Source), terhadap PvZ Fusion, tapi versi seadanya aja.

Linking:
- [Website Fanmade, buat panduan aja](https://minecube1510.github.io/pvz_fusion-src_image/)


---


# Standarisasi tiap Data Entitas

Setiap data wajib dinamai berdasarkan bentuk UUID.

## Berikut standarisasi UUID berdasarkan versi-versi

V1 : (**| ????-????-????-???? |**)
---
> Ini dipotong menjadi 4 bagian setiap 4 digit.
- Bagian Pertama  : [(DataType), (TypeName), (FactSide), (SideFront)]
- Bagian Kedua    : [(), (), (), ()]
- Bagian Ketiga   : [(), (), (), ()]
- Bagian Keempat  : [ID Data Entity]
```
Contoh:
- X
```

V2 : (**| ??-????-????-????-???? |**)
---
> Ini dipotong menjadi 4 bagian setiap 4 digit, ditambah 1 bagian dengan 2 digit.
- Bagian Pertama  : [(DataType), (TypeName)]
- Bagian Kedua    : [(FactSide), (SideFront), (), ()]
- Bagian Ketiga   : [(), (), (), ()]
- Bagian Keempat  : [(), (), (), ()]
- Bagian Kelima   : [ID Data Entity]
```
Contoh:
- X
```

V3 : (**| ????-????-????-????-???? |**)
---
> Ini dipotong menjadi 5 bagian setiap 4 digit.
- Bagian Pertama  : [(DataType), (TypeName), (), ()]
- Bagian Kedua    : [(FactSide), (SideFront), (), ()]
- Bagian Ketiga   : [(), (), (), ()]
- Bagian Keempat  : [(), (), (), ()]
- Bagian Kelima   : [ID Data Entity]
```
Contoh:
- X
```
