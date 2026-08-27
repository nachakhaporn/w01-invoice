function calculateTotals(data) {
    let subtotal = 0;
    data.items.forEach(item => {
        item.subtotal = item.quantity * item.unitPrice;
        subtotal += item.subtotal;
    });

    const tax = subtotal * data.invoice.taxRate;
    const total = subtotal + tax;

    return {
        subtotal: parseFloat(subtotal.toFixed(2)),
        tax: parseFloat(tax.toFixed(2)),
        total: parseFloat(total.toFixed(2))
    };
}

document.addEventListener('DOMContentLoaded', () => {

    // companyName
    const companyNamedom = document.getElementById('company-name')
    companyNamedom.innerText = data.company.name
    companyNamedom.classList.remove('no-value')

    // company-contact
    let htmlString = ""
    for (let i = 0; i < data.company.address.length; i++) {
        htmlString = htmlString + data.company.address[i] + '<br>'
    }

    const comcontact = document.getElementById('com-contact')
    comcontact.innerHTML = htmlString
    comcontact.classList.remove('no-value')

    // company-add
    let htmlString2 = " "
    for (let i = 0; i < data.company.contact.length; i++) {
        htmlString2 = htmlString2 + data.company.contact[i] + '<br>'
    }

    const comadd = document.getElementById('com-add')
    comadd.innerHTML = htmlString2
    comadd.classList.remove('no-value')

    // invoice number
    const inumber = document.getElementById('invoice-number')
    inumber.innerText = data.invoice.invoicenum
    inumber.classList.remove('no-value')

    // billtoname
    const billname = document.getElementById('bill-to-name')
    billname.innerText = data.billto.billtoname
    billname.classList.remove('no-value')

    // billtoaddess
    const billadd = document.getElementById('bill-to-address')
    billadd.innerHTML = data.billto.billtocomadd
    billadd.classList.remove('no-value')

    // reference
    const refer = document.getElementById('reference-id')
    refer.innerText = data.billto.refer
    refer.classList.remove('no-value')

    // subject
    const sub = document.getElementById('subject-name')
    sub.innerText = data.invoice.subject
    sub.classList.remove('no-value')

    // date
    const date = document.getElementById('invoice-date')
    date.innerText = data.invoice.date
    date.classList.remove('no-value')

    // due
    const due = document.getElementById('invoice-due')
    due.innerText = data.invoice.due
    due.classList.remove('no-value')

    // conditions
    const conditions = document.getElementById('conditions')
    conditions.innerText = data.condition.condi
    conditions.classList.remove('no-value')

    // Calculate totals using the function
    const totals = calculateTotals(data);

    // allitems
    htmlString = ""
    for (let i = 0; i < data.items.length; i++) {
        const amount = data.items[i].quantity * data.items[i].unitPrice

        htmlString = htmlString + '<div class="">'
        htmlString = htmlString + '<div class="flex justify-between mx-4 p-4">'
        htmlString = htmlString + '<div>'
        htmlString = htmlString + '<h3 class="text-[10px] font-semibold">' + data.items[i].name + '</h3>'
        htmlString = htmlString + '<p>' + data.items[i].description + '</p>'
        htmlString = htmlString + '</div>'
        htmlString = htmlString + '<div class="flex gap-[4.75rem] text-[10px] font-medium">'
        htmlString = htmlString + '<h3>' + data.items[i].quantity + '</h3>'
        htmlString = htmlString + '<h3>' + data.items[i].unitPrice.toFixed(2) + '</h3>'
        htmlString = htmlString + '<h3>' + amount.toFixed(2) + '</h3>'
        htmlString = htmlString + '</div>'
        htmlString = htmlString + '</div>'
        htmlString = htmlString + '</div>'
    }

    // Create totals section
    let totalsHtml = ""
    totalsHtml = totalsHtml + '<div class="">'
    totalsHtml = totalsHtml + '<div class="max-w-[295px] mx-4 ml-auto">'
    totalsHtml = totalsHtml + '<div class="text-[10px] font-medium">'
    totalsHtml = totalsHtml + '<div class="flex justify-between px-3 mt-3">'
    totalsHtml = totalsHtml + '<h3>Subtotal</h3>'
    totalsHtml = totalsHtml + '<h3>' + totals.subtotal + '</h3>'
    totalsHtml = totalsHtml + '</div>'
    totalsHtml = totalsHtml + '<div class="flex justify-between px-3 mt-3">'
    
    // Calculate tax percentage for display
    const taxPercentage = (data.invoice.taxRate * 100).toFixed(0);
    totalsHtml = totalsHtml + '<h3>Tax (' + taxPercentage + '%)</h3>'
    totalsHtml = totalsHtml + '<h3>' + totals.tax + '</h3>'
    totalsHtml = totalsHtml + '</div>'
    totalsHtml = totalsHtml + '<div class="border-b mt-3 mx-4"></div>'
    totalsHtml = totalsHtml + '<div class="flex justify-between px-3 mt-3 text-[11px] font-semibold">'
    totalsHtml = totalsHtml + '<h3>Total</h3>'
    totalsHtml = totalsHtml + '<h3>' + totals.total + '</h3>'
    totalsHtml = totalsHtml + '</div>'
    totalsHtml = totalsHtml + '</div>'
    totalsHtml = totalsHtml + '</div>'
    totalsHtml = totalsHtml + '</div>'

    // Combine items and totals
    const finalHtml = htmlString + totalsHtml;

    const alldom = document.getElementById('allitems')
    alldom.innerHTML = finalHtml
})

