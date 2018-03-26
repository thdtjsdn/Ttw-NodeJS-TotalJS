console.log(1);STtwUtilBuffer.iconv=require("iconv-lite");
(function(){
var f0 = function(error){try{global.TtwLog.error(error);}catch(e){}};
global.process.on("uncaughtException",f0);
global.process.on("unhandledRejection",f0);
global.process.on("SIGINT",f0);
global.process.on("SIGTERM",f0);
global.process.on("SIGUSR1",f0);
global.process.on("SIGUSR2",f0);
global.process.on("SIGHUP",f0);
})();
//----------------------------------------------------------------------------------------------------;
var fileNm = "MongoDB-Start-0-B2LINK--LogMonitor.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

global.Lib.Ttw.importTll( "../../../Development-NodeJS_Modules/native_modules/MongoDBTool__Monitor_Executor.tll" );

//----------------------------------------------------------------------------------------------------;

SUtilMongoDBTool.Monitor_Executor.exec({
	command : global.process.cwd() + "/MongoDB-Start-0-B2LINK.sh.command"
	, prefixNm : "B2LiNK/0-Error"
	, bErrorPerFile : true
	, cbFunctions : {
		//close :function( data ){}
		//, data_out : function( data ){}
		//, data_err : function( data ){}
		//, exit : function( data ){}
	}
});

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;