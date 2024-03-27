















# primary key vs unique key in mysql

Primary keys and unique keys in MySQL both enforce data integrity by ensuring uniqueness within a table, but they have some key differences:

## Uniqueness:

Primary Key: Guarantees strict uniqueness for all rows. No two rows can have the same value in the primary key column(s). It enforces entity integrity, meaning each row has a unique identity within the table.
Unique Key: Enforces uniqueness for most rows, but allows one or more rows to have a NULL value. Only one NULL value is allowed per unique key. It primarily prevents duplicate entries.
## Number of Constraints:

Primary Key: A table can only have one primary key constraint.
Unique Key: A table can have multiple unique key constraints on different columns or sets of columns.
## Other Differences:

## NULL Values:
Primary key cannot contain NULL values.
Unique key can contain NULL values (but only one).
## Auto-Increment:
Primary key can be defined with an AUTO_INCREMENT property, which automatically generates a unique value for each new row.
Unique key does not support auto-increment.
## Indexes:
Both primary key and unique key constraints implicitly create an index on the column(s) involved. This improves query performance when searching or filtering based on the key.
However, the primary key typically uses a clustered index, which stores data rows in the same order as the index, potentially leading to even faster access. Unique keys generally use non-clustered indexes.
## In summary:

Use a primary key when you need a guaranteed unique identifier for each row in a table and want to enforce entity integrity.
Use a unique key when you want to prevent duplicate entries in a column or set of columns, but NULL values might be allowed in some cases.
