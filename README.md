Deskripsi API: Fitur API yang saya kerjakan adalah CRUD Air Polution, Authentication, dan Authorization.
Prasyarat: Menjalankan API dengan software postman atau yang serupa.

Instalasi:
- Download Repository ini kemudian ekstrak
- Buka folder hasil ekstrak menggunakan VSCode atau yang serupa
- Buka terminal dan ketik npm i lalu enter
- Setelah berhasil ketik npm run dev untuk menjalankan program (keberhasilan ditandai dengan munculnya tulisan ➜  [API] Local:   http://localhost:8000/) pada terminal
- Setelah program berhasil dijalankan silahkan buka software postman atau yang serupa
  
Penggunaan:
Autentikasi: Untuk menjalankan fitur CRUD Air Polution memerlukan token.
- Ketik http://localhost:8000/api/auth/login pada bagian url
- Ubah method di sebelah kiri url menjadi POST
- Klik tab body, pilih raw, kemudian isikan data berikut:
  {
    "email":"cettatestapi@mail.com",
    "password":"Admin123!"
  }
- Kemudian klik tombol send di sebelah kanan url
- Setelah berhasil pada kolom bagian bawah akan muncul data user, silahkan copy isi token pada data tersebut
- Pilih tab Authorization, pilih Auth type Bearer Token (khusus postman versi terbaru, jika tidak ada pilihan ketik manual Bearer(spasi)token)
- Paste token yang telah dicopy sebelumnya pada kolom yang tersedia

Endpoint:
- http://localhost:8000/auth/login ➜ untuk login
- http://localhost:8000/air-polution ➜ untuk get semua data air polution dan create data baru air polution
- http://localhost:8000/air-polution/:id ➜ untuk get data air polution berdasarkan id, delete, dan update data air polution

Contoh Request:
1. Create data air polution
   - Ketik http://localhost:8000/air-polution pada url di software postman atau yang serupa
   - Ubah method di sebelah kiri url menjadi POST
   - Klik tab body, pilih raw, kemudian isikan data berikut:
     {
    "country":"Poland",
    "city":"Przasnysz",
    "aqiValue":34,
    "aqiCategory":"Good",
    "coAqiValue":1,
    "coAqiCategory":"Good",
    "ozoneAqiValue":34,
    "ozoneAqiCategory":"Good",
    "no2AqiValue":0,
    "no2AqiCategory":"Good",
    "pm25AqiValue":20,
    "pm25AqiCategory":"Good"
     }
   - Kemudian klik tombol send di sebelah kanan url
   - Setelah berhasil pada kolom bagian bawah akan muncul message "Create Air Polution Success" disertai data yang telah diisikan.
     
Error Handling:
- Kode status 200 berarti berhasil
- Kode status 400 berarti error
- Jika menjalankan fitur CRUD Air Polution tanpa token maka akan muncul message "token is missing"
- Jika menjalankan fitur CRUD Air Polution dengan token yang salah maka akan muncul message "token invalid"
- Jika menjalankan fitur CRUD Air Polution dengan token yang benar namun bukan sebagai ADMIN maka akan muncul message "User don't have access"

Note:
- Token berlaku selama 1 jam
- Data email dan password yang telah disebutkan di atas adalah data user sebagai ADMIN
- Jika ingin uji coba menjalankan fitur CRUD pada API sebagai user biasa (bukan ADMIN) maka silahkan ubah email menjadi cettauser@mail.com dengan password yang sama.
