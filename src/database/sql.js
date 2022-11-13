import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dptnzbdpf",
    database: "week10",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool.promise();

//export가 있어야 이 함수를 다른파일에서 쓸수있음
export const selectSql = {
    getUsers: async () => {
        const [rows] = await promisePool.query(`select * from user`);

        return rows;
    },

    getDepartment: async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows;
    }
}

export const deleteSql = {
    deleteDepartment: async (data) => {
        console.log("deleteSql.deleteDepartment:", data.Dnumber);
        const sql = `delete from department where Dnumber=${data.Dnumber}`

        await promisePool.query(sql);
    },
};
