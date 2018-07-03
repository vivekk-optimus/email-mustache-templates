/**
 * ReceivingInboundShipmentArrivesTpl.js
 * @description :: Email template will be used when an inbound shipment arrives.
 * 
 * @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       inbound_shipment_id: 34567,
 *       warehouse: 'Optimus'
 *  }
 *  
 * @contentParam example data
 *   content = {
 *       inbound_shipment_id: 345678,
 *       warehouse: 'Vivek Kumar',
 *       link_to_inbound_shipment: 'https://www.exampleinboundshipment.com'
 *       link_to_receiving_receipt: 'https://www.examplereceivingreceipt.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Inbound shipment ID {{inbound_shipment_id}} in {{warehouse}} is ready to be received.`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Inbound shipment ID {{inbound_shipment_id}} has been released to {{warehouse}} for receiving.
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to inbound shipment
            <a href="{{link_to_inbound_Shipment}}" target='_blank'>here</a>
        </article>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to receiving receipt
            <a href="{{link_to_receiving_receipt}}" target='_blank'>here</a>
        </article>
    </section>
    `
}