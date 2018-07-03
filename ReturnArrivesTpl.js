/**
 * ReturnArrivesTpl.js
 * @description :: Email template will be used when a return arrives.
 * 
 * @subjectParam example data 
 *    subject = {
 *       portal_name: 'my shopify',
 *       return_id: 34567,
 *       warehouse: 'Optimus',
 *       brand: 'Vkstore'
 *  }
 *  
 * @contentParam example data
 *   content = {
 *       return_id: 345678,
 *       warehouse: 'Vivek Kumar',
 *       link_to_return: 'https://www.exampleinboundshipment.com'
 *   }
 */

module.exports = {
    subject: `{{portal_name}} Return {{return_id}} has arrived at {{warehouse}} - ({{brand}})`,
    content: `
    <section class='email-header'>
        <article id='order-heading' style='font-size: 16px; padding: 10px'>Return ID {{return_id}} has arrived at {{warehouse}} and is available for inspection.
        </article>
    </section>
    <section class='email-body'>
        <article class="footer" style='padding: 20px 20px 20px 10px'>Link to return
            <a href="{{link_to_return}}" target='_blank'>here</a>
        </article>
    </section>
    `
}