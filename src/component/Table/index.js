import React from 'react';
import styles from './styles.module.css'

const Table = () => {
  // Convert the JSON string to an array of objects
//   const data = {"category_data":"[{\"company_name\": \"Restaurant\", ...}]"};
const data = {
    "category_data": "[{\"company_name\": \"Restaurant\", \"contact_person\": \"John Doe\", \"address\": \"123 Main St\", \"lat\": 40.71, \"long\": -74.01, \"city\": \"New York\", \"pincode\": 10001, \"mobile_number\": 1234567890, \"landline_number\": 1122334455, \"category_name\": \"restaurants\", \"deals_in_category\": \"Pizza\", \"gst_no\": \"B123456\", \"fssai_no\": \"C123456\", \"udhyam_reg_no\": \"UD78901234\"}, {\"company_name\": \"Restaurant\", \"contact_person\": \"Jane Smith\", \"address\": \"456 Oak St\", \"lat\": 34.05, \"long\": -118.24, \"city\": \"Los Angeles\", \"pincode\": 90001, \"mobile_number\": 9876543210, \"landline_number\": 5544332211, \"category_name\": \"restaurants\", \"deals_in_category\": \"Burgers\", \"gst_no\": \"A987654\", \"fssai_no\": \"D987654\", \"udhyam_reg_no\": \"UD56789012\"}, {\"company_name\": \"Restaurant\", \"contact_person\": \"Chris Johnson\", \"address\": \"789 Maple St\", \"lat\": 41.88, \"long\": -87.63, \"city\": \"Chicago\", \"pincode\": 60601, \"mobile_number\": 4567890123, \"landline_number\": 6677889900, \"category_name\": \"restaurants\", \"deals_in_category\": \"Italian\", \"gst_no\": \"C654321\", \"fssai_no\": \"E456789\", \"udhyam_reg_no\": \"UD12345678\"}, {\"company_name\": \"Restaurant\", \"contact_person\": \"Susan Brown\", \"address\": \"321 Elm St\", \"lat\": 37.77, \"long\": -122.42, \"city\": \"San Francisco\", \"pincode\": 94105, \"mobile_number\": 7890123456, \"landline_number\": 1122334455, \"category_name\": \"restaurants\", \"deals_in_category\": \"Chinese\", \"gst_no\": \"X987654\", \"fssai_no\": \"F789012\", \"udhyam_reg_no\": \"UD34567890\"}, {\"company_name\": \"Restaurant\", \"contact_person\": \"David White\", \"address\": \"890 Pine St\", \"lat\": 32.78, \"long\": -96.8, \"city\": \"Dallas\", \"pincode\": 75201, \"mobile_number\": 1230987654, \"landline_number\": 9988776655, \"category_name\": \"restaurants\", \"deals_in_category\": \"Mexican\", \"gst_no\": \"M123456\", \"fssai_no\": \"G345678\", \"udhyam_reg_no\": \"UD67890123\"}, {\"company_name\": \"Restaurant\", \"contact_person\": \"Lisa Wilson\", \"address\": \"234 Cedar St\", \"lat\": 33.75, \"long\": -84.39, \"city\": \"Atlanta\", \"pincode\": 30301, \"mobile_number\": 5678901234, \"landline_number\": 3344556677, \"category_name\": \"restaurants\", \"deals_in_category\": \"Japanese\", \"gst_no\": \"J765432\", \"fssai_no\": \"H567890\", \"udhyam_reg_no\": \"UD78901234\"}, {\"company_name\": \"Restaurant\", \"contact_person\": \"Mike Taylor\", \"address\": \"567 Birch St\", \"lat\": 39.95, \"long\": -75.17, \"city\": \"Philadelphia\", \"pincode\": 19102, \"mobile_number\": 2109876543, \"landline_number\": 5566778899, \"category_name\": \"restaurants\", \"deals_in_category\": \"Indian\", \"gst_no\": \"I876543\", \"fssai_no\": \"K678901\", \"udhyam_reg_no\": \"UD89012345\"}, {\"company_name\": \"Restaurant\", \"contact_person\": \"Amy Miller\", \"address\": \"901 Pine St\", \"lat\": 29.76, \"long\": -95.37, \"city\": \"Houston\", \"pincode\": 77002, \"mobile_number\": 4321098765, \"landline_number\": 1122334455, \"category_name\": \"restaurants\", \"deals_in_category\": \"French\", \"gst_no\": \"F234567\", \"fssai_no\": \"L789012\", \"udhyam_reg_no\": \"UD90123456\"}, {\"company_name\": \"Restaurant\", \"contact_person\": \"Mark Davis\", \"address\": \"123 Spruce St\", \"lat\": 37.77, \"long\": -122.42, \"city\": \"San Francisco\", \"pincode\": 94105, \"mobile_number\": 8765432109, \"landline_number\": 9988776655, \"category_name\": \"restaurants\", \"deals_in_category\": \"Seafood\", \"gst_no\": \"S345678\", \"fssai_no\": \"O123456\", \"udhyam_reg_no\": \"UD23456789\"}, {\"company_name\": \"Restaurant\", \"contact_person\": \"Karen Lee\", \"address\": \"456 Oak St\", \"lat\": 34.05, \"long\": -118.24, \"city\": \"Los Angeles\", \"pincode\": 90001, \"mobile_number\": 1098765432, \"landline_number\": 3344556677, \"category_name\": \"restaurants\", \"deals_in_category\": \"Vegetarian\", \"gst_no\": \"V987654\", \"fssai_no\": \"P345678\", \"udhyam_reg_no\": \"UD45678901\"}]"
 }
  const categoryData = JSON.parse(data.category_data);

  // Extract keys from the first item in the array
  const headers = Object.keys(categoryData[0] || {});

  return (
    <div className={styles['table-container']} >
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categoryData.map((item, index) => (
            <tr key={index}>
              {headers.map((header, index) => (
                <td key={index}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
