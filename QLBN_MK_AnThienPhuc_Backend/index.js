/*//import all packages in index.js file
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();


app.use(cors());
app.use(bodyparser.json());

//connect mysql database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mat_kinh',
    port: 3306
});

//Kiem tra ket noi mysql
db.connect(err => {
    if (err) {
        console.log('Lỗi', err);
    } else {
        console.log('Kết nối thành công!')
    }
})

app.listen(3000, () => { //
    console.log('Server running');
});


//==============
app.get('/sanPhamMatKinh', (req, res) => {
    let query = `SELECT * FROM loai_kinh`;
    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        if (result.length > 0) {
            res.send({
                message: 'Tất cả dữ liệu bảng loại kính!',
                data: result
            });
        }
    });
});

//GET data theo id
app.get('/sanPhamMatKinh/:id', (req, res) => {
    let getID = req.params.id;
    let query = `SELECT * FROM loai_kinh WHERE maKinh = ${getID}`;
    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        if (result.length > 0) {
            res.send({
                message: 'Tất cả dữ liệu bảng mắt kính theo id!',
                data: result
            });
        } else {
            res.send({
                message: 'Dữ liệu không tồn tại'
            });
        }
    });
});*/

// =====================
//import all packages in index.js file
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();


app.use(cors());
app.use(bodyparser.json());

//connect mysql database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mat_kinh',
    port: 3306
});

//Kiem tra ket noi mysql
db.connect(err => {
    if (err) {
        console.log('Lỗi', err);
    } else {
        console.log('Kết nối thành công!')
    }
})

app.listen(3000, () => { //
    console.log('Server running');
});

//Thao tac
app.get('/BenhNhan', (req, res) => {
    let query = `SELECT * FROM benh_nhan`;
    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        if (result.length > 0) {
            res.send({
                message: 'Tất cả dữ liệu bảng bệnh nhân!',
                data: result
            });
        }
    });
});

//GET data theo id
app.get('/BenhNhan/:id', (req, res) => {
    let getID = req.params.id;
    let query = `SELECT * FROM benh_nhan WHERE maBN = ${getID}`;
    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        if (result.length > 0) {
            res.send({
                message: 'Tất cả dữ liệu bảng bệnh nhân theo id!',
                data: result
            });
        } else {
            res.send({
                message: 'Dữ liệu không tồn tại'
            });
        }
    });
});

// Create data == POST
app.post('/BenhNhan', (req, res) => {
    let tenBN = req.body.tenBN;
    let ngaySinh = req.body.ngaySinh;
    let diaChi = req.body.diaChi;
    let SDT = req.body.SDT;
    let Email = req.body.Email;
    let ngayDatHen = req.body.ngayDatHen;
    let noiDungKham = req.body.noiDungKham;

    let query = `INSERT INTO benh_nhan (tenBN, ngaySinh, diaChi, SDT, Email, ngayDatHen, noiDungKham) 
                VALUES ('${tenBN}', '${ngaySinh}','${diaChi}', '${SDT}', '${Email}','${ngayDatHen}','${noiDungKham}');`

    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        res.send({
            message: 'Thêm dữ liệu thành công!'
        });
    });
});

//Update dữ liệu == PUT
app.put('/BenhNhan/:id', (req, res) => {
    let getID = req.params.id;
    let tenBN = req.body.tenBN;
    let ngaySinh = req.body.ngaySinh;
    let diaChi = req.body.diaChi;
    let SDT = req.body.SDT;
    let Email = req.body.Email;
    let ngayDatHen = req.body.ngayDatHen;
    let noiDungKham = req.body.noiDungKham;

    let query = `UPDATE benh_nhan SET tenBN = '${tenBN}', ngaySinh = '${ngaySinh}',
        diaChi = '${diaChi}', SDT = '${SDT}', Email = '${Email}',ngayDatHen = '${ngayDatHen}',
        noiDungKham = '${noiDungKham}' WHERE maBN = ${getID}`;

    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi quá chời', err)
        }
        res.send({
            message: 'Cập nhật dữ liệu thành công!'
        });
    });
});

