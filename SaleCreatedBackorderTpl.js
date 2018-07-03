/**
 * SaleCreatedBackorderTpl.js
 * @description :: Email template will be used when a sales backorder is generated.
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
 *  @contentParam example data needed to display this template
 *   content = {
 *       order_no: 345678,
 *       customer: 'Vivek Kumar',
 *       backorder_generator: 'symson',
 *       brand: 'Addidas',
 *       sales_order_notes: 'Optimus Information Inc Pinnacle tower noida sector 62',
 *       sales_order_po: 'LP3435674',
 *       products: products, //Array of products
 *       total_units: 2,
 *       total_value: 345,
 *       link_to_sale: 'https:www.github.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Sales Back Order has been created - {{order_no}} ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Sales back order {{order_no}} for {{customer}} was successfully created.</article>

        <article style='padding: 5px 10px 5px 10px'>Created By - {{backorder_generator}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Brand(s) - {{brand}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Value - {{total_value}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Total Units - {{total_units}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Original Sales Order Notes - {{sales_order_notes}}
        </article>
        <article style='padding: 5px 10px 5px 10px'>Original PO# - {{sales_order_po}}
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

        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to sales order
            <a href="{{link_to_sale}}" target='_blank'>here</a>
        </article>
    </section>
    `
}