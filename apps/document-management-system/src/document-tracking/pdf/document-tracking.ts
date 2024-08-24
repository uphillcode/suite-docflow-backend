// import { ConnectionEntity } from "../entities/connection.entity";
// import { EConnectionState, EConnectionStateLabel } from "../interface/connection.interface";

// export class PDF {
//     list = (items: ConnectionEntity[], params) => {

//         let datos = [];
//         items.forEach((item, index) => {
//             let rows = [
//                 {
//                     text: index + 1,
//                     style: "centrado"
//                 },
//                 { text: item.origin, style: 'centrado' },
//                 { text: item.denomination, style: 'centrado' },
//                 { text: item.user, style: 'centrado' },
//                 { text: item.password, style: 'centrado' }
//             ]


//             switch (item.state) {
//                 case EConnectionState.ACTIVE: {
//                     rows.push({ text: EConnectionStateLabel.ACTIVE, style: "VERDE" })
//                 } break;
//                 case EConnectionState.INACTIVE: {
//                     rows.push({ text: EConnectionStateLabel.INACTIVE, style: "ROJO" })
//                 } break;
//                 default: {
//                     rows.push({ text: "NO DEFINIDO", style: "ROJO" })
//                 }
//             }

//             datos.push(rows)
//         });

//         return [
//             {
//                 style: "tableExample",
//                 margin: [0, 0, 0, 10],
//                 table: {
//                     widths: ["*"],
//                     body: [
//                         [
//                             {
//                                 text: "LISTA DE connection",
//                                 style: "title",
//                                 border: [false, true, false, true]
//                             }
//                         ]
//                     ]
//                 },
//                 layout: {
//                     hLineWidth: function (i, node) {
//                         return 0.5;
//                     },
//                     vLineWidth: function (i, node) {
//                         return 0.5;
//                     },
//                 }
//             },
//             {
//                 style: "tableExample",
//                 table: {
//                     widths: ["auto", "auto", "auto", "auto", "auto", "auto"],
//                     body: [
//                         [
//                             { text: "#", style: "tableHeader2"},
//                             { text: 'Origen', style: 'tableHeader2' },
//                             { text: 'Denominación', style: 'tableHeader2' },
//                             { text: 'Usuario', style: 'tableHeader2' },
//                             { text: 'Contraseña', style: 'tableHeader2' },
//                             { text: 'Estado', style: 'tableHeader2' }
//                         ],
//                         ...datos
//                     ]
//                 },
//                 layout: {
//                     hLineWidth: function (i, node) {
//                         return 0.5;
//                     },
//                     vLineWidth: function (i, node) {
//                         return 0.5;
//                     },
//                 }
//             }
//         ]
//     }
// }

// export default new PDF();