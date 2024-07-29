# Hướng Dẫn Clone và Chạy Dự Án Laravel




## 1. Cài Đặt Yêu Cầu

Trước khi bắt đầu, hãy đảm bảo rằng bạn đã cài đặt các công cụ sau trên máy tính của mình:

- [PHP](https://www.php.net/downloads) (Phiên bản 8.0 hoặc mới hơn)
- [Composer](https://getcomposer.org/download/)
- [Node.js](https://nodejs.org/) (Phiên bản 14.x trở lên)
- [npm](https://www.npmjs.com/get-npm) (Hoặc [Yarn](https://yarnpkg.com/getting-started/install) nếu bạn muốn)
- [laragon](https://laragon.org/download/ ) hoac [xampp](https://www.apachefriends.org/download.html)

## 2. Clone Dự Án


Mở terminal hoặc command prompt và chạy lệnh sau để clone dự án về máy:

```bash
https://github.com/ngotronglie/DATN.git
```

- ## `Tao 1 nhan khac dev_<tencuaban>` roi code:
    ```bash
    git branch dev_liem
    ```
    ```bash
    git checkout dev_liem
    ```
    - sau do cu the code thoi
- ## `Ai thich test api thi re sang nhanh test `
    ```bash
    git checkout test
    ```
    - sau do test thoai mai

## Chay server laravel backend
```bash
cd backend
```

```bash
composer install
```
| de cai dat composer cho may

- Sao chép tệp .env.example thành .env:
```bash
cp .env.example .env
```
- sau do vao file .env cau hinh database 

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=datn
DB_USERNAME=root
DB_PASSWORD=
```

- vao phpmyadmin cua laragon hoa xampp tao 1 table ten datn xem co giong phia tren khong
```bash
DB_DATABASE=datn
```

- Chạy lệnh sau để tạo khóa ứng dụng (APP_KEY) cho Laravel:
```bash
php artisan key:generate
```
- Nếu dự án có cơ sở dữ liệu, bạn cần chạy migration để tạo các bảng cơ sở dữ liệu:

```bash
php artisan migrate
```

- Nếu có seed dữ liệu mẫu, chạy lệnh sau để thêm dữ liệu vào cơ sở dữ liệu:
```bash
php artisan db:seed
```
- Chạy lệnh sau để khởi động server PHP :
```bash
php artisan serve
```

## Chay frontend react vite 

- tro lai thu muc DATN
```bash
cd ..
```

- vao trong thu muc frontend 
```bash
cd frontend
```

- cai npm 
```bash
npm install
```

- khoi dong frontend 
```bash
npm run dev
```
