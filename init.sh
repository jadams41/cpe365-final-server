mysql typeGameDatabase -u root -pprideboy41 --show-warnings < createAndInitQuotesTable.sql
mysql typeGameDatabase -u root -pprideboy41 --show-warnings < createAndInitRecordsTable.sql
node addDifficulty.js