//Delete data theo id
app.delete('/BenhNhan/:id', (req, res) => {
    let getID = req.params.id;

    let query = `DELETE FROM benh_nhan WHERE maBN = ${getID}`;

    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        res.send({
            message: 'Xóa dữ liệu có ID = ' + getID + ' thành công!'
        });
    });
});

app.get('/MatKinh', (req, res) => {
    let query = `SELECT * FROM loai_kinh`;
    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        if (result.length > 0) {
            res.send({
                message: 'Tất cả dữ liệu bảng mắt kính!',
                data: result
            });
        }
    });
});

//GET data theo id
app.get('/MatKinh/:id', (req, res) => {
    let getID = req.params.id;
    let query = `SELECT * FROM loai_kinh WHERE maKinh = ${getID}`;
    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        if (result.length > 0) {
            res.send({
                message: 'Tất cả dữ liệu bảng mắt kính theo id!',
                data: result
            });
        } else {
            res.send({
                message: 'Dữ liệu không tồn tại'
            });
        }
    });
});

// Create data == POST
app.post('/ThemSanPham', (req, res) => {
    let tenKinh = req.body.tenKinh;
    let doCan = req.body.doCan;
    let chatLieu = req.body.chatLieu;
    let mauSac = req.body.mauSac;
    let loaiGong = req.body.loaiGong;
    let giaBan = req.body.giaBan;
    let baoHanh = req.body.baoHanh;
    let hinhSP = req.body.hinhSP;
    let maPhieuKham = req.body.maPhieuKham;

    let query2 = `INSERT INTO loai_kinh(maKinh, tenKinh, doCan, chatLieu, mauSac, loaiGong, giaBan, baoHanh, hinhSP, maPhieuKham) 
        VALUES ('','${tenKinh}','${doCan}','${chatLieu}','${mauSac}','${loaiGong}','${giaBan}','${baoHanh}','${hinhSP}','${maPhieuKham}');`

    db.query(query2, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        // else {
        //     res.send({
        //         message: 'Thêm dữ liệu thành công!'
        //     });
        // }
        res.send({
            message: 'Thêm dữ liệu thành công!'
        });
    });
});

//Update dữ liệu == PUT
app.put('/MatKinh/:id', (req, res) => {
    let tenKinh = req.body.tenKinh;
    let doCan = req.body.doCan;
    let chatLieu = req.body.chatLieu;
    let mauSac = req.body.mauSac;
    let loaiGong = req.body.loaiGong;
    let giaBan = req.body.giaBan;
    let baoHanh = req.body.baoHanh;
    let hinhSP = req.body.hinhSP;

    let query = `UPDATE loai_kinh SET tenKinh = '${tenKinh}', doCan = '${doCan}', chatLieu = '${chatLieu}', mauSac = '${mauSac}', loaiGong = '${loaiGong}',giaBan = '${giaBan}', baoHanh = '${baoHanh}', hinhSP =  '${hinhSP}' WHERE maKinh = ${getID}`;

    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        res.send({
            message: 'Cập nhật dữ liệu thành công!'
        });
    });
});

//Delete data theo id
app.delete('/MatKinh/:id', (req, res) => {
    let getID = req.params.id;

    let query = `DELETE FROM loai_kinh WHERE maKinh = ${getID}`;

    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        res.send({
            message: 'Xóa dữ liệu có ID = ' + getID + ' thành công!'
        });
    });
});




//+++++++++++++++
//==============
app.get('/sanPhamMatKinh', (req, res) => {
    let query = `SELECT * FROM loai_kinh`;
    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        if (result.length > 0) {
            res.send({
                message: 'Tất cả dữ liệu bảng loại kính!',
                data: result
            });
        }
    });
});

//GET data theo id
app.get('/sanPhamMatKinh/:id', (req, res) => {
    let getID = req.params.id;
    let query = `SELECT * FROM loai_kinh WHERE maKinh = ${getID}`;
    db.query(query, (err, result) => {
        if (err) {
            console.log('Lỗi', err)
        }
        if (result.length > 0) {
            res.send({
                message: 'Tất cả dữ liệu bảng mắt kính theo id!',
                data: result
            });
        } else {
            res.send({
                message: 'Dữ liệu không tồn tại'
            });
        }
    });
});