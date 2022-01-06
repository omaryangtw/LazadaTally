function myImport() {
    let transactionSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("transaction");
    transactionSheet.getRange("H2:H").setNumberFormat("0.00");
    
    let querySheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("QUERY");
      if(querySheet == null) {
      SpreadsheetApp.getActiveSpreadsheet().insertSheet('QUERY')
      querySheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("QUERY");
    }
    querySheet.getRange(1,1).setFormula('=QUERY(transaction!A:V, "SELECT A, B, C, D, E, F, G, H, I, J, L, M, N, O, P, Q, R, S, T, U, V WHERE NOT U  Like \'Reimbursement for Shipping%\'")')
  
    // Income by Item Formulas 
    let incomeByItemSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Income by Item");
    if(incomeByItemSheet == null) {
      SpreadsheetApp.getActiveSpreadsheet().insertSheet('Income by Item')
      incomeByItemSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Income by Item");
    }
    // 
    incomeByItemSheet.getRange("A1").setValue('Details')
    incomeByItemSheet.getRange("B1").setValue('seller SKU')
    incomeByItemSheet.getRange("C1").setValue('Count')
    incomeByItemSheet.getRange("D1").setValue('Payout Amount')
  
    incomeByItemSheet.getRange("A2:D200").clear()
    incomeByItemSheet.getRange("A2").setFormula("=UNIQUE(QUERY!E2:E)")
    let bFormulas = []
    let cFormulas = []
    let dFormulas = []
    let lastRow = incomeByItemSheet.getLastRow()
    for(i =2; i <= lastRow; i++){
      bFormulas[i-2] = ["=index(transaction!F:F, match(A" + i + ",transaction!E:E,0))"]
      cFormulas[i-2] = ['=COUNTIFS(QUERY!E:E,A'+ i + ',QUERY!B:B,"Orders-Sales")']
      dFormulas[i-2] = ['=sumif(QUERY!E:E,A' + i + ',QUERY!H:H)']
    }
    incomeByItemSheet.getRange(2, 2, lastRow-1, 1).setFormulas(bFormulas)
    incomeByItemSheet.getRange(2, 3, lastRow-1, 1).setFormulas(cFormulas)
    incomeByItemSheet.getRange(2, 4, lastRow-1, 1).setFormulas(dFormulas)
  
    // Income by Date Formulas
    let incomeByDateSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Income by Date");
    if(incomeByDateSheet == null) {
      SpreadsheetApp.getActiveSpreadsheet().insertSheet('Income by Date')
      incomeByDateSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Income by Date");
    }
    incomeByDateSheet.getRange("A1:B40").clear()
    incomeByDateSheet.getRange("A1").setFormula("=UNIQUE(QUERY!A:A)")
    incomeByDateSheet.getRange("B1").setValue('Payout Amount')
    dateBFormulas = []
    let dateLastRow = incomeByDateSheet.getLastRow()
    for(i = 1; i< dateLastRow; i++){
      dateBFormulas[i-1] = ['=sumif(QUERY!A:A,A' + parseInt(i+1) + ',QUERY!H:H)']
    }
    incomeByDateSheet.getRange(2, 2, dateLastRow-1, 1).setFormulas(dateBFormulas)
  }
  