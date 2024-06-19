
import { EConnectionState, EConnectionStateLabel } from "../interface/connection.interface";
import * as moment from 'moment';
import ExcelUtils from 'apps/shared/utils/excel-utils';
import { ConnectionEntity } from "../entities/connection.entity";

export class EXCEL {

    list = async (items: ConnectionEntity[], params, nameFile, directory) => {
        let { wb, styles } = ExcelUtils.generate();
        const ws = wb.addWorksheet('connection');
        let { thead, td_green, td_red, border, title, center, fs10, text_right } = styles;

        ws.column(1).setWidth(5);
        ws.column(2).setWidth(5);
        ws.column(3).setWidth(12);
        ws.column(4).setWidth(60);
        ws.column(5).setWidth(8);
        ws.column(6).setWidth(30);

        ws.cell(2, 4, 2, 6, true).string("institucion").style(title).style(center);
        ws.cell(3, 4, 3, 6, true).string("LISTA DE connection").style(center);
        ws.cell(4, 4, 4, 6, true).string(`Generado el: ${moment().format("DD/MM/YYYY")}`).style(center);

        let headers = ["NRO","","","","", "ESTADO"];
        headers.forEach((header, index) => {
            ws.cell(6, index + 2).string(header).style(thead).style(border);
        });

        let fila = 7;
        items.forEach((item, index) => {
            let column = 2;
            ws.cell(fila, column).string((index + 1).toString()).style(border).style(center);
            column++;            
            ws.cell(fila, column).string(item.origin).style(border).style(center);
            column++;
            ws.cell(fila, column).string(item.denomination).style(border).style(center);
            column++;
            ws.cell(fila, column).string(item.user).style(border).style(center);
            column++;
            ws.cell(fila, column).string(item.password).style(border).style(center);
            column++;

            let StateValue = '', StateColor = {};
            switch (item.state) {
                case EConnectionState.ACTIVE: {
                    StateValue = EConnectionStateLabel.ACTIVE
                    StateColor = td_green
                } break;
                case EConnectionState.INACTIVE: {
                    StateValue = EConnectionStateLabel.INACTIVE
                    StateColor = td_red
                } break;
            }
            ws.cell(fila, column).string(StateValue).style(border).style(center).style(StateColor);
            column++;
                
            fila++;
        });

        let result = await ExcelUtils.create(wb, {
            nameFile,
            directory
        });
        return {
            ...result,
            url: `${params.url}/public/${nameFile}`,
            name_file: nameFile
        };
    }
}

export default new EXCEL();