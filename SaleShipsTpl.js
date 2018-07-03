/**
 * SaleShipsTpl.js
 * @description :: Email template will be used when an order ships.
 *
 *  @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       order_no: 34567,
 *       brand: 'Optimus'
 *  }
 * 
 *  @contentParam example data
 *   content = {
 *       order_no: 345678,
 *       customer: 'Vivek Kumar',
 *       user_shipped: 'symson',
 *       brand: 'Addidas',
 *       sales_order_notes: 'Optimus Information Inc Pinnacle tower noida sector 62',
 *       sales_order_po: 'LP3435674',
 *       total_units: 2,
 *       total_value: 345,
 *       tracking_id: 33434,
 *       carrier: 'somecarrier',
 *       Freight_method: 'someFreightMethod',
 *       tracking_url: 'https://www.exampletrackingurl.com',
 *       cartons: 34,
 *       weight: '345kg',
 *       link_to_sale: 'https://www.examplesale.com'
 *       link_to_packing: 'https://www.examplepacking.com'
 *       link_to_invoice: 'https://www.exampleinvoice.com' * 
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Sales Order has shipped - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales order {{order_no}} for {{customer}} has shipped.</article>
        <article style='padding: 5px 10px 5px 10px'>Shipped By - {{user_shipped}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Brand(s) - {{brand}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Value - {{total_value}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Units - {{total_units}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Sales Order Notes - {{sales_order_notes}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>PO# - {{sales_order_po}}
        </article>
    </section>
    <section class="separator" style='padding: 20px 20px 20px 10px'>
    </section>
    <section class='email-header'>
        <article style='padding: 5px 10px 5px 10px'>Tracking# - {{tracking_id}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Carrier - {{carrier}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Freight method - {{freight_method}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Tracking URL - {{tracking_url}}
        </article>
        <article style='padding: 5px 10px 5px 10px'># of Cartons - {{cartons}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Weight - {{weight}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to sales order details
            <a href="{{link_to_sales}}" target='_blank'>here</a>
        </article>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to packing slip
            <a href="{{link_to_packing}}" target='_blank'>here</a>
        </article>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to invoice
            <a href="{{link_to_invoice}}" target='_blank'>here</a>
        </article>
    </section>
    `
}