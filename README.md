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
- Bagian Pertama  : [(FactSide_1), (SideFront_3)] (XXXX)
- Bagian Kedua    : [(Bebas, sesuaikan keadaan tempatan)] (XXXX)
- Bagian Ketiga   : [(Bebas, sesuaikan keadaan tempatan)] (XXXX)
- Bagian Keempat  : [ID Data] (XXXX)
```
Contoh: [1Pla-A1Ze-LaAm-0001]

- (Pertama), (Plant/Tanaman)
- (INT-Zero),(Day), (Zero)
- (Daratan), (Siang)
- (Data ke-0001)
```

V2 : (**| ??-????-????-????-???? |**)
---
> Ini dipotong menjadi 4 bagian setiap 4 digit, ditambah 1 bagian dengan 2 digit.
- Bagian Pertama  : [(DataType_1), (TypeName_1)] (XX)
- Bagian Kedua    : [(FactSide_1), (SideFront_3)] (XXXX)
- Bagian Ketiga   : [(Bebas, sesuaikan keadaan tempatan)] (XXXX)
- Bagian Keempat  : [(Bebas, sesuaikan keadaan tempatan)] (XXXX)
- Bagian Kelima   : [ID Data] (XXXX)
```
Contoh: [A1-EPla-B2pM-dn51-0002]

- (Ke-A), (Pertama)
- (Entitas), (Plant/Tanaman)
- (INT-First),(Malam)
- (Day),(Night), (Tanaman-A),(Tanaman-B)
- (Data ke-0002)
```

V3 : (**| ????-????-????-????-???? |**)
---
> Ini dipotong menjadi 5 bagian setiap 4 digit.
- Bagian Pertama  : [(DataType_1), (TypeName_1), (FactSide_1), (SideFront_1)] (XXXX)
- Bagian Kedua    : [(Bebas, sesuaikan keadaan tempatan)] (XXXX)
- Bagian Ketiga   : [(Bebas, sesuaikan keadaan tempatan)] (XXXX)
- Bagian Keempat  : [(Bebas, sesuaikan keadaan tempatan)] (XXXX)
- Bagian Kelima   : [ID Data] (XXXX)
```
Contoh: [Ae2z-a6eS-c2x2-WisN-0003]

- (Ke-A),(Entitas), (Entitas-Tipe-Kedua),(Zombie/Musuh)
- (INT-Improve),(INT-World), (Escalate = Meningkatkan)
- (INT-Super Adventure),(Kategori-Kedua), (X/x ? = 'Danger?'), (Tingkat 'Danger?')
- (Langit), (Snow)
- (Data ke-0003)
```


---


# Aturan berdasarkan Standarisasi
Penulisan saat ini
```
Penulisan saat ini:

{ Plant-Zero V1 : (1Pla-0Dc1-LaAm-0001) }
- [(INT-Entity-Tipe-Pertama),(Plants/Tanaman)]
- [(Zero),(Day), (Charas),(INT-Tipe-World)]
- [(Daratan), (Matahari)]
- [(ID Data)]

{ V2 : ? }
- [()]
- [()]
- [()]
- [()]
- [()]

{ V3 : ? }
- [()]
- [()]
- [()]
- [()]
- [()]
```

---


# Catatan Notan
Berikut catatan:
```
Main (Integer-an Utama)
- Ke-[(A), (B)]
- Entity/Entitas [(E),(e), (EN),(En),(eN),(en), (ENT),(eNT),(Ent),(ent)]

Side (Ada dua "faksi")
- Plant [(P),(p), (PL),(Pl),(pL),(pl), (PLA),(pLA),(Pla),(pla)]
- Zombie [(Z),(z), (ZO),(Zo),(zO),(zo), (ZOM),(zOM),(Zom),(zom)]

ISituate (Keadaan)
A-1 Matahari [(AM),(Am),(aM),(am)] ()
A-2 Bulan [(PM),(Pm),(pM),(pm)] ()
A-3 Saljuan [(SN),(Sn),(sN),(sn)] ()
|
B-1 Langit [(T),(t), (WI),(Wi),(wI),(wi)] (T-Tempest)
B-2 Lautan [(S),(s), (SE),(Se),(sE),(se)] (S-Seas)
B-3 Darat [(F),(f), (LA),(La),(lA),(la)] (F-Flat)

IDatereff (Identitas Data)
A-1a Zero [(Z),(z), (ZE),(Ze),(zE),(ze), (ZER),(zER),(Zer),(zer) (0), (0Z),(0z), (0ZR),(0Zr),(0zR),(0zr)]
A-1aa Characters/Charas [(C),(c)]
A-1ab Objecs/Items [(O),(o)]
A-2a First [(ST),(St),(sT),(st), (XX = Campuran apa dan apa), (2)]
A-2b Request [(RQ),(Rq),(rQ),(rq)]
A-3 Middle [(ZE),(Ze),(zE),(ze), (MIX),(mIX),(Mix),(mix) (3H),(3h), (3UH),(3Uh),(3uH),(3uh)] (H-High)
A-4 Final [(FN),(Fn),(fN),(fn), (FIN),(fIN),(Fin),(fin) (5F),(5f), (5FN),(5Fn),(5fN),(5fn)]
A-5 Mode [(MO),(Mo),(mO),(mo), (MOD),(mOD),(Mod),(mod) (6O),(6o), (6MO),(6Mo),(6mO)(6mo)] (O-Over)
|
B- Menanti...

IDigit (ID perdataan)
- WAJIB "MIN" 4.
```
