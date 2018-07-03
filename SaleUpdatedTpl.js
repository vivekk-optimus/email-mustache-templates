/**
 * SaleUpdatedTpl.js
 * @description :: Email template will be used when an order is updated.
 * 
 *  @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       order_no: 34567,
 *       brand: 'Optimus'
 *  }
 *  @contentParam example data
 *    content = {
 *       order_no: 345678,
 *       customer: 'Vivek Kumar',
 *       user_updated: 'symson',
 *       user_picked: 'user2',
 *       user_packed: 'user3',
 *       total_cartoons: 10,
 *       total_weight: 456,
 *       freight_cost: 2,
 *       invoice_total: 345,
 *       link_to_sale: 'https://www.examplesale.com'
 *   }
 */
module.exports = {
    subject: `{{portal_name}} Sales Order has been Updated - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales order {{order_no}} for {{customer}} was successfully updated.</article>

        <article style='padding: 5px 10px 5px 10px'>Updated By - {{user_updated}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Picked By - {{user_picked}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Packed By - {{user_packed}}
        </article>
        <article style='padding: 5px 10px 5px 10px'># of cartoons - {{total_cartoons}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Weight - {{total_weight}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Freight Cost - {{freight_cost}}
        </article>
        </article>
        <article style='padding: 5px 10px 5px 10px'>Invoice Total - {{invoice_total}}
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to sales order
            <a href="{{link_to_sale}}" target='_blank'>here</a>
        </article>
    </section>
    `
}
    