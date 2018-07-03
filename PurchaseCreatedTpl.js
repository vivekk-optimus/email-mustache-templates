/**
 * PurchaseCreatedTpl.js
 * @description :: Email template will be used when a purchase order is created.
 * 
 *  @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       order_no: 34567,
 *       brand: 'Optimus'
 *  }
 *  @productsParam array example
 *   let products = [{
 *       sku: 'MLDNPQ-RST',
 *       name: 'Addias shoes',
 *       quantity: 2,
 *       item_price: 200
 *   },
 *   {
 *       sku: 'MLDNNPQ-RST',
 *       name: 'Addias t-shirt',
 *       quantity: 2,
 *       item_price: 150
 *   }
 *   ];
 * 
 *  @contentParam example data
 *   content = {
 *       order_no: 345678,
 *       vendor: 'Vivek Kumar',
 *       user_created: 'symson',
 *       brand: 'Addidas',
 *       total_value: 345,
 *       total_units: 2, 
 *       purchase_order_notes: 'Optimus Information Inc Pinnacle tower noida sector 62',
 *       start_date_on_po: '23/10/2018',
 *       cancel_date_on_po: '11/12/2018',
 *       products: products, //Array of products        
 *       link_to_purchase: 'https:www.github.com'
 *   }
 */

module.exports = {
    subject: `New {{portal_name}} Purchase Order - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Purchase order {{order_no}} for {{vendor}}  was successfully created.</article>

        <article style='padding: 5px 10px 5px 10px'>Created By - {{user_created}}
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
    <section class="separator" style='padding: 20px 20px 20px 10px'>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    </section>
    <section class='email-body'>
        <table border="1" cellpadding="0" cellspacing="0" style='margin-left: 10px'>
            <tr class='table-header'>
                <th style='padding: 10px 20px 10px 10px; text-align: left'>SKU</th>
                <th style='padding: 10px 20px 10px 10px; text-align: left'>Product Name</th>
                <th style='padding: 10px 20px 10px 10px; text-align: left'>Qty</th>
                <th style='padding: 10px 20px 10px 10px; text-align: left'>Item Price</th>
            </tr>
            {{#products}}
            <tr class='table-item'>
            <td style='padding: 5px 10px;'>{{sku}}</td>
            <td style='padding: 5px 10px;'>{{name}}</td>
            <td style='padding: 5px 10px;'>{{quantity}}</td>
            <td style='padding: 5px 10px;'>{{item_price}}</td>
            </tr>
            {{/products}}
            <tr>
                <td colspan='2' style='text-align:right;padding: 5px 10px;'>Total</td>
                <td style='padding: 5px 10px;'>{{total_units}}</td>
                <td style='padding: 5px 10px;'>{{total_value}}</td>
            </tr>
        </table>

        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to purchase order,
            <a href="{{link_to_purchase}}" target='_blank'> click here</a>
        </article>
    </section>
    `
}