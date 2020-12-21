
const connection= require('./conexion.js');
let conteoSucursalModel={};

conteoSucursalModel.getConteo_sucursal= (callback)=>{
    if (connection) {
        connection.query('SELECT * FROM conteo_sucursal ORDER BY id',
        (err,rows)=>{
            if (err) {
                throw err;
            }else{
                callback(null,rows);
            }
        }
      )
    }
};
//-------------------------------------//
conteoSucursalModel.insertConteo=(ConteoData,callback)=>{
if(connection){
    connection.query(
        'INSERT INTO conteo_sucursal SET ?',ConteoData,
        (err,result)=>{
            if (err) {
                throw err;
            }else{
                callback(null,{
                    'insertId':result.insertId
                })
            }
        }
    )
}
};
//-------------------------------------------//
conteoSucursalModel.updateConteo=(ConteoData,callback)=>{
    if(connection){
        const sql = ` UPDATE conteo_sucursal SET idSucursal=${connection.escape(ConteoData.idSucursal)},
        nombreSucursal=${connection.escape(ConteoData.nombreSucursal)},
        conteo=${connection.escape(ConteoData.conteo)},
        fecha=${connection.escape(ConteoData.fecha)} WHERE id=${connection.escape(ConteoData.id)}`
        connection.query(sql,(err,result)=>{
                if (err) {
                    throw err;
                }else{
                    callback(null,{
                        'msg':'success'
                    })
                }
            }
        )
    }
    };
    //------------------------------------------------//
conteoSucursalModel.deleteConteo=(id,callback)=>{
    if (connection) {
        var sql = `SELECT * from conteo_sucursal WHERE id=${connection.escape(id)}`
    }
    connection.query(sql,(err,row)=>{
        if (row) {
            var sql2 = `DELETE FROM conteo_sucursal WHERE id=${id}`;
            connection.query(sql2,(err,result)=>{
                if (err) {
                    throw err;
                }else{
                    callback(null,{
                        'msg':'delete'
                    })
                }
            })
        }else{
            callback(null,{
                'msg':'Conteo not exists'
            })
        }
    })

};

//---------------------------------------------------------------------------------------------------//
module.exports = conteoSucursalModel;