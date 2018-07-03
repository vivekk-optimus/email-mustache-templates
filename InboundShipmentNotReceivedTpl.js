/**
 * InboundShipmentNotReceivedTpl.js
 * @description :: Email template will be used when a released inbound shipment has not been received
 *                 within <insert hours selected by client> hours.
 * 
 * @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       hours_selected: 23,
 *       inbound_shipment_id: 34567,
 *  }
 *  
 * @contentParam example data
 *   content = {
 *       inbound_shipment_id: 345678,
 *       insert_hours: 23,
 *       user_released: 'Vivek Kumar'
 *       link_to_inbound_shipment: 'https://www.exampleinboundshipment.com'
 *   }
 */

module.exports = {
    subject: ` {{portal_name}} Released inbound shipment has not been received within {{hours_selected}} hours - {{inbound_shipment_id}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>
            Inbound shipment ID {{inbound_shipment_id}} for was released over {{insert_hours}} hours ago and has not been finalized.
        </article>
        <article style='padding: 5px 10px 5px 10px'>Released by - {{user_released}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to inbound shipment
            <a href="{{link_to_inbound_Shipment}}" target='_blank'>here</a>
        </article>
    </section>
    `
}