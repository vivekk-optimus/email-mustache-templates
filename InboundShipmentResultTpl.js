/**
 * ReceivingResultInboundShipmentTpl.js
 * @description :: Email template will be used to send the receiving results of an inbound shipment.
 * 
 * @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       inbound_shipment_id: 34567,
 *  }
 *  
 * @contentParam example data
 *   content = {
 *       inbound_shipment_id: 345678,
 *       warehouse: 'Vivek Kumar',
 *       po_no: 'L03874387U',
 *       origin: 'something',
 *       carrier: 'Some carrier',
 *       vessel: 'some Vessel',
 *       container_no: 233,
 *       waybill: '',
 *       total_cartons: 23,
 *       weight: '345kg'
 *       total_expected: 343,
 *       total_received: 324,
 *       link_to_inbound_shipment: 'https://www.exampleinboundshipment.com',
 *       has_variance?: true,
 *       variances?: [{
 *              sku: 'LMNO234234P',
 *              description: 'about variance',
 *              expected: '',
 *              received: '',
 *              variance: ''     
 *         }]
 *   }
 */

module.exports = {
    subject: `
    {{portal_name}} - Receiving Report for Inbound Shipment ID {{inbound_shipment_id}}`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Inbound shipment ID {{inbound_shipment_id}} has been received and finalized to {{warehouse}}.
        </article>
        <article style='padding: 5px 10px 5px 10px'>PO # - {{po_no}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Origin - {{origin}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Carrier - {{carrier}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Vessel - {{Vessel}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Container # - {{container_no}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Waybill - {{waybill}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total # of Cartons- {{total_cartons}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Weight - {{weight}}
        </article>

        <section class="separator" style='display:block;height:40px;'>
        </section>

        <article style='padding: 5px 10px 5px 10px'>Total Expected- {{total_expected}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Received - {{total_received}}
        </article>
    </section>
    
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to inbound shipment
            <a href="{{link_to_inbound_Shipment}}" target='_blank'>here</a>
        </article>
        {{#has_variance}}
            <article style='padding: 5px 10px 5px 10px'>We found the following discrepancies between what was expected and what was actually received:
            </article>
            <table border="1" cellpadding="0" cellspacing="0" style='margin-left: 10px'>
            <tr class='table-header'>
                <th style='padding: 10px 20px 10px 10px; text-align: left'>SKU</th>
                <th style='padding: 10px 20px 10px 10px; text-align: left'>Description</th>
                <th style='padding: 10px 20px 10px 10px; text-align: left'>Expected</th>
                <th style='padding: 10px 20px 10px 10px; text-align: left'>Received</th>
                <th style='padding: 10px 20px 10px 10px; text-align: left'>Variance</th>
            </tr>
            {{#variances}}
                <tr class='table-item'>
                <td style='padding: 5px 10px;'>{{sku}}</td>
                <td style='padding: 5px 10px;'>{{description}}</td>
                <td style='padding: 5px 10px;'>{{expected}}</td>
                <td style='padding: 5px 10px;'>{{Received}}</td>
                <td style='padding: 5px 10px;'>{{variance}}</td>
                </tr>
            {{/variances}}
        {{/has_variance}}
    </table>
    </section>
    `
}