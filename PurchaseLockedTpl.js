/**
 * PurchaseLockedTpl.js
 * @description :: Email template will be used when a purchase order is locked/quantities confirmed.
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
 *       vendor: 'Vivek Kumar',
 *       user_created: 'symson',
 *       brand: 'Vkstore',
 *       total_value: 345,
 *       total_units: 2, 
 *       purchase_order_notes: 'Optimus Information Inc Pinnacle tower noida sector 62',
 *       link_to_purchase: 'https://www.examplepurchase.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Purchase Order has been confirmed - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Purchase order {{order_no}} for {{vendor}}  was successfully created.
        </article>
        <article style='padding: 5px 10px 5px 10px'>Confirmed By - {{user_confirmed}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Brand(s) - {{brand}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Value - {{total_value}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Units - {{total_units}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Purchase Order Description - {{purchase_order_notes}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Start date - {{start_date_on_po}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Cancel date - {{cancel_date_on_po}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to purchase order,
            <a href="{{link_to_purchase}}" target='_blank'> click here</a>
        </article>
    </section>
    `
}