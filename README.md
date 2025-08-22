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
- Bagian Pertama  : [(DataType_1), (TypeName_1), (FactSide), (SideFront)]
- Bagian Kedua    : [(), (), (), ()]
- Bagian Ketiga   : [(), (), (), ()]
- Bagian Keempat  : [ID Data]
```
Contoh: [Ae1p-????-????-0001]

- (Ke-A), (Entitas), (Pertama), (Plant/Tanaman)
- (), (), (), ()
- (), (), (), ()
- (Data ke-0001)
```

V2 : (**| ??-????-????-????-???? |**)
---
> Ini dipotong menjadi 4 bagian setiap 4 digit, ditambah 1 bagian dengan 2 digit.
- Bagian Pertama  : [(DataType_1), (FactSide_1)]
- Bagian Kedua    : [(TypeName_2), (SideFront_2)]
- Bagian Ketiga   : [(), (), (), ()]
- Bagian Keempat  : [(), (), (), ()]
- Bagian Kelima   : [ID Data]
```
Contoh: [B1-MaPl-????-????-0002]

- (Ke-B), (Map)
- (Pertama), (Plant/Tanaman), (), ()
- (), (), (), ()
- (), (), (), ()
- (Data ke-0002)
```

V3 : (**| ????-????-????-????-???? |**)
---
> Ini dipotong menjadi 5 bagian setiap 4 digit.
- Bagian Pertama  : [(DataType_1), (TypeName_3)]
- Bagian Kedua    : [(FactSide_2), (SideFront_2)]
- Bagian Ketiga   : [(), (), (), ()]
- Bagian Keempat  : [(), (), (), ()]
- Bagian Kelima   : [ID Data]
```
Contoh: [AEnt-01Zo-????-????-0003]

- (Ke-A), (Entitas)
- (Kedua), (Zombie/Musuh), (), ()
- (), (), (), ()
- (), (), (), ()
- (Data ke-0003)
```
