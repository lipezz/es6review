/*
var arr = [1,2,3,4];

arr.map((item, index) => {   //map - percorre o vetor   
    console.log('E O VALOR É: '+item);        
});

arr.reduce((total, next) => { //reduce - consome todo o vetor para tranformar em um unico valor
    console.log('E O VALOR TOTAL É: '+total);        
    console.log('E O VALOR NEXT É: '+next);            
});

arr.filter(function(item){ //filter - filtra valores com base no boolean apresentado
    console.log('VALOR IGUAL A 1: '+(item===1));    
});

arr.find(function(item){ //find - encontra valores com base na lógica apresentada
    console.log('VALOR IGUAL A 2: '+(item===2));    
});

var arr = [1,2,,3,,-3,null,,0,,undefined,4,,4,,5,,6,,,,];
arr.filter(n => n)
// [1, 2, 3, -3, 4, 4, 5, 6]
arr.filter(Number) 
// [1, 2, 3, -3, 4, 4, 5, 6]
arr.filter(Boolean) 
// [1, 2, 3, -3, 4, 4, 5, 6]


let arr = ["1","2","3","4"]

arr.filter(function(item){ //filter - filtra valores com base no boolean apresentado
    console.log((item==="1"))    
})

console.log(arr.includes(6))

*/

let myList = {
	"List": {
		"Item": [
			{
				"Version": "2",
				"Enable": true,
				"Id": "23938be3f7d11b2043de3d9376b8eade",
				"Uri": "/api/faturas/v1/registranotificacao",
				"Name": "CadastroNotificacaoOnlinePDFNovaFibra"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "23938be3f7d11b2043de3d9376b8ec26",
				"Uri": "/api/nds/v1/clientes/*",
				"Name": "ConsultarDadosClienteNAM"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "23938be3f7d11b2043de3d9376b8ec65",
				"Uri": "/api/nds/v1/clientes/atualizacao",
				"Name": "AlterarDadosClienteNAM"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "23938be3f7d11b2043de3d9376b8edde",
				"Uri": "/api/ordemservico/v1/fechamentopendencia",
				"Name": "FechamentoPendenciaNovaFibra"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "23938be3f7d11b2043de3d9376b8ef1c",
				"Uri": "/clientes/faturas/v1/pdf/gerarlink",
				"Name": "GerarLinkFaturaEmPDF"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "341b0f8bbe0edfec486522ff4db10208",
				"Uri": "/api/servicosoi360/v1/notification/*",
				"Name": "ServicosOi360"
			},
			{
				"Version": "4",
				"Enable": true,
				"Id": "341b0f8bbe0edfec486522ff4dc8526f",
				"Uri": "/api/account-management/v1/*",
				"Name": "AccountManagement_v1"
			},
			{
				"Version": "3",
				"Enable": true,
				"Id": "341b0f8bbe0edfec486522ff4dc91b26",
				"Uri": "/api/workOrderManagement/notification/v1",
				"Name": "WorkOrderManagement"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "341b0f8bbe0edfec486522ff4dcb3537",
				"Uri": "/api/service-ordering/v3/orders",
				"Name": "ServiceOrdering_orders_v3"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "341b0f8bbe0edfec486522ff4de8300f",
				"Uri": "/recursos/fibra/v1/prereserva/efetivar",
				"Name": "EfetivarPreReserva"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "341b0f8bbe0edfec486522ff4e06b760",
				"Uri": "/api/catalogmanagement/v2/*",
				"Name": "CatalogManagement_V2"
			},
			{
				"Version": "3",
				"Enable": true,
				"Id": "341b0f8bbe0edfec486522ff4e2046ae",
				"Uri": "/app/salesforce/services/*",
				"Name": "BillingFunction_v1"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "341b0f8bbe0edfec486522ff4e204781",
				"Uri": "/api/troubleticket/v1/*",
				"Name": "TroubleTicketAPI"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "3a200bf34b84a9bdad1424d81b6c9c29",
				"Uri": "/app/salesforce/services/apexrest/vlocity_cmt/v3/catalogs/SVA/basket",
				"Name": "Firewall"
			},
			{
				"Version": "2",
				"Enable": true,
				"Id": "3a200bf34b84a9bdad1424d81b71dc06",
				"Uri": "/api/billingmanagement/v3/*",
				"Name": "BillingManagement_V3"
			}
        ]
	}
}



myList.List.Item.map((item, index) => {   //map - percorre o vetor   
    if(item.Uri.includes('salesforce'))
        console.log('E O VALOR É: '+item.Uri)       
})


const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true
/*
arr.reduce((total, next) => { //reduce - consome todo o vetor para tranformar em um unico valor
    console.log('E O VALOR TOTAL É: '+total);        
    console.log('E O VALOR NEXT É: '+next);            
});

arr.filter(function(item){ //filter - filtra valores com base no boolean apresentado
    console.log('VALOR IGUAL A 1: '+(item===1));    
});

arr.find(function(item){ //find - encontra valores com base na lógica apresentada
    console.log('VALOR IGUAL A 2: '+(item===2));    
});
*/