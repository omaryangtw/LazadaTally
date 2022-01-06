# Lazada Tally

A lightweighted tally script for [Google SpreadSheet](https://docs.google.com/spreadsheets) that tally over products and dates for [Lazada](https://www.lazada.com.my/) ecommerce platform.

### Income by Item

![](https://i.imgur.com/WqJTdr5.png)

This creates a sheet named 'Income by Item' which contains 4 columns

- Details - Full product name
- seller SKU - SKU for each product
- Count - the number sold for each product
- Payout Amount - The total amount for each product

### Income by Date

![](https://i.imgur.com/C1AUj4Z.png)

This creates a sheet named 'Income by Date' which contains 2 columns

- Transaction Date
- Payout Amount

## How to run this script

1. Create a [spreadsheet](https://spreadsheets.google.com)
2. Upload the transaction report from Lazada, the content should be looked like this:
   ![](https://i.imgur.com/28xcM05.png)
3. Extensions > Apps Script
   ![](https://i.imgur.com/Ecp90tK.png)
4. Copy the code from `lazada.gs` into editor
5. Click run
