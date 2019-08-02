## Database
``` 
 * └───Schema - users
 * |   │   Table - user_auth - user_id
 * |   │   Table - user_details - user_id
 * │   │   Table - fannypacks - fannypacks_id
 * └───Schema - fannypacks
 * |   │   Table - account_category - account_category_id
 * │   │   Table - account_type - account_type_id
 * │   │   Table - account_record - account_id
 * │   │   Table - account_One - account_id
 * 
 ```
#### FirstRun
```
	kill_connection
	drop_Database
	create_Database
	create_Schema
    
- FirstRun
	kill_connection
	drop_Database
	create_Database
	create_Schema
	create_Table_UserAuth
	create_Table_UserDetails
	create_Table_fannyPackz
```
#### User
```
    create_schema_user_fannyPack
    create_Table_UserAuth
	create_Table_UserDetails
    add_user_to_userAuth
    add_user_to_userDetails

- Add_user
    create_schema_user_fannyPack
    create_table_account_category
    create_table_account_records
    create_table_account_types
    add_user_to_userAuth
    add_user_to_userDetails
    add_newFannyPack_to_fannypacks_table
```
#### FannyPack
```    
    create_Table_fannyPackz
    create_schema_user_fannyPack
    add_newFannyPack_to_fannypacks_table


- Add_FannyPack
    create_schema_user_fannyPack
    create_table_account_category
    create_table_account_records
    create_table_account_types
    create_table_account_transaction
    add_newFannyPack_to_fannypacks_table
```
#### Account_record
```    
    create_table_account_records

```
#### Account_category
```    
    create_table_account_category
```
#### Account_type
```    
    create_table_account_types
```
#### transaction_account
```    
    create_table_transaction_account
```
