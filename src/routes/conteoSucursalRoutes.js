const Conteo = require('../models/conteoSucursal');
module.exports = function (app){

    app.get('/conteoSucursal',(req,res)=>{
        Conteo.getConteo_sucursal((err,data)=>{
            res.status(200).json(data);
        });
    });
    app.post('/conteoSucursal',(req,res)=>{
                //--------------------------------------------------//
                    const ConteoData={
                        id:null,
                        idSucursal:req.body.idSucursal,
                        nombreSucursal:req.body.nombreSucursal,
                        conteo:req.body.conteo,
                        fecha:req.body.fecha
                    };
                    Conteo.insertConteo(ConteoData,(err,data)=>{
                        if (data && data.insertId) {
                            res.json({
                                success:true,
                                msg:'dato ingresado',
                                data:data
                            });
                        }
                        else{
                            res.status(500).json({
                                success:false,
                                msg:'Error'
                            });
                        }
                    })
                    console.log(req.body);
                //--------------------------------------------------//
    });
    app.put('/conteoSucursal',(req,res)=>{
        const ConteoData={
            id:req.body.id,
            idSucursal:req.body.idSucursal,
            nombreSucursal:req.body.nombreSucursal,
            conteo:req.body.conteo,
            fecha:req.body.fecha
        };
        Conteo.updateConteo(ConteoData,(err,data)=>{
            if(data&&data.msg){
                res.json(data);
            }else{
                res.status(500).json({
                    success:false,
                    msg:'Error'
                });
            }
        });
    });
    app.delete('/conteoSucursal/:id',(req,res)=>{
        Conteo.deleteConteo(req.params.id,(err,data)=>{
            if(data && data.msg==='delete' || data.msg==='Conteo not exists'){
                res.json({
                    success:true,
                    data
                })
            }else{
                res.status(500).json({
                    success:false,
                    msg:'Error'
                })
            }
        })
    });

}